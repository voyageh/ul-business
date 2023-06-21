<template>
  <div class="ul-upload" :class="[size && `ul-upload__${size}`]">
    <el-upload
      v-bind="$props"
      :accept="accept"
      :before-upload="handleBeforeUpload"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :on-exceed="handleExceed">
      <el-icon v-if="$props.listType === 'picture-card'">
        <Icon icon="mdi:plus" />
      </el-icon>
      <el-button v-else type="primary">上传</el-button>
      <template v-if="!!tip" #tip>
        <div class="el-upload__tip">{{ tip }}</div>
      </template>
      <!-- 自定义插槽，可以覆盖前面的默认-->
      <template v-for="(, name) in $slots" #[name]>
        <slot :name="name" />
      </template>
    </el-upload>
    <el-dialog v-model="dialogVisible">
      <img w-full :src="dialogImageUrl" alt="Preview Image" />
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import { uploadProps } from "./type";
import type { UploadProps } from "element-plus";
import { Icon } from "@iconify/vue";
import { ElMessage } from "element-plus";
import { flatMapDeep as _flatMapDeep } from "lodash";

defineOptions({ name: "UlUpload" });

const acceptType: Record<string, string[]> = {
  image: ["png", "jpg", "jpeg", "ico", "gif"],
  video: ["mp4", "avi", "wmv", "rmvb", "mov", "mkv"],
  pdf: ["pdf"],
  word: ["doc", "docx"],
  excel: ["xls", "xlsx"],
  compress: ["zip", "rar"],
};
const props = defineProps(uploadProps);

const accept = computed(() => {
  if (props.accept) {
    const arr = props.accept.split(",").map((key) => acceptType[key]);
    return _flatMapDeep(arr)
      .map((key) => `.${key}`)
      .join(",");
  }
  return "";
});

const dialogImageUrl = ref("");
const dialogVisible = ref(false);

const handleBeforeUpload: UploadProps["beforeUpload"] = (rawFile) => {
  let types: string[] = [];
  if (props.accept) {
    props.accept.split(",").forEach((key) => {
      acceptType[key] && types.push(...acceptType[key]);
    });
  } else {
    types = Object.values(acceptType).flat();
  }

  const suffix = rawFile.name.split(".").pop()?.toLowerCase();
  if (suffix && types.indexOf(suffix) === -1) {
    ElMessage.warning(`文件类型只能是${types.join("，")}！`);
    return false;
  } else if (rawFile.size / 1024 / 1024 > props.limitSize) {
    ElMessage.warning(`文件大小不能超过${props.limitSize}MB！`);
    return false;
  }
  return false;
};

const handlePreview: UploadProps["onPreview"] = (file) => {
  dialogImageUrl.value = file.url as string;
  dialogVisible.value = true;
};

const handleRemove: UploadProps["onRemove"] = () => {
  // console.log(file, uploadFiles);
};

const handleExceed: UploadProps["onExceed"] = () => {
  ElMessage.warning(`文件上传数量不得超过${props.limit}个`);
};
</script>

<style lang="scss">
.ul-upload {
  $size: (
    small: 120px,
    mini: 90px,
  );

  @each $label, $value in $size {
    &__#{$label} {
      .el-upload-list--picture-card {
        --el-upload-list-picture-card-size: #{$value};

        .el-upload--picture-card {
          --el-upload-picture-card-size: #{$value};
        }
      }
    }
  }
}
</style>
