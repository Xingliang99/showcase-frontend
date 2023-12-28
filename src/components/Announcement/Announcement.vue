<template>
    <el-container>
      <el-main>
        <el-card v-for="announcement in announcements" :key="announcement.announcementId" class="announcement-card">
          <div slot="header">
            <span>{{ announcement.title }}</span>
            <el-tag size="small">{{ announcement.publishDate }}</el-tag>
          </div>
          <div>{{ announcement.content }}</div>
        </el-card>
      </el-main>
    </el-container>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  
  export default {
    setup() {
      const announcements = ref([]);
  
      onMounted(async () => {
        try {
          const response = await axios.get('/api/announcements');
          announcements.value = response.data;
        } catch (error) {
          console.error('Error fetching announcements:', error);
        }
      });
  
      return { announcements };
    }
  };
  </script>
  
  <style scoped>
  .announcement-card {
    margin-bottom: 20px;
  }
  </style>
  