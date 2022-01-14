import { createWebHistory, createRouter, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home/index.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', component: Home },
  { path: '/about', component: () => import('@/views/About/index.vue') },
  { path: '/counter', component: () => import('@/views/Counter/index.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
