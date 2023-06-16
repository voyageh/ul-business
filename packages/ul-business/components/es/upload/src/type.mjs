import { uploadProps as p } from "element-plus";
const o = {
  ...p,
  tip: String,
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
  o as uploadProps
};
