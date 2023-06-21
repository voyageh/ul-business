import { PropType, ExtractPropTypes, VNode } from "vue";
import { TableColumnCtx, TableProps, PaginationProps } from "element-plus";
import { IFormItem } from "../../form";

export type ITableAttr = Omit<TableProps<any>, "data">;

export interface ITableColumn<T extends any> extends Partial<Omit<TableColumnCtx<T>, "label">> {
  label?: string | (() => VNode | string);
  component?: string | object;
  el?: Object;
}

export const tableProps = {
  searchForms: {
    type: Array as PropType<IFormItem[]>,
    default: () => [],
  },
  tableAttr: {
    type: Object,
    default: () => ({}),
  },
  columns: {
    type: Array as PropType<ITableColumn<any>[]>,
    required: true,
    default: () => [],
  },
  hasOperateColumn: {
    type: Boolean,
    default: true,
  },
  opWidth: {
    type: Number,
    default: 160,
  },
  hasPagination: {
    type: Boolean,
    default: true,
  },
  sizeKey: {
    type: String,
    default: "pageSize",
  },
  pageKey: {
    type: String,
    default: "PageNo",
  },
  pagingAlign: {
    type: String,
    default: "flex-end",
  },
  pagingAttr: {
    type: Object as PropType<Partial<PaginationProps>>,
    default: () => ({}),
  },
  forms: {
    type: Array as PropType<IFormItem[]>,
    default: () => [],
  },
  getList: Function,
  dataPath: String,
  totalPath: String,
  immediate: {
    type: Boolean,
    default: true,
  },
  onNew: Function,
  newSumbit: Function,
  deleteSumbit: Function,
  getDetail: Function,
  onView: Function,
  editSumbit: Function,
  onEdit: Function,
};

export type UlTableProps = Partial<ExtractPropTypes<typeof tableProps>>;
