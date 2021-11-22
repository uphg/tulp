<template>
  <div>
    <t-switch v-model:value="value" size="small">
      <template #checked>开启了我</template>
      <template #unchecked>我关闭了啊啊啊</template>
    </t-switch>
    <br>
    <br>
    <t-switch v-model:value="value">
      <template #checked>开启了我</template>
      <template #unchecked>我关闭了啊啊啊</template>
    </t-switch>
    <br>
    <br>
    <t-switch v-model:value="value" size="large">
      <template #checked>开启了我</template>
      <template #unchecked>我关闭了啊啊啊</template>
    </t-switch>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref(false)
</script>
