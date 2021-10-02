import { createRouter, createWebHashHistory } from 'vue-router' // RouteRecordRaw
import NotFound from '../Layout/404.vue'
import { navbarRoute } from './navbar'
import { filterNavbar } from './filter-route'

const history = createWebHashHistory()

export const routes = [
  ...filterNavbar(navbarRoute),
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
    hidden: true
  }
]

export const router = createRouter({
  history,
  routes
})
