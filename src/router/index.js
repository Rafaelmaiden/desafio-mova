import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'default',
    component: () => import('../templates/Default.vue'),
    redirect: 'home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: Home
      },

      {
        path: '/contry/alpha2Code/:alpha',
        name: 'Country',
        component: () => import('../views/Country.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
