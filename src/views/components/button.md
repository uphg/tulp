---
title: Button 按钮
---

常用的按钮功能。

## 基础用法

使用 `type` 来定义按钮颜色样式。

<Example class="button-demo" :code="ButtonBase" />

## 图标按钮

添加图标来增加按钮的辨识度。

<Example class="button-demo" :code="ButtonIcon" />

## 加载状态

按钮有 loading 状态。

<Example class="button-demo" :code="ButtonLoading" />

## 虚线按钮

使用 `dashed` 设置虚线按钮

<Example class="button-demo" :code="ButtonDashed" />

## 透明背景

带有 `ghost` 属性的透明背景按钮

<Example class="button-demo" :code="ButtonGhost" />

<script setup lang="ts">
import * as ButtonBase from '~src/example/button/base.vue'
import * as ButtonLoading from '~src/example/button/loading.vue'
import * as ButtonIcon from '~src/example/button/icon.vue'
import * as ButtonDashed from '~src/example/button/dashed.vue'
import * as ButtonGhost from '~src/example/button/ghost.vue'
</script>

<style lang="stylus">

.button-demo
  .exapmle-component
    display flex

  .tu-button
    margin-right 10px

</style>
