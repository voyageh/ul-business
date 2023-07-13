import { defineConfig } from "vitepress";
import vueJsx from "@vitejs/plugin-vue-jsx";
import MarkdownPreview from "vite-plugin-markdown-preview";

export default defineConfig({
  lang: "zh-CN",
  title: "Ul-Business文档",
  description: "业务组件库",
  vite: {
    publicDir: "public",
    plugins: [vueJsx(), MarkdownPreview()],
    ssr: {
      noExternal: ["ul-business", "element-plus", "lodash", "vite-plugin-markdown-preview"],
    },
  },
  base: "/ul-business/",
  themeConfig: {
    outline: {
      label: "本页目录",
    },
    socialLinks: [{ icon: "github", link: "https://github.com/zephyr-66/ul-business" }],
    nav: [
      { text: "指南", link: "/guide/", activeMatch: "/guide/" },
      { text: "组件", link: "/component/menu", activeMatch: "/component/" },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "指南",
          items: [
            {
              text: "安装",
              link: "/guide/",
            },
            {
              text: "快速开始",
              link: "/guide/quickstart",
            },
          ],
        },
      ],
      "/component/": [
        {
          text: "组件",
          items: [
            {
              text: "menu 菜单",
              link: "/component/menu",
            },
            {
              text: "form 表单",
              link: "/component/form",
            },
            {
              text: "table 表格",
              link: "/component/table",
            },
          ],
        },
      ],
    },
  },
});
