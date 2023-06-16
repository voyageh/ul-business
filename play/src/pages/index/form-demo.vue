<template>
  <div class="form-demo">
    <ul-form :content="content"></ul-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { IFormItem } from "@ultra-ui/components";

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

<style scoped></style>
