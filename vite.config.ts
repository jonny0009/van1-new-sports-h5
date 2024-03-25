import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
// const target = 'http://dev.new-sports-h5.xc.com/'
const target = 'http://cn2.new-sports-h5.aisports.io/'

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
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
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
        '/ai': {
          target,
          changeOrigin: true,
          xfwd: false,
          ws: true,
          pathRewrite: {
            '^/ai': '/ai'
          }
        },
        '/chat': {
          target,
          changeOrigin: true,
          xfwd: false,
          ws: true,
          pathRewrite: {
            '^/chat': '/chat'
          }
        },
        '/ws': {
          target,
          changeOrigin: true,
          xfwd: false,
          ws: true,
          pathRewrite: {
            '^/ws': ''
          },
          headers: {
            Referer: target
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
            vue: ['vue', 'vue-router', 'vuex']
          }
        }
      },
      chunkSizeWarningLimit: 500
      // 配置发布后图片无法显示
      // target: 'es2020',
    }
    // 配置发布后图片无法显示
    // optimizedeps: {
    //   esbuildoptions: {
    //     target: 'es2020'
    //   }
    // },
  }
}
