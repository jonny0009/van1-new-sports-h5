import SockJs from 'sockjs-client/dist/sockjs.min.js'
import Stomp from 'stompjs'
import { getToken } from '@/utils/auth'
import { sleep } from '@/utils'
import { ChatSource } from '@/config'
class WebSocketItem {
  url: string
  stompClient: any;
  headers: { Authorization: string | null; };
  subscribeMap: any;
  subscribeCount: number;
  reconnectCount: number;
  constructor(url: string) {
    this.url = url
    this.stompClient = null
    this.subscribeCount = 0
    this.reconnectCount = 0
    this.subscribeMap = {}
    this.headers = {
      Authorization: `Bearer ${getToken()}`
    }
  }
  async connect() {
    const socket = new SockJs(this.url)
    this.stompClient = Stomp.over(socket)
    this.stompClient.debug = null
    this.stompClient.connect(this.headers, () => {
      if (this.reconnectCount) {
        console.error(`%csocket重连成功!`, 'color:#00e800;')
      }
      this.reconnectCount = 0
      this.subscribeChecked()
    }, async (err: any) => {
      // 连接发生错误时的处理函数
      this.reconnectCount++
      this.stompClient.disconnect()
      this.stompClient = null
      this.unsubscribes()
      if (this.reconnectCount >= 10) {
        console.error(`重连已超过10次,停止重连!`)
        // ElMessageBox.alert('连接超时，请重新刷新页面', '系统提示', {
        //   confirmButtonText: '刷新页面',
        //   callback: () => {
        //     window.location.reload()
        //   }
        // })
        return false
      }
      console.error(`socket断开连接=>${err}`)
      console.error(`socket开始尝试重新连接第${this.reconnectCount}次......`)
      await sleep(3000)
      await this.connect()
    })
  }
  // 开始订阅
  subscribe(address: string, callback: Function) {
    if (!this.stompClient) {
      this.connect()
    }
    this.subscribeCount++
    this.subscribeMap[address] = {
      connected: this.stompClient.connected,
      callback,
      client: null,
      onconnect: null
    }
    // 如果是创建连接成功则直接订阅
    if (this.stompClient.connected) {
      this.subscribeMap[address].client = this.stompClient.subscribe(address, (greeting:any) => {
        callback(greeting)
      })
      sleep(10).then(() => {
        if (this.subscribeMap[address].onconnect) {
          this.subscribeMap[address].onconnect(true)
        }
      })
    }
    return this.subscribeMap[address]
  }
  // 取消订阅状态
  async unsubscribe(address:string) {
    if (this.subscribeMap[address] && this.subscribeMap[address].client) {
      this.subscribeMap[address].client.unsubscribe()
      if (this.subscribeMap[address].onconnect) {
        this.subscribeMap[address].onconnect(false)
      }
      this.subscribeMap[address].client = null
    }
    delete this.subscribeMap[address]
  }
  // 连接断开取消全部订阅状态
  async unsubscribes() {
    const subscribes = Object.keys(this.subscribeMap)
    subscribes.map((address:any) => {
      this.subscribeMap[address].connected = false
      this.subscribeMap[address].client = null
      if (this.subscribeMap[address].onconnect) {
        this.subscribeMap[address].onconnect(false)
      }
    })
  }
  // 没有订阅过的再次订阅
  async subscribeChecked() {
    const subscribes = Object.keys(this.subscribeMap)
    subscribes.map(async (address:any) => {
      const { connected, callback } = this.subscribeMap[address]
      if (connected === false) {
        this.subscribeMap[address].connected = true
        await sleep(10)
        if (this.subscribeMap[address].onconnect) {
          this.subscribeMap[address].onconnect(true)
        }
        this.subscribeMap[address].client = this.stompClient.subscribe(address, (greeting:any) => {
          callback(greeting)
        })
      }
    })
  }
  disconnect() {
    if (this.stompClient !== null) {
      this.stompClient.disconnect()
      this.stompClient = null
    }
  }
}
const socket: any = new WebSocketItem(`${ChatSource}/chat/websocket`)

export default socket
