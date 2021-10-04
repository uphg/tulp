<script setup lang="ts">
import { computed, DefineComponent } from 'vue'
import Prism from 'prismjs'

interface ExampleComponent {
  default: DefineComponent,
  __sourceCode: string
}

const props = defineProps<{
  component: unknown
}>()
const component = props.component as ExampleComponent
const codeHtml = computed(() => {
  return Prism.highlight(component.__sourceCode, Prism.languages.html, 'html')
})
</script>

<template>
  <div class="exapmle">
    <div class="exapmle-component">
      <component :is="component.default" />
    </div>
    <div class="exapmle-code">
      <pre class="language-html" v-html="codeHtml" />
    </div>
  </div>
</template>

<style>
pre[class*="language-"] {
  margin: 0;
  font-family: Consolas;
  font-size: 14px;
}
</style>