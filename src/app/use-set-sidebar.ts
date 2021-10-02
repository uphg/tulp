import { ref, provide, readonly } from 'vue'

export default function useSetSidebar() {
  const sidebar = ref([])
  const setSidebar = (value: any) => {
    sidebar.value = value
  }
  provide('sidebar', readonly(sidebar))
  provide('setSidebar', setSidebar)

  return {
    sidebar,
    setSidebar
  }
}