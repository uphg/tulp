import { createApp, h } from 'vue'
import IconPack from './IconPack.vue'
import { ICON_STATUS_KEY } from './icon-status'
import type { IconStatus } from './icon-status'
import isServer from '../_utils/isServer'

export const useIcons = (window: Window) => {
  if (isServer) return
  if ((window as IconStatus)[ICON_STATUS_KEY]) return
  ;(window as IconStatus)[ICON_STATUS_KEY] = true

  const div = document.createElement('div')
  div.style.position = 'absolute'
  div.style.width = '0'
  div.style.height = '0'
  div.style.overflow = 'hidden'

  const firstChild = document.body.firstChild
  document.body.insertBefore(div, firstChild)

  const app = createApp({
    render() {
      return h(IconPack)
    }
  })

  app.mount(div)
}
