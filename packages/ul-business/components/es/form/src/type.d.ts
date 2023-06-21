import { PropType, ExtractPropTypes, VNode } from "vue";
import type { FormItemProps } from "element-plus";
export interface IFormat {
    inputFormat?(row: any): object;
    outputFormat?(row: any): object;
}
export interface IFormItem extends Partial<Omit<FormItemProps, "label">>, IFormat {
    id?: string;
    label?: string | (() => object | VNode);
    type?: string;
    component?: string | object;
    default?: any;
    hide?: boolean | ((row: Record<string, any>) => boolean);
    str?: string;
    forceDisabled?: boolean;
    el?: object;
    items?: IFormItem[];
    span?: number;
}
export declare const formProps: {
    labelWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    content: {
        type: PropType<IFormItem[]>;
        default: () => never[];
    };
    modelValue: ObjectConstructor;
    model: ObjectConstructor;
    rules: {
        readonly type: PropType<Partial<Record<string, import("element-plus/es/utils").Arrayable<import("element-plus").FormItemRule>>>>;
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
        readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<readonly [ObjectConstructor, BooleanConstructor], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    size: {
        readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    disabled: BooleanConstructor;
};
export type UlFormProps = ExtractPropTypes<typeof formProps>;
