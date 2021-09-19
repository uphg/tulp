import { defineComponent, h, Transition } from 'vue'
import { addClass, removeClass } from '../utils/dom'
import './collapse-transition.styl'

const TRANSITION_CLASS = 'tulp-collapse-transition--active'
export default defineComponent({
  name: 'TCollapseTransition',
  functional: true,
  render() {
    return h(Transition, {
      onBeforeEnter(el: HTMLElement) {
        addClass(el, TRANSITION_CLASS)
        if (!el.dataset) el.dataset = {}

        el.dataset.oldPaddingTop = el.style.paddingTop
        el.dataset.oldPaddingBottom = el.style.paddingBottom

        el.style.height = '0'
        el.style.paddingTop = 0
        el.style.paddingBottom = 0
      },

      onEnter(el: HTMLElement) {
        el.dataset.oldOverflow = el.style.overflow

        if (el.scrollHeight !== 0) {
          el.style.height = el.scrollHeight + 'px'
        } else {
          el.style.height = ''
        }
        el.style.paddingTop = el.dataset.oldPaddingTop
        el.style.paddingBottom = el.dataset.oldPaddingBottom

        el.style.overflow = 'hidden'
      },

      onAfterEnter(el: HTMLElement) {
        removeClass(el, TRANSITION_CLASS)
        el.style.height = ''
        el.style.overflow = el.dataset.oldOverflow
      },

      onBeforeLeave(el: HTMLElement) {
        if (!el.dataset) el.dataset = {}
        el.dataset.oldOverflow = el.style.overflow
        el.dataset.oldPaddingTop = el.style.paddingTop
        el.dataset.oldPaddingBottom = el.style.paddingBottom

        // 修复回弹动画高度错误的 bug
        const padding = (parseInt(el.dataset.oldPaddingTop, 10) + parseInt(el.dataset.oldPaddingBottom, 10)) || 0
        el.style.height = el.scrollHeight - padding + 'px'
        el.style.overflow = 'hidden'
      },

      onLeave(el: HTMLElement) {
        if (el.scrollHeight !== 0) {
          // 在设置高度后添加 class 样式，防止无回弹动画
          addClass(el, TRANSITION_CLASS)
          el.style.height = 0
          el.style.paddingTop = 0
          el.style.paddingBottom = 0
        }
      },

      onAfterLeave(el: HTMLElement) {
        removeClass(el, TRANSITION_CLASS)
        el.style.overflow = el.dataset.oldOverflow
        el.style.height = ''
        el.style.paddingTop = el.dataset.oldPaddingTop
        el.style.paddingBottom = el.dataset.oldPaddingBottom
      }
    }, {
      default: () => this.$slots.default && this.$slots.default()
    })
  }
})
