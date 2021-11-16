<script lang="ts">
const NAVBAR_HEIGHT = 60 // 导航栏高度
const HEADER_GAP = NAVBAR_HEIGHT + 10 // 锚点距离顶部距离
</script>

<script setup lang="ts">
import { onMounted, watch, nextTick, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { PageAnchorType } from '../interface'
import PageTitlex from './PageTitle.vue'
import PageAnchor from './PageAnchor.vue'
import Prism from 'prismjs'
import debounce from 'lodash.debounce'

const router = useRouter()
const route = useRoute()
const contentRef = ref<HTMLElement | null>(null)
const wrapperRef = ref<HTMLElement | null>(null)
const anchors = ref<PageAnchorType[]>([])
const currentAnchorIndex = ref(0)

const handleScroll = debounce(
  (event: UIEvent) => {
    if (anchors.value.length < 1) return
    const main = event.target as HTMLElement
    const scrollTop = main.scrollTop

    // 判断元素是否滚动到底部
    const viewHeight = Math.max(
      window.innerHeight,
      document.documentElement.clientHeight,
      document.body.clientHeight
    )
    const contentHeight =
      main.querySelector('.docs-content > .page')?.clientHeight || 0

    // 找出距离顶部最小的标题
    let recentAnchor = anchors.value[0]
    let max = recentAnchor.el.offsetTop - scrollTop - HEADER_GAP
    if (scrollTop >= contentHeight - viewHeight) {
      currentAnchorIndex.value = anchors.value.length - 1
    } else if (max > 0) {
      // 没有到达第一个标题之前
      currentAnchorIndex.value = -1
    } else if (max === 0) {
      // 正好在第一个标题上
      currentAnchorIndex.value = recentAnchor.index
    } else if (max < 0) {
      // 滚动到第一个标题之后的情况
      for (let i = 0; i < anchors.value.length - 1; i++) {
        // 从第二项开始对比
        const item = anchors.value[i + 1]
        const currentTop = item.el.offsetTop - scrollTop - HEADER_GAP
        // 当两个值相减为零时，说明正好在当前标题
        if (max === 0) {
          recentAnchor = item
          break
          // 只判断两个值都为负数的最大值
        } else if (max < 0 && currentTop < 0 && currentTop > max) {
          recentAnchor = item
          max = item.el.offsetTop - scrollTop - HEADER_GAP
        }
      }
      currentAnchorIndex.value = recentAnchor.index
    }

    // 更新查询参数
    router.push({ query: { anchorIndex: currentAnchorIndex.value } })
  },
  300,
  { leading: true }
) // leading 第一次触发不需要延迟

const updateAnchors = () => {
  const markdown = wrapperRef.value?.querySelector(
    '.page-wrapper .markdown-body'
  )
  const titles = markdown?.querySelectorAll('.markdown-body > h2')
  const newAnchors = [] as PageAnchorType[]
  titles?.forEach((el, index) => {
    newAnchors.push({
      index,
      el: el as HTMLElement,
      title: el.textContent
    })
  })
  anchors.value = newAnchors
}

const setAnchorJump = (item: PageAnchorType) => {
  if (!item) return
  const offsetTop = item.el.offsetTop
  contentRef.value?.scroll(0, offsetTop - HEADER_GAP + 1)
}

const resetPage = () => {
  currentAnchorIndex.value = 0
  contentRef.value?.scroll(0, 0)
}

const updatePagePosition = () => {
  const currentIndex = Number(route.query.anchorIndex)
  if (currentIndex || currentIndex === 0) {
    setAnchorJump(anchors.value[currentIndex])
  }
}

onMounted(() => {
  updateAnchors()
  updatePagePosition()
})

watch(
  () => route.name,
  () =>
    nextTick(() => {
      resetPage()
      updateAnchors()
      Prism.highlightAll()
    }),
  { immediate: true }
)
</script>

<template>
  <main ref="contentRef" class="docs-content" @scroll="handleScroll">
    <div class="page">
      <div ref="wrapperRef" class="page-wrapper">
        <PageTitlex />
        <router-view />
      </div>
      <PageAnchor
        :active-index="currentAnchorIndex"
        :anchors="anchors"
        @change="setAnchorJump"
      />
    </div>
  </main>
</template>

<style lang="stylus">
.page
  min-height 100%
  transition padding var(--t-transition-time), width var(--t-transition-time)
  padding-left 320px
  display flex
  flex-wrap nowrap

.page-wrapper
  width calc(100% - 154px)
  max-width 980px
  margin-left auto
  margin-right auto
  box-sizing border-box
  padding 24px

@media (max-width 1200px)
  .page .page-wrapper
    width 100%

@media (max-width 719px)
 .page
    padding-left 0
</style>
