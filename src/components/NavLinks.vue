<template>
  <div class="nav-links">
    <NavLink
      v-for="(item, index) in navbarRoute"
      :key="`nav-link-${String(index)}`"
      :active="item.name === currentName"
      :item="item"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import NavLink from './NavLink.vue'
import { navbarRoute } from '../router/navbar/index'
import { useRoute } from 'vue-router'

const route = useRoute()
const currentName = computed(() => route.matched[0].name)
</script>

<style lang="stylus">
.nav-links
  display flex
  box-sizing border-box
  padding 0 46px
  margin 0 auto
  max-width 960px
  width calc(100% - 296px - 130px)
  @media (max-width 1200px)
    width calc(100% - 296px)
</style>
