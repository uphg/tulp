<template>
  <div
    :class="[
      'tu-button-group',
      { 'is-vertical': vertical }
    ]"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { Lib } from '../../_utils/config'
import { defineComponent } from 'vue'

export default defineComponent({
  name: `${Lib.Prefix}Button`,
  props: {
    vertical: Boolean
  }
})
</script>

<style lang="stylus">
@require '../../_styles/components/button-group'
</style>
