export class BaccaratUtils {
  iframe?: HTMLIFrameElement | any
  constructor(dom: HTMLIFrameElement, handleClose: Function) {
    if (dom) {
      this.iframe = dom
    }
    window.addEventListener(
      'message',
      (ev: any) => {
        const { type, data } = ev?.data
        // 关闭游戏
        if (type == 'close') {
          handleClose?.()
        }
      },
      false
    )
  }

  resetDom(dom: HTMLIFrameElement) {
    this.iframe = dom
  }

  // 进入房间
  intoRoom(tableId: string) {
    if (this.iframe) {
      this.iframe.contentWindow.postMessage(
        {
          type: 'intoRoom',
          tableId: tableId
        },
        '*'
      )
    }
  }

  // 关游戏声音
  closeBaccaratAudio() {
    if (this.iframe) {
      this.iframe.contentWindow.postMessage(
        {
          type: 'closeAudio'
        },
        '*'
      )
    }
  }

  // 开游戏声音
  openBaccaratAudio() {
    if (this.iframe) {
      this.iframe.contentWindow.postMessage(
        {
          type: 'openAudio'
        },
        '*'
      )
    }
  }

  // 刷新游戏余额
  refreshBalance() {
    if (this.iframe) {
      this.iframe.contentWindow.postMessage(
        {
          type: 'refreshBalance'
        },
        '*'
      )
    }
  }
}
