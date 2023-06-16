import { formProps as o } from "element-plus";
const t = {
  ...o,
  labelWidth: {
    type: [String, Number],
    default: "auto"
  },
  content: {
    type: Array,
    default: () => []
  },
  modelValue: Object
};
export {
  t as formProps
};
