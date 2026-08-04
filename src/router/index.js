import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import CarrinhoView from '../views/CarrinhoView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/carrinho',
      name: 'Carrinho',
      component: CarrinhoView
    }
  ]
})

export default router
