<template>
  <el-container>
    <el-aside style="width:180px;">
    </el-aside>
    <el-container>
      <el-header>XX管理系统</el-header>
      <el-main>内容区域</el-main>
      <el-footer>版权所有</el-footer>
    </el-container>
  </el-container>
</template>
为了便于区分各个区域，我们设置样式如下：

<style scoped>
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