import { PropType, ExtractPropTypes, VNode } from "vue";
import type { FormItemProps } from "element-plus";
import { formProps as elFormProps } from "element-plus";

export interface IFormItem extends Partial<Omit<FormItemProps, "label">> {
  id?: string;
  label?: string | (() => object | VNode);
  type?: string;
  // 组件，可以是全局组件的名字，可以是导入过来的组件
  component?: string | object;
  // 默认值
  default?: any;
  hide?: boolean | ((row: Record<string, any>) => boolean);
  // disabled为真要显示的
  str?: string;
  forceDisabled?: boolean;
  // 传递给组件的
  el?: object;
  items?: IFormItem[];
  // type=row是，开启网格布局，<el-col :span="span">
  span?: number;
}

export const formProps = {
  ...elFormProps,
  labelWidth: {
    type: [String, Number],
    default: "auto",
  },
  content: {
    type: Array as PropType<IFormItem[]>,
    default: () => [],
  },
  modelValue: Object,
};

export type UlFormProps = ExtractPropTypes<typeof formProps>;
