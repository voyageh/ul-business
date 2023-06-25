# Table 表格

## 基础用法

:::demo ul-table 会自动根据 columns 生成表格的列 <br/> searchForms 会自动生成筛选表单 <br/> forms 会自动生成弹窗表单

```vue
<template>
  <ul-table v-bind="config">
    <template #head>
      <el-button type="success"> 导出 </el-button>
    </template>
  </ul-table>
</template>

<script setup lang="tsx">
import { reactive, h } from "vue";
import { UlTableProps } from "ul-business";
import { Icon } from "@iconify/vue";

const config = reactive<UlTableProps>({
  columns: [
    {
      label: "用户名",
      prop: "username",
    },
    {
      label: "真实姓名",
      prop: "realName",
    },
    {
      label: "年龄",
      prop: "age",
    },
    {
      label: "手机号",
      prop: "tel",
    },
  ],
  searchForms: [
    {
      label: "用户名：",
      id: "username",
      type: "el-input",
    },
  ],
  async getList() {
    // 这里请求接口
    return {
      data: [
        {
          username: "zs",
          realName: "张三",
          age: 18,
          tel: "12345678901",
        },
        {
          username: "zs",
          realName: "张三",
          age: 18,
          tel: "12345678901",
        },
        {
          username: "zs",
          realName: "张三",
          age: 18,
          tel: "12345678901",
        },
        {
          username: "zs",
          realName: "张三",
          age: 18,
          tel: "12345678901",
        },
        {
          username: "zs",
          realName: "张三",
          age: 18,
          tel: "12345678901",
        },
        {
          username: "zs",
          realName: "张三",
          age: 18,
          tel: "12345678901",
        },
        {
          username: "zs",
          realName: "张三",
          age: 18,
          tel: "12345678901",
        },
        {
          username: "zs",
          realName: "张三",
          age: 18,
          tel: "12345678901",
        },
        {
          username: "zs",
          realName: "张三",
          age: 18,
          tel: "12345678901",
        },
        {
          username: "zs",
          realName: "张三",
          age: 18,
          tel: "12345678901",
        },
      ],
      total: 138,
    };
  },
  forms: [
    {
      id: "username",
      label: () => h("span", ["自定义label"]),
      type: "el-input",
      el: {
        placeholder: "请输入用户名",
      },
      rules: {
        required: true,
        trigger: "blur",
        message: "请输入用户名",
      },
    },
    {
      id: "realName",
      label: "真实姓名:",
      type: "el-input",
      el: {
        placeholder: "请输入真实姓名",
      },
    },
  ],
  newSumbit(data: any) {
    console.log(data);
    return false; // false时候不关闭弹窗
  },
});
</script>

<style scoped></style>
```

:::

## table 属性

:::tip

具有 el-menu 所有属性

:::

| 属性名           | 说明                                   | 类型     | 可选值 | 默认值     |
| ---------------- | -------------------------------------- | -------- | ------ | ---------- |
| searchForms      | 筛选表单的项                           | array    |        | []         |
| tableAttr        | 表格属性参考 el-tables                 | string   |        | {}         |
| columns          | 表格的列                               | []       |        | []         |
| hasOperateColumn | 是否有操作列                           | boolean  |        |            |
| opWidth          | 操作列的宽度                           | number   |        | 160        |
| hasPagination    | 是否有分页                             | boolean  |        |            |
| sizeKey          | 每页的大小的 key                       | stirng   |        | 'pageSize' |
| pageKey          | 页码的 key                             | string   |        | 'pageNo'   |
| pagingAlign      | 分页组件的位置，参考 justify-content   | string   |        |            |
| pagingAttr       | 分页属性，参考 el-pagination           | object   |        |            |
| forms            | 弹窗的表单项                           | []       |        |            |
| getList          | 查询列表的方法                         | function |        |            |
| dataPath         | 列表源的路径                           | string   |        | 'data'     |
| totalPath        | total 的路径                           | string   |        | 'total'    |
| immediate        | 是否首次加载调用 getList               | boolean  |        |            |
| onNew            | 覆盖调用弹窗的新增方法                 | function |        |            |
| newSumbit        | 新增提交方法                           | function |        |            |
| onDelete         | 覆盖删除的方法                         | function |        |            |
| deleteSumbit     | 删除提交的方法                         | function |        |            |
| onView           | 覆盖查看的方法                         | function |        |            |
| getDetail        | 查询明细的方法，需要返回明细           | function |        |            |
| onEdit           | 覆盖编辑的方法，个人自定义编辑使用     | function |        |            |
| editSumbit       | 提交的方法，如果 onEdit 存在则不会调用 | function |        |            |
