<template>
  <el-container class="default-layout">
    <el-aside width="auto">
      <ul-menu
        :menus="menus"
        background-color="#2b303b"
        text-color="#bfcbd9"
        active-text-color="#ffffff"
        select-bg-color="#597ef7"
        :default-active="activePath"
        router
        :collapse="isCollapse" />
    </el-aside>
    <el-container>
      <el-header height="50px">
        <el-icon :size="20" @click="isCollapse = !isCollapse">
          <Icon :icon="isCollapse ? 'ep:fold' : 'ep:expand'" />
        </el-icon>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { ElIcon } from "element-plus";
import { Icon } from "@iconify/vue";

const menus = ref([]);
const route = useRoute();
const activePath = computed(() => route.path);
const isCollapse = ref(false);

onMounted(async () => {
  await fetch("/data/menu.json")
    .then((res) => res.json())
    .then((data) => {
      menus.value = data;
    });
});
</script>

<style scoped lang="scss">
.default-layout {
  width: 100%;
  height: 100%;

  :deep(.el-header) {
    display: flex;
    align-items: center;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
    .el-icon {
      cursor: pointer;
      margin-right: 20px;
    }
  }

  :deep(.el-main) {
    box-sizing: border-box;
    padding: 10px 15px;
    background-color: var(--el-bg-color-page);
  }
}
</style>
