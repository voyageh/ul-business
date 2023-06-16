<template>
  <ul-table v-bind="config"></ul-table>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { UlTableProps } from "@ul-business/components";

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
      ],
    };
  },
});
</script>

<style scoped></style>
