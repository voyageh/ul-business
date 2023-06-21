import { ITableColumn } from "./type";
declare const _sfc_main: import("vue").DefineComponent<{
    searchForms: {
        type: import("vue").PropType<import("../../form").IFormItem[]>;
        default: () => never[];
    };
    tableAttr: {
        type: ObjectConstructor;
        default: () => {};
    };
    columns: {
        type: import("vue").PropType<ITableColumn<any>[]>;
        /**
         * 用来获取el-table-column的props
         * @param obj
         */
        required: boolean;
        default: () => never[];
    };
    hasOperateColumn: {
        type: BooleanConstructor;
        default: boolean;
    };
    opWidth: {
        type: NumberConstructor;
        default: number;
    };
    hasPagination: {
        type: BooleanConstructor;
        default: boolean;
    };
    sizeKey: {
        type: StringConstructor;
        default: string;
    };
    pageKey: {
        type: StringConstructor;
        default: string;
    };
    pagingAlign: {
        type: StringConstructor;
        default: string;
    };
    pagingAttr: {
        type: import("vue").PropType<Partial<import("element-plus").PaginationProps>>;
        default: () => {};
    };
    forms: {
        type: import("vue").PropType<import("../../form").IFormItem[]>;
        default: () => never[];
    };
    getList: FunctionConstructor;
    dataPath: StringConstructor;
    totalPath: StringConstructor;
    immediate: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * 条数改变
     * @param v 条数
     */
    onNew: FunctionConstructor;
    newSumbit: FunctionConstructor;
    deleteSumbit: FunctionConstructor;
    getDetail: FunctionConstructor;
    onView: FunctionConstructor;
    editSumbit: FunctionConstructor;
    onEdit: FunctionConstructor;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    searchForms: {
        type: import("vue").PropType<import("../../form").IFormItem[]>;
        default: () => never[];
    };
    tableAttr: {
        type: ObjectConstructor;
        default: () => {};
    };
    columns: {
        type: import("vue").PropType<ITableColumn<any>[]>;
        /**
         * 用来获取el-table-column的props
         * @param obj
         */
        required: boolean;
        default: () => never[];
    };
    hasOperateColumn: {
        type: BooleanConstructor;
        default: boolean;
    };
    opWidth: {
        type: NumberConstructor;
        default: number;
    };
    hasPagination: {
        type: BooleanConstructor;
        default: boolean;
    };
    sizeKey: {
        type: StringConstructor;
        default: string;
    };
    pageKey: {
        type: StringConstructor;
        default: string;
    };
    pagingAlign: {
        type: StringConstructor;
        default: string;
    };
    pagingAttr: {
        type: import("vue").PropType<Partial<import("element-plus").PaginationProps>>;
        default: () => {};
    };
    forms: {
        type: import("vue").PropType<import("../../form").IFormItem[]>;
        default: () => never[];
    };
    getList: FunctionConstructor;
    dataPath: StringConstructor;
    totalPath: StringConstructor;
    immediate: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * 条数改变
     * @param v 条数
     */
    onNew: FunctionConstructor;
    newSumbit: FunctionConstructor;
    deleteSumbit: FunctionConstructor;
    getDetail: FunctionConstructor;
    onView: FunctionConstructor;
    editSumbit: FunctionConstructor;
    onEdit: FunctionConstructor;
}>>, {
    columns: ITableColumn<any>[];
    searchForms: import("../../form").IFormItem[];
    tableAttr: Record<string, any>;
    hasOperateColumn: boolean;
    opWidth: number;
    hasPagination: boolean;
    sizeKey: string;
    pageKey: string;
    pagingAlign: string;
    pagingAttr: Partial<import("element-plus").PaginationProps>;
    forms: import("../../form").IFormItem[];
    immediate: boolean;
}, {}>;
export default _sfc_main;
