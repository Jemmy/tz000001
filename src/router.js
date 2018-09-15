import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/desktop',
      name: 'desktop',
      // route level code-splitting
      // this generates a separate chunk (desktop.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "desktop" */ './views/Desktop.vue')
    },
    {
      path: '/blockchain.v1',
      name: 'blockchain.v1',
      // route level code-splitting
      // this generates a separate chunk (blockchain.v1.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "blockchain.v1" */ './views/BlockchainV1.vue')
    }
  ]
})
