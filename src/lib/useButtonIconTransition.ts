import dom from './utils/dom'

const TRANSITION_CLASS = 'tu-width-expand'

export function useButtonIconTransition() {
  const iconBeforeEnter = (el: Element) => {
    dom.addClass(el, TRANSITION_CLASS)
    el.style.marginRight = '0'
    el.style.width = '0'
    el.style.opacity = '0'
  }

  const iconEnter = (el: HTMLElement) => {
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

  const iconAfterEnter = (el: HTMLElement) => {
    dom.removeClass(el, TRANSITION_CLASS)
    el.style.width = ''
    el.style.opacity = ''
  }

  const iconBeforeLeave = (el: HTMLElement) => {
    el.style.width = ''
    el.style.opacity = ''
  }

  const iconLeave = (el: HTMLElement) => {
    if (el.scrollWidth !== 0) {
      dom.addClass(el, TRANSITION_CLASS)
      el.style.marginRight = '0'
      el.style.width = '0'
      el.style.opacity = '0'
    }
  }

  const iconAfterLeave = (el: HTMLElement) => {
    dom.removeClass(el, TRANSITION_CLASS)
    el.style.marginRight = ''
    el.style.width = ''
    el.style.opacity = ''
  }

  return {
    iconBeforeEnter,
    iconEnter,
    iconAfterEnter,
    iconBeforeLeave,
    iconLeave,
    iconAfterLeave
  }
}