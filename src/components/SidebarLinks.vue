<script setup lang="ts">
import { inject } from 'vue'
import { SidebarType } from '~src/router/interface'
const sidebar = inject('sidebar') as SidebarType[]
</script>

<template>
  <div
    v-for="(item, index) in sidebar"
    :key="`sidebar-links-${index}`"
    class="sidebar-links"
  >
    <div class="sidebar-links-title">{{ item.text }}</div>
    <div
      v-for="(link, i) in item.items"
      :key="`sidebar-link-${String(i)}`"
      :class="['sidebar-link']"
    >
      <router-link
        class="sidebar-link-item"
        :class="{
          active: link.name === $route.name
        }"
        :to="link.path"
        >{{ link.meta?.title }}</router-link
      >
    </div>
  </div>
</template>

<style lang="stylus">
.sidebar-links
  display flex
  flex-direction column
  padding 10px 20px
.sidebar-links-title
  color #909399
  font-size 13px
  padding 14px 0
.sidebar-link-item
  font-size 14px
  display flex
  padding 10px 18px
  color inherit
  text-decoration none
  border-radius 3px
  transition background-color var(--t-transition-time), color var(--t-transition-time)
  &:hover
    color var(--t-color-primary)
  &.active
    color var(--t-color-primary)
    background-color #e8f3ff
</style>
