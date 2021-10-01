<script lang="ts" setup>
import { ref, provide, readonly } from 'vue'
import { router } from '../router';
import useSidebarSwitch from './use-sidebar-switch'
const { setSidebarVisible } = useSidebarSwitch()

const sidebar = ref([])
const setSidebar = (value: any) => {
  sidebar.value = value
}
provide('sidebar', readonly(sidebar))
provide('setSidebar', setSidebar)

router.afterEach(() => {
  setSidebarVisible?.(false)
})
</script>

<template>
  <router-view />
</template>
