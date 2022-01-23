<template>
  <div
    :class="[
      'tu-button-group',
      { 'tu-button--vertical': vertical }
    ]"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'

defineProps({
  vertical: Boolean as PropType<boolean>
})
</script>

<style lang="stylus">
@require '../../_styles/components/button-group'
</style>
