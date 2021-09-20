<template>
  <div class="collapse-transition-demo">
    <TButton @click="show = !show">Click Me</TButton>

    <div class="transition-box__wrap">
      <CollapseTransition>
        <div v-show="show" class="transition-box__parent">
          <div class="transition-box__part">
            <div class="transition-box">collapse-transition</div>
            <div class="transition-box">collapse-transition</div>
          </div>
        </div>
      </CollapseTransition>
    </div>
    <TButton>Click Me</TButton>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Button, CollapseTransition } from '../../lib/main'

export default defineComponent({
  components: { TButton: Button, CollapseTransition },
  setup() {
    return {
      show: ref(false)
    }
  },
})
</script>

<style lang="stylus">
.transition-box
  &__wrap
    background-color #c6e2ff
    overflow hidden
  &__parent
    margin 40px 0
    padding 40px 0
    background-color #e1f3d8
  &__part
    background-color #fff
  &
    width 200px
    height 100px
    border-radius 4px
    background-color #415fcf
    text-align center
    color #fff
    padding 40px 20px
    box-sizing border-box
    margin-right 20px
    &:not(:last-child)
      margin-bottom 10px
  
</style>