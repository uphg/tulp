---
title: Input 输入框
---

输入框组件。

## 基础用法

文本输入框

<Example demo-class="input-demo" :code="InputBase" />

## 前缀 & 后缀

通过插槽添加前缀后缀

<Example demo-class="input-demo" :code="InputPrefixAndSuffix" />

## 输入组

输入框可以组合

<Example demo-class="input-demo" :code="InputGroup" />

<script setup lang="ts">
import * as InputBase from '~src/example/input/base.vue'
import * as InputPrefixAndSuffix from '~src/example/input/prefix-and-suffix.vue'
import * as InputGroup from '~src/example/input/group.vue'
</script>

<style>
.space {
  max-width: 300px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  gap: 10px;
}
</style>