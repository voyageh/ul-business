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
declare const _default: {
    menu: {
        type: PropType<IMenuItem<any>>;
        required: boolean;
        default: () => {};
    };
    parent: {
        type: StringConstructor;
        default: string;
    };
};
export default _default;
