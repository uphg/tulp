<script lang="ts" setup>
import { Button } from '~src/lib/index';
</script>

<template>
  <div class="home">
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
  </div>
</template>

<style lang="stylus">
.home
  height 100%

.home .page-wrapper
  height 100%
  display flex
  flex-direction column
  justify-content center
  align-items center

.home-content {
  text-align: center;
  margin-top: -16vh;
  .home-title{
    font-size: 7em;
    font-weight: bold;
    // font-family: https://fonts.google.com/specimen/Bangers#standard-styles
    font-family: Bangers, sans-serif;
    text-align: center;
    text-shadow: 6px 6px 0 #ffc947;
    margin: 0 0 20px;
    transition: font-size 0.25s;
  }
  .description {
    color: #476582;
    margin-bottom: 20px;
  }
}

</style>
