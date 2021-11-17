<template>
  <svg :class="{ [`tu-icon-${name}`]: name }" aria-hidden="true">
    <use :xlink:href="`#tu-icon-${name}`" />
  </svg>
</template>

<script lang="ts">
import { Lib } from '../../_utils/default-config'
import { defineComponent } from 'vue'
import { useIcons } from '../../_icons/use-icons'

export default defineComponent({
  name: `${Lib.Prefix}Icon`,
  props: {
    name: String
  },
  setup() {
    useIcons(window)
  }
})
</script>

<style lang="stylus">
@require '../../_styles/components/icon'
</style>
