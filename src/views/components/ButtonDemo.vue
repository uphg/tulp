<template>
  <div class="button-demo">
    <h2>原生按钮</h2>
    <div>
      <button
        @focus="onFocus($event), onFocus2($event), onFocus3($event)"
        @blur="onBlur($event), onBlur2($event), onBlur3($event)"
        @click="onClick($event), onClick2($event), onClick3($event)"
      >普通按钮</button>
    </div>
    <h2>Button 组件示例</h2>
    <div style="margin-top: 10px;">
      <Button
        @focus="onFocus($event), onFocus2($event), onFocus3($event)"
        @blur="onBlur($event), onBlur2($event), onBlur3($event)"
        @click="onClick($event), onClick2($event), onClick3($event)"
      >默认按钮</Button>
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
    <h2>测试 disabled 状态</h2>
    <div>
      <Button disabled>默认按钮</Button>
    </div>
  </div>
</template>
<script lang="ts">
import { Button } from 'src/lib/index'
import { defineComponent, ref } from 'vue';
export default defineComponent({
  components: { Button },
  setup() {
    const loading = ref(false)
    const onClick = (event: Event) => {
      console.log('hi onClick')
    }
    const onClick2 = (event: Event) => {
      console.log('onClick2')
    }
    const onClick3 = (event: Event) => {
      console.log('onClick3')
    }
    const onBlur = (event: Event) => {
      console.log('onBlur')
    }
    const onBlur2 = (event: Event) => {
      console.log('onBlur2')
    }
    const onBlur3 = (event: Event) => {
      console.log('onBlur3')
    }

    const onFocus = (event: Event) => {
      console.log('onFocus')
    }

    const onFocus2 = (event: Event) => {
      console.log('onFocus2')
    }

    const onFocus3 = (event: Event) => {
      console.log('onFocus3')
    }
    return {
      onClick,
      onClick2,
      onClick3,
      onBlur,
      onBlur2,
      onBlur3,
      onFocus,
      onFocus2,
      onFocus3,
      loading
    }
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
