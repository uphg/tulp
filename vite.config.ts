import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  base: '/tulp/',
  publicDir: process.env.NODE_ENV === 'production' ? false : 'public',
  resolve: {
    alias: [
      {
        find: 'src',
        replacement: path.resolve(__dirname, './src')
      }
    ]
  },
  build: {
    // cssCodeSplit: false, // 使用 js 模块化 css 代码
    lib: {
      entry: path.resolve(__dirname, 'src/lib/index.ts'),
      name: 'tulp-ui', // 暴露的全局变量
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      // external: ['vue', 'vue-router', '@vue/test-utils'],
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
