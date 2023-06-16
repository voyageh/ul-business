import type { PropType } from "vue";
import { menuProps } from "element-plus";
import { IMenuItem } from "./menu-item";

export default {
  ...menuProps,
  menus: {
    type: Array as PropType<IMenuItem[]>,
  },
  // 选中后的背景色
  selectBgColor: String,
  // 宽度
  width: {
    type: String,
    default: "200px",
  },
};
