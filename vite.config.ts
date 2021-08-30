import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// npm i @types/node -D
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src') // 设置@指向src路径
    }
  },
  base: './', // 设置打包路径
  server: {
    port: 4000, // 设置服务端启动端口号
    open: true, // 设置服务器启动时是否自动打开浏览器
    cors: true, // 允许跨域

    // 设置代理
    /* proxy: {
      '/api': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    } */

  }
})
