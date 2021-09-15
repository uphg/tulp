<template>
  <div class="button-demo">
    <h2>Button 组件示例</h2>
    <div style="margin-top: 10px;">
      <Button @click="onClick">默认按钮</Button>
      <Button type="primary" @click="onClick">主要按钮</Button>
      <Button type="success" @click="onClick">成功按钮</Button>
      <Button type="info" @click="onClick">信息按钮</Button>
      <Button type="warning" @click="onClick">警告按钮</Button>
      <Button type="error" @click="onClick">错误按钮</Button>
    </div>
    <h2>测试原生 type 属性</h2>
    <div>
      <Button native-type="submit" @click="onClick">默认按钮</Button>
    </div>
    <h2>测试 Loading 状态</h2>
    <div style="display: flex; padding-bottom: 10px;">
      <Button :loading="loading" @click="loading = !loading">默认按钮</Button>
      <Button icon="success" :loading="loading" @click="loading = !loading">默认按钮</Button>
    </div>
  </div>
</template>
<script lang="ts">
import Button from '../../lib/button/Button.vue'
import { defineComponent, ref } from 'vue';
export default defineComponent({
  components: { Button },
  setup() {
    const loading = ref(false)
    const onClick = (event: Event) => {
      console.log('hi')
    }
    return { onClick, loading }
  }
})
</script>
<style lang="stylus">
.button-demo {
  .tu-button {
    margin-right: 10px;
  }
}
</style>
