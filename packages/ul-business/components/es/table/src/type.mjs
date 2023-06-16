const t = {
  searchForms: {
    type: Array,
    default: () => []
  },
  tableAttr: {
    type: Object,
    default: () => ({})
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
  onDelete: Function,
  deleteSumbit: Function,
  getDetail: Function,
  onView: Function,
  editSumbit: Function,
  onEdit: Function
};
export {
  t as tableProps
};