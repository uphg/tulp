<template>
  <div class="dialog-demo">
    <h2>基础示例</h2>
    <TButton @click="clickDialog">点击打开</TButton>
    <div>
      <Dialog
        title="我是标题"
        v-model:visible="dialogVisible"
        @close="close"
        @closed="closed"
      >
        <template #header>
          <span>我是标题</span>
        </template>
        <p>我只想保持本色</p>
        <p>和少年的心气</p>
        <template #footer>
          <TButton
            size="small"
            @click="dialogVisible = false"
          >取消</TButton>
          <TButton
            type="primary"
            size="small"
            @click="dialogVisible = false"
          >确定</TButton>
        </template>
      </Dialog>
    </div>
    <h2>可以自定义内容</h2>
    <div>
      <TButton @click="clickCustom">点击打开</TButton>
      <Dialog
        render-directive="show"
        v-model:visible="customVisible"
        preset="custom"
        :mask-closable="false"
        @on-mask-click="onMaskClick"
      >
        <div class="dialog-block">
          <p>我是自定义内容</p>
          <div>
            <TButton @click="customVisible = false" type="info">关闭</TButton>
            <TButton @click="customVisible = false" type="success">确认</TButton>
          </div>
        </div>
      </Dialog>
    </div>
    <h2>快捷打开</h2>
    <div class="dialog-options">
      <TButton @click="openSuccess">成功</TButton>
      <TButton @click="openWarning">警告</TButton>
      <TButton @click="openInfo">信息</TButton>
      <TButton @click="openError">错误</TButton>
    </div>
    <div>
      <p v-for="item in 20" :key="item">{{ '你好啊' }}</p>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { TButton, Dialog, useDialog } from '../../lib/index'

export default defineComponent({
  components: { TButton, Dialog },
  setup() {
    const dialogVisible = ref(false)
    const customVisible = ref(false)
    const dialog = useDialog()
    const openSuccess = () => {
      dialog.success({
        title: '成功',
        content: '你成功了',
        confirm: () => {
          console.log('你确认了')
        },
        cancel: () => {
          console.log('你取消了')
        }
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

    const clickCustom = () => {
      customVisible.value = !customVisible.value
    }

    const close = () => {
      console.log('关闭了')
    }

    const closed = () => {
      console.log('关闭动画结束')
    }

    const onMaskClick = (event: Event) => {
      console.log('不能关闭！')
      console.log(event)
    }

    return { close, closed, onMaskClick, dialogVisible, customVisible, openSuccess, openWarning, openInfo, openError, clickDialog, clickCustom }
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
