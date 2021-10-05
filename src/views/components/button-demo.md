---
title: Button 组件示例
---

# {{ frontmatter.title }}

<!-- 标题：{{ frontmatter.title }} -->

## 基本示例，基本示例，基本示例，基本示例，基本示例，基本示例

<Example class="button-type-demo" :component="ButtonType" />

<script setup lang="ts">
import Example from '~src/components/Example.vue'
import * as ButtonType from './ButtonType.example.vue'
</script>

<style lang="stylus">
.button-type-demo
  .tu-button
    margin-right 10px
</style>

## 标题e

<p
  v-for="item in 10"
  :key="`p-${item}`"
>{{ '内容' + item }}</p>

## 标题a

<p
  v-for="item in 10"
  :key="`p-${item}`"
>{{ '内容' + item }}</p>

## 标题b

<p
  v-for="item in 10"
  :key="`p-${item}`"
>{{ '内容' + item }}</p>

## 标题c

<p
  v-for="item in 10"
  :key="`p-${item}`"
>{{ '内容' + item }}</p>

## 标题d

<p
  v-for="item in 10"
  :key="`p-${item}`"
>{{ '内容' + item }}</p>
