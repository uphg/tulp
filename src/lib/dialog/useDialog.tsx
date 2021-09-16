import { Button, Dialog } from '../main'
import Icon from '../Icon.vue'
import { createApp, nextTick } from 'vue'

interface DialogOptions {
  type: string,
  title?: string
  content?: string,
  confirm: () => void,
  cancel: () => void
}

interface DialogTypeOption {
  title?: string
  content?: string,
  confirm?: () => void,
  cancel?: () => void
}

interface DialogApi {
  [key: string]: (options: DialogTypeOption) => DialogApi
}

/**
 * dialog type 
 * 
 * 成功 success
 * 警告 warning
 * 信息 info
 * 错误 error
 * 问题 question
 */

 const typeApi: string[] = [
  'success',
  'warning',
  'info',
  'error',
  'question'
 ] 

 const createDialog = (options: DialogOptions) => {
  const { type, title, content, confirm, cancel } = options
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
      return (
        <Dialog
          title={title}
          v-model={[this.visible, 'visible']}
          onClosed={unmountDialog}
        >
          {{
            header: () => [
              <Icon class="prefix-icon" name={type} />,
              <span class="tu-dialog-title">{() => title}</span>,
              <span
                class="tu-dialog-close"
                onClick={() => {
                  this.visible = false
                }}
              />
            ],
            default: () => content,
            footer: () => [
              <Button
                size="small"
                onClick={() => {
                  this.visible = false
                  cancel?.()
                }}
              >
                {() => '取消'}
              </Button>,
              <Button
                size="small"
                type="primary"
                onClick={() => {
                  this.visible = false
                  confirm?.()
                }}
              >
                {() => '确定'}
              </Button>
            ],
          }}
        </Dialog>
      )
    }
  })

  const mountDialog = () => {
    app.mount(div)
    div.remove()
  }

  const unmountDialog = () => {
    app.unmount()
  }

  mountDialog()
}

const createTypeApi = (type: string, api: DialogApi) => (
  (options?: DialogTypeOption) => {
    createDialog({ type, ...options } as DialogOptions)
    return api
  }
)

export const useDialog = (options?: { [key: string]: string }) => {

  const api = {} as DialogApi

  typeApi.forEach((item) => {
    api[item] = createTypeApi(item, api)
  })

  return api
}