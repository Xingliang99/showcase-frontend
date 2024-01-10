import { createRouter, createWebHashHistory } from "vue-router";

import City from "../components/City.vue"
import Hello from "../components/HelloWorld.vue"
import Person from "../components/Person.vue"
import Task from "../components/Task/Task.vue"
import Attendance from "../components/Attendance/Attendance.vue"
import Announcement from "../components/Announcement/Announcement.vue"

const Home = { template: '<div>Home</div>' }

const routes = [
    {
        path: '/register',
        redirect: () => import("../components/Register/Register.vue")
    },
    {
        path: '/login',
        component: () => import("../components/TheWelcome.vue")
    },
    {
        path: '/11',
        component: () => import("../components/TheWelcome.vue")
    },
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
    },
    {
        path: '/Attendance',
        component: Attendance
    },
    {
        path: '/Announcements',
        component: Announcement
    }
]

const router = createRouter({
    history: createWebHashHistory('/'),
    routes
})

//导航守卫
// router.beforeEach((to, from, next) => {
//     const isLoggedIn = store.getters.isLoggedIn;
//     if (to.matched.some(record => record.meta.requiresAuth) && !isLoggedIn) {
//         next('/login');
//     } else {
//         next();
//     }
// })

export default router