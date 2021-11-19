<template>
  <button
    class="tu-switch"
    :class="{ 'tu-switch--checked': value }"
    @click="toggle"
  >
    <span
      v-if="isWave"
      :class="[
        'tu-switch__wave',
        { active: isWave }
      ]"
    />
    <span
      v-if="$slots.checked"
      class="tu-switch__checked"
    >
      <slot name="checked" />
    </span>
    <span
      v-if="$slots.unchecked"
      class="tu-switch__unchecked"
    >
      <slot name="unchecked" />
    </span>
    <span class="tu-switch__core" />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useTriggerWave } from '../../_mixins/use-trigger-wave'

export default defineComponent({
  props: {
    value: Boolean,
    checkedText: {
      type: [String, Number]
    },
    uncheckedText: {
      type: [String, Number]
    }
  },
  emits: ['update:value'],
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
