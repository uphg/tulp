/* eslint-disable */
// @ts-nocheck
// 封装的操作方法

const getOld = (el: HTMLElement, name: string) => {
  const attribute = (name).replace(name[0], name[0].toLocaleUpperCase())
  return el.dataset[`old${attribute}`]
}

const setOld = (el: HTMLElement, name: string | string[]) => {
  if (isArray(name)) {
    (name as string[]).forEach(item => {
      const attribute = item.replace(item[0], item[0].toLocaleUpperCase())
      el.dataset[`old${attribute}`] = getStyle(el)[item]
    });
    return
  }

  const attribute = (name as string).replace(name[0], name[0].toLocaleUpperCase())
  el.dataset[`old${attribute}`] = getStyle(el)[name as string]
}

const setStyle = (el, styles: string | { [key: string]: string }) => {

}

const setStyleOld = (el) => {
  el.style.paddingTop = el.dataset.oldPaddingTop as string
}
