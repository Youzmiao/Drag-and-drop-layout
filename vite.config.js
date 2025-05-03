import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 获取仓库名称，用于GitHub Pages的base路径
// 如果您要部署到https://<USERNAME>.github.io/<REPO>/
const repository = 'Drag-and-drop-layout' // 根据您实际部署的仓库名称修改

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 在Vercel上部署时不需要设置base路径
  // base: `/${repository}/`,
  build: {
    // 确保资源文件名不包含哈希值，避免路径问题
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        // 确保资源路径正确
        assetFileNames: 'assets/[name].[ext]',
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
      }
    }
  }
}) 