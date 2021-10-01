<script setup lang="ts">
import NavLink from './NavLink.vue'
import { navbarRoute } from '../router/navbar/index'

</script>

<template>
  <div class="nav-links">
    <NavLink
      v-for="(item, index) in navbarRoute"
      :key="`nav-link-${ String(index) }`"
      :link="item"
    />
  </div>
</template>
