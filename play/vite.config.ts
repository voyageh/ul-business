import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Pages from "vite-plugin-pages";
import path from "path";
// @ts-ignore
import VueMacros from "unplugin-vue-macros/vite";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), VueMacros(), Pages()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
