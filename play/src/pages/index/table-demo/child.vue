<template>
  <ul-table v-bind="config" />
</template>

<script setup lang="tsx">
import { reactive } from "vue";
import { UlTableProps } from "@ul-business/components";
import { Icon } from "@iconify/vue";
import { ElMessage } from "element-plus";

const config = reactive<UlTableProps>({
  rowKey: "id",
  columns: [
    {
      label: () => (
        <div>
          用户名
          <el-tooltip placement="top" content="我是提示">
            <el-icon>
              <Icon icon="ep:info-filled"></Icon>
            </el-icon>
          </el-tooltip>
        </div>
      ),
      align: "center",
      width: 150,
      children: [
        {
          label: "用户名1",
          prop: "name1",
          width: 150,
        },
        {
          label: "用户名2",
          prop: "name2",
          width: 150,
        },
      ],
    },
    {
      label: "日期",
      prop: "date",
      minWidth: 100,
    },
    {
      label: "地址",
      prop: "address",
    },
  ],
  searchForms: [
    {
      label: "用户名：",
      id: "username",
      type: "el-input",
    },
  ],
  async getList() {
    // 这里请求接口
    return {
      data: [
        {
          id: 1,
          date: "2016-05-02",
          name1: "张",
          name2: "三晚",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          id: 2,
          date: "2016-05-04",
          name1: "苏",
          name2: "情深",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          id: 3,
          date: "2016-05-01",
          name1: "王",
          name2: "牛牛",
          address: "No. 189, Grove St, Los Angeles",
          children: [
            {
              id: 31,
              date: "2016-05-01",
              name1: "王",
              name2: "大",
              address: "No. 189, Grove St, Los Angeles",
            },
            {
              id: 32,
              date: "2016-05-01",
              name1: "王",
              name2: "二",
              address: "No. 189, Grove St, Los Angeles",
            },
          ],
        },
        {
          id: 4,
          date: "2016-05-03",
          name1: "林",
          name2: "五懂",
          address: "No. 189, Grove St, Los Angeles",
        },
      ],
      total: 1000,
    };
  },
  onNew() {
    // 当需要自定义新增页面时使用
    ElMessage.success("自定义新增");
  },
  onView() {
    ElMessage.success("自定义查看");
  },
  onEdit() {
    ElMessage.success("自定义编辑");
  },
});
</script>

<style scoped></style>
