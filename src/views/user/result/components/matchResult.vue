<template>
  <!-- 状态 -->
  <div class="status">
    <div class="status_1">
      <span>球类</span>
      <div class="round" @click="seStatus()">
        <span>{{ commonKey.value }}</span>
        <img class="img_1 " :class="[showBottom ? 'img_3' : '']" src="@/assets/images/user/down.png" alt="" />
      </div>
    </div>
    <div class="status_1">
      <span>时间</span>
      <div class="round" @click="seStatus()">
        <span>{{ commonKey.value }}</span>
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
          {{ formatToDateTime(item.gameDate) || formatToDateTime(item.matchTime) }}
        </div>
      </div>
      <div class="match-content">
        <div class="left">
          <div class="left-1">
            {{ item.homeTeamName }}
          </div>
          <!-- <img class="img_1" src="@/assets/images/user/num3.png" alt="" /> -->
        </div>
        <div class="center">
          1:2
        </div>
        <div class="right">
          <!-- <img class="img_2" src="@/assets/images/user/num9.png" alt="" /> -->
          <div class="right-1">
            {{ item.awayTeamName }}
          </div>
        </div>
      </div>
    </div>
  </van-list>
  <div v-if="!list.arr.length" class="noData">
    <img class="img_1" src="@/assets/images/user/noData.png" />
    <p>
      未查询到相关数据
    </p>
  </div>
  <van-popup v-model:show="showBottom" position="bottom" closeable round>
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
            {{ item.value }}
          </span>
          <span v-if="commonKey.key === item.key">
            <van-icon name="success" />
          </span>
        </p>
      </div>
    </div>
  </van-popup>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue'
import { formatToDateTime } from '@/utils/date'
import moment from 'moment'
// import ball1 from '@/assets/images/login/ball1.svg'
// import arrow from '@/assets/images/components/title/arrow.png'
// getGameManyInfo
import { matchResult } from '@/api/user'
const list = reactive<{ arr: any }>({ arr: [] })
import { showToast } from 'vant'
const loading = ref(false)
const finished = ref(false)
const timeIndex = ref(0)
const beginTime = ref('')
const endTime = ref<any>('')
const popupTitle = ref('状态')
const commonKey = ref({ key: '', value: '全部' })
const showBottom = ref(false)
// const showTime = ref(false)
const popupList = reactive<{ arr: any[] }>({
  arr: [
    {
      value: '全部',
      key: ''
    },
    {
      value: '未结算',
      key: '0'
    },
    {
      value: '已结算',
      key: '1'
    }
  ]
})
const timeList = reactive([
  {
    timeName: '今日'
  },
  {
    timeName: '近48小时'
  },
  {
    timeName: '近7天'
  },
  // {
  //   timeName: '90天'
  // },
  {
    timeName: ''
  }

])
onMounted(() => {
  // getNoAccount({})
})
// 先通接口, 参数等会调整====
let page: number = 0
const onLoad = async () => {
  page++
  const params: any = {
    page: page,
    gameSort: 3,
    leagueIds: '',
    gameType: 'FT',
    matchTime: 1703318370524,
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
    showToast(res.msg)
  }
}

async function setPk(val: any) {
  commonKey.value = val
  showBottom.value = false
  // getNoAccount({})
  console.log(val)
}
const selectTime = (index: number) => {
  timeIndex.value = index
  const nowDate = moment().valueOf()
  let startDate = ref<any>('')
  const endDate = nowDate
  const oneDayDate = 24 * 60 * 60 * 1000
  // 近24小时
  if (index === 0) {
    startDate = nowDate - oneDayDate
  }
  // 近48小时
  if (index === 1) {
    startDate = nowDate - oneDayDate * 2
  }
  // 近7天
  if (index === 2) {
    startDate = nowDate - oneDayDate * 7
  }
  //
  beginTime.value = startDate
  endTime.value = endDate
  getNoAccount(3)
}
const seStatus = () => {
  showBottom.value = true
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
          width: 230px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        >.img_1 {
          width: 48px;
          height: 48px;
          margin-left: 10px;
        }
      }

      .center {
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
          width: 230px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        .img_2 {
          width: 48px;
          height: 48px;
          margin-right: 10px;
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
