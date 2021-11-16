<template>
  <button
    class="tu-switch"
    :class="{ 'tu-switch--checked': value }"
    @click="toggle"
  >
    <span v-if="isWave" class="tu-switch__wave" :class="{ active: isWave }" />
    <span class="tu-switch__core"></span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useTriggerWave } from '../../_mixins/use-trigger-wave'

export default defineComponent({
  props: {
    value: Boolean
  },
  setup(props, context) {
    const { isWave, triggerWave } = useTriggerWave()
    const toggle = () => {
      triggerWave()
      context.emit('update:value', !props.value)
    }

    return { toggle, isWave }
  }
})
</script>

<style lang="stylus">
@require '../../_styles/components/switch'
</style>
