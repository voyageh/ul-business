import type { PropType } from "vue";

export type Meta = {
  icon?: any;
};

export interface IMenuItem<TMata = any> {
  id: string;
  name: string;
  path: string;
  meta: Meta & TMata;
  children?: IMenuItem<TMata>[];
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
