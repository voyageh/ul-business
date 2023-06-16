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
declare const _default: {
    menu: {
        type: PropType<IMenuItem>;
        required: boolean;
        default: () => {};
    };
    parent: {
        type: StringConstructor;
        default: string;
    };
};
export default _default;
