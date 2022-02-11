<template>
  <t-tabs v-model:value="value">
    <t-tab-pane :name="1" label="标题1">我是 1 号</t-tab-pane>
    <t-tab-pane :name="2" label="标题22">我是 2 号</t-tab-pane>
    <t-tab-pane :name="3" label="标题333">我是 3 号</t-tab-pane>
  </t-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref(2)
</script>
