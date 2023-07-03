<template>
  <div class="ul-table">
    <div v-if="searchForms.length > 0" class="ul-table__search">
      <ul-form ref="searchForm" :content="searchForms" inline>
        <template #final>
          <el-form-item>
            <el-button type="primary" @click="onSearch">
              <template #icon>
                <el-icon>
                  <Icon icon="ep:search" />
                </el-icon>
              </template>
              查询
            </el-button>
            <el-button @click="onRefresh">
              <template #icon>
                <el-icon>
                  <Icon icon="ep:refresh" />
                </el-icon>
              </template>
              重置
            </el-button>
          </el-form-item>
        </template>
      </ul-form>
    </div>
    <div class="ul-table__content">
      <div class="table-head">
        <el-button type="primary" @click="onDefaultNew">
          <template #icon>
            <el-icon>
              <Icon icon="ep:plus" />
            </el-icon>
          </template>
          新增
        </el-button>
        <slot name="head"></slot>
      </div>
      <el-table
        border
        v-bind="getTableProps($props)"
        :data="list"
        v-loading="loading"
        element-loading-text="正在努力加载...">
        <template v-for="item in columns">
          <!-- 多级表头 -->
          <el-table-column v-if="item.children" v-bind="getColumnProps(item)">
            <template #header>
              <component v-if="item.label && typeof item.label === 'function'" :is="item.label()"></component>
              <span v-else>{{ item.label }}</span>
            </template>

            <el-table-column v-for="child in item.children" :key="child.prop" v-bind="getColumnProps(child)">
              <template #header>
                <component v-if="child.label && typeof child.label === 'function'" :is="child.label()"></component>
                <span v-else>{{ child.label }}</span>
              </template>
              <template #default="{ row }">
                <Component v-if="child.component" :is="child.component" v-model="row[child.prop!]" v-bind="child.el" />
                <template v-else>{{ row[child.prop!] }}</template>
              </template>
            </el-table-column>
          </el-table-column>

          <el-table-column v-else v-bind="getColumnProps(item)">
            <template #header>
              <component v-if="item.label && typeof item.label === 'function'" :is="item.label()"></component>
              <span v-else>{{ item.label }}</span>
            </template>
            <template #default="{ row }">
              <Component v-if="item.component" :is="item.component" v-model="row[item.prop!]" v-bind="item.el" />
              <template v-else>{{ row[item.prop!] }}</template>
            </template>
          </el-table-column>
        </template>
        <el-table-column v-if="hasOperateColumn && columns.length > 0" label="操作" align="center" fixed="right">
          <template #default="{ row }">
            <div class="operate-box">
              <el-button link type="primary" @click="onDefaultView(row)">查看</el-button>
              <el-button link type="primary" @click="onDefaultEdit(row)">编辑</el-button>
              <el-popconfirm
                title="确定要删除该数据吗?"
                confirm-button-type="danger"
                confirm-button-text="删除"
                @click="onDefaultDelete">
                <template #reference>
                  <el-button link type="danger">删除</el-button>
                </template>
              </el-popconfirm>
              <slot name="extraOp"></slot>
            </div>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        v-if="hasPagination && total > 0"
        class="paging-box"
        layout="total, sizes, prev, pager, next, jumper"
        background
        small
        v-bind="pagingAttr"
        :current-page="pagination[pageKey]"
        :page-size="pagination[sizeKey]"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange" />
    </div>
    <el-dialog v-model="dialogState.visible" :title="dialogState.title" @close="dialogClose">
      <ul-form ref="dialogForm" :disabled="dialogState.disabled" :content="forms" />
      <template v-if="!dialogState.disabled" #footer>
        <span class="dialog-footer">
          <el-button @click="dialogState.visible = false">取消</el-button>
          <el-button type="primary" @click="onSave()"> 保存 </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, nextTick, inject } from "vue";
import { tableProps, ITableColumn, elTableProps, IGlobalTableProps } from "./type";
import { Icon } from "@iconify/vue";
import { UlFormInstance } from "../../form";
import { get as _get } from "lodash";

defineOptions({ name: "UlTable" });
const props = defineProps(tableProps);
const global = inject<IGlobalTableProps>("table");
const pageKey = props.pageKey ?? global?.sizeKey ?? "pageSize";
const sizeKey = props.sizeKey ?? global?.pageKey ?? "PageNo";

// 搜索表单的实例
const searchForm = ref<UlFormInstance>();
const loading = ref(false);
const list = ref<any[]>([]);
const total = ref(0);

// 分页参数
const pagination = reactive({
  [pageKey]: 1,
  [sizeKey]: 10,
});

/**
 * 用来获取el-table的props
 * @param obj
 */
const getTableProps = (obj: any) => {
  const t: any = {};
  Object.keys(elTableProps).forEach((key) => {
    if (obj[key]) {
      t[key] = obj[key];
    }
  });
  return t;
};

/**
 * 用来获取el-table-column的props
 * @param obj
 */
const getColumnProps = (obj: ITableColumn<any>) => {
  const { label, component, el, children, ...rest } = obj;
  return rest;
};

/**
 * 查询
 */
const onSearch = async () => {
  if (props.getList) {
    loading.value = true;
    const formValue = searchForm.value?.getValue?.();
    const result = await props.getList({
      ...pagination,
      ...formValue,
    });
    const dataPath = props.dataPath ?? global?.dataPath ?? "data";
    const totalPath = props.totalPath ?? global?.totalPath ?? "total";
    list.value = _get(result, dataPath);
    total.value = _get(result, totalPath);
    loading.value = false;
  }
};

if (props.immediate) {
  onSearch();
}

/**
 * 重置
 */
const onRefresh = () => {
  searchForm.value?.elFrom?.resetFields?.();
  onSearch();
};

/**
 * 条数改变
 * @param v 条数
 */
const handleSizeChange = (v: number) => {
  pagination[sizeKey] = v;
  onSearch();
};

/**
 * 页数改变
 * @param v 页数
 */
const handleCurrentChange = (v: number) => {
  pagination[pageKey] = v;
  onSearch();
};

// 弹窗相关的数据
const dialogState = reactive({
  visible: false,
  title: "",
  disabled: false,
  saveType: "",
});
// 弹窗的表单实例
const dialogForm = ref<UlFormInstance>();

/**
 * 弹窗关闭
 */
const dialogClose = () => {
  dialogForm.value?.elFrom?.resetFields?.();
};

/**
 * 新增
 */
const onDefaultNew = () => {
  if (props.onNew) {
    props.onNew();
    return;
  }
  dialogState.title = "新增";
  dialogState.visible = true;
  dialogState.disabled = false;
  dialogState.saveType = "new";
};

/**
 * 查看明细，如果有fetchDetail就去请求，否则返回当前行数据
 * @param row 当前行数据
 */
const getDetail = async (row: any) => {
  let detail = row;
  if (props.getDetail) {
    detail = await props.getDetail(row);
  }
  nextTick(() => {
    dialogForm.value?.setValue?.(detail);
  });
};

/**
 * 删除
 * @param row 当前行数据
 */
const onDefaultDelete = async (row: any) => {
  if (props.deleteSumbit) {
    props.deleteSumbit(row);
  }
};

/**
 * 修改，如果onEdit存在就调用
 * @param row 当前行数据
 */
const onDefaultEdit = async (row: any) => {
  if (props.onEdit) {
    props.onEdit(row);
    return;
  }
  dialogState.title = "编辑";
  dialogState.visible = true;
  dialogState.disabled = false;
  dialogState.saveType = "edit";
  getDetail(row);
};

/**
 * 点击查看，如果onView存在就调用
 * @param row 当前行数据
 */
const onDefaultView = async (row: any) => {
  if (props.onView) {
    props.onView(row);
    return;
  }
  dialogState.title = "查看";
  dialogState.visible = true;
  dialogState.disabled = true;
  getDetail(row);
};

/**
 * 点击弹窗保存按钮
 * 1. 验证必填项
 * 2. 获取表单值
 * 3. 调用保存的api
 */
const onSave = async () => {
  dialogForm.value?.elFrom?.validate?.(async (vaild: boolean) => {
    if (!vaild) return;
    let save = props.newSumbit;
    if (dialogState.saveType === "edit") {
      save = props.editSumbit;
    }
    if (save) {
      const formValue = dialogForm.value?.getValue?.();
      const flag = await save(formValue);
      if (flag !== false) {
        dialogState.visible = false;
        onSearch();
      }
    }
  });
};
</script>

<style lang="scss">
.ul-table {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  &__search {
    border-radius: 6px;
    border: 1px solid #e4e7ed;
    background-color: #fff;
    padding: 18px 20px 0;
    margin-bottom: 10px;
  }
  &__content {
    flex: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    border-radius: 6px;
    border: 1px solid #e4e7ed;
    background-color: #fff;
    padding: 20px;

    .table-head {
      margin-bottom: 15px;
    }

    .el-table__header th {
      height: 45px;
      font-size: 14px;
      color: var(--el-text-color-primary);
      background: var(--el-fill-color-light) !important;
    }

    .el-table__header-wrapper {
      .el-table__cell > .cell > *:first-child {
        display: flex;
        align-items: center;
      }

      .el-table__cell.is-center > .cell > *:first-child {
        justify-content: center;
      }
    }

    colgroup > col[name^="el-table_"]:last-child {
      width: v-bind(opWidth);
    }

    .paging-box {
      margin-top: 20px;
      justify-content: v-bind(pagingAlign);
    }
  }
}
</style>
