<template>
  <transition v-on="on">
    <slot />
  </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { addClass, removeClass } from '../../_utils/dom'
import { Lib } from '../../_utils/config'

export default defineComponent({
  name: `${Lib.Prefix}CollapseTransition`,
  setup() {
    const TRANSITION_CLASS = 'tu-collapse-transition--active'

    const beforeEnter = (el: HTMLElement) => {
      addClass(el, TRANSITION_CLASS)
      el.style.height = '0'
    }

    const enter = (el: HTMLElement) => {
      // void el.scrollHeight
      el.style.height = `${el.scrollHeight}px`
      el.style.overflow = 'hidden'
    }

    const afterEnter = (el: HTMLElement) => {
      removeClass(el, TRANSITION_CLASS)
      el.style.height = ''
      el.style.overflow = ''
    }

    const beforeLeave = (el: HTMLElement) => {
      el.style.height = `${el.scrollHeight}px`
      el.style.overflow = 'hidden'
    }

    const leave = (el: HTMLElement) => {
      void el.scrollHeight
      addClass(el, TRANSITION_CLASS)
      el.style.height = '0'
    }

    const afterLeave = (el: HTMLElement) => {
      removeClass(el, TRANSITION_CLASS)
      el.style.overflow = ''
      el.style.height = ''
    }

    return {
      on: {
        beforeEnter,
        enter,
        afterEnter,
        beforeLeave,
        leave,
        afterLeave
      }
    }
  }
})
</script>

<style lang="stylus">
@require '../../_styles/components/collapse-transition'
</style>
