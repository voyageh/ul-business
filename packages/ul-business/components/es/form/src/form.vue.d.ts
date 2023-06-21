import { IFormItem } from "./type";
declare const _sfc_main: import("vue").DefineComponent<{
    labelWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    content: {
        type: import("vue").PropType<IFormItem[]>;
        default: () => never[];
    };
    modelValue: ObjectConstructor;
    model: ObjectConstructor;
    rules: {
        readonly type: import("vue").PropType<Partial<Record<string, import("element-plus/es/utils").Arrayable<import("element-plus").FormItemRule>>>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    labelPosition: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "top" | "right" | "left", unknown, "right", boolean>;
    requireAsteriskPosition: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "right" | "left", unknown, "left", boolean>;
    labelSuffix: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    inline: BooleanConstructor;
    inlineMessage: BooleanConstructor;
    statusIcon: BooleanConstructor;
    showMessage: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    validateOnRuleChange: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    hideRequiredAsterisk: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    scrollToError: BooleanConstructor;
    scrollIntoViewOptions: {
        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<readonly [ObjectConstructor, BooleanConstructor], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    size: {
        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    disabled: BooleanConstructor;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    labelWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    content: {
        type: import("vue").PropType<IFormItem[]>;
        default: () => never[];
    };
    modelValue: ObjectConstructor;
    model: ObjectConstructor;
    rules: {
        readonly type: import("vue").PropType<Partial<Record<string, import("element-plus/es/utils").Arrayable<import("element-plus").FormItemRule>>>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    labelPosition: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "top" | "right" | "left", unknown, "right", boolean>;
    requireAsteriskPosition: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "right" | "left", unknown, "left", boolean>;
    labelSuffix: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    inline: BooleanConstructor;
    inlineMessage: BooleanConstructor;
    statusIcon: BooleanConstructor;
    showMessage: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    validateOnRuleChange: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    hideRequiredAsterisk: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    scrollToError: BooleanConstructor;
    scrollIntoViewOptions: {
        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<readonly [ObjectConstructor, BooleanConstructor], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    size: {
        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    disabled: BooleanConstructor;
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    labelWidth: string | number;
    inlineMessage: boolean;
    showMessage: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    content: IFormItem[];
    labelPosition: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "top" | "right" | "left", unknown>;
    requireAsteriskPosition: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "right" | "left", unknown>;
    labelSuffix: string;
    inline: boolean;
    statusIcon: boolean;
    validateOnRuleChange: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    hideRequiredAsterisk: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    scrollToError: boolean;
    disabled: boolean;
}, {}>;
export default _sfc_main;