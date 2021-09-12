<script setup lang="ts">
import { inject, Ref } from 'vue'
import Navbar from '../components/Navbar.vue'
import Sidebar from '../components/Sidebar.vue'

const sidebarVisible = inject<Ref<boolean>>('sidebarVisible')
</script>

<template>
  <div class="vue-docs-container">
    <Navbar />
    <Sidebar :class="{ open: sidebarVisible }" />
    <main class="page">
      <div class="page-wrapper">
        <router-view />
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.page {
  padding-left: 320px;
  transition: padding .2s ease;
}
.page-wrapper {
  box-sizing: border-box;
  padding: 24px;
}

@media (max-width: 719px) {
 .page {
    padding-left: 0;
  }
}
</style>
