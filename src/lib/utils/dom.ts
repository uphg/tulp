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
      oldClass += ' ' + item
    }
  }
  if (!el.classList) {
    el.className = oldClass
  }
}

export const removeClass = (el: Element, name: string) => {
  if (!el || !name) return
  let oldClass = ' ' + el.className + ' '
  const classes = name.split(' ')
  for (const item of classes) {
    if (el.className) {
      el.classList.remove(item)
    } else {
      oldClass = oldClass.replace(' ' + item + ' ', ' ')
    }
  }
  if (!el.classList) {
    el.className = trim(oldClass)
  }
} 

export const style = (el: HTMLElement) => {
  const styles = window.getComputedStyle(el, null)
  console.log('styles')
  console.log(styles)
  const stylesKey = [
    'width', 'height',
    'paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight',
    'marginTop', 'marginBottom', 'marginLeft', 'marginRight',
  ]

  const stylesMap: {[key: string]: string} = { }

  stylesKey.forEach((key) => {
    stylesMap[key] = (el.style[key as keyof CSSStyleDeclaration] || styles[key as keyof CSSStyleDeclaration] || null) as string
  })

  return stylesMap
  // const Attributes = window.getComputedStyle(el, null)
}

export const getStyle = (el: Element) => {
  const style = window.getComputedStyle(el, null)
  return {
    width: parseInt(style.width, 10),
    height: parseInt(style.height, 10),
    paddingTop: parseInt(style.paddingTop, 10),
    paddingLeft: parseInt(style.paddingLeft, 10),
    paddingRight: parseInt(style.paddingRight, 10),
    paddingBottom: parseInt(style.paddingBottom, 10),
    marginTop: parseInt(style.marginTop, 10),
    marginLeft: parseInt(style.marginLeft, 10),
    marginRight: parseInt(style.marginRight, 10),
    marginBottom: parseInt(style.marginBottom, 10)
  }
}