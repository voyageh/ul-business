<template>
  <ul-table v-bind="config">
    <template #head>
      <el-button type="success"> 导出 </el-button>
    </template>
  </ul-table>
</template>

<script setup lang="tsx">
import { reactive } from "vue";
import { UlTableProps } from "@ul-business/components";
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
      total: 1000,
    };
  },
  forms: [
    {
      id: "username",
      label: () => (
        <span>
          1111
          <el-tooltip placement="top" content="我是提示">
            <el-icon>
              <Icon icon="ep:info-filled"></Icon>
            </el-icon>
          </el-tooltip>
        </span>
      ),
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
  deleteSumbit() {
    console.log(11111);
  },
});
</script>

<style scoped></style>
