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
              <template #label>
                <component v-if="child.label && typeof child.label === 'function'" :is="child.label()"></component>
                <span v-else>{{ child.label }}</span>
              </template>
              <span v-if="disabled && !item.forceDisabled">
                {{ child.str ? form[child.str] : form[child.id!] }}
              </span>
              <component v-else :is="child.type || child.component!" v-bind="child.el" v-model="form[child.id!]" />
            </el-form-item>
          </el-col>
        </template>
      </el-row>
      <el-form-item v-if="show(item.hide)" :prop="item.id" v-bind="getFromItemprops(item)">
        <template #label>
          <component v-if="item.label && typeof item.label === 'function'" :is="item.label()"></component>
          <span v-else>{{ item.label }}</span>
        </template>
        <span v-if="disabled && !item.forceDisabled">
          {{ item.str ? form[item.str] : form[item.id!] }}
        </span>
        <component v-else :is="item.type || item.component!" v-bind="item.el" v-model="form[item.id!]" />
      </el-form-item>
    </template>
    <slot name="final" />
  </el-form>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { FormInstance } from "element-plus";
import { formProps, IFormItem } from "./type";
import handleContent from "./handleConetnt";
import { isEqual, cloneDeep } from "lodash";

defineOptions({ name: "UlForm" });
const props = defineProps(formProps);

// 表单实例
const formRef = ref<FormInstance>();
// 定义表单的值
const form = ref<Record<string, any>>({});

watch(
  () => props.content,
  (v) => {
    const t = handleContent(v);
    // 有一些已经存在的数据值，默认值不应该覆盖掉
    form.value = Object.assign({}, t, form.value);
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
  const { id, type, component, default: v, str, forceDisabled, el, hide, span, label, ...rest } = obj;
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
  return cloneDeep(form.value) || {};
};

/**
 * 给表单赋值
 * @param value
 */
const setValue = (value: Record<string, any>) => {
  form.value = cloneDeep(value) || {};
  // 有一些组件赋值会触发validate，所以需要清除
  formRef.value?.clearValidate();
};

/**
 * 修改表单的值得
 * @param value
 */
const updateValue = (value: object) => {
  setValue({ ...form.value, ...value });
};

// 如果传入modelValue默认开启v-model,监听表单值发送过去
const emits = defineEmits(["update:modelValue"]);

if (props.modelValue) {
  watch(
    () => props.modelValue,
    (v) => {
      if (v && !isEqual(v, form.value)) {
        setValue(v);
      }
    },
    {
      deep: true,
      immediate: true,
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
  updateValue,
  elFrom: formRef,
});
</script>

<style lang="scss">
.ul-form {
  .el-form-item__label > *:first-child {
    display: flex;
    align-items: center;
  }
}
</style>
