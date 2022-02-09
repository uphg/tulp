<template>
  <div class="tu-tabs">
    <div class="tu-tabs-nav">
      <div
        v-for="item in tabs"
        :key="item.id"
        class="tu-tabs-nav__item"
        @click="tabIndex = item.tab"
      >{{ item.name }}</div>
    </div>
    <div class="tu-tab-pane">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { provide, ref } from 'vue'
import { TabItem } from './interfaces';

const tabs = ref<TabItem[]>([])

const tabIndex = ref<string | number | boolean>(0)

const addTabs = (value: TabItem) => {
  tabs.value.push(value)
}

const setTabs = (index: number, value: TabItem) => {
  tabs.value[index] = value
}

provide('tabs', tabs)
provide('tabIndex', tabIndex)
provide('addTabs', addTabs)
provide('setTabs', setTabs)

</script>

<style lang="stylus">
.tu-tabs-nav
  display flex
  cursor pointer
  &__item
    padding 10px 20px
    border 1px solid blue
</style>