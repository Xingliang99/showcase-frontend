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
            <el-col :span="8" class="category">
              <el-menu mode="vertical">
                <el-menu-item index="1">热门微博</el-menu-item>
                <el-menu-item index="2">热门榜单</el-menu-item>
                <el-menu-item index="3">话题榜</el-menu-item>
                <el-menu-item index="4">热搜榜</el-menu-item>
                <el-menu-item index="5">文娱榜</el-menu-item>
                <el-menu-item index="6">要闻榜</el-menu-item>
              </el-menu>
            </el-col>

            <el-col :span="8">
              <PostList></PostList>
              <div>
                <post-card v-for="post in posts" :key="post.id" :post="post" />
              </div>
            </el-col>

            <el-col :span="8" class="hot">
              <div class="grid-content ep-bg-purple">
                <div v-if="isLoggin">
                  <button>请登录</button>
                </div>
                <RegistTip></RegistTip>

                <el-menu mode="vertical">
                  <el-menu-item index="1">热门微博</el-menu-item>
                  <el-menu-item index="2">热门榜单</el-menu-item>
                  <el-menu-item index="3">话题榜</el-menu-item>
                  <el-menu-item index="4">热搜榜</el-menu-item>
                  <el-menu-item index="5">文娱榜</el-menu-item>
                  <el-menu-item index="6">要闻榜</el-menu-item>
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

  background-color: #f1f2f5;
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

.category{
  background-color: white;
  width: 200px;
  max-width: 200px;
}

.category .el-menu {
  background-color: white;
}

.hot{
  background-color: white;
  width: 300px;
  max-width: 300px;
}

.hot .el-menu {
  background-color: white;
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
            avatar: 'https://s2.loli.net/2024/01/08/T2fQxL9dOtYiGUD.jpg'
          },
          content: '在今日的FindX7发布会上，OPPO Find X7系列以其杰出的影像配置吸引了无数摄影爱好者的目光。新机凭借其行业首创双潜望四主摄和全焦段杜比视频功能，让它在拍照和视频拍摄上都实现了全方位的领先。',
          image: '',
          time: '1小时前',
          likes: 10,
          comments: 5
        },
        // 更多帖子...
      ],
      isLoggin:true
    };
  }
};
</script>