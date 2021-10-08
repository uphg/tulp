# {{ $route.meta.title }}

## 基础用法

使用 `type` 来定义按钮颜色样式。

<Example class="button-base-demo" :component="ButtonBase" />

## 加载状态

按钮有 loading 状态。

<Example class="button-base-demo" :component="ButtonLoading" />

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

<script setup lang="ts">
// import Example from '~src/components/Example.vue'
import * as ButtonBase from '~src/example/button/base.exmp.vue'
import * as ButtonLoading from '~src/example/button/loading.exmp.vue'
</script>

<style lang="stylus">
.button-base-demo
  .exapmle-component
    display flex
  .tu-button
    margin-right 10px
</style>