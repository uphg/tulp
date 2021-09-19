<template>
  <div class="collapse-transition-demo">
    <Button @click="show = !show">Click Me</Button>

    <div style="background-color: #d9ecff; overflow: hidden;">
      <CollapseTransition>
        <div v-show="show" class="transition-box-parent">
          <div class="transition-box">collapse-transition</div>
          <div class="transition-box">collapse-transition</div>
        </div>
      </CollapseTransition>
    </div>
    <Button>Click Me</Button>
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

<style lang="stylus">
  .transition-box-parent {
    padding: 20px 0; background-color: #f2f6fc;
  }
  .transition-box {
    /* margin-bottom: 10px; */
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #415fcf;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
    &:not(:last-child) {
      margin-bottom 10px
    }
  }
</style>