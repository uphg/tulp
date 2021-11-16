<script setup lang="ts">
import { inject, computed, Ref } from 'vue'
import { useRoute } from 'vue-router'
import Navbar from '~src/components/Navbar.vue'
import Sidebar from '~src/components/Sidebar.vue'
import Page from './components/Page.vue'
import Custom from './components/Custom.vue'

const sidebarVisible = inject<Ref<boolean>>('sidebarVisible')
const route = useRoute()
const isHome = computed(() => {
  return route.name === 'Home'
})
</script>

<template>
  <div class="vue-docs-container">
    <Navbar />
    <Sidebar
      :class="{
        'is-open': sidebarVisible,
        'no-sidebar': isHome
      }"
    />
    <Custom v-if="isHome" />
    <Page v-else />
  </div>
</template>

<style lang="stylus">
.docs-content
  height calc(100vh - 60px)
  overflow auto
  box-sizing border-box
</style>
