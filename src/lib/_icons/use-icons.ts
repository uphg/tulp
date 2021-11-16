import { createApp, h } from 'vue'
import SvgTemplate from './SvgTemplate.vue'

const isServer = typeof window === 'undefined'

const ICON_STATUS = '__tulp__icon__inject__symbol__'
// element.insertAdjacentHTML
// parentNode.insertBefore
// getAttribute
// getElementsByTagName
// __tulp__icon__inject__symbol__
// if(isServer) return

interface IconStatus extends Window {
  [ICON_STATUS]: boolean
}

export const useIcons = (window: Window) => {
  if (isServer) return
  if ((window as IconStatus)[ICON_STATUS]) return
  ;(window as IconStatus)[ICON_STATUS] = true
  const div = document.createElement('div')
  div.style.position = 'absolute'
  div.style.width = '0'
  div.style.height = '0'
  div.style.overflow = 'hidden'

  const firstChild = document.body.firstChild
  document.body.insertBefore(div, firstChild)

  const app = createApp({
    render() {
      return h(SvgTemplate)
    }
  })

  app.mount(div)
}
