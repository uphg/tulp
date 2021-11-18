<template>
  <button
    ref="button"
    class="tu-button"
    :class="{
      [`tu-button--${type}`]: type,
      [`tu-button--${size}`]: size,
      [`is-dashed`]: dashed,
      [`is-ghost`]: ghost,
    }"
    :type="nativeType"
    :disabled="disabled"
    @click="handleClick"
  >
    <ExpandTransition>
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
    </ExpandTransition>
    <span v-if="$slots.default" class="tu-button__content">
      <slot />
    </span>
    <span class="tu-button__border" />
    <span
      v-if="isWave && !text"
      class="tu-button__wave"
      :class="{ active: isWave }"
    />
  </button>
</template>
<script lang="ts">
import { Lib } from '../../_utils/default-config'
import { defineComponent, PropType } from 'vue'
import { useTriggerWave } from '../../_mixins/use-trigger-wave'
import { ExpandTransition } from '../../expand-transition/index'
import { FadeTransition } from '../../fade-transition/index'
import LoadingIcon from './LoadingIcon.vue'
import { TIcon } from '../../icon/index'

export default defineComponent({
  name: `${Lib.Prefix}Button`,
  components: {
    TIcon,
    LoadingIcon,
    ExpandTransition,
    FadeTransition
  },
  props: {
    type: {
      type: String as PropType<
        'default' | 'primary' | 'success' | 'warning' | 'info' | 'error'
      >,
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
    dashed: Boolean,
    ghost: Boolean
  },
  setup() {
    const { isWave, triggerWave } = useTriggerWave()
    const handleClick = () => {
      triggerWave()
    }
    return { isWave, handleClick }
  }
})
</script>

<style lang="stylus">
@require '../../_styles/components/button'
</style>
