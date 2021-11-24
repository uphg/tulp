<template>
  <div class="tu-input-wrap">
    <template v-if="type !== 'textarea'">
      <input class="tu-input" type="text" @input="handleInput">
    </template>
    <template v-else>
      <textarea class="tu-textarea" />
    </template>
  </div>
</template>
<script lang="ts">
import { Lib } from '../../_utils/config'
import { defineComponent, PropType } from 'vue'
type TInputValue = PropType<string | null>

export default defineComponent({
  name: `${Lib.Prefix}Input`,
  props: {
    value: String as TInputValue,
    type: {
      type: String,
      default: 'text'
    }
  },
  emits: ['update:value'],
  setup(props, context) {
    const handleInput = (event: Event) => {
      const newValue = (event.target as HTMLTextAreaElement).value
      if (newValue === props.value) return
      context.emit('update:value', newValue)
    }
    return { handleInput }
  }
})
</script>

<style lang="stylus">
@require '../../_styles/components/input'
</style>
