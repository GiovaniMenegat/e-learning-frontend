import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home/HomeView.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login/LoginView.vue')
  },
  {
    path: '/aula/:id',
    name: 'class',
    component: () => import('../views/Class/ClassView.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/seu-caminho',
    name: 'dashboard',
    component: () => import('../views/Dashboard/DashboardView.vue'),
    meta: {
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
      if (store.getters.getToken === '') {
          next({ name: 'login' })
      } else {
          next()
      }
  } else {
      next()
  }
})


export default router
