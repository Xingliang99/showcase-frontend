<template>
  <el-container style="height: 100vh;">
    <!-- 侧边栏 -->
    <el-aside width="200px">
      <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse" router=true>
        <el-sub-menu index="1">
          <template #title>
            <el-icon>
              <location />
            </el-icon>
            <span>个人</span>
          </template>
          <el-menu-item-group>
            <template #title><span>Group One</span></template>
            <el-menu-item index="/Person">信息</el-menu-item>
            <el-menu-item index="1-2">item two</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3">item three</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="1-4">
            <template #title><span>item four</span></template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>

        <el-sub-menu index="/Task">
          <template #title>
            <el-icon>
              <icon-menu />
            </el-icon>
            <span>任务</span>
          </template>

          <el-menu-item index="/Task/todo">待办</el-menu-item>
          <el-menu-item index="/Task/done">完成</el-menu-item>
        </el-sub-menu>

        <el-menu-item index="/HR">
          <el-icon>
            <document />
          </el-icon>
          <template #title>人事</template>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon>
            <setting />
          </el-icon>
          <template #title>通知</template>
        </el-menu-item>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header>
        <!-- 这里可以放置头部内容 -->
        <div class="logo">OA System</div>
      </el-header>
      
      <!-- 主体内容区域 -->
      <el-main>
        <router-view></router-view>
      </el-main>

      <el-footer>
        © 2023 OA System. All rights reserved.
      </el-footer>
    </el-container>
  </el-container>
  <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
  </el-radio-group>
</template>
  
<script lang="ts" setup>
import { ref } from 'vue'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

const isCollapse = ref(false)
</script>
  
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 100%;
  height: 100%;
}
</style>
  