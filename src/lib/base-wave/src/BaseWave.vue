<template>
  <span
    ref="selfRef"
    class="tu-base-wave"
    :class="{ [activeClass]: isActive }"
  />
</template>

<script lang="ts">
import { defineComponent, ref, nextTick, computed } from 'vue'
import type { Ref } from 'vue'
import { Lib } from '../../_utils/config'
export default defineComponent({
  name: `${Lib.Prefix}BaseWave`,
  props: {
    big: Boolean
  },
  setup(props) {
    const isActive: Ref<boolean> = ref(false)
    const selfRef = ref<HTMLElement | null>(null)
    const activeClass = computed(() => props.big ? 'is-big-active' : 'is-active')

    let animationTimerId: number | null = null

    const destroyTimeout = () => {
      isActive.value = false
      typeof animationTimerId === 'number' && window.clearTimeout(animationTimerId)
      animationTimerId = null
    }

    const triggerWave = () => {
      if (isActive.value) {
        destroyTimeout()
      }
      nextTick(() => {
        void selfRef.value?.offsetHeight
        isActive.value = true
        animationTimerId = window.setTimeout(() => {
          destroyTimeout()
        }, 1000)
      })
    }

    return { isActive, selfRef, activeClass, triggerWave }
  }
})
</script>

<style lang="stylus">
@require '../../_styles/components/base-wave'
</style>
