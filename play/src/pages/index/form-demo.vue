<template>
  <div class="form-demo">
    <ul-form ref="formRef" :content="content">
      <template #final>
        <el-button type="primary" @click="submit">提交</el-button>
      </template>
    </ul-form>
  </div>
</template>

<script setup lang="tsx">
import { ref } from "vue";
import { IFormItem, FormInstance } from "@ul-business/components";
import { Icon } from "@iconify/vue";

const content = ref<IFormItem[]>([
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
    id: "password",
    label: "密码:",
    type: "el-input",
    el: {
      placeholder: "请输入密码",
      type: "password",
    },
  },
]);

const formRef = ref<FormInstance>();
const submit = () => {
  formRef.value?.elFrom?.validate?.(async (vaild: boolean) => {
    if (!vaild) return;
    console.log("表单验证通过！");
  });
};
</script>

<style scoped lang="scss">
.form-demo {
  background-color: #fff;
  padding: 20px;
  border-radius: 6px;
}
</style>
