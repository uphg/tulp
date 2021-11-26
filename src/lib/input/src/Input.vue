<template>
  <div
    :class="[
      'tu-input-wrap',
      {
        'is-disabled': disabled
      }
    ]"
  >
    <template v-if="type !== 'textarea'">
      <span class="tu-input__prefix">
        <slot name="prefix" />
      </span>
      <input
        class="tu-input"
        type="text"
        :disabled="disabled"
        v-bind="$attrs"
        @input="handleInput"
      >
      <span class="tu-input__suffix">
        <slot name="suffix" />
      </span>
    </template>
    <template v-else>
      <textarea
        class="tu-textarea"
        :disabled="disabled"
        v-bind="$attrs"
      />
    </template>
    <span class="tu-input__border" />
    <span class="tu-input__state-border" />
  </div>
</template>
<script lang="ts">
import { Lib } from '../../_utils/config'
import { defineComponent /* toRefs, computed */ } from 'vue'
import type { PropType } from 'vue'

export default defineComponent({
  name: `${Lib.Prefix}Input`,
  inheritAttrs: false,
  props: {
    value: String as PropType<string | null>,
    type: {
      type: String,
      default: 'text'
    },
    disabled: Boolean
  },
  emits: ['update:value'],
  setup(props, context) {

    const handleInput = (event: Event) => {
      const newValue = (event.target as HTMLTextAreaElement).value
      if (newValue === props.value) return
      context.emit('update:value', newValue)
    }
    return {
      handleInput
    }
  }
})
</script>

<style lang="stylus">
@require '../../_styles/components/input'
</style>
