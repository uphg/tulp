import getScrollBarWidth from './scrollbar-width'

const body = document.body

const hasScrollBar = (): boolean => {
  if (window.scrollY > 0) return true
  return body.scrollHeight > window.innerHeight
}

export const offBodyScroll = () => {
  if (!hasScrollBar()) return
  const scrollBarWidth = getScrollBarWidth()
  body.style.setProperty('--tu-scrollbar-width', `${scrollBarWidth}px`);
  body.classList.add('is-tu-components')
}

export const onBodyScroll = () => {
  if (!hasScrollBar()) return
  body.style.removeProperty('--tu-scrollbar-width');
  body.classList.remove('is-tu-components')
}
