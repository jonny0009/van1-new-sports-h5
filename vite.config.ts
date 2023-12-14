import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

export default () => {
  return {
    plugins: [
      vue(),
      createSvgIconsPlugin({
        // 指定要缓存的图标文件夹
        iconDirs: [resolve(process.cwd(), './src/icons')],
        // 执行icon name的格式
        symbolId: 'icon-[dir]-[name]'
      })
    ],
    resolve: {
      extensions: ['.ts', '.js'],
      alias: {
        '@': resolve(process.cwd(), '/src'),
        '#': resolve(process.cwd(), '/types')
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "./src/styles/variables.scss";`
        }
      }
    },
    server: {
      port: 3001,
      open: false,
      proxy: {
        '/gateway': {
          target: ' https://game-admin.abgametest.com',
          // target: 'http://dev.game-admin.ab-game.com',
          changeOrigin: true,
          ws: true,
          rewrite: (path: string) => {
            // return path.replace(new RegExp('^/gateway'), '/')
            return path.replace(new RegExp('^/gateway'), '/gateway')
          }
        }
      },
      fs: {
        strict: false,
        allow: []
      }
    },
    build: {
      // sourcemap: true,
      manifest: true,
      rollupOptions: {
        output: {
          manualChunks: {
            vue: ['vue', 'vue-router', 'vuex'],
            'element-plus': ['element-plus'],
            echarts: ['echarts']
          }
        }
      },
      chunkSizeWarningLimit: 500
    }
  }
}
