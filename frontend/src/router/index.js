import { createRouter, createWebHashHistory } from 'vue-router'
import Table from '../views/Goods.vue'

const routes = [
  {
    path: '/',
    name: 'Table',
    component: Table,
    props: true
  },
  {
    path: '/chart',
    name: 'Chart',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Chart.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
