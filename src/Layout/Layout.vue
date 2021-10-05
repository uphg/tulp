<script setup lang="ts">
import { inject, computed, onMounted, watch, nextTick, Ref } from 'vue'
import { useRoute } from 'vue-router'
import Navbar from '~src/components/Navbar.vue'
import Sidebar from '~src/components/Sidebar.vue'
import PageWrapper from './PageWrapper.vue'
import Prism from 'prismjs'

const sidebarVisible = inject<Ref<boolean>>('sidebarVisible')
const route = useRoute()
const isHome = computed(() => {
  return route.name === 'Home'
})

watch(route, () => {
  nextTick(() => {
    Prism.highlightAll()
  })
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
    <PageWrapper
      :class="[!isHome ? 'page' : 'home']"
      :key="!isHome ? 'page' : 'home'"
    >
      <router-view />
    </PageWrapper>
  </div>
</template>

<style lang="stylus">
.page
  transition padding .2s ease
  padding-left 320px

.page-wrapper
  max-width 1260px
  margin-left auto
  margin-right auto
  height calc(100vh - 60px)
  overflow auto
  box-sizing border-box
  padding 24px

.home .page-wrapper
  display flex
  flex-direction column
  justify-content center
  align-items center

@media (max-width 719px)
 .page
    padding-left 0

</style>
