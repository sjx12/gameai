import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/home/index.vue'),
    meta: {
      title: '首页'
    }
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import(/* webpackChunkName: "about" */ '../views/home/detail.vue')
  },
  {
    path: '/game',
    name: 'game',
    component: () => import(/* webpackChunkName: "about" */ '../views/home/game.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.VUE_APP_BASE_URL),
  scrollBehavior() {
    return {
      top: 0
    }
  }
})

// 定义页面标题
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
