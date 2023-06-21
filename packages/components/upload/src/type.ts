import { uploadProps as elProps } from "element-plus";
import { ExtractPropTypes, PropType } from "vue";

export const uploadProps = {
  ...elProps,
  tip: String,
  size: {
    type: String as PropType<"small" | "mini" | "">,
    default: "",
  },
  limitSize: {
    type: Number,
    default: 1,
  },
  accept: {
    type: String as PropType<"image" | "video" | "word" | "excel" | "pdf" | "compress" | "">,
    default: "",
  },
};

export type UlFormProps = ExtractPropTypes<typeof uploadProps>;
