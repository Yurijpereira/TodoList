import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'TodoList',
    component: () => import('@/components/TodoList.vue')
  },
  {
    path: '/saved/:id',
    name: 'SavedTodoList',
    component: () => import('@/components/TodoList.vue')
  },
  {
    path: '/saved',
    name: 'SavedTodoLists',
    component: () => import('@/components/SavedTodoLists.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
