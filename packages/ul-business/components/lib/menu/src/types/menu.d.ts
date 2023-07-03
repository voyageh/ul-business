import type { PropType } from "vue";
import { IMenuItem } from "./menu-item";
declare const _default: {
    menus: {
        type: PropType<IMenuItem<any>[]>;
    };
    selectBgColor: StringConstructor;
    width: {
        type: StringConstructor;
        default: string;
    };
    mode: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "horizontal" | "vertical", unknown, "vertical", boolean>;
    defaultActive: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    defaultOpeneds: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => [], boolean>;
    uniqueOpened: BooleanConstructor;
    router: BooleanConstructor;
    menuTrigger: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "hover" | "click", unknown, "hover", boolean>;
    collapse: BooleanConstructor;
    backgroundColor: StringConstructor;
    textColor: StringConstructor;
    activeTextColor: StringConstructor;
    collapseTransition: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    ellipsis: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    popperEffect: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "light" | "dark", unknown, "dark", boolean>;
};
export default _default;
