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
    <h2>可以自定义内容</h2>
    <div>
      <Button @click="clickCustomize">点击打开</Button>
      <Dialog
        display-directive="show"
        v-model:visible="customizeVisible"
        customize
      >
        <div class="dialog-block">
          <p>我是自定义内容</p>
          <div>
            <Button @click="customizeVisible = false" type="info">关闭</Button>
            <Button @click="customizeVisible = false" type="success">确认</Button>
          </div>
        </div>
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
import { Button, Dialog, useDialog } from '../../lib/main'

export default defineComponent({
  components: { Button, Dialog },
  setup() {
    const dialogVisible = ref(false)
    const customizeVisible = ref(false)
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

    const clickCustomize = () => {
      customizeVisible.value = !customizeVisible.value
    }

    return { dialogVisible, customizeVisible, openSuccess, openWarning, openInfo, openError, clickDialog, clickCustomize }
  },
})
</script>
<style lang="stylus">
p
  margin 0
  line-height 2.2

.dialog-options
  .tu-button
    margin-right 10px
    &:last-child
      margin-right 0

.dialog-block
  background-color #fff
  padding 20px
  .tu-button
    margin-left 10px
  & > p
    padding 0 0 20px
  & > div
    text-align right 

</style>
