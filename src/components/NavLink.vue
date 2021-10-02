<script setup lang="ts">
import { inject, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const props = defineProps({
  item: {
    type: Object,
    default: () => ({})
  },
  active: Boolean
})

const setSidebar: any = inject('setSidebar')

const clickLinks = (param: any) => {
  if (props.item.name !== 'Home') {
    setSidebar(param)
  } else {
    setSidebar([])
  }
}
const link = computed(() => {
  const item = props.item
  console.log('item')
  console.log(item)
  return `${item?.path === '/' ? '' : item.path}/${item.items[0].items[0].path}`
})

</script>

<template>
  <div class="nav-link-item">
    <router-link
      class="nav-link"
      :class="{ 'nav-link-active': active }"
      :to="link"
      @click="clickLinks(item.items)"
    >{{ item?.meta?.title || item.name }}</router-link>
  </div>
</template>
