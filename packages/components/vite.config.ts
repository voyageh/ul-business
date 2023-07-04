import { defineConfig } from "vite";
// @ts-ignore
import VueMacros from "unplugin-vue-macros/vite";
import Vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

export default defineConfig({
  build: {
    lib: {
      entry: "index.ts",
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      input: "index.ts",
      //忽略打包vue文件
      external: ["vue", /element-plus/, "@iconify/vue", "ul-utils", "lodash", "tinycolor2"],
      output: [
        {
          format: "es",
          entryFileNames: "[name].mjs",
          preserveModules: true,
          preserveModulesRoot: ".",
          dir: "dist/es",
        },
        {
          format: "cjs",
          entryFileNames: "[name].js",
          preserveModules: true,
          preserveModulesRoot: ".",
          exports: "named",
          dir: "dist/lib",
        },
      ],
    },
  },
  plugins: [
    VueMacros({
      vue: Vue(),
    }),
    Vue(),
    dts({
      entryRoot: ".",
      outputDir: ["dist/es", "dist/lib"],
      //指定使用的tsconfig.json为我们整个项目根目录下,如果不配置,你也可以在components下新建tsconfig.json
      tsConfigFilePath: "../../tsconfig.web.json",
      include: ["./"],
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
});
