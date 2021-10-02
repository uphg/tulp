import { ref, provide, readonly } from 'vue'
import { SidebarType } from '~src/router/interface'
export type SetSidebarType = (value: SidebarType | []) => void 

export default function useSetSidebar() {
  const sidebar = ref<SidebarType[]>([])
  const setSidebar = (value: SidebarType[]) => {
    sidebar.value = value
  }

  provide('sidebar', readonly(sidebar))
  provide('setSidebar', setSidebar)

  return {
    sidebar,
    setSidebar
  }
}