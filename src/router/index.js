import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Сompetition from '../views/Сompetition.vue'
import Members from '../views/Members.vue'
import Testdrive from '../views/Testdrive.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/competition',
    name: 'competition',
    component: Сompetition
  },
  {
    path: '/members',
    name: 'members',
    component: Members
  },
  {
    path: '/testdrive',
    name: 'testdrive',
    component: Testdrive
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
