<template>
  <transition v-on="on">
    <slot />
  </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { addClass, removeClass } from '../utils/dom'
import { Lib } from '../utils/default-config'

export default defineComponent({
  name: `${Lib.Prefix}CollapseTransition`,
  setup() {
    const TRANSITION_CLASS = 'tulp-collapse-transition--active'
    const beforeEnter = (el: HTMLElement) => {
      addClass(el, TRANSITION_CLASS)
      
      el.dataset.oldPaddingTop = el.style.paddingTop
      el.dataset.oldPaddingBottom = el.style.paddingBottom

      // el.dataset.oldMarginTop = el.style.marginTop
      // el.dataset.oldMarginBottom = el.style.marginBottom

      el.style.height = '0'
      el.style.paddingTop = '0'
      el.style.paddingBottom = '0'
      // el.style.marginTop = '0'
      // el.style.marginBottom = '0'
    }

    const enter = (el: HTMLElement) => {
      el.dataset.oldOverflow = el.style.overflow

      if (el.scrollHeight !== 0) {
        el.style.height = el.scrollHeight + 'px'
      } else {
        el.style.height = ''
      }
      
      el.style.paddingTop = String(el.dataset.oldPaddingTop)
      el.style.paddingBottom = String(el.dataset.oldPaddingBottom)
      // el.style.marginTop = String(el.dataset.oldMarginTop)
      // el.style.marginBottom = String(el.dataset.oldMarginBottom)

      el.style.overflow = 'hidden'
    }

    const afterEnter = (el: HTMLElement) => {
      removeClass(el, TRANSITION_CLASS)
      el.style.height = ''
      el.style.overflow = String(el.dataset.oldOverflow)
    }

    const beforeLeave = (el: HTMLElement) => {
      el.dataset.oldOverflow = el.style.overflow
      el.dataset.oldPaddingTop = el.style.paddingTop
      el.dataset.oldPaddingBottom = el.style.paddingBottom

      // el.dataset.oldMarginTop = el.style.marginTop
      // el.dataset.oldMarginBottom = el.style.marginBottom

      // 修复回弹动画高度错误的 bug
      const padding = (parseInt(el.dataset.oldPaddingTop, 10) + parseInt(el.dataset.oldPaddingBottom, 10)) || 0
      el.style.height = el.scrollHeight - padding + 'px'
      el.style.overflow = 'hidden'
    }

    const leave = (el: HTMLElement) => {
      if (el.scrollHeight !== 0) {
        // 在设置高度后添加 class 样式，防止无回弹动画
        addClass(el, TRANSITION_CLASS)
        el.style.height = '0'
        el.style.paddingTop = '0'
        el.style.paddingBottom = '0'
        // el.style.marginTop = '0'
        // el.style.marginBottom = '0'
      }
    }

    const afterLeave = (el: HTMLElement) => {
      removeClass(el, TRANSITION_CLASS)
      el.style.overflow = String(el.dataset.oldOverflow)
      el.style.height = ''
      el.style.paddingTop = String(el.dataset.oldPaddingTop)
      el.style.paddingBottom = String(el.dataset.oldPaddingBottom)
      // el.style.marginTop = String(el.dataset.oldMarginTop)
      // el.style.marginBottom = String(el.dataset.oldMarginBottom)
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
.tulp-collapse-transition--active
  transition height 0.3s ease-in-out, padding-top 0.3s ease-in-out, padding-bottom 0.3s ease-in-out, margin-top 0.3s ease-in-out, margin-bottom 0.3s ease-in-out
</style>