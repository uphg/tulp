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
  emits: ['update:visible', 'close'],
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    title: String,
    displayDirective: {
      type: String as PropType<'if' | 'show'>,
      default: 'if'
    },
    wrap: Boolean,
    customize: Boolean
  },
  setup(props, context) {
    const closeDialog = () => {
      context.emit('update:visible', false)
    }

    const handleAfterLeave = () => {
      context.emit('close', false)
    }

    provide('TuCloseDialog', closeDialog)

    return { closeDialog, handleAfterLeave }
  },
  render() {
    const contentTemplate = (
      <div
        class="tu-dialog-container"
        {...this.$attrs}
      >
        <div class="tu-dialog-overlay" onClick={this.closeDialog}></div>
        <div class="tu-dialog">
          {
            !this.customize ? (
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
              renderSlot(this.$slots, 'default')
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
              if (this.displayDirective === 'if') {
                return (this.visible ? contentTemplate : null)
              } else if (this.displayDirective === 'show') {
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