import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/index.vue'),
  },
  {
    path: '/transit',
    name: 'transit',
    component: () => import('@/views/transit/index.vue'),
  },
  {
    path: '/one',
    name: 'one',
    component: () => import('@/views/one/index.vue'),
  },
]
export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
