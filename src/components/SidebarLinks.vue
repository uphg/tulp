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
    <h2>{{ item.text }}</h2>
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
.sidebar-link
  &.active .router-link-active
    color red
</style>