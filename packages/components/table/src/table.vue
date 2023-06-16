<template>
  <div class="ul-table">
    <div v-if="searchForms.length > 0" class="ul-table__search">
      <ul-form ref="searchForm" :content="searchForms" inline>
        <template #last>
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
      </div>
      <el-table border :data="list" v-loading="loading" element-loading-text="正在努力加载..." v-bind="$attrs">
        <template v-for="item in columns">
          <el-table-column v-if="item.component" :label="item.label">
            <template #default="{ row }">
              <Component :is="item.component" v-model="row[item.prop!]" v-bind="item.el" />
            </template>
          </el-table-column>
          <el-table-column v-else v-bind="item" />
        </template>
        <el-table-column v-if="hasOperateColumn && columns.length > 0" label="操作" align="center" :width="opWidth">
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
        :current-page="pagination[props.pageKey]"
        :page-size="pagination[props.sizeKey]"
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
import { ref, reactive, nextTick } from "vue";
import { tableProps } from "./type";
import { Icon } from "@iconify/vue";
import { FormInstance } from "../../form";
import { get as _get } from "lodash";

defineOptions({ name: "UlTable" });
const props = defineProps(tableProps);

// 搜索表单的实例
const searchForm = ref<FormInstance>();
const loading = ref(false);
const list = ref<any[]>([]);
const total = ref(0);

// 分页参数
const pagination = reactive({
  [props.pageKey]: 1,
  [props.sizeKey]: 10,
});

/**
 * 查询
 */
const onSearch = async () => {
  if (props.getList) {
    const formValue = searchForm.value?.getValue?.();
    const result = await props.getList({
      ...pagination,
      ...formValue,
    });
    const dataPath = props.dataPath || "data";
    const totalPath = props.totalPath || "total";
    list.value = _get(result, dataPath);
    total.value = _get(result, totalPath);
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
  pagination[props.sizeKey] = v;
  onSearch();
};

/**
 * 页数改变
 * @param v 页数
 */
const handleCurrentChange = (v: number) => {
  pagination[props.pageKey] = v;
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
const dialogForm = ref<FormInstance>();

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
      await save(formValue);
      dialogState.visible = false;
      onSearch();
    }
  });
};
</script>

<style lang="scss">
.ul-table {
  &__content {
    .table-head {
      margin-bottom: 15px;
    }
    :deep(.el-table__header th) {
      height: 45px;
      font-size: 15px;
      font-weight: 700;
      color: var(--el-text-color-primary);
      background: var(--el-fill-color-light);
    }

    .paging-box {
      margin-top: 20px;
      justify-content: v-bind(pagingAlign);
    }
  }
}
</style>
