import { ITableColumn } from "./type";
declare const _sfc_main: import("vue").DefineComponent<{
    searchForms: {
        type: import("vue").PropType<import("../../form").IFormItem[]>;
        default: () => never[];
    };
    columns: {
        type: import("vue").PropType<ITableColumn<any>[]>;
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
        type: StringConstructor; /**
         * 查询
         */
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
    onNew: FunctionConstructor;
    newSumbit: FunctionConstructor;
    deleteSumbit: FunctionConstructor;
    getDetail: FunctionConstructor;
    onView: FunctionConstructor;
    editSumbit: FunctionConstructor;
    onEdit: FunctionConstructor;
    data: {
        type: import("vue").PropType<any[]>;
        default: () => never[];
    };
    size: {
        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
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
    rowKey: import("vue").PropType<string | ((row: any) => string) | undefined>;
    showHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
    showSummary: BooleanConstructor;
    sumText: StringConstructor;
    summaryMethod: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").SummaryMethod<any> | undefined>;
    rowClassName: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").ColumnCls<any> | undefined>;
    rowStyle: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").ColumnStyle<any> | undefined>;
    cellClassName: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").CellCls<any> | undefined>;
    cellStyle: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").CellStyle<any> | undefined>;
    headerRowClassName: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").ColumnCls<any> | undefined>;
    headerRowStyle: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").ColumnStyle<any> | undefined>;
    headerCellClassName: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").CellCls<any> | undefined>;
    headerCellStyle: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").CellStyle<any> | undefined>;
    highlightCurrentRow: BooleanConstructor;
    currentRowKey: (StringConstructor | NumberConstructor)[];
    emptyText: StringConstructor;
    expandRowKeys: import("vue").PropType<any[] | undefined>;
    defaultExpandAll: BooleanConstructor;
    defaultSort: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").Sort | undefined>;
    tooltipEffect: StringConstructor;
    tooltipOptions: import("vue").PropType<Partial<Pick<import("element-plus").ElTooltipProps, "popperClass" | "showArrow" | "effect" | "enterable" | "offset" | "placement" | "popperOptions" | "showAfter" | "hideAfter">> | undefined>;
    spanMethod: import("vue").PropType<((data: {
        row: any;
        rowIndex: number;
        column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>;
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
        type: import("vue").PropType<{
            hasChildren?: string | undefined;
            children?: string | undefined;
        } | undefined>;
        default: () => {
            hasChildren: string;
            children: string;
        };
    };
    lazy: BooleanConstructor;
    load: import("vue").PropType<((row: any, treeNode: import("element-plus/es/components/table/src/table/defaults").TreeNode, resolve: (data: any[]) => void) => void) | undefined>;
    style: {
        type: import("vue").PropType<import("vue").CSSProperties>;
        default: () => {};
    };
    className: {
        type: StringConstructor;
        default: string;
    };
    tableLayout: {
        type: import("vue").PropType<"auto" | "fixed">;
        default: string;
    };
    scrollbarAlwaysOn: {
        type: BooleanConstructor;
        default: boolean;
    };
    flexible: BooleanConstructor;
    showOverflowTooltip: import("vue").PropType<boolean | Partial<Pick<import("element-plus").ElTooltipProps, "popperClass" | "showArrow" | "effect" | "enterable" | "offset" | "placement" | "popperOptions" | "showAfter" | "hideAfter">> | undefined>;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    searchForms: {
        type: import("vue").PropType<import("../../form").IFormItem[]>;
        default: () => never[];
    };
    columns: {
        type: import("vue").PropType<ITableColumn<any>[]>;
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
        type: StringConstructor; /**
         * 查询
         */
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
    onNew: FunctionConstructor;
    newSumbit: FunctionConstructor;
    deleteSumbit: FunctionConstructor;
    getDetail: FunctionConstructor;
    onView: FunctionConstructor;
    editSumbit: FunctionConstructor;
    onEdit: FunctionConstructor;
    data: {
        type: import("vue").PropType<any[]>;
        default: () => never[];
    };
    size: {
        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
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
    rowKey: import("vue").PropType<string | ((row: any) => string) | undefined>;
    showHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
    showSummary: BooleanConstructor;
    sumText: StringConstructor;
    summaryMethod: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").SummaryMethod<any> | undefined>;
    rowClassName: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").ColumnCls<any> | undefined>;
    rowStyle: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").ColumnStyle<any> | undefined>;
    cellClassName: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").CellCls<any> | undefined>;
    cellStyle: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").CellStyle<any> | undefined>;
    headerRowClassName: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").ColumnCls<any> | undefined>;
    headerRowStyle: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").ColumnStyle<any> | undefined>;
    headerCellClassName: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").CellCls<any> | undefined>;
    headerCellStyle: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").CellStyle<any> | undefined>;
    highlightCurrentRow: BooleanConstructor;
    currentRowKey: (StringConstructor | NumberConstructor)[];
    emptyText: StringConstructor;
    expandRowKeys: import("vue").PropType<any[] | undefined>;
    defaultExpandAll: BooleanConstructor;
    defaultSort: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults").Sort | undefined>;
    tooltipEffect: StringConstructor;
    tooltipOptions: import("vue").PropType<Partial<Pick<import("element-plus").ElTooltipProps, "popperClass" | "showArrow" | "effect" | "enterable" | "offset" | "placement" | "popperOptions" | "showAfter" | "hideAfter">> | undefined>;
    spanMethod: import("vue").PropType<((data: {
        row: any;
        rowIndex: number;
        column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>;
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
        type: import("vue").PropType<{
            hasChildren?: string | undefined;
            children?: string | undefined;
        } | undefined>;
        default: () => {
            hasChildren: string;
            children: string;
        };
    };
    lazy: BooleanConstructor;
    load: import("vue").PropType<((row: any, treeNode: import("element-plus/es/components/table/src/table/defaults").TreeNode, resolve: (data: any[]) => void) => void) | undefined>;
    style: {
        type: import("vue").PropType<import("vue").CSSProperties>;
        default: () => {};
    };
    className: {
        type: StringConstructor;
        default: string;
    };
    tableLayout: {
        type: import("vue").PropType<"auto" | "fixed">;
        default: string;
    };
    scrollbarAlwaysOn: {
        type: BooleanConstructor;
        default: boolean;
    };
    flexible: BooleanConstructor;
    showOverflowTooltip: import("vue").PropType<boolean | Partial<Pick<import("element-plus").ElTooltipProps, "popperClass" | "showArrow" | "effect" | "enterable" | "offset" | "placement" | "popperOptions" | "showAfter" | "hideAfter">> | undefined>;
}>>, {
    className: string;
    columns: ITableColumn<any>[];
    style: import("vue").CSSProperties;
    searchForms: import("../../form").IFormItem[];
    hasOperateColumn: boolean;
    opWidth: number;
    hasPagination: boolean;
    sizeKey: string;
    pageKey: string;
    pagingAlign: string;
    pagingAttr: Partial<import("element-plus").PaginationProps>;
    forms: import("../../form").IFormItem[];
    immediate: boolean;
    data: any[];
    fit: boolean;
    stripe: boolean;
    border: boolean;
    showHeader: boolean;
    showSummary: boolean;
    highlightCurrentRow: boolean;
    defaultExpandAll: boolean;
    selectOnIndeterminate: boolean;
    indent: number;
    treeProps: {
        hasChildren?: string | undefined;
        children?: string | undefined;
    } | undefined;
    lazy: boolean;
    tableLayout: "auto" | "fixed";
    scrollbarAlwaysOn: boolean;
    flexible: boolean;
}>;
export default _sfc_main;
