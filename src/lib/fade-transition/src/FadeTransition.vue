<template>
  <Transition
    name="tu-component-fade"
    mode="out-in"
  >
    <slot />
  </Transition>
</template>

<script lang="ts">
import { Lib } from '../../utils/default-config'
import { defineComponent } from 'vue'
export default defineComponent({
  name: `${Lib.Prefix}FadeTransition`
})
</script>

<style lang="stylus">
@require '../../style/components/fade-transition'
</style>