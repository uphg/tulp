<template>
  <div class="tu-tabs">
    <div class="tu-tab-nav">
      <button
        v-for="item in titles"
        :key="item.name"
        class="tu-tab-nav__item"
        @click="handleTabClick(item)"
      >{{ item.label }}</button>
    </div>
    <component :is="content" :key="content?.props?.name" />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, useSlots } from 'vue'
import type { PropType } from 'vue'

const slots = useSlots()
const props = defineProps({
  value: {
    type: [String, Number, Boolean] as PropType<string | number | boolean>
  }
})

const emit = defineEmits(['update:value'])

const content = computed(() => slots.default?.().find((item) => {
  return item.props?.name === props.value
}))

const titles = computed(() => slots.default?.().map((item) => {
  const { label, name } = item.props || {}
  return { label, name }
}))

const handleTabClick = (item: { label: any, name: any }) => {
  emit('update:value', item.name)
}

onMounted(() => {
  console.log('content')
  console.log(content.value)
})

</script>

<style lang="stylus">
.tu-tabs-nav
  display flex
  cursor pointer
  &__item
    padding 10px 20px
    border 1px solid blue
</style>