import Layout from '../../Layout/Layout.vue'
import Home from '../../views/Home.vue'
import { docs, components } from '../sidebar/index'
import { NavBarType } from '../interface'

export const navbarRoute: NavBarType[] = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    name: 'Home',
    meta: { title: '首页' },
    items: [
      {
        text: '首页哦',
        items: [
          {
            path: 'home',
            name: 'Home',
            component: Home,
            meta: { title: '首页' },
            hidden: true
          }
        ]
      }
    ],
  },
  {
    path: '/docs',
    name: 'Docs',
    component: Layout,
    meta: { title: '文档' },
    items: docs,
  },
  {
    path: '/components',
    name: 'Components',
    component: Layout,
    meta: { title: '组件' },
    items: components,
  },
]