<template>
  <transition v-on="on">
    <slot />
  </transition>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { addClass, removeClass } from '../utils/dom'
import { Lib } from '../utils/default-config'

export default defineComponent({
  name: `${Lib.Prefix}CollapseTransition`,
  setup() {
    const TRANSITION_CLASS = 'tulp-collapse-transition--active'

    const leaveStatus = ref(false)

    // 进入动画 --- 执行前
    const beforeEnter = (el: HTMLElement) => {
      console.log('进入动画，执行前')
      addClass(el, TRANSITION_CLASS)

      if(!leaveStatus.value) {
        el.dataset.oldPaddingTop = el.style.paddingTop
        el.dataset.oldPaddingBottom = el.style.paddingBottom
      }

      el.style.height = '0'
      el.style.paddingTop = '0'
      el.style.paddingBottom = '0'
    }

    // 进入动画 --- 执行中
    const enter = (el: HTMLElement) => {
      console.log('进入动画，执行中')
      el.dataset.oldOverflow = el.style.overflow

      if (el.scrollHeight !== 0) {
        el.style.height = el.scrollHeight + 'px'
      } else {
        el.style.height = ''
      }
      
      el.style.paddingTop = String(el.dataset.oldPaddingTop)
      el.style.paddingBottom = String(el.dataset.oldPaddingBottom)

      el.style.overflow = 'hidden'
    }

    // 进入动画 --- 执行后
    const afterEnter = (el: HTMLElement) => {
      console.log('进入动画，执行后')
      removeClass(el, TRANSITION_CLASS)
      
      el.style.height = ''
      el.style.overflow = String(el.dataset.oldOverflow)
    }

    // 进入动画 --- 取消执行
    const enterCancelled = (el: HTMLElement) => {
      console.log('进入动画，取消执行')
    }

    // 离开动画 --- 执行前
    const beforeLeave = (el: HTMLElement) => {
      console.log('离开动画，执行前')
      leaveStatus.value = true
      el.dataset.oldOverflow = el.style.overflow
      el.dataset.oldPaddingTop = el.style.paddingTop
      el.dataset.oldPaddingBottom = el.style.paddingBottom

      // 修复回弹动画高度错误的 bug
      const padding = (parseInt(el.dataset.oldPaddingTop, 10) + parseInt(el.dataset.oldPaddingBottom, 10)) || 0
      console.log('padding')
      console.log(padding)
      el.style.height = el.scrollHeight - padding + 'px'
      el.style.overflow = 'hidden'
    }

    // 离开动画 --- 执行中
    const leave = (el: HTMLElement) => {
      console.log('离开动画，执行中')

      if (el.scrollHeight !== 0) {
        // 在设置高度后添加 class 样式，防止无回弹动画
        addClass(el, TRANSITION_CLASS)
        el.style.height = '0'
        el.style.paddingTop = '0'
        el.style.paddingBottom = '0'
      }
    }

    // 离开动画 --- 执行后
    const afterLeave = (el: HTMLElement) => {
      console.log('离开动画，执行后')
      leaveStatus.value = false
      removeClass(el, TRANSITION_CLASS)
      el.style.overflow = String(el.dataset.oldOverflow)

      el.style.height = ''
      el.style.paddingTop = String(el.dataset.oldPaddingTop)
      el.style.paddingBottom = String(el.dataset.oldPaddingBottom)
    }

    // 离开动画 --- 取消执行
    const leaveCancelled = (el: HTMLElement) => {
      console.log('离开动画，取消执行')
    }

    return {
      on: {
        beforeEnter,
        enter,
        afterEnter,
        enterCancelled,
        beforeLeave,
        leave,
        afterLeave,
        leaveCancelled
      }
    }
  },
})
</script>

<style lang="stylus">
$transition-time = 3s
.tulp-collapse-transition--active
  transition height $transition-time ease-in-out, padding-top $transition-time ease-in-out, padding-bottom $transition-time ease-in-out, margin-top $transition-time ease-in-out, margin-bottom $transition-time ease-in-out
</style>