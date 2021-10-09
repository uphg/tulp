常用的按钮功能。

## 基础用法

使用 `type` 来定义按钮颜色样式。

<Example class="button-demo" :component="ButtonBase" />

## 图标按钮

添加图标来增加按钮的辨识度。

<Example class="button-demo" :component="ButtonIcon" />

## 加载状态

按钮有 loading 状态。

<Example class="button-demo" :component="ButtonLoading" />

<script setup lang="ts">
// import Example from '~src/components/Example.vue'
import * as ButtonBase from '~src/example/button/base.vue'
import * as ButtonLoading from '~src/example/button/loading.vue'
import * as ButtonIcon from '~src/example/button/icon.vue'
</script>

<style lang="stylus">
.button-demo
  .exapmle-component
    display flex
  .tu-button
    margin-right 10px
</style>