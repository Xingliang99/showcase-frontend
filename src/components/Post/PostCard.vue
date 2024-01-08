<template>
  <el-card class="post-card">
    <div class="post-header">
      <el-avatar :src="post.user.avatar">
        <template #error>
          <div class="image-slot">
            <el-icon><icon-picture /></el-icon>
          </div>
        </template></el-avatar>
      <div class="user-info">
        <h3 class="username">{{ post.user.name }}</h3>
        <p class="post-time">{{ post.time }}</p>
      </div>
      <div class="post-follow">
        <el-button type="text" icon="el-icon-message">
          关注
        </el-button>
      </div>
    </div>
    <div class="post-content">
      <p>{{ post.content }}</p>
      <img v-if="post.image" :src="post.image" class="post-image" />
      <el-image>
        <template #error>
          <div class="image-slot">
            <el-icon><icon-picture /></el-icon>
          </div>
        </template>
      </el-image>
    </div>
    <div class="post-actions">
      <el-button type="text" icon="el-icon-thumb">
        {{ post.likes }} Likes
      </el-button>
      <el-button type="text" icon="el-icon-message">
        {{ post.comments }} Comments
      </el-button>
    </div>
  </el-card>
</template>
  
<script>
export default {
  name: 'PostCard',
  props: {
    post: {
      type: Object,
      required: true
    }
  }
};
</script>
  
<style scoped>
.post-card {
  margin-bottom: 20px;
}

.post-header {
  display: flex;
  align-items: center;
}

.post-header .user-info {
  margin-left: 10px;
}

.user-info .username {
  margin: 0;
  font-weight: bold;
}

.post-time {
  margin: 0;
  color: #999;
}

.post-follow {}

.post-content {
  margin-top: 20px;
}

.post-image {
  max-width: 100%;
  margin-top: 15px;
}

.post-actions {
  margin-top: 10px;
  display: flex;
  justify-content: start;
}

.post-actions .el-button {
  margin-right: 10px;
}
</style>
  