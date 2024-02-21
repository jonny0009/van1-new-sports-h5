import SockJS from 'sockjs-client/dist/sockjs.min.js'
import Stomp from 'stompjs'
import { ChatSource } from '@/config'
import { sleep } from '@/utils'

class WebSocketItem {
  url: string
  stompClient: any
  headers: any
  subscribeMap: any

  constructor(url: string) {
    this.url = url
    this.stompClient = null
    this.headers = {}
    this.subscribeMap = {}
  }

  async connect() {
    const socket = new SockJS(this.url)
    this.stompClient = Stomp.over(socket)
    this.stompClient.debug = null
    return new Promise((resolve, reject) => {
      this.stompClient.connect(
        this.headers,
        () => {
          console.info(`%csocket重连成功!`, 'color:#00e800;')
          resolve(this.stompClient)
        },
        async (err: any) => {
          // 连接发生错误时的处理函数
          this.stompClient.disconnect()
          this.stompClient = null
          console.error(`socket断开连接=>${err}`)
          console.info(`socket开始尝试重新连接....`)
          await sleep(3000)
          await this.connect()
          reject(err)
        }
      )
    })
  }

  // 开始订阅
  async subscribe(address: string, callback: Function) {
    console.log(this.stompClient)
    if (!this.stompClient) {
      await this.connect()
    }
    // 如果是创建连接成功则直接订阅
    this.subscribeMap[address] = {
      connected: this.stompClient.connected,
      callback,
      client: null,
      onconnect: null
    }
    if (this.stompClient.connected) {
      this.subscribeMap[address].client = this.stompClient.subscribe(address, (greeting: any) => {
        callback(greeting)
      })
    }
    return this.subscribeMap[address]
  }

  send(address: string, message: any, headers = {}) {
    if (this.stompClient) {
      this.stompClient.send(address, headers, message)
    }
  }

  disconnect() {
    if (this.stompClient?.connected) {
      console.log('断开链接')
      this.stompClient.disconnect()
      this.stompClient = null
    }
  }
}

export default new WebSocketItem(`${ChatSource}/chat/websocket`)
