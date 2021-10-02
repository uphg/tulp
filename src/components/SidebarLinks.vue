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
      :class="['sidebar-link', {
        active: sidebar.name === $route.name
      }]"
    >
      <router-link
        :to="sidebar.path"
      >{{ sidebar.meta?.title }}</router-link>
    </div>
  </div>
</template>

<style lang="stylus">

.sidebar-links
  display flex
  flex-direction column
.sidebar-links-title
  font-size 22px
.sidebar-link
  color inherit
  text-decoration none
  &.active .router-link-active
    color red

</style>