import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'


// const path = require('node:path')
import path from 'node:path'

function _resolve(dir) {
  return path.resolve(__dirname, dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
  },
  plugins: [vue(),UnoCSS()],
  resolve: {
    alias: {
      '@': _resolve('src'),
    },
  },
})
