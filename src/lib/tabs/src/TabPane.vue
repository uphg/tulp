<template>
  <div class="tu-tab-pane">
    <slot />
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

defineProps({
  name: {
    type: [String, Number, Boolean] as PropType<string | number | boolean>,
    default: ''
  },
  label: {
    type: [String, Number, Boolean] as PropType<string | number | boolean>,
    default: ''
  }
})
</script>