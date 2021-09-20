import '../style/components/icon-transition.styl'
import { defineComponent, h, Transition } from 'vue'
import { addClass, removeClass } from '../utils/dom'
import { Lib } from '../utils/default-config'

export default defineComponent({
  name: `${Lib.Prefix}IconTransition`,
  setup() {
    const TRANSITION_CLASS = 'tu-icon-transition--active'
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

  render() {
    return h(Transition,
      { on: this.on },
      { default: () => this.$slots }
    )
  }
})