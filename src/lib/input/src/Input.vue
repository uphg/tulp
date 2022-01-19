<template>
  <div
    :class="[
      'tu-input',
      {
        'is-disabled': disabled,
        'is-focus': isFocus
      }
    ]"
    @focus="handleFocus"
    @input="handleInput"
  >
    <template v-if="type !== 'textarea'">
      <span class="tu-input__wrapper" @focus="handleFocus">
        <span class="tu-input__prefix">
          <slot name="prefix" />
        </span>
        <input
          ref="inputBaseRef"
          class="tu-input__base"
          type="text"
          :disabled="disabled"
          
          @input="handleInput"
        >
        <span class="tu-input__suffix">
          <slot name="suffix" />
        </span>
      </span>
    </template>
    <template v-else>
      <textarea
        class="tu-textarea"
        :disabled="disabled"
      />
    </template>
    <span class="tu-input__border" />
    <span class="tu-input__state-border" />
  </div>
</template>

<script lang="ts">
import { defineComponent, nextTick } from 'vue';

export default defineComponent({
  // inheritAttrs: false
})
</script>

<script setup lang="ts">
import { ref } from 'vue'
import type { PropType } from 'vue';

const props = defineProps({
  value: String as PropType<string | null>,
  type: {
    type: String,
    default: 'text'
  },
  disabled: Boolean
})

const emit = defineEmits(['update:value'])

const inputBaseRef = ref<HTMLElement | null>(null)
const isFocus = ref(false)

const handleInput = (event: Event) => {
  const newValue = (event.target as HTMLTextAreaElement).value;
  if (newValue === props.value) return;
  emit('update:value', newValue);
};

const handleFocus = (event: Event) => {
  console.log('我被 focus 了')
  
  isFocus.value = true
  inputBaseRef.value?.focus()
}
</script>

<!-- <script lang="ts">
import { Lib } from '../../_utils/config';
import { defineComponent /* toRefs, computed */ } from 'vue';
import type { PropType } from 'vue';

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
      const newValue = (event.target as HTMLTextAreaElement).value;
      if (newValue === props.value) return;
      context.emit('update:value', newValue);
    };
    return {
      handleInput
    };
  }
});
</script> -->

<style lang="stylus">
@require '../../_styles/components/input';
</style>
