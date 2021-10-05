<script setup lang="ts">
import { AnchorType } from './interface'

const props = defineProps<{
  activeIndex: number,
  anchors: AnchorType[]
}>()

const emit = defineEmits<{
  (e: 'change', item: AnchorType): void
}>()
</script>

<template>
  <div class="page-anchor">
    <div class="anchor-links">
      <button
        v-for="(item, index) in anchors"
        :key="`anchor-${index}`"
        :class="[
          'anchor-link',
          { active: index === activeIndex }
        ]"
        @click="emit('change', item)"
        :title="String(item.title)"
      >{{ item.title }}</button>
    </div>
  </div>
</template>

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
    transition color $_transition-time, background-color $_transition-time
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    &:hover
      color $_color-primary
    &.active
      color $_color-primary
      background-color #e8f3ff
    &:not(:last-child)
      margin-bottom 5px

@media (max-width 1200px)
  .page-anchor
    display none
</style>