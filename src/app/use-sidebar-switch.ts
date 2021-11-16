import { provide, readonly, ref, onMounted } from 'vue'

export default function useSidebarSwitch() {
  const sidebarVisible = ref(false)
  const setSidebarVisible = (value: boolean): void => {
    sidebarVisible.value = value
  }
  const monitorDocumentCloseSidebar = (): void => {
    document.addEventListener('click', () => {
      setSidebarVisible(false)
    })
  }

  provide('sidebarVisible', readonly(sidebarVisible))
  provide('setSidebarVisible', setSidebarVisible)

  onMounted(() => {
    monitorDocumentCloseSidebar()
  })
  return {
    sidebarVisible,
    setSidebarVisible
  }
}
