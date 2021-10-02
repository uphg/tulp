<script setup lang="ts">
import { inject } from 'vue'
import NavLinks from "./NavLinks.vue";
import { SidebarType } from '~src/router/interface'
const sidebar = inject('sidebar') as SidebarType[]
</script>

<template>
  <aside class="sidebar" @click.stop>
    <NavLinks />
    <hr>
    <div
      class="sidebar-links"
      v-for="(item, index) in sidebar"
      :key="index"
    >
      <h2>{{ item.text }}</h2>
      <div
        class="sidebar-link"
        v-for="(route, i) in item.items"
        :key="`sidebar-link-${String(i)}`"
      >
        <span>{{ route.meta?.title }}</span>
      </div>
    </div>
  </aside>
</template>

<style lang="stylus">
.sidebar {
  box-sizing: border-box;
  width: 320px;
  position: absolute;
  top: 60px;
  left: 0;
  bottom: 0;
  z-index: 1;
  border-right: 1px solid #eaecef;
  background-color: #eee;
  transition: transform .2s ease;
  &.no-sidebar {
    // display: none;
    transform: translateX(-100%);
  }
  &.is-open {
    transform: translateX(0);
  }
  @media (max-width: 719px) {
    transform: translateX(-100%);
    .nav-links {
      display: block;
    }
  }
}

</style>
