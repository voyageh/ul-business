import { PropType, ExtractPropTypes } from "vue";
import { TableColumnCtx, TableProps, PaginationProps } from "element-plus";
import { IFormItem } from "../../form";
export type ITableAttr = Omit<TableProps<any>, "data">;
export interface ITableColumn<T extends any> extends Partial<TableColumnCtx<T>> {
    component?: string | object;
    el?: Object;
}
export declare const tableProps: {
    searchForms: {
        type: PropType<IFormItem[]>;
        default: () => never[];
    };
    tableAttr: {
        type: ObjectConstructor;
        default: () => {};
    };
    columns: {
        type: PropType<ITableColumn<any>[]>;
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
        type: PropType<Partial<PaginationProps>>;
        default: () => {};
    };
    forms: {
        type: PropType<IFormItem[]>;
        default: () => never[];
    };
    getList: FunctionConstructor;
    dataPath: StringConstructor;
    totalPath: StringConstructor;
    immediate: {
        type: BooleanConstructor;
        default: boolean;
    };
    onNew: FunctionConstructor;
    newSumbit: FunctionConstructor;
    onDelete: FunctionConstructor;
    deleteSumbit: FunctionConstructor;
    getDetail: FunctionConstructor;
    onView: FunctionConstructor;
    editSumbit: FunctionConstructor;
    onEdit: FunctionConstructor;
};
export type UlTableProps = Partial<ExtractPropTypes<typeof tableProps>>;
