<template>
  <transition v-on="on">
    <slot />
  </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { addClass, removeClass } from '../../_utils/dom'
import { Lib } from '../../_utils/default-config'

const TRANSITION_CLASS = 'tu-expand-transition--active'
export default defineComponent({
  name: `${Lib.Prefix}CollapseTransition`,
  setup() {
    // 进入动画 --- 执行前
    const beforeEnter = (el: HTMLElement) => {
      addClass(el, TRANSITION_CLASS)

      el.style.width = '0'
      el.style.marginLeft = '0'
      el.style.marginRight = '0'
    }

    // 进入动画 --- 执行中
    const enter = (el: HTMLElement) => {
      el.dataset.oldOverflow = el.style.overflow

      void el.scrollWidth
      el.style.width = ''
      el.style.marginLeft = ''
      el.style.marginRight = ''
      el.style.overflow = 'hidden'
    }

    // 进入动画 --- 执行后
    const afterEnter = (el: HTMLElement) => {
      removeClass(el, TRANSITION_CLASS)
      el.style.width = ''
      el.style.overflow = String(el.dataset.oldOverflow)
    }

    // 离开动画 --- 执行前
    const beforeLeave = (el: HTMLElement) => {
      el.style.width = `${el.offsetWidth}px`
      el.style.overflow = 'hidden'
    }

    // 离开动画 --- 执行中
    const leave = (el: HTMLElement) => {
      void el.scrollWidth
      addClass(el, TRANSITION_CLASS)
      el.style.width = '0'
      el.style.marginLeft = '0'
      el.style.marginRight = '0'
    }

    // 离开动画 --- 执行后
    const afterLeave = (el: HTMLElement) => {
      removeClass(el, TRANSITION_CLASS)
      el.style.overflow = String(el.dataset.oldOverflow)
      el.style.width = ''
      el.style.marginLeft = ''
      el.style.marginRight = ''
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
@require '../../_styles/components/expand-transition'
</style>
