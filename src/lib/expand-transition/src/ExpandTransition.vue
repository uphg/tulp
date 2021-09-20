<template>
  <transition v-on="on">
    <slot />
  </transition>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { addClass, removeClass } from '../../utils/dom'
import { Lib } from '../../utils/default-config'
const TRANSITION_CLASS = 'tu-expand-transition--active'

export default defineComponent({
  name: `${Lib.Prefix}ExpandTransition`,
  setup() {
    
    const beforeEnter = (element: Element) => {
      const el = element as HTMLElement
      addClass(el, TRANSITION_CLASS)
      el.style.marginRight = '0'
      el.style.width = '0'
      el.style.opacity = '0'
    }

    const enter = (element: Element) => {
      const el = element as HTMLElement
      if (el.scrollWidth !== 0) {
        el.style.marginRight = ''
        el.style.width = el.scrollWidth + 'px'
        el.style.opacity = '1'
      } else {
        el.style.marginRight = ''
        el.style.width = ''
        el.style.opacity = '1'
      }
    }

    const afterEnter = (element: Element) => {
      const el = element as HTMLElement
      removeClass(el, TRANSITION_CLASS)
      el.style.width = ''
      el.style.opacity = ''
    }

    const beforeLeave = (element: Element) => {
      const el = element as HTMLElement
      el.style.width = ''
      el.style.opacity = ''
    }

    const leave = (element: Element) => {
      const el = element as HTMLElement
      if (el.scrollWidth !== 0) {
        addClass(el, TRANSITION_CLASS)
        el.style.marginRight = '0'
        el.style.width = '0'
        el.style.opacity = '0'
      }
    }

    const afterLeave = (element: Element) => {
      const el = element as HTMLElement
      removeClass(el, TRANSITION_CLASS)
      el.style.marginRight = ''
      el.style.width = ''
      el.style.opacity = ''
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
@require '../../style/components/expand-transition'
</style>
