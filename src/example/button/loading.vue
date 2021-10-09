<script setup lang="ts">
import { ref } from 'vue'

const loading = ref<boolean>(false)
</script>

<template>
  <Button icon="success" :loading="loading" @click="loading = !loading">点我</Button>
  <Button :loading="loading" @click="loading = !loading">点我</Button>
</template>
