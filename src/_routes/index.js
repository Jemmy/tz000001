import Vue from 'vue'
import VueRouter from 'vue-router'

import home from './home'
import desktop from './desktop'
import blockchain from './blockchain'
import dynamic from './dynamic'
// Для включения следующей группы роутов
// import nextGroupRoutes from './nextGroupRoutes'

let routes = [].concat(
  home,
  desktop,
  blockchain,
  dynamic
  // nextGroupRoutes // Для включения следующей группы роутов
)

Vue.use(VueRouter)

/* Our Vue Router Object */
const router = new VueRouter({
  routes,
  base: process.env.BASE_URL,
  /* Use Pretty URL */
  mode: 'history',
  /* Save The Scroll Position , Useful When Redirecting Back */
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
