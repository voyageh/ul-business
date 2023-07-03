import { PropType, ExtractPropTypes, VNode } from "vue";
import { TableColumnCtx, PaginationProps } from "element-plus";
import elTableProps from "element-plus/es/components/table/src/table/defaults";
import { IFormItem } from "../../form";
export interface ITableColumn<T extends any> extends Partial<Omit<TableColumnCtx<T>, "label" | "children">> {
    label?: string | (() => VNode | string);
    component?: string | object;
    el?: Object;
    children?: ITableColumn<T>[];
}
export { elTableProps };
export interface IGlobalTableProps {
    pageKey?: string;
    sizeKey?: string;
    dataPath?: string;
    totalPath?: string;
}
export declare const tableProps: {
    searchForms: {
        type: PropType<IFormItem[]>;
        default: () => never[];
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
        type: StringConstructor;
        default: string;
    };
    hasPagination: {
        type: BooleanConstructor;
        default: boolean;
    };
    sizeKey: StringConstructor;
    pageKey: StringConstructor;
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
    deleteSumbit: FunctionConstructor;
    getDetail: FunctionConstructor;
    onView: FunctionConstructor;
    editSumbit: FunctionConstructor;
    onEdit: FunctionConstructor;
    data: {
        type: PropType<any[]>;
        default: () => never[];
    };
    size: {
        readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    width: (StringConstructor | NumberConstructor)[];
    height: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    fit: {
        type: BooleanConstructor;
        default: boolean;
    };
    stripe: BooleanConstructor;
    border: BooleanConstructor;
    rowKey: PropType<string | ((row: any) => string) | undefined>;
    showHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
    showSummary: BooleanConstructor;
    sumText: StringConstructor;
    summaryMethod: PropType<import("element-plus/es/components/table/src/table/defaults").SummaryMethod<any> | undefined>;
    rowClassName: PropType<import("element-plus/es/components/table/src/table/defaults").ColumnCls<any> | undefined>;
    rowStyle: PropType<import("element-plus/es/components/table/src/table/defaults").ColumnStyle<any> | undefined>;
    cellClassName: PropType<import("element-plus/es/components/table/src/table/defaults").CellCls<any> | undefined>;
    cellStyle: PropType<import("element-plus/es/components/table/src/table/defaults").CellStyle<any> | undefined>;
    headerRowClassName: PropType<import("element-plus/es/components/table/src/table/defaults").ColumnCls<any> | undefined>;
    headerRowStyle: PropType<import("element-plus/es/components/table/src/table/defaults").ColumnStyle<any> | undefined>;
    headerCellClassName: PropType<import("element-plus/es/components/table/src/table/defaults").CellCls<any> | undefined>;
    headerCellStyle: PropType<import("element-plus/es/components/table/src/table/defaults").CellStyle<any> | undefined>;
    highlightCurrentRow: BooleanConstructor;
    currentRowKey: (StringConstructor | NumberConstructor)[];
    emptyText: StringConstructor;
    expandRowKeys: PropType<any[] | undefined>;
    defaultExpandAll: BooleanConstructor;
    defaultSort: PropType<import("element-plus/es/components/table/src/table/defaults").Sort | undefined>;
    tooltipEffect: StringConstructor;
    tooltipOptions: PropType<Partial<Pick<import("element-plus").ElTooltipProps, "popperClass" | "showArrow" | "effect" | "enterable" | "offset" | "placement" | "popperOptions" | "showAfter" | "hideAfter">> | undefined>;
    spanMethod: PropType<((data: {
        row: any;
        rowIndex: number;
        column: TableColumnCtx<any>;
        columnIndex: number;
    }) => number[] | {
        rowspan: number;
        colspan: number;
    } | undefined) | undefined>;
    selectOnIndeterminate: {
        type: BooleanConstructor;
        default: boolean;
    };
    indent: {
        type: NumberConstructor;
        default: number;
    };
    treeProps: {
        type: PropType<{
            hasChildren?: string | undefined;
            children?: string | undefined;
        } | undefined>;
        default: () => {
            hasChildren: string;
            children: string;
        };
    };
    lazy: BooleanConstructor;
    load: PropType<((row: any, treeNode: import("element-plus/es/components/table/src/table/defaults").TreeNode, resolve: (data: any[]) => void) => void) | undefined>;
    style: {
        type: PropType<import("vue").CSSProperties>;
        default: () => {};
    };
    className: {
        type: StringConstructor;
        default: string;
    };
    tableLayout: {
        type: PropType<"auto" | "fixed">;
        default: string;
    };
    scrollbarAlwaysOn: {
        type: BooleanConstructor;
        default: boolean;
    };
    flexible: BooleanConstructor;
    showOverflowTooltip: PropType<boolean | Partial<Pick<import("element-plus").ElTooltipProps, "popperClass" | "showArrow" | "effect" | "enterable" | "offset" | "placement" | "popperOptions" | "showAfter" | "hideAfter">> | undefined>;
};
export type UlTableProps = Partial<ExtractPropTypes<typeof tableProps>>;
