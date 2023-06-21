<template>
  <ul-table v-bind="config"> </ul-table>
</template>

<script setup lang="tsx">
import { reactive } from "vue";
import { UlTableProps } from "@ul-business/components";
import { ElMessage } from "element-plus";
import { Icon } from "@iconify/vue";

const config = reactive<UlTableProps>({
  columns: [
    {
      label: () => (
        <span>
          用户名
          <el-tooltip placement="top" content="我是提示">
            <el-icon>
              <Icon icon="ep:info-filled"></Icon>
            </el-icon>
          </el-tooltip>
        </span>
      ),
      prop: "username",
      width: 90,
    },
    {
      label: "真实姓名",
      prop: "realName",
      minWidth: 100,
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
  onNew() {
    // 当需要自定义新增页面时使用
    ElMessage.success("自定义新增");
  },
  onView() {
    ElMessage.success("自定义查看");
  },
  onEdit() {
    ElMessage.success("自定义编辑");
  },
});
</script>

<style scoped></style>
