import { Button, Dialog } from '../main'
import Icon from '../Icon.vue'
import { createApp, h, nextTick } from 'vue'

interface dialogOptions {
  type: string,
  title?: string
  content?: string,
  yes: () => void,
  no: () => void
}

interface dialogOption {
  [key: string]: string
}

interface dialogApi {
  [key: string]: (options: dialogOption) => dialogApi
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

 const typeApi = [
  'success',
  'warning',
  'info',
  'error',
  'question'
 ] 

 const createDialog = (options: dialogOptions) => {
  const { type, title, content, close, yes, no } = options
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
                  no()
                  this.visible = false
                }}
              >
                {() => '取消'}
              </Button>,
              <Button
                size="small"
                type="primary"
                onClick={() => {
                  yes()
                  this.visible = false
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

const createTypeApi = (type: string, api: dialogApi) => (
  (options?: dialogOption): dialogApi => {
    createDialog({ type, ...options })
    return api
  }
)

export const useDialog = (options?: { [key: string]: string }) => {

  const api = {} as dialogApi

  typeApi.forEach((item) => {
    api[item] = createTypeApi(item, api)
  })

  return api
}