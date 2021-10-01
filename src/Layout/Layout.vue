<script setup lang="ts">
import { inject, computed, onMounted, Ref } from 'vue'
import { useRoute } from 'vue-router'
import Navbar from '~src/components/Navbar.vue'
import Sidebar from '~src/components/Sidebar.vue'

const sidebarVisible = inject<Ref<boolean>>('sidebarVisible')
const route = useRoute()
const isHome = computed(() => {
  return route.name === 'Home'
})

onMounted(() => {
  console.log('route')
  console.log()
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
    <main
      :class="[!isHome ? 'page': 'home']"
    >
      <div
        class="page-wrapper"
        :class="[!isHome ? 'page-wrapper': 'home-wrapper']"
      >
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
