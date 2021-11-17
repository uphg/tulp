export const ICON_STATUS_KEY = Symbol('tulp-icon-symbol')

export interface IconStatus extends Window {
  [ICON_STATUS_KEY]: boolean
}
