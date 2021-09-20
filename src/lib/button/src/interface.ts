import { PropType } from 'vue'

export type TButtonType = PropType<'primary' | 'success' | 'warning' | 'info' | 'error'>
export type TButtonNativeType = PropType<'button' | 'submit' | 'reset'>
export interface TButtonProps {
  type: TButtonType
  size: PropType<ComponentSize>,
  icon: string,
  nativeType: string,
  loading: boolean,
  disabled: boolean,
  text: boolean
}