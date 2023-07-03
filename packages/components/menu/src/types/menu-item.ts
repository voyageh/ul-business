import type { PropType } from "vue";

export type Meta = {
  icon?: any;
};
export interface IMenuItem {
  id: string;
  name: string;
  path: string;
  meta: Meta;
  children?: IMenuItem[];
}

export default {
  menu: {
    type: Object as PropType<IMenuItem>,
    required: true,
    default: () => ({}),
  },
  parent: {
    type: String,
    default: "",
  },
};
