import t from "element-plus/es/components/table/src/table/defaults";
import { default as i } from "element-plus/es/components/table/src/table/defaults";
const a = {
  ...t,
  searchForms: {
    type: Array,
    default: () => []
  },
  columns: {
    type: Array,
    required: !0,
    default: () => []
  },
  hasOperateColumn: {
    type: Boolean,
    default: !0
  },
  opWidth: {
    type: Number,
    default: 160
  },
  hasPagination: {
    type: Boolean,
    default: !0
  },
  sizeKey: {
    type: String,
    default: "pageSize"
  },
  pageKey: {
    type: String,
    default: "PageNo"
  },
  pagingAlign: {
    type: String,
    default: "flex-end"
  },
  pagingAttr: {
    type: Object,
    default: () => ({})
  },
  forms: {
    type: Array,
    default: () => []
  },
  getList: Function,
  dataPath: String,
  totalPath: String,
  immediate: {
    type: Boolean,
    default: !0
  },
  onNew: Function,
  newSumbit: Function,
  deleteSumbit: Function,
  getDetail: Function,
  onView: Function,
  editSumbit: Function,
  onEdit: Function
};
export {
  i as elTableProps,
  a as tableProps
};
