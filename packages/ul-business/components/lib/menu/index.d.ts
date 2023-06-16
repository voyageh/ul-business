export declare const UlMenu: import("ul-utils").SFCWithInstall<import("vue").DefineComponent<{
    menus: {
        type: import("vue").PropType<import("./src/types/menu-item").IMenuItem[]>;
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
        type: import("vue").PropType<import("./src/types/menu-item").IMenuItem[]>;
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
}>> & Record<string, any>;
export default UlMenu;
export declare const UlMenuItem: import("ul-utils").SFCWithInstall<import("vue").DefineComponent<{
    menu: {
        type: import("vue").PropType<import("./src/types/menu-item").IMenuItem>;
        required: boolean;
        default: () => {};
    };
    parent: {
        type: StringConstructor;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    menu: {
        type: import("vue").PropType<import("./src/types/menu-item").IMenuItem>;
        required: boolean;
        default: () => {};
    };
    parent: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    menu: import("./src/types/menu-item").IMenuItem;
    parent: string;
}>> & Record<string, any>;
export * from "./src/types/menu";
export * from "./src/types/menu-item";
