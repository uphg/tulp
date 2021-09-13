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
    <Transition
      @before-enter="iconBeforeEnter"
      @enter="iconEnter"
      @after-enter="iconAfterEnter"
      @before-leave="iconBeforeLeave"
      @leave="iconLeave"
      @after-leave="iconAfterLeave"
    >
      <span v-if="loading" class="tu-button__icon" :class="{ 'is-uncontent': !$slots.default }">
        <BaseLoading />
      </span>
      <span v-else-if="icon" class="tu-button__icon" :class="{ 'is-uncontent': !$slots.default }">
        <Icon :name="icon" />
      </span>
    </Transition>
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
import { Lib } from '../utils/default-config'
import { defineComponent, PropType } from 'vue';
import { useButtonWave } from './useButtonWave'
import { useButtonIconTransition } from './useButtonIconTransition'
import BaseLoading from './BaseLoading.vue'
import Icon from './Icon.vue'

type TButtonType = PropType<'primary' | 'success' | 'warning' | 'info' | 'error'>
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
  components: { Icon, BaseLoading },
  props: {
    type: {
      type: String as TButtonType,
      default: 'default',
      validator: (value: string) => {
        return [
          'default',
          'primary',
          'success',
          'warning',
          'info',
          'error'
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

    const { iconBeforeEnter, iconEnter, iconAfterEnter, iconBeforeLeave, iconLeave, iconAfterLeave } = useButtonIconTransition()

    return { isWave, triggerWave, iconBeforeEnter, iconEnter, iconAfterEnter, iconBeforeLeave, iconLeave, iconAfterLeave }
  }
})
</script>

<style lang="stylus">
@require './style/components/button'
</style>
