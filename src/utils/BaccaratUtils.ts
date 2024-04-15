import lang from '@/lang'
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

export enum GoodRoadType {
  Dragon = 1,
  Jump = 2,
  Room = 3,
  Sit = 4,
  Triangle = 5,
  NDragon = 6,
  Triangle_Up = 7,
  Triangle_Down = 8,
  Triangle_RowLink = 9,
  Triangle_ZhuangLink = 10,
  Triangle_XianLink = 11,
  Triangle_ZhuangJump = 12,
  Triangle_XianJump = 13,
  Triangle_ZhuangGap = 14,
  Triangle_XianGap = 15,
  DoubleJump = 16
}

// 获取百家乐类型
export const getGoodRoadStr = (type: number, goodRoadTypeParam1: number, goodRoadTypeParam2: number) => {
  switch (type) {
    case 1:
      return lang.global.t('home.baccarat.连庄')
    case 2:
      return lang.global.t('home.baccarat.单跳')
    case 3:
      const hZH = goodRoadTypeParam1 >> 16
      let n1 = 1
      let n2 = 1
      if (hZH == 0) {
        // x闲x庄
        n1 = goodRoadTypeParam2 >> 16
        n2 = goodRoadTypeParam2 & 0xffff
      } else {
        n2 = goodRoadTypeParam2 >> 16
        n1 = goodRoadTypeParam2 & 0xffff
      }
      return lang.global.t(`home.baccarat.{n1}房{n2}厅`, { n1, n2 })
    case 6:
      return lang.global.t('home.baccarat.双龙汇')
    case 7:
      return lang.global.t('home.baccarat.上坡路')
    case 8:
      return lang.global.t('home.baccarat.下坡路')
    case 9:
      return lang.global.t('home.baccarat.排排连')
    case 10:
      return lang.global.t('home.baccarat.逢庄连')
    case 11:
      return lang.global.t('home.baccarat.逢闲连')
    case 12:
      return lang.global.t('home.baccarat.逢庄跳')
    case 13:
      return lang.global.t('home.baccarat.逢闲跳')
    case 14:
      return lang.global.t('home.baccarat.隔连庄')
    case 15:
      return lang.global.t('home.baccarat.隔连闲')
    case 16:
      return lang.global.t('home.baccarat.双跳')
  }
}
