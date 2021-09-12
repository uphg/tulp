<script setup lang="ts">
import { inject, Ref } from 'vue'
import Navbar from '../components/Navbar.vue'
import Sidebar from '../components/Sidebar.vue'

const sidebarVisible = inject<Ref<boolean>>('sidebarVisible')
</script>

<template>
  <div class="vue-docs-container">
    <Navbar />
    <Sidebar class="no-sidebar" :class="{ open: sidebarVisible }" />
    <main class="home">
      <div class="home-wrapper">
        <router-view />
      </div>
    </main>
  </div>
</template>

<style lang="stylus" scoped>
.home-wrapper {
  max-width: 1260px;
  min-height: calc(100vh - 60px);
  box-sizing: border-box;
  padding: 0.02px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
@media (min-width: 720px) {
  .no-sidebar {
    display: none;
  }
}

</style>
