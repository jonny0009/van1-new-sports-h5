<template>
  <div class="table-info-component" @click="goToGame">
    <div class="content">
      <div class="table-cover"></div>
      <div class="table-road-list">
        <div class="road-col" v-for="(item, index) in wins" :key="index">
          <div class="road-item" v-for="(win, index) in item" :key="index">
            <span class="round" :class="win"></span>
          </div>
        </div>
      </div>
      <div class="good-bg">
        <div class="title-1">{{ titleX(tableInfo.goodRoadTitle).str1 }}</div>
        <div class="title-2">x{{ titleX(tableInfo.goodRoadTitle).str2 }}</div>
      </div>
    </div>
    <div class="bottom">
      <span class="table-name">{{ tableInfo.tableName }}</span>
      <div class="right">
        <div class="bet-money">￥10</div>
        <div class="number">
          <SvgIcon name="home-users" class="users-icon"></SvgIcon>
          256
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getBJGameUrl } from '@/api/home'
import { createDaLu, daLuIsFirstZores } from '@/utils/RoadMapUtils'
import { showLoadingToast } from 'vant'

import { computed } from 'vue'

const props = defineProps({
  tableInfo: {
    type: Object,
    default: () => {}
  }
})
const classList = ['he', 'xian', 'zhuang', 'zhuang']
const wins = computed(() => {
  let daluMatrix = createDaLu(props.tableInfo.wins)
  if (daLuIsFirstZores(daluMatrix)) {
    const matrixList: any[] = []
    let heCount = 0
    daluMatrix.forEach((list: any, index: number) => {
      if (index === 0 && list[0] < 1000) {
        heCount = list[0]
      } else if (index === 1 && matrixList.length === 0) {
        list[0] = list[0] + heCount
        matrixList.push(list)
      } else {
        matrixList.push(list)
      }
    })
    daluMatrix = matrixList
  }
  const list: any[] = []
  for (let x = 0; x < daluMatrix.length; x++) {
    const yAxis = daluMatrix[x]
    for (let y = 0; y < yAxis.length; y++) {
      let result = yAxis[y]
      let className = ''
      if (!list[x]) {
        list[x] = []
      }
      if (!list[x][y]) {
        list[x][y] = []
      }
      if (result === void 0) {
        list[x][y].push(className)
        continue
      }
      const box = document.createElement('div')
      let hasLine = 0
      if (result < 10) {
        hasLine = result
      } else if (result > 1000) {
        hasLine = result % 1000
      } else {
        hasLine = result % 10
      }

      if (result === 1) {
        result = 0
      }
      const orginNumber = Math.floor(result / 1000)
      result = orginNumber % 10
      if (result === 3) {
        result = 2
      }

      const index = result
      const win = index % 10
      if (hasLine) {
        if (hasLine > 1) {
          box.innerText = `${hasLine}`
        }

        className = `box ${classList[win]} line`
      } else {
        className = `box ${classList[win]}`
      }

      list[x][y].push(className)
    }
  }
  if (list.length < 19) {
    const count = 19 - list.length
    for (let i = 0; i < count; i++) {
      list.push([0, 0, 0, 0, 0, 0])
    }
  }
  return list
})
const titleX = (titleX: string) => {
  const titleObj: any = {}
  if (titleX.indexOf('X') > -1) {
    titleX = titleX.replaceAll(' ', '')
    const arr = titleX.split('X')
    titleObj.str1 = arr[0]
    titleObj.str2 = arr[1]
  }
  return titleObj
}

const brandType = 1
const goToGame = async () => {
  const tableId = props.tableInfo.tableId
  const params = {
    supplierId: 'aigame',
    gameKey: 'BAC-V2.0',
    openType: 2,
    dirType: 1,
    terType: 2
  }
  showLoadingToast({
    duration: 20000,
    message: '加载中...'
  })
  const gres: any = await getBJGameUrl(params)
  if (gres?.code === 200) {
    const gameUrl = gres.data['url'].replace('&isAi=1', '')
    window.location.href =
      gameUrl +
      '&source=7lucky&hasLive=1&brandType=' +
      brandType +
      '&tableId=' +
      tableId +
      '&sourceUrl=' +
      encodeURIComponent(window.location.host)
  }
}
</script>
<style lang="scss" scoped>
.table-info-component {
  margin-bottom: 10px;
  overflow: hidden;
  background-color: #fff;
  border-radius: 10px;
  .content {
    position: relative;
    display: flex;
    padding: 16px 16px 0;

    .good-bg {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto;
      z-index: 99;
      right: 22px;
      width: 100px;
      height: 100px;
      background-repeat: no-repeat;
      background-size: contain;
      background-image: url(@/assets/images/casino/road-bg.png);

      .title-1 {
        line-height: 24px;
        font-size: 24px;
        font-family: JueJiangHei;
        color: rgb(254, 55, 101);
      }
      .title-2 {
        line-height: 28px;
        font-size: 28px;
        font-family: JueJiangHei;
        color: rgb(254, 55, 101);
      }
    }

    .table-cover {
      width: 135px;
      height: 162px;
      background-repeat: no-repeat;
      background-size: contain;
      background-image: linear-gradient(270deg, #d8def6 0%, #bbd0f7 100%);
      border-radius: 10px;
      overflow: hidden;
    }

    .table-road-list {
      flex: 1;
      overflow: auto;
      display: flex;
      margin-left: 8px;
      background-image: linear-gradient(0deg, rgb(249, 249, 253), rgb(235, 236, 248) 100%);
      .road-col {
        display: flex;
        flex-direction: column;
        width: 27px;
        flex-shrink: 0;
        &:not(:last-child) {
          border-right: 1px solid rgb(221, 222, 232);
        }
        .road-item {
          position: relative;
          flex: 1;
          &:not(:last-child) {
            border-bottom: 1px solid rgb(221, 222, 232);
          }

          .round {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            margin: auto;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            &.he {
              border: 6px solid rgb(57, 126, 248);
            }
            &.xian {
              border: 6px solid rgb(57, 126, 248);
            }
            &.zhuang {
              border: 6px solid rgb(239, 67, 57);
            }

            &.line::before {
              background-color: #03b464;
              content: '';
              width: 20px;
              height: 4px;
              position: absolute;
              left: -6px;
              right: 0;
              bottom: 0px;
              top: 0;
              margin: auto;
              transform: rotate(-45deg);
            }
          }
        }
      }
    }
  }
  .bottom {
    padding: 18px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .table-name {
      font-size: 24px;
      color: rgb(14, 61, 102);
    }
    .right {
      display: flex;
      align-items: center;
      .bet-money {
        margin-right: 66px;
        font-size: 20px;
        color: rgb(14, 61, 102);
      }
      .number {
        font-size: 22px;
        color: rgb(14, 61, 102);
      }
    }
  }
}
</style>
import { getBJGameUrl } from '@/api/home' import { showLoadingToast } from 'vant' import { getBJGameUrl } from
'@/api/home' import { showLoadingToast } from 'vant' import { getBJGameUrl } from '@/api/home' import { showLoadingToast
} from 'vant'
