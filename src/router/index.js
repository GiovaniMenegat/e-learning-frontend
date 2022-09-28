import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home/HomeView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login/LoginView.vue')
  },
  {
    path: '/aula/:id',
    name: 'class',
    component: () => import('../views/Class/ClassView.vue')
  },
  {
    path: '/seu-caminho',
    name: 'dashboard',
    component: () => import('../views/Dashboard/DashboardView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
