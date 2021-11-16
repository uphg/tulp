import isServer from './isServer'

let scrollBarWidth: number

export default function (): number {
  if (isServer) return 0
  if (scrollBarWidth !== undefined) return scrollBarWidth

  const outer = document.createElement('div')
  outer.className = 'tu-scrollbar__wrap'
  outer.style.visibility = 'hidden'
  outer.style.width = '100px'
  outer.style.position = 'absolute'
  outer.style.top = '-9999px'
  document.body.appendChild(outer)

  const widthNoScroll = outer.offsetWidth
  outer.style.overflow = 'scroll'

  const inner = document.createElement('div')
  inner.style.width = '100%'
  outer.appendChild(inner)

  const widthWithScroll = inner.offsetWidth
  outer.parentNode?.removeChild(outer)
  scrollBarWidth = widthNoScroll - widthWithScroll

  return scrollBarWidth
}

// let scrollBarWidth: (number | null)

// export const getScrollBarWidth = () => {
//   if ( scrollBarWidth || scrollBarWidth === 0 ) return scrollBarWidth

//   const div = document.createElement('div')
//   div.style.width = '100px'
//   div.style.height = '80px'
//   div.style.overflow = 'scroll'
//   div.style.position = 'absolute';
//   div.style.top = '-9999px';
//   document.body.appendChild(div);

//   const child = document.createElement('div')
//   child.style.width = '100%'
//   child.style.height = '200px'

//   div.appendChild(child)

//   scrollBarWidth = 100 - child.offsetWidth

//   div.parentNode?.removeChild(div)
//   return scrollBarWidth
// }
