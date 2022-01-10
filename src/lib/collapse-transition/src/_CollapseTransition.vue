<!-- 考虑 padding 过渡的情况 -->
<template>
  <transition v-on="on">
    <slot />
  </transition>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { addClass, removeClass, getStyle } from '../../_utils/dom'
import { Lib } from '../../_utils/config'

export default defineComponent({
  name: `${Lib.Prefix}CollapseTransition`,
  setup() {
    const TRANSITION_CLASS = 'tu-collapse-transition--active'
    const enterStatus = ref(false)
    const leaveStatus = ref(false)

    // 进入动画 --- 执行前
    const beforeEnter = (el: HTMLElement) => {
      enterStatus.value = true
      addClass(el, TRANSITION_CLASS)

      // 如果离开动画没有做完，禁止存储当前 padding，margin 值
      if (!leaveStatus.value) {
        el.dataset.oldPaddingTop = getStyle(el).paddingTop
        el.dataset.oldPaddingBottom = getStyle(el).paddingBottom
        el.dataset.oldMarginTop = getStyle(el).marginTop
        el.dataset.oldMarginBottom = getStyle(el).marginBottom
      }

      el.style.height = '0'
      el.style.paddingTop = '0'
      el.style.paddingBottom = '0'
      el.style.marginTop = '0'
      el.style.marginBottom = '0'
    }

    // 进入动画 --- 执行中
    const enter = (el: HTMLElement) => {
      el.dataset.oldOverflow = el.style.overflow
      void el.scrollHeight
      if (getStyle(el).boxSizing === 'border-box') {
        const padding =
          parseFloat(el.dataset.oldPaddingTop as string) +
            parseFloat(el.dataset.oldPaddingBottom as string) || 0
        if (!leaveStatus.value) {
          el.style.height = `${el.scrollHeight + padding}px`
        } else {
          const extraPadding =
            parseFloat(getStyle(el).paddingTop) +
            parseFloat(getStyle(el).paddingBottom)
          el.style.height = `${el.scrollHeight + padding - extraPadding}px`
        }
      } else {
        if (!leaveStatus.value) {
          el.style.height = `${el.scrollHeight}px`
        } else {
          const padding =
            parseFloat(getStyle(el).paddingTop as string) +
            parseFloat(getStyle(el).paddingBottom as string)
          el.style.height = `${el.scrollHeight - padding}px`
        }
      }

      el.style.paddingTop = el.dataset.oldPaddingTop as string
      el.style.paddingBottom = el.dataset.oldPaddingBottom as string
      el.style.marginTop = el.dataset.oldMarginTop as string
      el.style.marginBottom = el.dataset.oldMarginBottom as string
      el.style.overflow = 'hidden'
    }

    // 进入动画 --- 执行后
    const afterEnter = (el: HTMLElement) => {
      enterStatus.value = false
      removeClass(el, TRANSITION_CLASS)
      el.style.height = ''
      el.style.overflow = String(el.dataset.oldOverflow)
    }

    // 离开动画 --- 执行前
    const beforeLeave = (el: HTMLElement) => {
      leaveStatus.value = true
      // 如果进入动画没有做完，禁止存储当前 padding，margin 值
      if (!enterStatus.value) {
        el.dataset.oldPaddingTop = getStyle(el).paddingTop
        el.dataset.oldPaddingBottom = getStyle(el).paddingBottom
        el.dataset.oldMarginTop = getStyle(el).marginTop
        el.dataset.oldMarginBottom = getStyle(el).marginBottom
      }

      if (getStyle(el).boxSizing === 'content-box') {
        const padding =
          parseFloat(el.dataset.oldPaddingTop as string) +
          parseFloat(el.dataset.oldPaddingBottom as string)
        el.style.height = `${el.scrollHeight - padding}px`
      } else {
        el.style.height = `${el.scrollHeight}px`
      }
      el.style.overflow = 'hidden'
    }

    // 离开动画 --- 执行中
    const leave = (el: HTMLElement) => {
      void el.scrollHeight
      addClass(el, TRANSITION_CLASS)
      el.style.height = '0'
      el.style.paddingTop = '0'
      el.style.paddingBottom = '0'
      el.style.marginTop = '0'
      el.style.marginBottom = '0'
    }

    // 离开动画 --- 执行后
    const afterLeave = (el: HTMLElement) => {
      leaveStatus.value = false
      removeClass(el, TRANSITION_CLASS)
      el.style.overflow = String(el.dataset.oldOverflow)
      el.style.height = ''
      el.style.paddingTop = el.dataset.oldPaddingTop as string
      el.style.paddingBottom = el.dataset.oldPaddingBottom as string
      el.style.marginTop = el.dataset.oldMarginTop as string
      el.style.marginBottom = el.dataset.oldMarginBottom as string
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
