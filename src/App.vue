<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import City from './components/City.vue'
import Home from './components/Home.vue'
</script>

<script>
// export default{
//   created:function(){
//     console.log("app created")
//   }
// }
</script>

<template>

  <Home/>
  <!-- <div class="common-layout">
    <el-container>
      <el-aside width="200px"><Home/></el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div> -->
  <!-- <div>
    <RouterLink to="/City">City</RouterLink>
    <RouterLink to="/Person">Person</RouterLink>
    <RouterLink to="/Hello">Hello</RouterLink>
    <RouterLink to="/">/</RouterLink>
    <RouterLink to="/11">11</RouterLink>
  </div>
    
  <div>
    <RouterView></RouterView>
  </div> -->

  
</template>

<!-- <style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style> -->
