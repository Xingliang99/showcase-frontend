import { createRouter, createWebHashHistory } from "vue-router";

import City from "../components/City.vue"
import Hello from "../components/HelloWorld.vue"
import Person from "../components/Person.vue"
import Task from "../components/Task/Task.vue"

const Home = { template: '<div>Home</div>' }

const routes = [
    { path: '/11', component: () => import("../components/TheWelcome.vue") },
    {
        path: '/12',
        component: Home,
        children: [
            {
                path: "/Person",
                component: () => import("../components/Person.vue")
            }
        ]
    },
    { path: '/City', component: City },
    { path: '/Hello', component: Hello },
    { path: '/Person', component: Person },
    {
        path: '/Task',
        component: Task,
        children: [
            {
                path: 'todo',
                component: () => import("../components/Task/Todo.vue")
            },
            {
                path: 'done',
                component: () => import("../components/Task/Done.vue")
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory('/'),
    routes
})

// const router = VueRouter.createRouter({
//     // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
//     history: VueRouter.createWebHashHistory(),
//     routes, // `routes: routes` 的缩写
//   })


export default router