<template>
  <el-menu class="ul-menu" v-bind="props" :style="cssVar">
    <ul-menu-item v-for="menu in menus" :key="menu.id" :menu="menu" />
  </el-menu>
</template>

<script setup lang="ts">
import IProps from "./types/menu";
import { computed } from "vue";

defineOptions({ name: "ul-menu" });
const props = defineProps(IProps);

const cssVar = computed(() => {
  return {
    "--selected-bg-color": props.selectBgColor,
    "--menu-item-width": props.width,
  };
});
</script>

<style lang="scss">
.ul-menu {
  height: 100%;

  &:not(.el-menu--collapse) {
    width: var(--menu-item-width);
  }

  .el-menu-item.is-active {
    background-color: var(--selected-bg-color);
  }

  .el-sub-menu__title:hover {
    color: var(--el-menu-active-color) !important;
  }
  .el-menu-item:hover {
    color: var(--el-menu-active-color) !important;
  }
}
</style>
