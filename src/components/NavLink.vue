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
      :class="[
        'nav-link',
        { 'nav-link-active': active }
      ]"
      :to="link"
      @click="clickLinks(item.items)"
    >{{ item?.meta?.title || item.name }}</router-link>
  </div>
</template>

<style lang="stylus">
.nav-link-item
  &:not(:last-child)
    margin-right 10px
.nav-link
  box-sizing border-box
  color inherit
  text-decoration none
  display flex
  line-height 60px
  height 100%
  transition color var(--t-transition-time)
  padding var(--nav-item-padding)
  position relative
  &:hover
    color var(--t-color-primary)
  &.nav-link-active
    color var(--t-color-primary)
</style>
