<template>
  <button
    :class="[
      'tu-switch',
      {
        'tu-switch--checked': value,
        [`tu-switch--${size}`]: size
      }
    ]"
    @click="toggle"
  >
    <span
      v-if="isWave"
      :class="[
        'tu-switch__wave',
        { active: isWave }
      ]"
    />
    <span class="tu-switch__content">
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
    </span>
    <span class="tu-switch__core" />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useTriggerWave } from '../../_mixins/use-trigger-wave'
import type { PropType } from 'vue'

export default defineComponent({
  props: {
    value: Boolean,
    size: {
      type: String as PropType<'' | 'large' | 'medium' | 'small'>,
      validator: (value: string) => {
        return ['', 'large', 'medium', 'small'].includes(value)
      }
    },
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
