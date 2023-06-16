import type { PropType } from "vue";

export type IMeta = {
  icon: any;
  status?: boolean;
};
export interface IMenuItem {
  id: string;
  name: string;
  path: string;
  meta: IMeta;
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
