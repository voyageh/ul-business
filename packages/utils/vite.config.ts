import { defineConfig } from "vite";
// @ts-ignore
import VueMacros from "unplugin-vue-macros/vite";
import Vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: "index.ts",
    },
    //打包文件目录
    outDir: "ul-business",
    rollupOptions: {
      input: "index.ts",
      //忽略打包vue文件
      external: ["vue"],
      output: [
        {
          format: "es",
          entryFileNames: "[name].mjs",
          preserveModules: true,
          preserveModulesRoot: ".",
          dir: "../ul-business/utils/es",
        },
        {
          format: "cjs",
          entryFileNames: "[name].js",
          preserveModules: true,
          preserveModulesRoot: ".",
          exports: "named",
          dir: "../ul-business/utils/lib",
        },
      ],
    },
  },
  plugins: [
    VueMacros({
      vue: Vue(),
    }),
    dts({
      entryRoot: ".",
      outputDir: ["../ul-business/utils/es", "../ul-business/utils/lib"],
      //指定使用的tsconfig.json为我们整个项目根目录下,如果不配置,你也可以在components下新建tsconfig.json
      tsConfigFilePath: "../../tsconfig.web.json",
      include: ["./"],
    }),
  ],
});
