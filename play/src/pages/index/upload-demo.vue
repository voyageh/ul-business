<template>
  <div class="upload-demo">
    <ul-upload v-model:file-list="fileList" accept="image" size="mini"></ul-upload>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import type { UploadUserFile } from "element-plus";

const fileList = ref<UploadUserFile[]>([
  {
    name: "element-plus-logo.svg",
    url: "https://element-plus.org/images/element-plus-logo.svg",
  },
  {
    name: "element-plus-logo2.svg",
    url: "https://element-plus.org/images/element-plus-logo.svg",
  },
]);
</script>

<style scoped lang="scss">
.upload-demo {
  height: 100%;
  background-color: #fff;
  padding: 20px;
  border-radius: 6px;
}
</style>
