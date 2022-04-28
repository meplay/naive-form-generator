import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import Vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import svgLoader from 'vite-svg-loader'
import Windicss from 'vite-plugin-windicss'

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

      AutoImport({
        imports: [
          'vue',
          'vue-router',
        ],
        dts: 'src/auto-imports.d.ts',
      }),

      Components({
        extensions: ['vue'],
        include: [/\.vue$/, /\.vue\?vue/],
        dts: 'src/components.d.ts',
        resolvers: [
        ],
      }),

      svgLoader(),

      Windicss(),
    ],
  }
})
