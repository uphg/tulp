---
title: Switch 组件
---

用于切换开关状态的组件。

## 基础用法

绑定 value 来切换 Switch 的状态。

<Example demo-class="switch-demo" :code="SwitchBase" />

## 添加内容

可以使用命名插槽添加内容描述。

<Example demo-class="switch-demo" :code="SwitchText" />

## 大小

有三种大小。

<Example demo-class="switch-demo" :code="SwitchSize" />


<script setup lang="ts">
import * as SwitchBase from '~src/example/switch/base.vue'
import * as SwitchText from '~src/example/switch/text.vue'
import * as SwitchSize from '~src/example/switch/size.vue'
</script>

<style lang="stylus">
.switch-demo {
  display: flex;
  align-items: flex-end;
  .tu-switch {
    margin-right: 1em;
  }
}
</style>
