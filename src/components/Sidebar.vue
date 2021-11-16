<script setup lang="ts">
import NavLinks from './NavLinks.vue'
import SidebarLinks from './SidebarLinks.vue'
</script>

<template>
  <aside class="sidebar" @click.stop>
    <NavLinks />
    <SidebarLinks />
  </aside>
</template>

<style lang="stylus">
.sidebar
  overflow: auto;
  box-sizing border-box
  width 320px
  position absolute
  top 60px
  left 0
  bottom 0
  z-index 1
  border-right 1px solid #eaecef
  transition transform .2s ease
  background-color #fff
  &.no-sidebar
    display none
  &.is-open
    transform translateX(0)
  .nav-links
    padding 16px 10px
    display none
    flex-direction column
    border-bottom 1px solid #dcdfe6
    .nav-link-item
      &:not(:last-child)
        margin-right 0
        margin-bottom 6px
      .nav-link
        line-height 1
        height auto
        padding 6px 10px

  @media (max-width 719px)
    transform translateX(-100%)
    &.no-sidebar
      display block
    .nav-links
      display block
</style>
