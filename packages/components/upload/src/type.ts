import { uploadProps as elProps } from "element-plus";
import { ExtractPropTypes, PropType } from "vue";

export type fileTypes = "image" | "video" | "word" | "excel" | "pdf" | "compress" | "";

export const uploadProps = {
  ...elProps,
  tip: String,
  limitSize: {
    type: Number,
    default: 1,
  },
  accept: {
    type: String as PropType<fileTypes>,
    default: "",
  },
};

export type UlFormProps = ExtractPropTypes<typeof uploadProps>;
