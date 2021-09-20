import '../style/components/button.styl'
import { Lib } from '../utils/default-config'
import { defineComponent, PropType, Transition } from 'vue';
import { useTriggerWave } from '../useTriggerWave'
import LoadingIcon from './LoadingIcon.vue'
import IconTransition from '../icon-transition/IconTransition.vue'
import Icon from '../Icon.vue'

type TButtonType = PropType<'primary' | 'success' | 'warning' | 'info' | 'error'>
type TButtonNativeType = PropType<'button' | 'submit' | 'reset'>

interface TButtonProps {
  type: TButtonType
  size: PropType<ComponentSize>,
  icon: string,
  nativeType: string,
  loading: boolean,
  disabled: boolean,
  text: boolean
}

type MaybeArray<T> = T | T[]

export default defineComponent({
  name: `${Lib.Prefix}Button`,
  components: { Icon, LoadingIcon, IconTransition },
  props: {
    tag: {
      type: String as PropType<keyof HTMLElementTagNameMap>,
      default: 'button'
    },
    type: {
      type: String as TButtonType,
      default: 'default',
      validator: (value: string) => {
        return [
          'default',
          'primary',
          'success',
          'warning',
          'info',
          'error'
        ].includes(value)
      }
    },
    size: {
      type: String,
      validator: (value: string) => {
        return [
          '',
          'large',
          'medium',
          'small',
        ].includes(value)
      }
    },
    icon: String,
    loadingIcon: String,
    nativeType: {
      type: String as TButtonNativeType,
      default: 'button',
      validator: (value: string) => {
        return ['button', 'submit', 'reset'].includes(value)
      },
    },
    loading: Boolean,
    disabled: Boolean,
    text: Boolean,
    onClick: [Function, Array] as PropType<MaybeArray<(e: MouseEvent) => void>>,
  },
  setup(props, context) {
    const { isWave, triggerWave } = useTriggerWave()
    const handleClick = (event: MouseEvent  ) => {
      const { onClick } = props
      if (onClick) {
        if (Array.isArray(onClick)) {
          onClick.forEach((click) => click(event))
        } else return onClick(event)
      }
      triggerWave()
    }

    return { isWave, handleClick }
  },
  render() {
    const { $slots, tag: Component } = this

    const iconWrap = (iconSlots: any ) => (
      <span
        class={[
          'tu-button__icon',
          { 'is-uncontent': !this.$slots.default }
        ]}
      >
        {iconSlots}
      </span>
    )

    return (
      <Component
        class={[
          'tu-button',
          {
            [`tu-button--${this.type}`]: this.type,
            [`tu-button--${this.size}`]: this.size
          }
        ]}
        ref="button"
        type={this.nativeType}
        onClick={this.handleClick}
      >
        {!this.icon ? (
          <IconTransition>
            {this.loading ? (
              iconWrap(<LoadingIcon />)
            ) : null}
          </IconTransition>
        ) : (
          <Transition
            name="component-fade"
            mode="out-in"
          >
            {this.loading ? (
              iconWrap(<LoadingIcon />)
            ) : (
              this.icon && !this.loading ? (
                iconWrap(<Icon name={this.icon} />)
              ) : null
            )}
          </Transition>
        )}
        <span class="tu-button__content">
          { $slots.default?.()}
        </span>
        <span class="tu-button__border"></span>
        {this.isWave && !this.text ? (
          <span
            class={[
              'tu-button__wave',
              { active: this.isWave }
            ]}
          />
        ) : null}
      </Component>
    )
  }
})