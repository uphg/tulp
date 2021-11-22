<template>
  <t-switch
    v-model:value="value"
    :checked-value="1"
    :unchecked-value="0"
  />
  <t-switch
    v-model:value="value2"
    checked-value="hi"
    unchecked-value="hello"
  />
  <t-switch
    v-model:value="value3"
  />
  <t-switch
    v-model:value="value4"
    :checked-value="false"
    :unchecked-value="true"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref(1)
const value2 = ref('hi')
const value3 = ref(true)
const value4 = ref(true)
</script>
