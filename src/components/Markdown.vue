

<script setup lang="ts">
import { useSlots, nextTick, onMounted } from 'vue';
import Prism from 'prismjs'

const emit = defineEmits(['update-highlight'])

onMounted(() => {
  console.log('mounted 触发了')
  nextTick(() => {
    console.log('nextTick 触发了')
    Prism.highlightAll()
  })
})
</script>

<template>
  <div>
    <slot />
  </div>
</template>