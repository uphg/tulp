<script setup lang="ts">
import { computed } from 'vue'
import NavLink from './NavLink.vue'
import { navbarRoute } from '../router/navbar/index'
import { useRoute } from 'vue-router';

const route = useRoute()
const currentName = computed(() => route.matched[0].name)

</script>

<template>
  <div class="nav-links">
    <NavLink
      v-for="(item, index) in navbarRoute"
      :key="`nav-link-${ String(index) }`"
      :active="item.name === currentName"
      :item="item"
    />
  </div>
</template>
<style lang="stylus">
.nav-links
  display flex
  box-sizing border-box
</style>
