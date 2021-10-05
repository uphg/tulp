

<script setup lang="ts">
import { nextTick, onMounted } from 'vue';
import Prism from 'prismjs'

onMounted(() => {
  nextTick(() => {
    Prism.highlightAll()
  })
})
</script>

<template>
  <div class="page-markdown-wrapper">
    <slot />
  </div>
</template>