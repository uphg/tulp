<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <t-input v-model:value="value" placeholder="请输入内容" />
</template>
