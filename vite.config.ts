import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
const target = 'http://dev.m.xc.com/'
// const target = 'https://m.juxiangbaojie.com/'

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
      extensions: ['.ts', '.js', '.vue'],
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
    // 先停用====写页面
    // server: {
    //   port: 3001,
    //   open: false,
    //   proxy: {
    //     '/ai': {
    //       target,
    //       changeOrigin: true,
    //       xfwd: false,
    //       ws: true,
    //       pathRewrite: {
    //         '^/ai': '/ai'
    //       }
    //     },
    //     '/chat': {
    //       target,
    //       changeOrigin: true,
    //       xfwd: false,
    //       ws: true,
    //       pathRewrite: {
    //         '^/chat': '/chat'
    //       }
    //     },
    //     '/ws': {
    //       target,
    //       changeOrigin: true,
    //       xfwd: false,
    //       ws: true,
    //       pathRewrite: {
    //         '^/ws': ''
    //       },
    //       headers: {
    //         Referer: target
    //       }
    //     }
    //   },
    //   fs: {
    //     strict: false,
    //     allow: []
    //   }
    // },
    build: {
      // sourcemap: true,
      manifest: true,
      rollupOptions: {
        output: {
          manualChunks: {
            vue: ['vue', 'vue-router', 'vuex']
          }
        }
      },
      chunkSizeWarningLimit: 500
    }
  }
}
