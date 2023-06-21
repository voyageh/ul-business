import { uploadProps as t } from "element-plus";
const e = {
  ...t,
  tip: String,
  size: {
    type: String,
    default: ""
  },
  limitSize: {
    type: Number,
    default: 1
  },
  accept: {
    type: String,
    default: ""
  }
};
export {
  e as uploadProps
};
