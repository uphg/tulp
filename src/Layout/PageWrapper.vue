<script lang="ts">
const NAVBAR_HEIGHT = 60  
const HEADER_GAP = NAVBAR_HEIGHT + 10
</script>

<script setup lang="ts">
import { onMounted, watch, nextTick, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { AnchorType } from './interface'
import Anchor from './Anchor.vue'
import Prism from 'prismjs'

const props = defineProps<{
  isHome: boolean
}>()

const router = useRouter()
const route = useRoute()
const contentRef = ref<HTMLElement | null>(null)
const wrapperRef = ref<HTMLElement | null>(null)
const anchors = ref<AnchorType[]>([])
const currentAnchorIndex = ref(0)

const handleScroll = (event: UIEvent) => {
  if (anchors.value.length < 1) return
  const main = event.target as HTMLElement
  const scrollTop = main.scrollTop

  // 找出距离顶部最小的标题
  let recentAnchor = anchors.value[0]
  anchors.value.forEach((anchor) => {
    const min = recentAnchor.el.offsetTop
    scrollTop > min && (recentAnchor = anchor)
  })

  // 判断元素是否滚动到底部
  const viewHeight = Math.max(window.innerHeight, document.documentElement.clientHeight, document.body.clientHeight)
  const contentHeight = main.querySelector('.docs-content > .page')?.clientHeight || 0
  if (scrollTop >= (contentHeight - viewHeight)) {
    currentAnchorIndex.value = anchors.value.length - 1
  } else {
    currentAnchorIndex.value = recentAnchor.index
  }

  // 更新查询参数
  router.push({ query: { anchorIndex: currentAnchorIndex.value } })
}

const updateAnchors = () => {
  const markdown = wrapperRef.value?.querySelector('.page-wrapper .markdown-body')
  const titles = markdown?.querySelectorAll('.markdown-body > h2')
  const newAnchors = [] as AnchorType[]
  titles?.forEach((el, index) => {
    newAnchors.push({
      index,
      el: el as HTMLElement,
      title: el.textContent 
    })
  })
  anchors.value = newAnchors
}

const setAnchorJump = (item: AnchorType) => {
  if (!item) return
  const offsetTop = item.el.offsetTop
  contentRef.value?.scroll(0, offsetTop - HEADER_GAP)
}

const resetPage = () => {
  currentAnchorIndex.value = 0
  contentRef.value?.scroll(0, 0)
}

onMounted(() => {
  updateAnchors()
  const currentIndex = Number(route.query?.anchorIndex)
  currentIndex && setAnchorJump(anchors.value[currentIndex]) 
})

watch(
  () => route.name,
  () => nextTick(() => {
    resetPage()
    updateAnchors()
    Prism.highlightAll()
  })
)
</script>

<template>
  <main
    class="docs-content"
    @scroll="handleScroll"
    ref="contentRef"
  >
    <div
      :class="[isHome ? 'home' : 'page']"
      :key="isHome ? 'home' : 'page'"
    >
      <div class="page-wrapper" ref="wrapperRef">
        <slot />
      </div>
      <Anchor
        v-if="!isHome"
        :active-index="currentAnchorIndex"
        :anchors="anchors"
        @change="setAnchorJump"
      />
    </div>
  </main>
</template>

<style lang="stylus">
.docs-content
  height calc(100vh - 60px)
  overflow auto
  box-sizing border-box

.page
  min-height 100%
  transition padding $_transition-time, width $_transition-time 
  padding-left 320px
  display flex
  flex-wrap nowrap

.page-wrapper
  width calc(100% - 154px)
  max-width 1260px
  margin-left auto
  margin-right auto
  box-sizing border-box
  padding 24px

.home
  height 100%

.home .page-wrapper
  height 100%
  display flex
  flex-direction column
  justify-content center
  align-items center

@media (max-width 1200px)
  .page .page-wrapper
    width 100%

@media (max-width 719px)
 .page
    padding-left 0

</style>
