# Table 表格

## 基础用法

```vue preview
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
});
</script>

<style scoped></style>
```

## 多级表头和展开行

```vue preview
<template>
  <ul-table v-bind="config" />
</template>

<script setup lang="tsx">
import { reactive } from "vue";
import { UlTableProps } from "ul-business";
import { Icon } from "@iconify/vue";
import { ElMessage } from "element-plus";

const config = reactive<UlTableProps>({
  rowKey: "id",
  columns: [
    {
      label: "用户名",
      align: "center",
      width: 150,
      children: [
        {
          label: "用户名1",
          prop: "name1",
          width: 150,
        },
        {
          label: "用户名2",
          prop: "name2",
          width: 150,
        },
      ],
    },
    {
      label: "日期",
      prop: "date",
      minWidth: 100,
    },
    {
      label: "地址",
      prop: "address",
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
          id: 1,
          date: "2016-05-02",
          name1: "张",
          name2: "三晚",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          id: 2,
          date: "2016-05-04",
          name1: "苏",
          name2: "情深",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          id: 3,
          date: "2016-05-01",
          name1: "王",
          name2: "牛牛",
          address: "No. 189, Grove St, Los Angeles",
          children: [
            {
              id: 31,
              date: "2016-05-01",
              name1: "王",
              name2: "大",
              address: "No. 189, Grove St, Los Angeles",
            },
            {
              id: 32,
              date: "2016-05-01",
              name1: "王",
              name2: "二",
              address: "No. 189, Grove St, Los Angeles",
            },
          ],
        },
        {
          id: 4,
          date: "2016-05-03",
          name1: "林",
          name2: "五懂",
          address: "No. 189, Grove St, Los Angeles",
        },
      ],
      total: 1000,
    };
  },
  onNew() {
    // 当需要自定义新增页面时使用
    window.alert("自定义新增");
  },
  onView() {
    window.alert("自定义查看");
  },
  onEdit() {
    window.alert("自定义编辑");
  },
});
</script>

<style scoped></style>
```

## table 属性

:::tip

具有 el-menu 所有属性

:::

| 属性名           | 说明                                                     | 类型     | 可选值 | 默认值     |
| ---------------- | -------------------------------------------------------- | -------- | ------ | ---------- |
| searchForms      | 筛选表单的项                                             | array    |        | []         |
| tableAttr        | 表格属性参考 el-tables                                   | string   |        | {}         |
| columns          | 表格的列                                                 | []       |        | []         |
| hasOperateColumn | 是否有操作列                                             | boolean  |        |            |
| opWidth          | 操作列的宽度                                             | number   |        | 160        |
| hasPagination    | 是否有分页                                               | boolean  |        |            |
| sizeKey          | 每页的大小的 key                                         | stirng   |        | 'pageSize' |
| pageKey          | 页码的 key                                               | string   |        | 'pageNo'   |
| pagingAlign      | 分页组件的位置，参考 justify-content                     | string   |        |            |
| pagingAttr       | 分页属性，参考 el-pagination                             | object   |        |            |
| forms            | 弹窗的表单项                                             | []       |        |            |
| getList          | 查询列表的方法                                           | function |        |            |
| dataPath         | 列表源的路径                                             | string   |        | 'data'     |
| totalPath        | total 的路径                                             | string   |        | 'total'    |
| immediate        | 是否首次加载调用 getList                                 | boolean  |        |            |
| onResetNew       | 覆盖调用弹窗的新增方法                                   | function |        |            |
| getDetail        | 查询明细的方法，需要返回明细                             | function |        |            |
| onResetView      | 覆盖查看的方法                                           | function |        |            |
| onResetEdit      | 覆盖编辑的方法，个人自定义编辑使用                       | function |        |            |
| confirmDel       | 删除提交的方法                                           | function |        |            |
| confirmSave      | 提交的方法，(data,type)=> boolean, type 的值为 new，edit | function |        |            |
