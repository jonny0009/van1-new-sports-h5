<template>
  <!-- 状态 -->
  <div class="status">
    <div class="status_1">
      <span>{{ $t('user.Balls') }}</span>
      <div class="round" @click="setBall()">
        <!-- <span>{{ ballKey.gameType }}</span> -->
        <span>{{ $t(`user.sports.${ballKey.gameType}`) }}</span>
        <img class="img_1 " :class="[showBottom1 ? 'img_3' : '']" src="@/assets/images/user/down.png" alt="" />
      </div>
    </div>
    <div class="status_1">
      <span>{{ $t('user.time') }}</span>
      <div class="round" @click="seStatus()">
        <span>{{ commonKey.name }}</span>
        <img class="img_1 " :class="[showBottom ? 'img_3' : '']" src="@/assets/images/user/down.png" alt="" />
      </div>
    </div>
  </div>
  <van-divider />
  <!-- 列表 -->
  <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" class="dataList" @load="onLoad">
    <div v-for="(item, index) in list.arr" :key="index" class="item">
      <div class="title">
        <div class="left  title-left">
          <img class="img_1" src="@/assets/images/login/ball1.svg" />
          {{ item.leagueName }}
        </div>
        <div class="right">
          {{ getMatchTime(item) }}
        </div>
      </div>
      <div class="match-content">
        <div class="left">
          <div class="left-1">
            {{ item.homeTeamName }}
          </div>
          <img class="img_1" :src="getImg(item.homeTeamLogo)" alt="" />
        </div>
        <div class="center">
          {{ item.result.GM_h || 0 }}
          :
          {{ item.result.GM_c || 0 }}
        </div>
        <div class="right">
          <img class="img_2" :src="getImg(item.awayTeamLogo)" alt="" />
          <div class="right-1">
            {{ item.awayTeamName }}
          </div>
        </div>
      </div>
    </div>
  </van-list>
  <van-popup v-model:show="showBottom" position="bottom" closeable round :style="{ height: '50%' }">
    <div class="popup-title">{{ popupTitle }}</div>
    <div class="pk-list">
      <div
        v-for="(item, index) in popupList.arr"
        :key="index"
        class="item"
        :class="[commonKey.key === item.key ? 'item-color' : '']"
        @click="setPk(item)"
      >
        <p>
          <span>
            {{ item.name }}
          </span>
          <span v-if="commonKey.key === item.key">
            <van-icon name="success" />
          </span>
        </p>
      </div>
    </div>
  </van-popup>
  <van-popup v-model:show="showBottom1" position="bottom" closeable round :style="{ height: '50%' }">
    <div class="popup-title">{{ popupTitle1 }}</div>
    <div class="pk-list">
      <div
        v-for="(item, index) in ballList.arr"
        :key="index"
        class="item"
        :class="[ballKey.gameType === item.gameType ? 'item-color' : '']"
        @click="setBallSelect(item)"
      >
        <p>
          <span>
            {{ $t(`user.sports.${item.gameType}`) }}
          </span>
          <span v-if="ballKey.gameType === item.gameType">
            <van-icon name="success" />
          </span>
        </p>
      </div>
    </div>
  </van-popup>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted, computed } from 'vue'

import { ImageSource } from '@/config'

import store from '@/store'
const ballListAll = computed(() => store.state.app.sports)

import moment from 'moment'
// import ball1 from '@/assets/images/login/ball1.svg'
// import arrow from '@/assets/images/components/title/arrow.png'
// getGameManyInfo
import { matchResult } from '@/api/user'
const list = reactive<{ arr: any }>({ arr: [] })

// import { showToast } from 'vant'
const loading = ref(false)
const finished = ref(false)
const popupTitle1 = ref('球类')
const popupTitle = ref('时间')
const commonKey = ref(
  {
    name: moment().format('MM/DD'),
    value: moment().valueOf(),
    key: 0
  }
)
const ballKey = ref(
  {
    name: '足球',
    gameType: 'FT'
  }
)
const showBottom1 = ref(false)
const showBottom = ref(false)
// const showTime = ref(false)
const ballList = reactive<{ arr: any[] }>({
  arr: [
    {
      name: '足球',
      gameType: 'FT'
    },
    {
      name: '篮球',
      gameType: 'BK'
    },
    {
      name: '网球',
      gameType: 'TN'
    },
    {
      name: '羽毛球',
      gameType: 'OP_BM'
    }

  ]
})
const popupList = reactive<{ arr: any[] }>({ arr: [] })

onMounted(() => {
  // getNoAccount({})

  let arr = [...ballListAll.value]
  arr = arr.filter((item: any) => item.gameCount !== 0 && item.gameType !== 'SY')
  arr = JSON.parse(JSON.stringify(arr))
  const sortArr: any = ['OP_BM', 'TN', 'BK', 'FT']
  arr.sort(function (a, b) {
    return sortArr.indexOf(b.gameType) - sortArr.indexOf(a.gameType)
  })
  ballList.arr = arr
})
let page: number = 0
const onLoad = async () => {
  page++
  const params: any = {
    page: page,
    gameSort: 3,
    leagueIds: '',
    gameType: ballKey.value.gameType,
    matchTime: commonKey.value.value,
    pageSize: 10,
    gameStatus: 1,
    groupId: 3
  }
  const res: any = await matchResult(params)
  const data = res.data
  if (res.code === 200) {
    data.list.forEach((item: any) => {
      list.arr.push(item)
    })
    loading.value = false
    finished.value = list.arr.length === data.count
  } else {
    finished.value = true
    loading.value = false
    // showToast(res.msg)
  }
}

const getImg = (item: any) => {
  if (item) {
    return `${ImageSource}${item}`
  }
  return ''
}

async function setPk(val: any) {
  page = 0
  commonKey.value = val
  showBottom.value = false
  loading.value = true
  finished.value = false
  list.arr = []
  onLoad()
  console.log(val)
}
// 获取游戏时间
const getMatchTime = (item: any) => {
  if (item.gameDate) {
    return moment(item.gameDate).format('MM/DD HH:mm')
  }
  if (item.matchTime) {
    return moment(item.gameDate).format('MM/DD HH:mm')
  }
}
const seStatus = () => {
  const timeArr = [
    {
      name: moment().format('MM/DD'),
      value: moment().valueOf(),
      key: 0
    },
    {
      name: moment().subtract(1, 'days').format('MM/DD'),
      value: moment().subtract(1, 'days').valueOf(),
      key: 1
    },

    {
      name: moment().subtract(2, 'days').format('MM/DD'),
      value: moment().subtract(2, 'days').valueOf(),
      key: 2
    },
    {
      name: moment().subtract(3, 'days').format('MM/DD'),
      value: moment().subtract(3, 'days').valueOf(),
      key: 3
    },
    {
      name: moment().subtract(4, 'days').format('MM/DD'),
      value: moment().subtract(4, 'days').valueOf(),
      key: 4
    },
    {
      name: moment().subtract(5, 'days').format('MM/DD'),
      value: moment().subtract(5, 'days').valueOf(),
      key: 5
    },
    {
      name: moment().subtract(6, 'days').format('MM/DD'),
      value: moment().subtract(6, 'days').valueOf(),
      key: 6
    },
    {
      name: moment().subtract(7, 'days').format('MM/DD'),
      value: moment().subtract(7, 'days').valueOf(),
      key: 7
    },
    {
      name: moment().subtract(8, 'days').format('MM/DD'),
      value: moment().subtract(8, 'days').valueOf(),
      key: 8
    },
    {
      name: moment().subtract(9, 'days').format('MM/DD'),
      value: moment().subtract(9, 'days').valueOf(),
      key: 9
    },
    {
      name: moment().subtract(10, 'days').format('MM/DD'),
      value: moment().subtract(10, 'days').valueOf(),
      key: 10
    },
    {
      name: moment().subtract(11, 'days').format('MM/DD'),
      value: moment().subtract(11, 'days').valueOf(),
      key: 11
    },
    {
      name: moment().subtract(12, 'days').format('MM/DD'),
      value: moment().subtract(12, 'days').valueOf(),
      key: 12
    },
    {
      name: moment().subtract(13, 'days').format('MM/DD'),
      value: moment().subtract(13, 'days').valueOf(),
      key: 13
    },
    {
      name: moment().subtract(14, 'days').format('MM/DD'),
      value: moment().subtract(14, 'days').valueOf(),
      key: 14
    }
  ]
  popupList.arr = timeArr
  showBottom.value = true
}
const setBall = () => {
  showBottom1.value = true
}

const setBallSelect = (val: any) => {
  page = 0
  ballKey.value = val
  showBottom1.value = false
  loading.value = true
  finished.value = false
  list.arr = []
  onLoad()
}

// systemId

</script>

<style lang="scss" scoped>
// 状态
.status {
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: PingFangSC-Semibold;
  font-size: 24px;
  color: #1F2630;
  letter-spacing: 0;
  font-weight: 600;

  .status_1 {
    display: flex;
    align-items: center;
    margin-right: 30px;

    .round {
      width: 165px;
      height: 52px;
      text-align: center;
      line-height: 52px;
      background: #EFF1F2;
      border-radius: 32px;
      margin-left: 10px;
      position: relative;

      .img_1 {
        position: absolute;
        right: 20px;
        top: 20px;
        height: 10px;
        width: 10px;
      }

      .img_3 {
        transform: rotateZ(180deg);
      }
    }
  }
}

// 列表
.dataList {
  margin-top: 20px;
  height: calc(100vh - 390px);
  overflow-y: auto;

  .color-1 {
    color: #7642FD;
  }

  .color-2 {
    color: #1EBB52;
  }

  .color-3 {
    color: red;
  }

  .item {
    background: #EFF1F2;
    border-radius: 22px;
    padding: 20px 20px 25px 20px;
    margin-bottom: 20px;

    >.title {
      font-family: PingFangSC-Medium;
      font-size: 24px;
      color: #1F2630;
      letter-spacing: 0;
      font-weight: 500;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .title-left {
        font-size: 20px;
        font-weight: 600;
      }

      .img_1 {
        height: 24px;
        width: 24px;
      }

      .right {
        font-family: PingFangSC-Regular;
        font-size: 22px;
        color: #96A5AA;
        letter-spacing: 0;
        text-align: right;
        font-weight: 400;
      }
    }

    .match-content {
      margin-top: 25px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      font-family: PingFangSC-Semibold;
      font-size: 24px;
      color: #1F2630;
      letter-spacing: 0;
      font-weight: 600;

      .left {
        display: flex;
        align-items: center;
        font-size: 24px;

        &-1 {
          width: 200px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        >.img_1 {
          width: 48px;
          height: 48px;
          margin-left: 5px;
        }
      }

      .center {
        width: 200px;
        font-family: PingFangSC-Semibold;
        font-size: 32px;
        color: #000000;
        letter-spacing: 0;
        text-align: center;
        font-weight: 600;
      }

      .right {
        display: flex;
        align-items: center;
        font-size: 24px;

        &-1 {
          width: 200px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        .img_2 {
          width: 48px;
          height: 48px;
          margin-right: 5px;
        }
      }
    }

  }
}

// 弹窗
.popup-title {
  font-family: PingFangSC-Semibold;
  font-size: 32px;
  color: #1F2630;
  letter-spacing: 0;
  font-weight: 600;
  margin: 24px 0 0 38px;
}

.pk-list {
  padding-top: 30px;

  .item {
    font-size: 26px;
    color: #1F2630;
    letter-spacing: 1px;
    padding: 40px;
    border-bottom: 2px solid #eaeaea;

    p {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  .item-color {
    color: #7642FD;
  }
}
</style>
