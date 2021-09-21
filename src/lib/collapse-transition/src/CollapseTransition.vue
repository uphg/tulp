<template>
  <transition v-on="on">
    <slot />
  </transition>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { addClass, removeClass } from '../../utils/dom'
import { Lib } from '../../utils/default-config'

export default defineComponent({
  name: `${Lib.Prefix}CollapseTransition`,
  setup() {
    const TRANSITION_CLASS = 'tu-collapse-transition--active'

    // 进入动画 --- 执行前
    const beforeEnter = (el: HTMLElement) => {
      addClass(el, TRANSITION_CLASS)

      el.style.height = '0'
      el.style.marginTop = '0'
      el.style.marginBottom = '0'
    }

    // 进入动画 --- 执行中
    const enter = (el: HTMLElement) => {
      el.dataset.oldOverflow = el.style.overflow

      void el.scrollHeight
      el.style.height = el.scrollHeight + 'px'
      el.style.marginTop = ''
      el.style.marginBottom = ''
      el.style.overflow = 'hidden'
    }

    // 进入动画 --- 执行后
    const afterEnter = (el: HTMLElement) => {
      removeClass(el, TRANSITION_CLASS)
      el.style.height = ''
      el.style.overflow = String(el.dataset.oldOverflow)
    }

    // 离开动画 --- 执行前
    const beforeLeave = (el: HTMLElement) => {
      el.style.height = el.scrollHeight + 'px'
      el.style.overflow = 'hidden'
    }

    // 离开动画 --- 执行中
    const leave = (el: HTMLElement) => {
      void el.scrollHeight
      addClass(el, TRANSITION_CLASS)
      el.style.height = '0'
      el.style.marginTop = '0'
      el.style.marginBottom = '0'
    }

    // 离开动画 --- 执行后
    const afterLeave = (el: HTMLElement) => {
      removeClass(el, TRANSITION_CLASS)
      el.style.overflow = String(el.dataset.oldOverflow)
      el.style.height = ''
      el.style.marginTop = ''
      el.style.marginBottom = ''
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
  },
})
</script>

<style lang="stylus">
@require '../../style/components/collapse-transition'
</style>