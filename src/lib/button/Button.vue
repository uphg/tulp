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
    <template v-if="!icon">
      <IconTransition>
        <span
          v-if="loading"
          class="tu-button__icon"
          :class="{ 'is-uncontent': !$slots.default }"
        >
          <LoadingIcon />
        </span>
      </IconTransition>
    </template>
    <template v-else>
      <Transition
        name="component-fade"
        mode="out-in"
      >
        <span
          v-if="loading"
          class="tu-button__icon"
          :class="{ 'is-uncontent': !$slots.default }"
        >
          <LoadingIcon />
        </span>
        <span
          v-else-if="icon && !loading"
          class="tu-button__icon"
          :class="{ 'is-uncontent': !$slots.default }"
        >
          <Icon :name="icon" />
        </span>
      </Transition>
    </template>
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
import { useTriggerWave } from '../useTriggerWave'
import LoadingIcon from './LoadingIcon.vue'
import { IconTransition } from '../main'
import Icon from '../Icon.vue'

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
  components: { Icon, LoadingIcon, IconTransition },
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
    loadingIcon: String,
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
    const { isWave, triggerWave } = useTriggerWave()

    return { isWave, triggerWave }
  }
})
</script>

<style lang="stylus">
@require '../style/components/button'
</style>
