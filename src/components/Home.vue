<template>
  <div class="common-layout">
    <el-container>
      <el-row>
        <el-col :span="24">
          <div class="grid-content ep-bg-purple-dark" />
          <span>搜索栏</span>
        </el-col>
      </el-row>
      <el-header height="200px">
        <div class="logo">微博</div>
        <el-menu mode="horizontal">
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2">视频</el-menu-item>
          <el-menu-item index="2">热门</el-menu-item>
          <el-menu-item index="2">消息</el-menu-item>
        </el-menu>
      </el-header>

      <el-aside width="300px">
        <!-- 个人信息卡片 -->
        <!-- 热门话题列表 -->
        <!-- 推荐关注用户列表 -->
      </el-aside>

      <el-main>
        <div class="posts-container">
          <el-row>
            <el-col :span="8">
              <el-menu mode="vertical">
                <el-menu-item index="1">热门微博</el-menu-item>
                <el-menu-item index="2">热门榜单</el-menu-item>
                <el-menu-item index="2">话题榜</el-menu-item>
                <el-menu-item index="2">热搜榜</el-menu-item>
                <el-menu-item index="2">文娱榜</el-menu-item>
                <el-menu-item index="2">要闻榜</el-menu-item>
              </el-menu>
            </el-col>

            <el-col :span="8">
              <PostList></PostList>
              <div>
                <post-card v-for="post in posts" :key="post.id" :post="post" />
              </div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content ep-bg-purple">
                <RegistTip></RegistTip>
                <el-menu mode="vertical">
                  <el-menu-item index="1">热门微博</el-menu-item>
                  <el-menu-item index="2">热门榜单</el-menu-item>
                  <el-menu-item index="2">话题榜</el-menu-item>
                  <el-menu-item index="2">热搜榜</el-menu-item>
                  <el-menu-item index="2">文娱榜</el-menu-item>
                  <el-menu-item index="2">要闻榜</el-menu-item>
                </el-menu>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<style>
.header {
  /* //TODO:换成图片 */
  background-color: beige;
  height: 200px;
}

.common-layout {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100vh;
}

.el-container {
  height: 100%;
}

.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

.el-menu {
  background-color: #d3dce6;
}
</style>

<script>
import PostCard from './Post/PostCard.vue';
import RegistTip from './Register/RegisterTip.vue'

export default {
  components: {
    PostCard
  },
  data() {
    return {
      posts: [
        {
          id: 1,
          user: {
            name: '极目新闻',
            avatar: 'path/to/avatar.jpg'
          },
          content: '这是一个微博帖子的示例内容。',
          image: 'path/to/image.jpg',
          time: '1小时前',
          likes: 10,
          comments: 5
        },
        // 更多帖子...
      ]
    };
  }
};
</script>