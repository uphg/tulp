<script lang="ts" setup>
import { onMounted } from 'vue'
import { router } from '../router';
import useSidebarSwitch from './use-sidebar-switch'
import useSetSidebar from './use-set-sidebar'
import { useRoute } from 'vue-router';
import { navbarRoute } from '../router/navbar/index';
import { find } from '~src/utils/find'

const { setSidebarVisible } = useSidebarSwitch()
const route = useRoute()

const { sidebar, setSidebar } = useSetSidebar()

onMounted(() => {
  console.log('route')
  console.log({...route})
})

router.beforeEach((to) => {
  console.log('to')
  console.log(to)
  if (sidebar.value.length < 1 && to.name !== 'Home') {
    // 第一次加载非首页的页面
    const currentNav = find(navbarRoute, ({ name }: any) => name === to.matched[0].name)
    setSidebar(currentNav.items)
  }
})

router.afterEach(() => {
  setSidebarVisible?.(false)
})
</script>

<template>
  <router-view />
</template>
