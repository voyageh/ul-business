declare const _sfc_main: import("vue").DefineComponent<{
    menus: {
        type: import("vue").PropType<import("..").IMenuItem[]>;
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
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    menus: {
        type: import("vue").PropType<import("..").IMenuItem[]>;
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
}>>, {
    width: string;
    mode: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "horizontal" | "vertical", unknown>;
    defaultActive: string;
    defaultOpeneds: string[];
    uniqueOpened: boolean;
    router: boolean;
    menuTrigger: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "hover" | "click", unknown>;
    collapse: boolean;
    collapseTransition: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    ellipsis: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    popperEffect: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "light" | "dark", unknown>;
}>;
export default _sfc_main;
