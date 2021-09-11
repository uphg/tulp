<template>
  <div class="dialog-demo">
    <h2>基础示例</h2>
    <Button @click="clickDialog">点击打开</Button>
    <div>
      <Dialog
        title="我是标题"
        v-model:visible="dialogVisible"
      >
        <template #header>
          <Icon name="error" />
          <span>我是标题</span>
        </template>
        <p>我只想保持本色</p>
        <p>和少年的心气</p>
        <template #footer>
          <Button
            size="small"
            @click="dialogVisible = false"
          >取消</Button>
          <Button
            type="primary"
            size="small"
            @click="dialogVisible = false"
          >确定</Button>
        </template>
      </Dialog>
    </div>
    <h2>快捷打开</h2>
    <div class="dialog-options">
      <Button @click="openSuccess">成功</Button>
      <Button @click="openWarning">警告</Button>
      <Button @click="openInfo">信息</Button>
      <Button @click="openError">错误</Button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import Button from '../../lib/Button.vue'
import Dialog from '../../lib/Dialog.vue'
import Icon from '../../lib/Icon.vue'
import { useDialog } from '../../lib/useDialog'

export default defineComponent({
  components: { Button, Dialog, Icon },
  setup() {
    const dialogVisible = ref(false)
    const dialog = useDialog()
    const openSuccess = () => {
      dialog.success({
        title: '成功',
        content: '你成功了'
      })
    }
    const openWarning = () => {
      dialog.warning({
        title: '警告',
        content: '我要警告你'
      })
    }
    
    const openInfo = () => {
      dialog.info({
        title: '信息',
        content: '这是信息窗口'
      })
    }
    const openError = () => {
      dialog.error({
        title: '错误',
        content: '这是错误窗口'
      })
    }

    const clickDialog = () => {
      dialogVisible.value = !dialogVisible.value
    }

    return { dialogVisible, openSuccess, openWarning, openInfo, openError, clickDialog }
  },
})
</script>
<style lang="scss">
p {
  margin: 0;
  line-height: 2.2;
}
.dialog-options {
  .tu-button {
    margin-right: 10px;
    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
