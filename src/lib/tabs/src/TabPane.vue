<template>
  <template v-if="tabIndex === index">
    <slot />
  </template>
</template>

<script setup lang="ts">
import { inject, onMounted, ref } from 'vue'
import type { PropType, Ref } from 'vue'
import { TabItem } from './interfaces';

const props = defineProps({
  name: {
    type: String as PropType<string>,
    default: ''
  },
  tab: {
    type: [String, Number, Boolean] as PropType<string | number | boolean>,
    default: ''
  }
})

const addTabs = inject<(value: TabItem) => void>('addTabs')
const tabs = inject<Ref<TabItem[]>>('tabs')
const tabIndex = inject('tabIndex')
const index = ref<string | number | boolean>(0)

onMounted(() => {
  if (tabs?.value) {
    index.value = props.tab || tabs.value.length
    addTabs?.({
      name: props.name,
      tab: index.value,
      id: Symbol('tab')
    })
    console.log('tabs.value')
    console.log({...tabs.value})
  }
})

</script>