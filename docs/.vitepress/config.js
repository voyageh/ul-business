import { demoBlockPlugin } from "vitepress-theme-demoblock";

export default {
  title: "Ul-Business文档",
  description: "业务组件库",
  lang: "zh-CN",
  base: "/ul-business/",
  themeConfig: {
    outline: {
      label: "本页目录",
    },
    socialLinks: [{ icon: "github", link: "https://github.com/vitejs/vite" }],
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
          ],
        },
      ],
    },
  },
  markdown: {
    config: (md) => {
      md.use(demoBlockPlugin, {
        cssPreprocessor: "sass",
        scriptReplaces: [
          { searchValue: /import ({.*}) from "vue"/g, replaceValue: (s, s1) => `const ${s1} = Vue` },
          { searchValue: /import ({.*}) from "ul-curd"/g, replaceValue: (s, s1) => `const ${s1} = 'ul-curd'` },
          { searchValue: /import ({.*}) from "vue-router"/g, replaceValue: (s, s1) => `const ${s1} = 'vue-router'` },
          {
            searchValue: /import ({.*}) from "@iconify\/vue"/g,
            replaceValue: (s, s1) => `const ${s1} = '@iconify/vue'`,
          },
        ],
      });
    },
  },
};
