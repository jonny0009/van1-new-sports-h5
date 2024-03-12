<template>
  <div class="table-info-component" @click="goToGame">
    <div class="table-cover">
      <img v-img="tableInfo.tableCover" style="object-fit: contain" />
    </div>
    <div class="table-road-list">
      <div class="road-col" v-for="(item, index) in wins" :key="index">
        <div class="road-item" v-for="(win, index) in item" :key="index">
          <span class="round" :class="win"></span>
        </div>
      </div>
    </div>
    <div class="table-name">{{ tableInfo.tableName }}</div>
    <div class="bottom">
      <span class="bet-money">
        <CurrencyComp class-name="mr3 fs24" />
        {{ tableInfo.tableLimitMin }}
      </span>
      <span class="number">
        <SvgIcon name="home-users" class="users-icon"></SvgIcon>
        {{ tableInfo.tablePlayers }}
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getBJGameUrl } from '@/api/home'
import { createDaLu, daLuIsFirstZores } from '@/utils/RoadMapUtils'
import { showLoadingToast } from 'vant'
import { computed } from 'vue'
import CurrencyComp from '@/components/Currency/index.vue'
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
  if (list.length < 24) {
    const count = 24 - list.length
    for (let i = 0; i < count; i++) {
      list.push([0, 0, 0, 0, 0, 0])
    }
  }
  return list
})
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
  width: calc((100% - 18px) / 2);
  margin-bottom: 10px;
  overflow: hidden;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  .table-cover {
    height: 165px;
    background-image: linear-gradient(270deg, #d8def6 0%, #bbd0f7 100%);
    img {
      width: 100%;
      height: 100%;
    }
  }
  .table-road-list {
    box-sizing: border-box;
    width: 100%;
    height: 84px;
    overflow: auto;
    display: flex;
    background-color: rgb(221, 222, 232);
    background-image: linear-gradient(0deg, rgb(249, 249, 253), rgb(235, 236, 248) 100%);
    .road-col {
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      width: 14px;
      flex-shrink: 0;
      &:not(:last-child) {
        border-right: 1px solid rgb(221, 222, 232);
      }
      .road-item {
        box-sizing: border-box;
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
          width: 10px;
          height: 10px;
          border-radius: 50%;
          &.he {
            border: 2px solid rgb(57, 126, 248);
          }
          &.xian {
            border: 2px solid rgb(57, 126, 248);
          }
          &.zhuang {
            border: 2px solid rgb(239, 67, 57);
          }

          &.line::before {
            background-color: #03b464;
            content: '';
            width: 8px;
            height: 2px;
            position: absolute;
            left: 0px;
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
  .table-name {
    line-height: 30px;
    font-size: 22px;
    color: rgb(14, 61, 102);
    font-weight: 700;
  }
  .bottom {
    display: flex;
    align-items: center;
    .bet-money {
      display: flex;
      align-items: center;
      font-size: 22px;
      font-weight: 700;
      color: rgb(14, 61, 102);
    }
    .number {
      margin-left: 50px;
      font-size: 22px;
      font-weight: 700;
      color: rgb(14, 61, 102);

      .users-icon {
        font-size: 22px;
      }
    }
  }
}
</style>
