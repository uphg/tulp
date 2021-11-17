<template>
  <div class="page-anchor">
    <div class="anchor-links">
      <button
        v-for="(item, index) in anchors"
        :key="`anchor-${index}`"
        :class="[
          'anchor-link',
          { active: activeIndex === -1 ? index === 0 : index === activeIndex }
        ]"
        :title="String(item.title)"
        @click="emit('change', item)"
      >
        {{ item.title }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PageAnchorType } from '../interface'

defineProps<{
  activeIndex: number
  anchors: PageAnchorType[]
}>()

const emit = defineEmits<{
  (e: 'change', item: PageAnchorType): void
}>()
</script>

<style lang="stylus">
.page-anchor
  padding-right 24px
  .anchor-links
    width 130px
    position sticky
    top 24px
  .anchor-link
    border none
    cursor pointer
    font-size 13px
    width 100%
    display block
    text-align left
    border-radius 2px
    padding 2px 8px
    background-color transparent
    transition color var(--t-transition-time), background-color var(--t-transition-time)
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    &:hover
      color var(--t-color-primary)
    &.active
      color var(--t-color-primary)
      background-color #e8f3ff
    &:not(:last-child)
      margin-bottom 5px

@media (max-width 1200px)
  .page-anchor
    display none
</style>
