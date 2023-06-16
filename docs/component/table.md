# Menu 菜单

## 基础用法

:::demo 使用 `size`、`style` 属性来定义 Card 的样式。

```vue
<template>
  <ul-menu
    :menus="menus"
    width="200px"
    background-color="#2b303b"
    text-color="#bfcbd9"
    active-text-color="#ffffff"
    select-bg-color="#597ef7" />
</template>

<script setup lang="ts">
import { ref } from "vue";

const menus = ref([
  {
    id: "jhbbffh",
    name: "组件管理",
    path: "/",
    meta: {
      icon: "mdi:cog",
    },
    children: [
      {
        id: "fjnfjnk",
        name: "表单",
        path: "form-demo",
        meta: {
          icon: "mdi:menu",
        },
      },
    ],
  },
  {
    id: "jhbbffh",
    name: "系统管理",
    path: "/sys",
    meta: {
      icon: "mdi:cog",
    },
    children: [
      {
        id: "fjnfjnk",
        name: "菜单管理",
        path: "/menu",
        meta: {
          icon: "mdi:menu",
        },
      },
    ],
  },
]);
</script>
```

:::

## menu 属性

:::tip

具有 el-menu 所有属性

:::

| 属性名        | 说明                             | 类型   | 可选值 | 默认值  |
| ------------- | -------------------------------- | ------ | ------ | ------- |
| menus         | 菜单列表                         | array  |        | []      |
| width         | 菜单栏宽度                       | string |        | '200px' |
| selectBgColor | 选中后的背景颜色（十六进制格式） | string |        |         |

## menu item 属性

| 属性名 | 说明                         | 类型      | 可选值 | 默认值 |
| ------ | ---------------------------- | --------- | ------ | ------ |
| menu   | 菜单项对象                   | IMenuItem |        | {}     |
| parent | 父级菜单的路径（一般不用管） | string    |        | ''     |

### IMenuItem

| 属性名   | 说明           | 类型        | 可选值 | 默认值 |
| -------- | -------------- | ----------- | ------ | ------ |
| id       | 菜单的 id      | string      |        |        |
| name     | 菜单的名称     | string      |        |        |
| path     | 菜单的地址     | string      |        |        |
| meta     | 菜单的额外属性 | Meta        |        |        |
| children | 子级菜单       | IMenuItem[] |        |        |

### Meta

| 属性名 | 说明       | 类型    | 可选值                            | 默认值 |
| ------ | ---------- | ------- | --------------------------------- | ------ |
| icon   | 菜单的图标 | iconify | https://icon-sets.iconify.design/ |        |
| status | 菜单的状态 | boolean |                                   |        |
