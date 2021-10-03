import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Markdown from 'vite-plugin-md'

const path = require('path')

// https://vitejs.dev/config/
export default {
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/], // 添加 markdown 文件支持
    }),
    Markdown(),
    vueJsx()
  ],
  base: '/tulp/',
  resolve: {
    alias: [
      {
        find: '~src',
        replacement: path.resolve(__dirname, './src')
      }
    ]
  },
}