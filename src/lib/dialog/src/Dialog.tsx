import {
  defineComponent,
  withDirectives,
  vShow,
  Teleport,
  Transition,
  renderSlot,
  watch,
  toRef,
  h,
  Fragment,
  PropType
} from 'vue';
import '../../_styles/components/dialog.styl'
import { Lib } from '../../_utils/config'
import { offBodyScroll, onBodyScroll } from '../../_utils/body'

export default defineComponent({
  name: `${Lib.Prefix}Dialog`,
  emits: ['update:visible', 'open', 'opened', 'close', 'closed', 'maskClick'],
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    maskClosable: {
      type: Boolean,
      default: true
    },
    title: String,
    renderDirective: {
      type: String as PropType<'if' | 'show'>,
      default: 'if'
    },
    wrap: Boolean,
    preset: {
      type: String as PropType<'default' | 'custom'>,
      default: 'default'
    }
  },
  setup(props, context) {
    const openDialog = () => {
      context.emit('open')
      offBodyScroll()
    }

    const closeDialog = () => {
      context.emit('update:visible', false)
      context.emit('close')
    }

    const handleBeforeLeave = () => {
      context.emit('opened')
    }

    const handleAfterLeave = () => {
      context.emit('closed')
      onBodyScroll()
    }

    const handleMaskClick = (event: Event) => {
      context.emit('maskClick', event)
      props.maskClosable && closeDialog()
    }

    watch(toRef(props, 'visible'), value => {
      value && openDialog()
    })

    return { closeDialog, handleBeforeLeave, handleAfterLeave, handleMaskClick }
  },
  render() {
    const content = (
      <div
        class="tu-dialog__container"
        {...this.$attrs}
      >
        <div
          class="tu-dialog__overlay"
          onClick={this.handleMaskClick}
        ></div>
        <div class="tu-dialog">
          {
            this.preset === 'default' ? (
              <div class="tu-dialog__content">
                <div class="tu-dialog__header">
                  {
                    !this.$slots.header ? (
                      <>
                        <span class="tu-dialog__title">{this.title}</span>
                        <span class="tu-dialog__close" onClick={this.closeDialog}></span>
                      </>
                    ) : (
                      renderSlot(this.$slots, 'header')
                    )
                  }
                </div>
                <div class="tu-dialog__body">
                  {renderSlot(this.$slots, 'default')}
                </div>
                <div class="tu-dialog__footer">
                  {renderSlot(this.$slots, 'footer')}
                </div>
              </div>
            ) : (
              this.preset === 'custom' ? renderSlot(this.$slots, 'default') : null
            )
          }
        </div>
      </div>
    )

    return (
      <Teleport to="body" disabled={this.wrap}>
        <Transition
          name="dialog-fade"
          onAfterLeave={this.handleAfterLeave}
          onBeforeLeave={this.handleBeforeLeave}
        >
          {{
            default: () => {
              if (this.renderDirective === 'if') {
                return (this.visible ? content : null)
              } else if (this.renderDirective === 'show') {
                return withDirectives(
                  content,
                  [
                    [vShow, this.visible]
                  ]
                )
              }
            }
          }}
        </Transition>
      </Teleport>
    )
  }
})
