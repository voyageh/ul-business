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

export type ConfirmSave = (data: any, type: string) => Promise<boolean | void>;

export type ConfirmDel = (row: any) => Promise<boolean | void>;

export type GetList = (row: any) => Promise<any>;

export type GetDetail = (row: any) => Promise<any>;

export const tableProps = {
  ...elTableProps,
  searchForms: {
    type: Array as PropType<IFormItem[]>,
    default: () => [],
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
    type: String,
    default: "160px",
  },
  hasPagination: {
    type: Boolean,
    default: true,
  },
  sizeKey: String,
  pageKey: String,
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
  getList: Function as PropType<GetList>,
  dataPath: String,
  totalPath: String,
  immediate: {
    type: Boolean,
    default: true,
  },
  getDetail: Function as PropType<GetDetail>,
  onResetNew: Function,
  onResetView: Function,
  onResetEdit: Function,
  confirmDel: Function as PropType<ConfirmDel>,
  confirmSave: Function as PropType<ConfirmSave>,
};

export type UlTableProps = Partial<ExtractPropTypes<typeof tableProps>>;
