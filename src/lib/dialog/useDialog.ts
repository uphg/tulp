import { Button, Dialog } from '../main'
import Icon from '../Icon.vue'
import { createApp, h, nextTick } from 'vue'

interface dialogOptions {
  type: string,
  title?: string
  content?: string
}

interface dialogOption {
  [key: string]: string
}

interface dialogApi {
  [key: string]: (options: dialogOption) => dialogApi
}

// dialog type 
// 成功 success
// 警告 warning
// 信息 info
// 错误 error
// 问题 question

const createDialog = (options: dialogOptions) => {
  const { type, title, content } = options
  const div = document.createElement('div')
  document.body.appendChild(div)

  const app = createApp({
    data() {
      return {
        visible: false
      }
    },
    mounted() {
      void nextTick(() => {
        this.visible = true
      })
    },
    render() {
      return h(
        Dialog,
        {
          title: title,
          visible: this.visible,
          'onUpdate:visible': (newVisible: boolean) => {
            this.visible = newVisible
          },
          'onClose': () => {
            this.visible = false
          },
          'onClosed': destroyDialog
        },
        {
          header: () => [
            h(
              Icon,
              { class: 'prefix-icon', name: `${type}` }
            ),
            h('span',
              { class: 'tu-dialog-title' },
              { default: () => title }
            ),
            h(
              'span',
              {
                class: 'tu-dialog-close',
                onClick: () => {
                  this.visible = false
                }
              }
            )
          ],
          default: () => content,
          footer: () => [
            h(
              Button,
              {
                size: 'small',
                onClick: () => {
                  this.visible = false
                }
              },
              { default: () => '取消' }
            ),
            h(
              Button,
              {
                type: 'primary',
                size: 'small',
                onClick: () => {
                  this.visible = false
                }
              },
              { default: () => '确定' }
            )
          ]
        }
      )
    },
  })

  const createDialog = () => {
    app.mount(div)
    div.remove()
  }

  const destroyDialog = () => {
    app.unmount()
  }

  createDialog()
}

const createApi = (type: string, api: dialogApi) => (
  (options?: dialogOption): dialogApi => {
    createDialog({ type, ...options })
    return api
  }
)

export const useDialog = (options?: { [key: string]: string }) => {

  const api = {} as dialogApi

  (['success', 'warning', 'info', 'error', 'question']).forEach((item) => {
    api[item] = createApi(item, api)
  })

  return api
}