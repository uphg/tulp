import { defineConfig } from 'vite'
import commonOptions from './vite.config.common'

// https://vitejs.dev/config/
export default defineConfig({
  ...commonOptions,
  build: {
    outDir: 'dist-docs'
  }
})
