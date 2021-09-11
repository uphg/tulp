<template>
  <button
    class="tu-button"
    :class="{
      [`tu-button-${type}`]: type,
      [`tu-button-${size}`]: size
    }"
    ref="button"
    @click="triggerWave"
  >
    <span class="tu-button-content">
      <slot />
    </span>
    <span class="tu-button-border"></span>
    <span
      v-if="isWave && !text"
      class="tu-button-wave"
      :class="{ active: isWave }"
    />
  </button>
</template>
<script lang="ts">
import { Lib } from '../utils/default-config'
import { defineComponent, PropType } from 'vue';
import { useButtonWave } from './useButtonWave'

type TButtonType = PropType<'primary' | 'success' | 'warning' | 'danger'>
type TButtonNativeType = PropType<'button' | 'submit' | 'reset'>

interface TButtonProps {
  type: TButtonType
  size: PropType<ComponentSize>,
  icon: string,
  nativeType: string,
  loading: boolean,
  disabled: boolean,
  text: boolean
}

export default defineComponent({
  name: `${Lib.Prefix}Button`,
  props: {
    type: {
      type: String as TButtonType,
      default: 'default',
      validator: (value: string) => {
        return [
          'default',
          'primary',
          'success',
          'warning'
        ].includes(value)
      }
    },
    size: {
      type: String,
      validator: (value: string) => {
        return [
          '',
          'large',
          'medium',
          'small',
        ].includes(value)
      }
    },
    icon: String,
    nativeType: {
      type: String as TButtonNativeType,
      default: 'button',
      validator: (value: string) => {
        return ['button', 'submit', 'reset'].includes(value)
      },
    },
    loading: Boolean,
    disabled: Boolean,
    text: Boolean
  },
  setup() {
    const { isWave, triggerWave } = useButtonWave()

    return { isWave, triggerWave }
  }
})
</script>
<style lang="scss">
@import 'style/components/button';
</style>
