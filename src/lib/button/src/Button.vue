  
<template>
  <button
    class="tu-button"
    :class="{
      [`tu-button--${type}`]: type,
      [`tu-button--${size}`]: size
    }"
    ref="button"
    :type="nativeType"
    @click="triggerWave"
  >
    <ExpandTransition>
      <span
        v-if="icon || loading"
        :class="[
          'tu-button__icon',
          { 'is-uncontent': !$slots.default }
        ]"
      >
        <FadeTransition>
          <template v-if="loading">
            <LoadingIcon />
          </template>
          <template v-else>
            <Icon :name="icon" />
          </template>
        </FadeTransition>
      </span>
    </ExpandTransition>
    <span class="tu-button__content">
      <slot />
    </span>
    <span class="tu-button__border"></span>
    <span
      v-if="isWave && !text"
      class="tu-button__wave"
      :class="{ active: isWave }"
    />
  </button>
</template>
<script lang="ts">
import { Lib } from '../../utils/default-config'
import { defineComponent, PropType } from 'vue';
import { useTriggerWave } from '../../useTriggerWave'
import { ExpandTransition } from '../../expand-transition/index'
import { FadeTransition } from '../../fade-transition/index'
import LoadingIcon from './LoadingIcon.vue'
import Icon from '../../Icon.vue'

export default defineComponent({
  name: `${Lib.Prefix}Button`,
  components: {
    Icon,
    LoadingIcon,
    ExpandTransition,
    FadeTransition,
  },
  props: {
    type: {
      type: String as PropType<'default' | 'primary' | 'success' | 'warning' | 'info' | 'error'>,
      default: 'default',
      validator: (value: string) => {
        return ['default', 'primary', 'success', 'warning', 'info', 'error'].includes(value)
      }
    },
    size: {
      type: String as PropType<'' | 'large' | 'medium' | 'small'>,
      validator: (value: string) => {
        return ['', 'large', 'medium', 'small'].includes(value)
      }
    },
    icon: String,
    loadingIcon: String,
    nativeType: {
      type: String as PropType<'button' | 'submit' | 'reset'>,
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
    const { isWave, triggerWave } = useTriggerWave()
    return { isWave, triggerWave }
  }
})
</script>

<style lang="stylus">
@require '../../style/components/button'
</style>