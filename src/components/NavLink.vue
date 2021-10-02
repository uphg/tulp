<script setup lang="ts">
import { inject, computed } from 'vue'
import { SidebarType } from '~src/router/interface'
import { SetSidebarType } from '~src/app/use-set-sidebar'

const props = defineProps({
  item: {
    type: Object,
    default: () => ({})
  },
  active: Boolean
})

const setSidebar = inject<SetSidebarType>('setSidebar')

const clickLinks = (param: SidebarType) => {
  if (props.item.name !== 'Home') {
    setSidebar?.(param)
  } else {
    setSidebar?.([])
  }
}
const link = computed(() => {
  const item = props.item
  return `${item?.path === '/' ? '' : item.path}/${item.items[0].items[0].path}`
})

</script>

<template>
  <div class="nav-link-item">
    <router-link
      class="nav-link"
      :class="{ 'nav-link-active': active }"
      :to="link"
      @click="clickLinks(item.items)"
    >{{ item?.meta?.title || item.name }}</router-link>
  </div>
</template>
