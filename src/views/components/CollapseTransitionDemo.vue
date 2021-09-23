<template>
  <div class="transition-demo">
    <TButton @click="show = !show">Click Me</TButton>

    <div class="collapse-box__wrap">
      <CollapseTransition>
        <div
          v-show="show"
          class="collapse-box__parent"
        >
          <div class="collapse-box__part">
            <div class="collapse-box">collapse-transition</div>
            <div class="collapse-box">collapse-transition</div>
          </div>
        </div>
      </CollapseTransition>
    </div>
    <h2>横向过渡</h2>
    <div>
      <TButton @click="show2 = !show2">on/off</TButton>
      <div class="expand-box__wrap" style="height: 210px;">
        <ExpandTransition>
          <div v-show="show2" class="expand-box__parent">
            <div class="expand-box__part">
              <div class="expand-box">expand-transition</div>
              <div class="expand-box">expand-transition</div>
            </div>
          </div>
        </ExpandTransition>
      </div>
      <TButton>我是按钮</TButton>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Button, CollapseTransition, ExpandTransition } from '../../lib/index'

export default defineComponent({
  components: { TButton: Button, CollapseTransition, ExpandTransition },
  setup() {
    return {
      show: ref(false),
      show2: ref(false)
    }
  },
})
</script>

<style lang="stylus">
.collapse-box
  &__wrap
    background-color #c6e2ff
    overflow hidden
  &__parent
    box-sizing border-box
    margin 40px 0
    padding 5vh 0
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
    &:not(:last-child)
      margin-bottom 10px

.expand-box
  &__wrap
    background-color #c6e2ff
    overflow hidden
  &__parent
    width 200px
    margin 0 40px
    background-color #e1f3d8
  &__part
    background-color #fff
  &
    height 100px
    border-radius 4px
    background-color #415fcf
    text-align center
    color #fff
    padding 40px 20px
    box-sizing border-box
    &:not(:last-child)
      margin-bottom 10px

</style>