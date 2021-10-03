<template>
  <div class="installation">
    <HelloWorld />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './installation.md'
console.log('HelloWorld')
console.log(HelloWorld)
export default defineComponent({
  components: {
    HelloWorld
  }
})
</script>