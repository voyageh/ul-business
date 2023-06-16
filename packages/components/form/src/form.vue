<template>
  <el-form ref="formRef" class="ul-form" v-bind="getFormProps()" :model="form">
    <template v-for="item in content">
      <el-row v-if="item.type === 'row' && item.items" :gutter="20">
        <template v-for="child in item.items || []" :key="child.id">
          <el-col
            v-if="show(child.hide)"
            :xs="{ span: 24 }"
            :sm="{ span: 12 }"
            :md="{ span: 8 }"
            :lg="{ span: child.span || 6 }">
            <el-form-item :prop="child.id" v-bind="getFromItemprops(child)">
              <span v-if="disabled && !item.forceDisabled">
                {{ child.str ? form[child.str] : form[child.id!] }}
              </span>
              <component v-else :is="child.type || child.component!" v-bind="child.el" v-model="form[child.id!]" />
            </el-form-item>
          </el-col>
        </template>
      </el-row>
      <el-form-item v-if="show(item.hide)" :prop="item.id" v-bind="getFromItemprops(item)">
        <span v-if="disabled && !item.forceDisabled">
          {{ item.str ? form[item.str] : form[item.id!] }}
        </span>
        <component v-else :is="item.type || item.component!" v-bind="item.el" v-model="form[item.id!]" />
      </el-form-item>
    </template>
    <slot name="last" />
  </el-form>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { FormInstance } from "element-plus";
import { formProps, IFormItem, IFormat } from "./type";
import handleContent from "./handleConetnt";
import { isEqual, cloneDeep } from "lodash";

defineOptions({ name: "UlForm" });
const props = defineProps(formProps);

// 表单实例
const formRef = ref<FormInstance>();
// 定义表单的值
const form = ref<Record<string, any>>({});
let formatFc: Record<string, IFormat> = {};
/**
 * 1. 当content发生变化，获取格式化方法和默认值
 * 2. 用表单值去覆盖默认值，可以保证不会影响之前被人为修改的值
 * 3. 后面监听modelValue，这样modelValue > default
 */
watch(
  () => props.content,
  (v) => {
    const { formatObj, defaulValue } = handleContent(v);
    formatFc = formatObj;
    form.value = Object.assign(defaulValue, form.value);
  },
  {
    immediate: true,
    deep: true,
  }
);

const getFormProps = () => {
  const { content, modelValue, ...elFromProps } = props;
  return elFromProps;
};

/**
 * 用来获取el-form-item的props
 * @param obj
 */
const getFromItemprops = (obj: IFormItem) => {
  const {
    id,
    type,
    component,
    default: v,
    str,
    forceDisabled,
    inputFormat,
    outputFormat,
    el,
    hide,
    span,
    ...rest
  } = obj;
  return rest;
};

/**
 * 用来判断表单是否显示
 * @param hide
 */
const show = (hide?: boolean | ((row: Record<string, any>) => boolean)) => {
  let show = !hide;
  if (typeof hide === "function") {
    show = !hide(form.value);
  }
  return show;
};

/**
 * 获取表单的值，如果存在outputFormat也会执行
 */
const getValue = () => {
  let cloneValue = cloneDeep(form.value) || {};
  Object.keys(cloneValue).forEach((key) => {
    if (cloneValue[key] && formatFc[key]?.outputFormat) {
      const t = formatFc[key].outputFormat?.(cloneValue);
      Object.assign(cloneValue, t);
    }
  });
  return cloneValue;
};

/**
 * 格式化值
 * @param value
 */
const formatInput = (value: Record<string, any>) => {
  let cloneValue = cloneDeep(value) || {};
  Object.keys(cloneValue).forEach((key) => {
    if (cloneValue[key] && formatFc[key]?.inputFormat) {
      const t = formatFc[key] && formatFc[key].inputFormat?.(cloneValue);
      Object.assign(cloneValue, t);
    }
  });
  return cloneValue;
};

/**
 * 给表单赋值
 * @param value
 */
const setValue = (value: Record<string, any>) => {
  form.value = formatInput(value);
};

// 如果传入modelValue默认开启v-model,监听表单值发送过去
const emits = defineEmits(["update:modelValue"]);
if (props.modelValue) {
  // 监听外部的值
  watch(
    () => props.modelValue,
    (v) => {
      if (v && !isEqual(v, form.value)) {
        const t = formatInput(v);
        form.value = Object.assign({}, form.value, t);
      }
    },
    {
      immediate: true,
      deep: true,
    }
  );

  watch(
    () => form.value,
    async () => {
      const t = await getValue();
      emits("update:modelValue", t);
    },
    {
      deep: true,
      immediate: true,
    }
  );
}

defineExpose({
  getValue,
  setValue,
  elFrom: formRef,
});
</script>

<style scoped></style>
