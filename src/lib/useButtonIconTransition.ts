import dom from './utils/dom'

const TRANSITION_CLASS = 'tu-loading-transition'

export function useButtonIconTransition() {
  const iconBeforeEnter = (element: Element) => {
    const el = element as HTMLElement
    dom.addClass(el, TRANSITION_CLASS)
    el.style.marginRight = '0'
    el.style.width = '0'
    el.style.opacity = '0'
  }

  const iconEnter = (element: Element) => {
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

  const iconAfterEnter = (element: Element) => {
    const el = element as HTMLElement
    dom.removeClass(el, TRANSITION_CLASS)
    el.style.width = ''
    el.style.opacity = ''
  }

  const iconBeforeLeave = (element: Element) => {
    const el = element as HTMLElement
    el.style.width = ''
    el.style.opacity = ''
  }

  const iconLeave = (element: Element) => {
    const el = element as HTMLElement
    if (el.scrollWidth !== 0) {
      dom.addClass(el, TRANSITION_CLASS)
      el.style.marginRight = '0'
      el.style.width = '0'
      el.style.opacity = '0'
    }
  }

  const iconAfterLeave = (element: Element) => {
    const el = element as HTMLElement
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