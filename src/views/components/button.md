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

## 按钮大小

按钮有三种大小

<Example class="button-demo" :code="ButtonSize" />

## 按钮形状

按钮有多种形状。

<Example class="button-demo" :code="ButtonShape" />

## 文本按钮

按钮可以是文本。

<Example class="button-demo" :code="ButtonText" />

## 虚线按钮

使用 `dashed` 设置虚线按钮

<Example class="button-demo" :code="ButtonDashed" />

## 透明背景

带有 `ghost` 属性的透明背景按钮

<Example class="button-demo" :code="ButtonGhost" />

<script setup lang="ts">
import * as ButtonBase from '~src/example/button/base.vue'
import * as ButtonIcon from '~src/example/button/icon.vue'
import * as ButtonLoading from '~src/example/button/loading.vue'
import * as ButtonSize from '~src/example/button/size.vue'
import * as ButtonShape from '~src/example/button/shape.vue'
import * as ButtonText from '~src/example/button/text.vue'
import * as ButtonDashed from '~src/example/button/dashed.vue'
import * as ButtonGhost from '~src/example/button/ghost.vue'
</script>

<style lang="stylus">

.button-demo
  .exapmle-component
    display flex
    align-items flex-end

  .tu-button
    margin-right 10px

</style>
