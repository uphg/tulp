<script setup lang="ts">
import { computed, DefineComponent, ref } from 'vue'
import Prism from 'prismjs'

interface ExampleComponent {
  default: DefineComponent,
  __sourceCode: string
}

const props = defineProps<{
  codeComponent: unknown
}>()

const visible = ref(false)
const codeComponent = props.codeComponent as ExampleComponent

const codeHtml = computed(() => (
  Prism.highlight(codeComponent.__sourceCode, Prism.languages.html, 'html')
))
const codeIconName = computed(() => visible.value ? 'code-slash' : 'code')
</script>

<template>
  <div class="exapmle">
    <div class="example-options">
      <t-icon class="example-button copy" name="copy-out-line"></t-icon>
      <span class="code-wrap">
        <transition name="exapmle-fade">
          <t-icon
            class="example-button"
            :name="codeIconName"
            :key="codeIconName"
            @click="visible = !visible"
          ></t-icon>
        </transition>
      </span>
    </div>
    <div class="exapmle-component">
      <component :is="codeComponent.default" />
    </div>
    <t-collapse-transition>
      <div class="exapmle-code" v-show="visible">
        <pre class="language-vue-html" v-html="codeHtml" />
      </div>
    </t-collapse-transition>
  </div>
</template>

<style lang="stylus">
.exapmle
  border 1px solid $border-color
  border-radius 3px
  .example-options
    display flex
    justify-content flex-end
    align-items center
    padding 16px 20px
    border-bottom 1px solid $border-color
  .example-button
    cursor pointer
    transition fill 0.3s
    &:not(:last-child)
      margin-right 10px
    &.copy
      width 1.1em
      height 1.1em
  .exapmle-component
    padding 20px
  .exapmle-code
    border-top 1px solid $border-color
  .code-wrap
    position relative
    width 1.25em
    height 1.25em
    .example-button
      position absolute
  pre[class*="language-"]
    margin 0
    font-family Consolas
    font-size 14px
  .exapmle-fade-enter-active,
  .exapmle-fade-leave-active
    transition opacity 0.25s ease, transform 0.25s ease

  .exapmle-fade-enter-from,
  .exapmle-fade-leave-to
    opacity 0

</style>