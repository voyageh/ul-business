import DefaultTheme from "vitepress/theme";
import Demo from "vitepress-theme-demoblock/dist/client/components/Demo.vue";
import DemoBlock from "vitepress-theme-demoblock/dist/client/components/DemoBlock.vue";
import "vitepress-theme-demoblock/dist/theme/styles/index.css";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import curd from "ul-business";
import "ul-business/es/style.css";
import "./style.css";

export default {
  ...DefaultTheme,
  enhanceApp: async ({ app }) => {
    // app is the Vue 3 app instance from `createApp()`. router is VitePress'
    // custom router. `siteData`` is a `ref`` of current site-level metadata.
    app.use(ElementPlus);
    app.use(curd);
    app.component("Demo", Demo);
    app.component("DemoBlock", DemoBlock);
  },
};
