<script setup lang="ts">
import { inject, computed, Ref } from 'vue'
import { useRoute } from 'vue-router'
import Navbar from '~src/components/Navbar.vue'
import Sidebar from '~src/components/Sidebar.vue'
import PageWrapper from './PageWrapper.vue'

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
    <PageWrapper :is-home="isHome">
      <router-view />
    </PageWrapper>
  </div>
</template>


