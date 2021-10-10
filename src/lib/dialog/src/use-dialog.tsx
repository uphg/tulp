import Dialog from './Dialog'
import { TButton, TIcon } from '../../index'
import { createApp, nextTick, ref, h, onMounted } from 'vue'

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
  const { type, title, content, cancel, confirm } = options
  const div = document.createElement('div')
  document.body.appendChild(div)

  const app = createApp({
    setup() {
      const visible = ref(false)
      const handleCancel = () => {
        visible.value = false
        cancel?.()
      }
      const handleConfirm = () => {
        visible.value = false
        confirm?.()
      }

      onMounted(() => {
        void nextTick(() => { visible.value = true })
      })

      return { visible, handleCancel, handleConfirm }
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
              <TIcon class="prefix-icon" name={type} />,
              <span class="tu-dialog__title">{() => title}</span>,
              <span
                class="tu-dialog__close"
                onClick={() => {
                  this.visible = false
                }}
              />
            ],
            default: () => content,
            footer: () => [
              h(
                TButton,
                {
                  size: 'small',
                  onClick: this.handleCancel
                },
                { default: () => '取消' }
              ),
              h(
                TButton,
                {
                  type: 'primary',
                  size: 'small',
                  onClick: this.handleConfirm
                },
                { default: () => '确定' }
              )
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