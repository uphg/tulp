---
title: Dialog 对话框
---

Dialog 弹出对话框组件

## 基本用法

<Example class="dialog-demo" :code="DialogBase" />

## 自定义模板

可以添加自定义模板

<Example class="dialog-demo" :code="DialogCustom" />

## 快捷打开

可以用函数调用的方式快捷打开

<Example class="dialog-demo" :code="DialogQuick" />


<script setup lang="ts">
import * as DialogBase from '~src/example/dialog/base.vue'
import * as DialogCustom from '~src/example/dialog/custom.vue'
import * as DialogQuick from '~src/example/dialog/quick.vue'
</script>

<style lang="stylus">
.dialog-demo
  .tu-button
    margin-right 10px

</style>
