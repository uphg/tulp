import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Markdown from 'vite-plugin-md'
import { vueExampleCode } from './plugins/vue-example-code'

const path = require('path')

// https://vitejs.dev/config/
export default {
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/], // 添加 markdown 文件支持
    }),
    Markdown({
      // Class names for the wrapper div
      // wrapperClasses: 'page-markdown-body'
    }),
    vueJsx(),
    vueExampleCode()
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