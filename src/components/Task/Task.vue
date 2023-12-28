<template>
    <el-container>
      <el-header>任务管理</el-header>
      <el-main>
        <el-tabs v-model="activeTab" @tab-click="handleTabClick">
          <el-tab-pane label="待办任务" name="todo">
            <el-list v-for="task in todoTasks" :key="task.id" class="task-item">
              <el-list-item>
                <el-checkbox v-model="task.completed" @change="markAsDone(task)"> {{ task.content }} </el-checkbox>
              </el-list-item>
            </el-list>
          </el-tab-pane>
          <el-tab-pane label="已完成" name="completed">
            <el-list v-for="task in completedTasks" :key="task.id" class="task-item">
              <el-list-item>
                {{ task.content }}
              </el-list-item>
            </el-list>
          </el-tab-pane>
        </el-tabs>
      </el-main>
    </el-container>
  </template>
  
  <script>
  import { ref, computed } from 'vue';
  
  export default {
    name: 'Tasks',
    setup() {
      const tasks = ref([
        { id: 1, content: '完成报告', completed: false },
        { id: 2, content: '回复邮件', completed: false },
        { id: 3, content: '准备会议资料', completed: true },
        // ...更多任务...
      ]);
  
      const activeTab = ref('todo');
  
      const todoTasks = computed(() => tasks.value.filter(task => !task.completed));
      const completedTasks = computed(() => tasks.value.filter(task => task.completed));
  
      const markAsDone = (task) => {
        task.completed = true;
      };
  
      const handleTabClick = (tab) => {
        activeTab.value = tab.props.name;
      };
  
      return { tasks, activeTab, todoTasks, completedTasks, markAsDone, handleTabClick };
    }
  };
  </script>
  
  <style scoped>
  .task-item {
    margin-bottom: 10px;
  }
  </style>
  