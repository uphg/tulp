<template>
  <div>
    <t-input v-model:value="value" placeholder="请输入内容">
      <template #prefix>
        ￥
      </template>
    </t-input>
    <p>{{ value }}</p>
  </div>
  <div>
    <h2>Collapse Transition 组件测试</h2>
    <div>
      hi
    </div>
  </div>
  <div>
    <h2>按钮组</h2>
    <div class="button-group-row">
      <t-button-group>
        <t-button>上一页</t-button>
        <t-button>第1页</t-button>
        <t-button>第2页</t-button>
        <t-button>第3页</t-button>
        <t-button>下一页</t-button>
      </t-button-group>
    </div>
    <div class="button-group-row">
      <t-button-group>
        <t-button round>上一页</t-button>
        <t-button round>第1页</t-button>
        <t-button round>第2页</t-button>
        <t-button round>第3页</t-button>
        <t-button round>下一页</t-button>
      </t-button-group>
    </div>
    <div class="button-group-row">
      <t-button-group vertical>
        <t-button round>上一页</t-button>
        <t-button round>第1页</t-button>
        <t-button round>第2页</t-button>
        <t-button round>第3页</t-button>
        <t-button round>下一页</t-button>
      </t-button-group>
    </div>
    <div class="button-group-row">
      <t-button-group>
        <t-button class="primary">上一页</t-button>
        <t-button class="primary">第1页</t-button>
        <t-button class="primary">第2页</t-button>
        <t-button class="primary">第3页</t-button>
        <t-button class="primary">下一页</t-button>
      </t-button-group>
    </div>
    <div class="button-group-row">
      <t-button-group>
        <t-button round>上一页</t-button>
        <t-button round>第1页</t-button>
        <t-button round>第2页</t-button>
        <t-button round>第3页</t-button>
        <t-button round>下一页</t-button>
      </t-button-group>
    </div>
    <h2>文本按钮</h2>
    <div class="test-row">
      <t-button icon="info" text>默认按钮</t-button>
      <t-button type="primary" text>主要按钮</t-button>
      <t-button type="success" text>成功按钮</t-button>
      <t-button type="info" text>信息按钮</t-button>
      <t-button type="warning" text>警告按钮</t-button>
      <t-button type="error" text>错误按钮</t-button>
    </div>
    <h2>圆角按钮</h2>
    <div class="test-row">
      <t-button size="small" round>默认按钮</t-button>
      <t-button size="small" type="primary" round>主要按钮</t-button>
      <t-button size="small" type="success" round>成功按钮</t-button>
      <t-button size="small" type="info" round>信息按钮</t-button>
      <t-button size="small" type="warning" round>警告按钮</t-button>
      <t-button size="small" type="error" round>错误按钮</t-button>
    </div>
    <div class="test-row">
      <t-button round>默认按钮</t-button>
      <t-button type="primary" round>主要按钮</t-button>
      <t-button type="success" round>成功按钮</t-button>
      <t-button type="info" round>信息按钮</t-button>
      <t-button type="warning" round>警告按钮</t-button>
      <t-button type="error" round>错误按钮</t-button>
    </div>

    <div class="test-row">
      <t-button size="large" round>默认按钮</t-button>
      <t-button size="large" type="primary" round>主要按钮</t-button>
      <t-button size="large" type="success" round>成功按钮</t-button>
      <t-button size="large" type="info" round>信息按钮</t-button>
      <t-button size="large" type="warning" round>警告按钮</t-button>
      <t-button size="large" type="error" round>错误按钮</t-button>
    </div>

    <h2>圆角图标</h2>
    <div class="test-row">
      <t-button icon="info" size="small" circle />
      <t-button icon="info" size="small" type="primary" circle />
      <t-button icon="info" size="small" type="success" circle />
      <t-button icon="info" size="small" type="info" circle />
      <t-button icon="info" size="small" type="warning" circle />
      <t-button icon="info" size="small" type="error" circle />
    </div>
    <div class="test-row">
      <t-button icon="info" circle />
      <t-button icon="info" type="primary" circle />
      <t-button icon="info" type="success" circle />
      <t-button icon="info" type="info" circle />
      <t-button icon="info" type="warning" circle />
      <t-button icon="info" type="error" circle />
    </div>
    <div class="test-row">
      <t-button icon="info" size="large" circle />
      <t-button icon="info" size="large" type="primary" circle />
      <t-button icon="info" size="large" type="success" circle />
      <t-button icon="info" size="large" type="info" circle />
      <t-button icon="info" size="large" type="warning" circle />
      <t-button icon="info" size="large" type="error" circle />
    </div>
    <h2>基本按钮测试</h2>
    <div class="test-row">
      <t-button>默认按钮</t-button>
      <t-button type="primary">主要按钮</t-button>
      <t-button type="success">成功按钮</t-button>
      <t-button type="info">信息按钮</t-button>
      <t-button type="warning">警告按钮</t-button>
      <t-button type="error">错误按钮</t-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
</script>

<style lang="stylus">
.test-row {
  margin: 20px 0;
  .tu-button {
    margin-right: 10px;
  }
}
.button-group-row {
  margin-bottom: 20px;
}
</style>
