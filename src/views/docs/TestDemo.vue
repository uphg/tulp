<template>
  <div>
    <h2>Button 按钮测试</h2>
    <div class="test-row">
      <t-button>默认按钮</t-button>
      <t-button type="primary">主要按钮</t-button>
      <t-button type="success">成功按钮</t-button>
      <t-button type="info">信息按钮</t-button>
      <t-button type="warning">警告按钮</t-button>
      <t-button type="error">错误按钮</t-button>
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
  </div>
</template>

<style lang="stylus">
.test-row {
  margin: 20px 0;
  .tu-button {
    margin-right: 10px;
  }
}
</style>
