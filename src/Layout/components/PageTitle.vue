<template>
  <h1 class="page-title">{{ pageTitle }}</h1>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { router as rootRouter } from '~src/router'
import { useRoute } from 'vue-router'

const route = useRoute()
const pageTitle = ref<string | null>(null)

onMounted(() => {
  pageTitle.value = (route.meta.title || null) as string | null
})

rootRouter.beforeEach((to, from) => {
  // 只有在路由的 name 更新时触发
  if (to.name === from.name) return

  pageTitle.value = (to.meta.title || null) as string | null
})
</script>

<style lang="stylus">
.page-title
  font-size 2.2em
  margin-bottom 16px
  line-height 1.25
</style>
