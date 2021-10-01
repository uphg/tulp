<script setup lang="ts">
import { inject, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const props = defineProps({
  link: {
    type: Object,
    default: () => ({})
  },
  active: Boolean
})

const setSidebar: any = inject('setSidebar')

const clickLinks = (param: any) => {
  if (props.link.name === 'Home') {
    setSidebar([])
  } else {
    setSidebar(param)
  }
}
const getLink = computed(() => {
  const link = props.link
  return `${link?.path === '/' ? '' : link.path}/${link.items[0].items[0].path}`
})

</script>

<template>
  <div class="nav-link-item">
    <router-link
      class="nav-link"
      :class="{ 'nav-link-active': active }"
      :to="getLink"
      @click="clickLinks(link.items)"
    >{{ link?.meta?.title || link.name }}</router-link>
  </div>
</template>
