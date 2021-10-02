<script setup lang="ts">
import { inject } from 'vue'
import { SidebarType } from '~src/router/interface'
const sidebar = inject('sidebar') as SidebarType[]
</script>

<template>
  <div
    class="sidebar-links"
    v-for="(item, index) in sidebar"
    :key="`sidebar-links-${index}`"
  >
    <div class="sidebar-links-title">{{ item.text }}</div>
    <div
      v-for="(sidebar, i) in item.items"
      :key="`sidebar-link-${String(i)}`"
      :class="['sidebar-link']"
    >
      <router-link
        class="sidebar-link-item"
        :class="{
          active: sidebar.name === $route.name
        }"
        :to="sidebar.path"
      >{{ sidebar.meta?.title }}</router-link>
    </div>
  </div>
</template>

<style lang="stylus">
@require '../styles/variable'

.sidebar-links
  display flex
  flex-direction column
.sidebar-links-title
  font-weight bold
  font-size 18px
  padding 12px 0
.sidebar-link-item
  font-size 16px
  display flex
  padding 10px 18px
  color inherit
  text-decoration none
  border-radius 3px
  background-color none
  transition background-color $_transition-time, color $_transition-time
  &:hover
    color $_color-primary
  &.active
    color $_color-primary
    background-color #e8f3ff
</style>