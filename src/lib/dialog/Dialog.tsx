import {
  defineComponent,
  provide,
  withDirectives,
  vShow,
  Teleport,
  Transition,
  renderSlot,
  PropType
} from 'vue';
import '../style/components/dialog.styl'

export default defineComponent({
  name: 'TuDialog',
  emits: ['update:visible', 'close', 'closed', 'onMaskClick'],
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    maskOff: {
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
      type: String as PropType<'default' | 'customize'>,
      default: 'default'
    }
  },
  setup(props, context) {
    const closeDialog = () => {
      context.emit('update:visible', false)
      context.emit('close', false)
    }

    const handleAfterLeave = () => {
      context.emit('closed', false)
    }

    const handleMaskClick = () => {
      context.emit('onMaskClick', false)
      props.maskOff && closeDialog()
    }

    provide('TuCloseDialog', closeDialog)

    return { closeDialog, handleAfterLeave, handleMaskClick }
  },
  render() {
    const contentTemplate = (
      <div
        class="tu-dialog-container"
        {...this.$attrs}
      >
        <div
          class="tu-dialog-overlay"
          onClick={this.handleMaskClick}
        ></div>
        <div class="tu-dialog">
          {
            this.preset === 'default' ? (
              <div class="tu-dialog-content">
                <div class="tu-dialog-header">
                  {
                    !this.$slots.header ? (
                      <>
                        <span class="tu-dialog-title">{this.title}</span>
                        <span class="tu-dialog-close" onClick={this.closeDialog}></span>
                      </>
                    ) : (
                      renderSlot(this.$slots, 'header')
                    )
                  }
                </div>
                <div class="tu-dialog-body">
                  {renderSlot(this.$slots, 'default')}
                </div>
                <div class="tu-dialog-footer">
                  {renderSlot(this.$slots, 'footer')}
                </div>
              </div>
            ) : (
              this.preset === 'customize' ? renderSlot(this.$slots, 'default') : null
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
        >
          {{
            default: () => {
              if (this.renderDirective === 'if') {
                return (this.visible ? contentTemplate : null)
              } else if (this.renderDirective === 'show') {
                return withDirectives(
                  contentTemplate,
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