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

## 可自定义值

可以自定义开关的值。

<Example demo-class="switch-demo" :code="SwitchCustomValue" />

## 形状

可以设置为方形。

<Example demo-class="switch-demo" :code="SwitchShape" />

## 属性

| 名称           | 说明           | 类型                                  | 默认值  |
| -------------- | -------------- | ------------------------------------- | ------- |
| value          | 开关的状态     | `string \| number \| boolean`         | `false` |
| size           | 开关的大小     | `'' \| large' \| 'medium' \| 'small'` | `''`    |
| checkedValue   | 开启时的默认值 | `string \| number \| boolean`         | `false` |
| uncheckedValue | 关闭时的默认值 | `string \| number \| boolean`         | `false` |
| square         | 是否为方形     | `boolean`                             | `false` |




<script setup lang="ts">
import * as SwitchBase from '~src/example/switch/base.vue'
import * as SwitchText from '~src/example/switch/text.vue'
import * as SwitchSize from '~src/example/switch/size.vue'
import * as SwitchCustomValue from '~src/example/switch/custom-value.vue'
import * as SwitchShape from '~src/example/switch/shape.vue'
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
