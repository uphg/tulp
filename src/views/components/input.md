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

<script setup lang="ts">
import * as InputBase from '~src/example/input/base.vue'
import * as InputPrefixAndSuffix from '~src/example/input/prefix-and-suffix.vue'
</script>
