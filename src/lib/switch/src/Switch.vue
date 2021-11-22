<template>
  <button
    :class="[
      'tu-switch',
      {
        'tu-switch--checked': switchValueState,
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
    <span class="tu-switch__wrap">
      <span v-if="$slots.checked || $slots.unchecked" class="tu-switch__content">
        <span class="tu-switch__checked">
          <slot name="checked" />
        </span>
        <span class="tu-switch__unchecked">
          <slot name="unchecked" />
        </span>
      </span>
      <span class="tu-switch__core">
        <span v-if="$slots.unchecked" class="tu-switch__core-unchecked">
          <slot name="unchecked" />
        </span>
      </span>
    </span>
  </button>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useTriggerWave } from '../../_mixins/use-trigger-wave'
import type { PropType } from 'vue'
import isEmpty from '../../_utils/isEmpty'

type SwitchValue = string | number | boolean

export default defineComponent({
  props: {
    value: [String, Number, Boolean],
    size: {
      type: String as PropType<'' | 'large' | 'medium' | 'small'>,
      validator: (value: string) => {
        return ['', 'large', 'medium', 'small'].includes(value)
      }
    },
    checkedValue: {
      type: [String, Number, Boolean],
      default: null
    },
    uncheckedValue: {
      type: [String, Number, Boolean],
      default: null
    }
  },
  emits: ['update:value'],
  setup(props, context) {
    const { isWave, triggerWave } = useTriggerWave()
    const hasCustomValue = computed(() => !isEmpty(props.checkedValue) && !isEmpty(props.uncheckedValue))
    const switchValueState = computed(() => hasCustomValue.value ? props.value === props.checkedValue : props.value)

    const setValue = (value: SwitchValue) => {
      context.emit('update:value', value)
    }

    const toggle = () => {
      triggerWave()
      if (hasCustomValue.value) {
        setValue((props.value === props.uncheckedValue ? props.checkedValue : props.uncheckedValue) as SwitchValue)
        return
      }
      setValue(!props.value)
    }

    if (hasCustomValue.value) {
      if (props.value === props.uncheckedValue) {
        setValue(props.uncheckedValue)
      }
      if (props.value === props.checkedValue) {
        setValue(props.checkedValue)
      }
    }

    return { toggle, isWave, switchValueState }
  }
})
</script>

<style lang="stylus">
@require '../../_styles/components/switch'
</style>
