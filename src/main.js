import './assets/main.css'

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

import router from './router/index'

// axios
import Axios from 'axios'
// Axios.defaults.baseURL = "http://localhost:8080"
// Vue.prototype.$http = Axios

// 1
// const Home = {template:'<div>Home</div>'}
// const About = {template:'<div>About</div>'}
// // 2
// const routes = [
//     { path: '/', component: Home },
//     { path: '/about', component: About },
//   ]
// // 3
// const router = VueRouter.createRouter({
// // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
// history: VueRouter.createWebHashHistory(),
// routes, // `routes: routes` 的缩写
// })

const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.mount('#app')