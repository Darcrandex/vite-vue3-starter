import * as path from 'path'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, './')

  return {
    plugins: [vue(), legacy()],
    resolve: {
      // 配置路径别名
      alias: { '@': path.resolve(__dirname, './src') },
    },
    server: { port: parseInt(env.VITE_PORT) || 4000, host: true },
  }
})
