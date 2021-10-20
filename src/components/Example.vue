<script setup lang="ts">
import { computed, DefineComponent, ref } from 'vue'
import { vueSyntaxHighlight } from '../utils/vue-syntax-highlight'
import { useClipboard } from '@vueuse/core'

interface ExampleComponent {
  default: DefineComponent,
  __sourceCode: string
}

const props = defineProps<{
  codeComponent: unknown
}>()

const visible = ref(false)
const codeComponent = props.codeComponent as ExampleComponent
const { copy, isSupported } = useClipboard({
  source: decodeURIComponent(codeComponent.__sourceCode),
  read: false,
})

const copyStatus = ref(false)
const copytimerId = ref<number | null>(null)

const copyCode = async () => {
  if (!isSupported) {
    console.log('您的浏览器不支持该方法复制')
  }
  if (copyStatus.value) return
  try {
    await copy()
    copyStatus.value = true
    console.log('复制成功！')
    if (copytimerId.value) {
      window.clearTimeout(copytimerId.value)
    }
    copytimerId.value = setTimeout(() => {
      copytimerId.value !== null && window.clearTimeout(copytimerId.value)
      copyStatus.value = false
    }, 3000)
  } catch (e) {
    copyStatus.value = false
    console.log('复制错误：')
    console.log(e)
  }
}

const codeHtml = computed(() => vueSyntaxHighlight(codeComponent.__sourceCode))
const codeIconName = computed(() => visible.value ? 'code-slash' : 'code')
</script>

<template>
  <div class="exapmle">
    <div class="exapmle-component">
      <component :is="codeComponent.default" />
    </div>
    <div class="example-options">
      <t-icon class="example-button github" name="github"></t-icon>
      <span class="copy-wrap">
        <t-icon
          v-if="!copyStatus"
          class="example-button copy"
          name="copy-out-line"
          @click="copyCode"
        ></t-icon>
        <t-icon
          v-else
          class="example-button check-mark"
          name="check-mark"
          @click="copyCode"
        ></t-icon>
      </span>
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
    padding 10px 20px
    border-top 1px solid $border-color
  .example-button
    user-select none
    cursor pointer
    transition fill 0.3s
    width 1em
    height 1em
    &:not(:last-child)
      margin-right 10px
    &.check-mark
      fill $color-success-light

  .exapmle-component
    padding 20px

  .exapmle-code
    border-top 1px solid $border-color

  .code-wrap, .copy-wrap
    position relative
    width 1em
    height 1em
    display flex
    align-items center
    .example-button
      position absolute

  .copy-wrap
    margin-right 10px

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