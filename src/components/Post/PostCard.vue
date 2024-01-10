<template>
  <el-card class="post-card">
    <div class="post-header">
      <el-avatar :src="post.user.avatar">
        <!-- <template #error>
          <div class="image-slot">
            <el-icon><icon-picture /></el-icon>
          </div>
        </template> -->
      </el-avatar>
      <div class="user-info">
        <el-text class="username">{{ post.user.name }}</el-text>
        <el-text class="post-time">{{ post.time }}</el-text>
      </div>
      <div class="post-follow">
        <!-- <button v-if="isButtonA">已关注</button>
        <button v-else>关注</button> -->
        <el-button class="follow-btn" type="warning" round @click="centerDialogVisible = true">
          <el-icon>
            <Plus />
          </el-icon>
          关注
        </el-button>
      </div>
    </div>
    <div class="post-content">
      <!-- <label>{{ post.content }}</label> -->
      <el-text class="mx-1">{{ post.content }}</el-text>
      <img v-if="post.image" :src="post.image" class="post-image" />
    </div>
    <div class="post-actions">
      <el-row>
        <el-col :span="8">
          <div>
          <el-button type="text" class="post-action-share">
            <el-icon>
              <Share />
            </el-icon>
            {{ post.likes }}
          </el-button>
        </div>
        </el-col>

        <el-col :span="8">
          <el-button type="text" class="post-action-comment">
            <el-icon>
              <Comment />
            </el-icon>
            {{ post.comments }}
          </el-button>
        </el-col>
        <el-col :span="8">
          <el-button type="text" class="post-action-like">
            <el-icon>
              <Star />
            </el-icon>
          </el-button>
        </el-col>
      </el-row>
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
  },
  data() {
    return {
      isButtonA: false
    };
  }
};
</script>
  
<style scoped>
.post-card {
  /* height: 800px; */
  margin: 20px;
}

.post-header {
  height: 150px;
  display: flex;
  align-items: center;
}

.post-header .user-info {
  margin-left: 10px;
}

.user-info .username {
  width: 100px;
  margin: 0;
  font-weight: bold;
}

.post-time {
  margin: 0;
  color: #999;
}

.post-header .post-follow {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}

.follow-btn {
  background-color: #ff8200;
  margin-left: auto;
}

.post-content {
  margin-top: 20px;
}

.post-image {
  max-width: 100%;
  margin-top: 15px;
}

.post-actions {
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: start;
}

.post-action-share:hover{
  color: #ff8200;
}

.post-action-comment:hover{
  color: #ff8200;
}

.post-action-like:hover{
  color: #ff8200;
}
.post-actions .el-button {
  margin-right: 10px;
}</style>
  