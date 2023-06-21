import { defineConfig } from "vite";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vueJsx()],
  ssr: {
    noExternal: ["ul-business", "element-plus", "lodash"],
  },
});
