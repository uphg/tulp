<template>
  <Button>Default</Button>
  <Button type="primary">Primary</Button>
  <Button type="success">Success</Button>
  <Button type="info">Info</Button>
  <Button type="warning">Warning</Button>
  <Button type="error" data-type="2">Error</Button>
  <div class="hi"></div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '../../lib/index'

// 注释内容噢 const a = 1
const message = ref('hello world')
const boolean1 = false
const boolean2 = true
const number1 = 1
const obj1 = {
  key1: 'hi',
  key2: 99,
  key3: Symbol()
}
</script>