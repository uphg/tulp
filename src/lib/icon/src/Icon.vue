<template>
  <svg :class="{ [`tu-icon-${name}`]: name }" aria-hidden="true">
    <use :xlink:href="`#tu-icon-${name}`"></use>
  </svg>
</template>

<script lang="ts">
import { Lib } from '../../_utils/default-config'
import { defineComponent } from 'vue'
import '../../_icons'

export default defineComponent({
  name: `${Lib.Prefix}Icon`,
  props: {
    name: String 
  }
})
</script>

<style lang="stylus">
@require '../../_styles/components/icon'
</style>
