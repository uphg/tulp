<template>
  <Teleport to="body" :disabled="wrap">
    <transition
      name="dialog-fade"
      @after-leave="handleAfterLeave"
    >
      <div
        v-show="visible"
        class="tu-dialog-container"
        v-bind="$attrs"
      >
        <div class="tu-dialog-overlay" @click="closeDialog"></div>
        <div class="tu-dialog">
          <div class="tu-dialog-content">
            <div class="tu-dialog-header">
              <template v-if="!$slots.header">
                <span class="tu-dialog-title">{{ title }}</span>
                <span class="tu-dialog-close" @click="closeDialog"></span>
              </template>
              <template v-else>
                <slot name="header" />
              </template>
            </div>
            <div class="tu-dialog-body">
              <slot />
            </div>
            <div class="tu-dialog-footer">
              <slot name="footer" />
            </div>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>
<script lang="ts">
import { defineComponent, provide } from 'vue'
import { Lib } from '../utils/default-config'
export default defineComponent({
  name: `${Lib.Prefix}Dialog`,
  emits: ['update:visible', 'close'],
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    title: String,
    wrap: Boolean
  },
  setup(props, context) {
    const closeDialog = () => {
      context.emit('update:visible', false)
    }

    const handleAfterLeave = () => {
      context.emit('close', false)
    }

    provide('TuCloseDialog', closeDialog)

    return { closeDialog, handleAfterLeave }
  }
})
</script>
<style lang="scss">
@import 'style/components/dialog';
</style>
