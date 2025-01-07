import { createRouter, createWebHashHistory } from "vue-router"

const routes=[
    {path:'/', redirect:"/home"},
    {
        path: '/home',
        name: 'home',
        meta:{
            title:'爱心'
        },
        component: () => import('@/views/Home/Home.vue')        //路由懒加载按需导入
    },
    {
        path: '/home1',
        name: 'home1',
        meta:{
            title:'新年快乐'
        },
        component: () => import('@/views/Home/Home1.vue')
    }
]


const router=createRouter({
    history:createWebHashHistory(import.meta.env.BASE_URL),
    // base:'/xwhy20.top',
    // history:createWebHashHistory(import.meta.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.meta && to.meta.title) {
        document.title = to.meta.title;
    }
    next();
});

export default router
