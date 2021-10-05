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

const onScroll = (event: UIEvent) => {
  const main = event.target as HTMLElement
  const scrollTop = main.scrollTop
  anchors.value.forEach(anchor => {
    // 内容区向上卷曲距离大于当前元素距离顶部距离
    if (!((scrollTop + HEADER_GAP) > anchor.el.offsetTop)) return

    const viewHeight = Math.max(window.innerHeight, document.documentElement.clientHeight, document.body.clientHeight)
    const contentHeight = main.querySelector('.docs-content > .page')?.clientHeight || 0
    // 判断元素是否滚动到底部
    if (scrollTop >= (contentHeight - viewHeight)) {
      currentAnchorIndex.value = anchors.value.length - 1 
    } else {
      currentAnchorIndex.value = anchor.index
    }
    router.push({ query: { anchorIndex: currentAnchorIndex.value } })
  });
}

const setAnchorJump = (item: AnchorType) => {
  const offsetTop = item.el.offsetTop
  const el = contentRef.value
  el?.scroll(0, offsetTop - HEADER_GAP + 1)
}

const updateAnchor = () => {
  const markdown = wrapperRef.value?.querySelector('.page-wrapper .markdown-body')
  const titles = markdown?.querySelectorAll('.markdown-body > h2')
  const newAnchors = [] as AnchorType[]
  titles?.forEach((el, index) => {
    newAnchors.push({
      index,
      el: el as HTMLElement,
      title: el.textContent 
    })
    el.setAttribute('data-anchors-index', String(index))
  })
  anchors.value = newAnchors
}

onMounted(() => {
  updateAnchor()
  const currentIndex = Number(route.query.anchorIndex)
  currentIndex && setAnchorJump(anchors.value[currentIndex]) 
})

watch(route, () => {
  nextTick(() => {
    currentAnchorIndex.value = 0
    updateAnchor()
    Prism.highlightAll()
  })
})

</script>

<template>
  <main
    class="docs-content"
    @scroll="onScroll"
    ref="contentRef"
  >
    <div
      :class="[isHome ? 'home' : 'page']"
      :key="isHome ? 'home' : 'page'"
    >
      <div class="page-wrapper" ref="wrapperRef">
        <slot />
        <div class="footer"> 底部栏占位 </div>
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
  transition padding .2s ease
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
@media (max-width 719px)
 .page
    padding-left 0

</style>
