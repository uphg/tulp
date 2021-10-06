# {{ $route.meta.title }}

## 基础用法

<Example class="button-base-demo" :component="ButtonBase" />

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
</script>

<style lang="stylus">
.button-base-demo
  .tu-button
    margin-right 10px
</style>