import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Country/:name',
    name: 'Country',
    component: () => import( '../views/Country.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
