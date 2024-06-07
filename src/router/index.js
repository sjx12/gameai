import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/home/index.vue'),
    meta: {
      title: 'game'
    }
  },
  {
    path: '/detail/:templateId',
    name: 'detail',
    component: () => import(/* webpackChunkName: "about" */ '../views/home/detail.vue')
  },
  {
    path: '/game/:templateId',
    name: 'game',
    component: () => import(/* webpackChunkName: "about" */ '../views/home/game.vue')
  }
]

const router = createRouter({
  routes,

  history: createWebHashHistory(), // 使用hash模式
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
