<script setup lang="ts">
import NavLinks from "./NavLinks.vue";
import SidebarLinks from './SidebarLinks.vue'
</script>

<template>
  <aside class="sidebar" @click.stop>
    <NavLinks />
    <hr>
    <SidebarLinks />
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
