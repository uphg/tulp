// 添加 class

export const trim = (string: string) => {
  return string.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
}

export const addClass = (el: Element, name: string) => {
  if (!el || !name) return
  let oldClass = el.className
  const classes = name.split(' ')
  for (const item of classes) {
    if (el.classList) {
      el.classList.add(item)
    } else {
      oldClass += ` ${item}`
    }
  }
  if (!el.classList) {
    el.className = oldClass
  }
}

export const removeClass = (el: Element, name: string) => {
  if (!el || !name) return
  let oldClass = ` ${el.className} `
  const classes = name.split(' ')
  for (const item of classes) {
    if (el.className) {
      el.classList.remove(item)
    } else {
      oldClass = oldClass.replace(` ${item} `, ' ')
    }
  }
  if (!el.classList) {
    el.className = trim(oldClass)
  }
}

export const getStyle = (el: Element) => {
  const style = window.getComputedStyle(el, null)
  return style
}
