import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  server: mode === "development" ? {
    proxy: {
      "/api": {
        target: "http://192.168.0.203:38032",  // 后端接口地址
        changeOrigin: true,                   // 允许跨域
        rewrite: (path) => path.replace(/^\/api/, "")  // 路径重写（可选）
      }
    }
  } : {},
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
}))
