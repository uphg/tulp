<template>
  <t-tabs>
    <t-tab-pane name="标题1">我是 1 号</t-tab-pane>
    <t-tab-pane name="标题2">我是 2 号</t-tab-pane>
    <t-tab-pane name="标题3">我是 3 号</t-tab-pane>
  </t-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref(false)
</script>
