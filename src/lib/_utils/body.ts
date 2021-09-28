import getScrollBarWidth from './scrollbar-width'

const body = document.body

const hasScrollBar = (): boolean => {
  // 返回文档在垂直/水平方向已滚动的像素值，如果大于 0 说明一定存在滚动条（可能发生非滚动条滚动）
  // if (window.pageYOffset > 0 || window.pageXOffset > 0) return true
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
