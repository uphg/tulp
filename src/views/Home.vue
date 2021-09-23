<template>
  <div class="home-content">
    <h1 class="home-title">
      Tulp
    </h1>
    <div class="description">
      <p>一个 Vue 3 组件库</p>
      <p>...</p>
    </div>
    <div class="home-operations">
      <Button type="primary">开始使用</Button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { Button } from '../lib/index';

export default defineComponent({
  components: { Button }
})
</script>
<style lang="stylus">
.home-content {
  text-align: center;
  margin-top: -16vh;
  .home-title{
    font-weight: 700; 
    font-size: 100px;
    // font-family: https://fonts.google.com/specimen/Bangers#standard-styles
    font: 8em/1 Bangers, sans-serif;
    text-align: center;
    text-shadow: -.025em -.025em 0 #444, .025em -.025em 0 #444, -.025em .025em 0 #444, .025em .025em 0 #444;
    color: #fff;
    margin: 0 0 20px;
    transition: font-size 0.25s;
  }
  .description {
    color: #476582;
    margin-bottom: 20px;
  }
  @media (max-width: 719px) {
    .home-title {
      font-size: 60px;
      // text-shadow: 3px 3px 0 #ffc947;
    }
  }
}

</style>
