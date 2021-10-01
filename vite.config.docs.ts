import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  base: '/tulp/',
  resolve: {
    alias: [
      {
        find: 'src',
        replacement: path.resolve(__dirname, './src')
      }
    ]
  },
  build: {
    outDir: 'dist-docs'
  }
})
