
/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'sockjs-client/dist/sockjs.min.js' {
  import Client from 'sockjs-client';
  export default Client;
}
declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.bmp'
declare module '*.tiff'
declare module 'md5'
declare module 'vite-plugin-svg-icons'
declare module 'path-browserify'
declare module 'defineEmits'
declare module 'stompjs'
