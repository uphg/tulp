<template>
  <button
    ref="button"
    class="tu-button"
    :class="{
      [`tu-button--${type}`]: type,
      [`tu-button--${size}`]: size,
      [`tu-button--text`]: text,
      [`is-dashed`]: dashed,
      [`is-ghost`]: ghost,
      [`is-circle`]: circle,
      [`is-round`]: round,
    }"
    :type="nativeType"
    :disabled="disabled"
    @click="handleClick"
  >
    <TExpandTransition>
      <span
        v-if="icon || loading"
        :class="[
          'tu-button__icon',
          {
            [`tu-icon--${iconPosition}`]: iconPosition,
            'is-empty': !$slots.default
          }
        ]"
      >
        <FadeTransition>
          <template v-if="loading">
            <LoadingIcon />
          </template>
          <template v-else>
            <TIcon :name="icon" />
          </template>
        </FadeTransition>
      </span>
    </TExpandTransition>
    <span v-if="$slots.default" class="tu-button__content">
      <slot />
    </span>
    <template v-if="!text">
      <BaseWave ref="waveRef" :big="circle" />
      <span class="tu-button__border" />
      <span class="tu-button__state-border" />
    </template>
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BaseWave from '../../base-wave/src/BaseWave.vue'
import { TExpandTransition } from '../../expand-transition/index'
import { FadeTransition } from '../../fade-transition/index'
import LoadingIcon from './LoadingIcon.vue'
import { TIcon } from '../../icon/index'
import type { PropType } from 'vue'
import type { BaseWaveRef } from '../../base-wave'

defineProps({
  type: {
    type: String as PropType<'default' | 'primary' | 'success' | 'warning' | 'info' | 'error'>,
    default: 'default',
    validator: (value: string) => {
      return [ 'default', 'primary', 'success', 'warning', 'info', 'error' ].includes(value)
    }
  },
  size: {
    type: String as PropType<'' | 'large' | 'medium' | 'small'>,
    validator: (value: string) => {
      return ['', 'large', 'medium', 'small'].includes(value)
    }
  },
  icon: {
    type: String,
    default: ''
  },
  iconPosition: {
    type: String as PropType<'left' | 'right'>,
    default: 'left',
    validator: (value: string) => {
      return ['left', 'right'].includes(value)
    }
  },
  nativeType: {
    type: String as PropType<'button' | 'submit' | 'reset'>,
    default: 'button',
    validator: (value: string) => {
      return ['button', 'submit', 'reset'].includes(value)
    }
  },
  loading: Boolean,
  disabled: Boolean,
  text: Boolean,
  circle: Boolean,
  round: Boolean,
  dashed: Boolean,
  ghost: Boolean
})

const waveRef = ref<BaseWaveRef | null>(null)
const handleClick = () => {
  waveRef.value?.triggerWave()
}
</script>

<style lang="stylus">
@require '../../_styles/components/button'
</style>
