import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import Vue from '@vitejs/plugin-vue'

function resolvePath(dir: string) {
  return path.resolve(__dirname, dir)
}

export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  const { VITE_PUBLIC_ROOT } = process.env

  return {
    resolve: {
      alias: {
        '@': resolvePath('./src'),
      },
    },
    base: VITE_PUBLIC_ROOT,
    plugins: [
      Vue(),
    ],
    build: {
      rollupOptions: {
        input: {
          index: resolvePath('./index.html'),
          preview: resolvePath('./preview.html'),
        },
      },
    },
  }
})
