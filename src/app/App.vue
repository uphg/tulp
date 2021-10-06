<script lang="ts" setup>
import { router as routerNavGuards } from '~src/router';
import useSidebarSwitch from './use-sidebar-switch'
import useSetSidebar from './use-set-sidebar'
import { navbarRoute } from '../router/navbar/index';
import { find } from '~src/utils/find'
import { NavBarType } from '~src/router/interface'
const { setSidebarVisible } = useSidebarSwitch()
const { sidebar, setSidebar } = useSetSidebar()

routerNavGuards.beforeEach((to, from) => {
  // 只有在路由的 name 更新时触发
  if (to.name === from.name) return

  // 第一次加载非首页的页面
  if (sidebar.value.length < 1 && to.name !== 'Home') {
    const currentNav = find<NavBarType>(
      navbarRoute,
      (item) => item.name === to.matched[0].name
    ) as NavBarType
    setSidebar(currentNav.items)
  }
})

routerNavGuards.afterEach(() => {
  setSidebarVisible?.(false)
})
</script>

<template>
  <router-view />
</template>
