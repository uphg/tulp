---
title: Button 组件示例
---

## 基本示例

<Example class="button-type-demo" :component="ButtonType" />

<script setup lang="ts">
import Example from '~src/components/Example.vue'
import * as ButtonType from './ButtonType.example.vue'
console.log('ButtonType')
console.log(ButtonType)
</script>

<style lang="stylus">
.button-type-demo{
  .tu-button {
    margin-right: 10px;
  }
}
</style>