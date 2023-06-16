# Form 表单

## 基础用法

:::demo 使用 `size`、`style` 属性来定义 Card 的样式。

```vue
<template>
  <ul-form :content="content"></ul-form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { IFormItem } from "ul-business";

const content = ref<IFormItem[]>([
  {
    id: "username",
    label: "用户名:",
    type: "el-input",
    rules: {
      required: true,
      trigger: "blur",
      message: "请输入用户名",
    },
  },
  {
    id: "password",
    label: "密码:",
    type: "el-input",
    el: {
      type: "password",
    },
  },
]);
</script>
```

:::

## Form 属性

:::tip

具有 el-form 所有属性

:::

| 属性名                | 说明                   | 类型            | 可选值 | 默认值 |
| --------------------- | ---------------------- | --------------- | ------ | ------ |
| labelWidth            | 菜单列表               | string / number |        | 'auto' |
| content               | 表单项的数组           | IFormItem[]     |        | []     |
| model-value / v-model | 表单绑定的值（非必填） | object          |        |        |

## IFormItem 属性

| 属性名        | 说明                                                         | 类型             | 可选值 | 默认值 |
| ------------- | ------------------------------------------------------------ | ---------------- | ------ | ------ |
| id            | 菜单列表                                                     | string/number    |        | 'auto' |
| label         | 表单项的数组                                                 | IFormItem[]      |        |        |
| type          | 表单项类型，可以是全局组件或者为 row，为 row 配合 items 使用 | string           |        |        |
| component     | 表单项组件，可以是全局组件名称的字符串，也可以是 object      | string/object    |        |        |
| default       | 默认值，优先级低于 model-value                               | object           |        |        |
| hide          | 表单项目是否显示，可以是布尔类型，也可以是个方法             | boolean/function |        |        |
| str           | 当 disabled 为真，需要的 key，不传显示 id                    | string           |        |        |
| forceDisabled | 当 disabled 为真，是否显示原组件，否则会转成 span 显示       | boolean          |        |        |
| el            | 传给组件的属性                                               | object           |        |        |
| items         | type=row 时使用                                              | IFormItem[]      |        |        |
| span          | el-col 的 span                                               | number           |        |        |
