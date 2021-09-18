<template>
  <div class="collapse-transition-demo">
    <Button @click="show = !show">Click Me</Button>

    <div style="padding-top: 20px;">
      <CollapseTransition>
        <div v-show="show" style="margin: 40px 0;">
          <div class="transition-box">collapse-transition</div>
          <div class="transition-box">collapse-transition</div>
        </div>
      </CollapseTransition>
      <Button >Click Me</Button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Button, CollapseTransition } from '../../lib/main'

export default defineComponent({
  components: { Button, CollapseTransition },
  setup() {
    return {
      show: ref(false)
    }
  },
})
</script>

<style>
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #415fcf;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
</style>