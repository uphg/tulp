<script>
const message: string[] = [
  `这里什么都没有。`,
  `你是怎么来到这里的？`,
  `这是 404。`,
  `你可能已经断开连接了。`
]
</script>

<script setup lang="ts">
const getMsg = (): string => {
  return message[Math.floor(Math.random() * message.length)]
}
</script>

<template>
  <div class="vue-docs-container">
    <h1>404</h1>
    <blockquote>{{ getMsg() }}</blockquote>
    <router-link to="/">返回首页</router-link>
  </div>
</template>

