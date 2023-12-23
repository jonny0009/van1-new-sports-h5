<template>
  <div class="timeSelect">
    <div v-for="(item, index) in timeList" :key="index">
      <div v-if="item.timeName" class="time" :class="timeIndex == index ? 'timeActive' : ''" @click="selectTime(index)">
        {{ item.timeName }}
      </div>
      <p v-else class="imgStyle">
        <img class="img_1" src="@/assets/images/user/selectTime.png" alt="" />
      </p>
    </div>
  </div>
  <!-- 状态 -->
  <div class="status">
    <div class="status_1">
      <span>状态</span>
      <div class="round" @click="seStatus()">
        <span>{{ commonKey.value }}</span>
        <img class="img_1 " :class="[showBottom ? 'img_3' : '']" src="@/assets/images/user/down.png" alt="" />
      </div>
    </div>
  </div>
  <!-- 列表 -->
  <div v-if="list.arr.length" class="dataList">
    <div v-for="(item, index) in list.arr" :key="index" class="item">
      <div class="top">
        <div class="left">
          <div class="top-img">
            <img class="img_1" src="@/assets/images/user/num3.png" alt="" />
            <img class="img_2" src="@/assets/images/user/num9.png" alt="" />
          </div>
        </div>
        <div class="right">
          <div class="font_1">{{ item.betDTOList[0].homeTeam }} VS {{ item.betDTOList[0].awayTeam }}<span class="color-1">
            [{{ item.betDTOList[0].resultScore }}]</span></div>
          <div class="font_2">{{ item.betDTOList[0].leagueName }}</div>
        </div>
      </div>
      <!-- 2 -->
      <div class="top2">
        <div class="left">
          <img class="img_1" src="@/assets/images/user/plate.png" alt="" />
        </div>
        <div class="right">
          <div class="one">
            <span>
              {{ item.betDTOList[0].betItem }}
            </span>
            <span class="color-2" :class="[item.betDTOList[0].betResultDetail==='L'?'color-3':'']">
              @{{ item.betDTOList[0].ioRatio }}
            </span>
          </div>
          <div class="one two">
            <span>
              全场 1X2
            </span>
            <span>
              <img v-if="item.betDTOList[0].betResultDetail==='W'" class="img_1" src="@/assets/images/user/win.svg" alt="" />
              <img v-if="item.betDTOList[0].betResultDetail==='L'" class="img_1" src="@/assets/images/user/fail.svg" alt="" />
            </span>
          </div>
        </div>
      </div>
      <!-- 3 -->
      <div class="top3">
        <div class="one">
          <span>投注额：</span>
          <div>
            <img class="img_1" src="@/assets/images/user/num1.png" alt="" />
            <span>{{ item.gold }}</span>
          </div>
        </div>
        <div class="one two">
          <span>可赔付额：</span>
          <div>
            <img class="img_1" src="@/assets/images/user/num2.png" alt="" />
            <span class="color-1"> {{ item.currency }}</span>

            <span class="color-1"> {{ item.winAndLossGold }}</span>
          </div>
        </div>
      </div>
      <!-- line -->
      <div class="line" />
      <!-- num-->
      <div class="top4">
        <div class="one">
          <span>注单号:</span>
          <span>{{ item.orderId }}</span>
        </div>
        <div class="one">
          <span>投注时间：</span>
          <span>{{ item.createDate }}</span>
        </div>
        <div class="one">
          <span>结算时间：</span>
          <span>{{ formatToDateTime(item.resultDate) }}</span>
        </div>
      </div>

    </div>
  </div>
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

// import arrow from '@/assets/images/components/title/arrow.png'
// getGameManyInfo
import { betRecordTab } from '@/api/user'
const list = reactive<{ arr: any }>({ arr: [] })
import { showToast } from 'vant'
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
  getNoAccount({})
})

async function setPk(val: any) {
  commonKey.value = val
  showBottom.value = false
  getNoAccount({})
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

const getNoAccount = async (num:any) => {
  const params = {
    orderState: commonKey.value.key,
    page: 1,
    pageSize: 10,
    beginTime: '',
    endTime: ''
  }
  if (num === 3) {
    params.beginTime = beginTime.value
    params.endTime = endTime.value
  }
  const res: any = await betRecordTab(params)
  // const res: any = await betRecordTab({ 'orderState': '1', 'page': 1, 'pageSize': 10, 'beginTime': 1703132137274, 'endTime': 1703218537274 })
  if (res.code !== 200) {
    return showToast(res.msg)
  }
  list.arr = res.data
}

// systemId

</script>

<style lang="scss" scoped>
// 时间选择
.timeSelect {
  margin-top: 10px;
  display: flex;
  // justify-content: space-around;

  .time {
    width: 130px;
    height: 64px;
    // padding: 16px 40px;
    background: #EFF1F2;
    border-radius: 32px;
    font-family: PingFangSC-Medium;
    font-size: 24px;
    color: #2C333C;
    letter-spacing: 0;
    text-align: center;
    font-weight: 500;
    line-height: 64px;
    margin-right: 15px;
  }

  .timeActive {
    background: #7642FD;
    color: #FFFFFF;
  }

  .imgStyle {
    margin-left: 180px;
    width: 64px;
    height: 64px;
    padding: 15px;
    background: #EFF1F2;

    // background: #7642FD;
    border-radius: 50%;
    text-align: center;

    .img_1 {
      margin-left: 2px;
      height: 34px;
      width: 34px;
      color: #000;
    }
  }

}

// 状态
.status {
  margin-top: 20px;
  display: flex;
  align-items: center;
  // justify-content: center;
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
    padding: 15px 20px;
    margin-bottom: 20px;

    .top {
      display: flex;

      .top-img {
        height: 80px;
        width: 80px;
        position: relative;

        .img_1 {
          position: absolute;
          top: 0;
          left: 0;
          height: 50px;
          width: 50px;
        }

        .img_2 {
          position: absolute;
          bottom: 0;
          right: 0;
          height: 50px;
          width: 50px;
        }
      }

      .right {
        margin-left: 18px;

        .font_1 {
          font-family: PingFangSC-Semibold;
          font-size: 28px;
          color: #1F2630;
          letter-spacing: 0;
          font-weight: 600;
        }

        .font_2 {
          font-family: PingFangSC-Semibold;
          font-size: 24px;
          color: #546371;
          letter-spacing: 0;
          font-weight: 600;
        }
      }
    }

    .top2 {
      margin-top: 20px;
      background: #E2E6E8;
      border-radius: 20px;
      padding: 20px 10px;
      display: flex;
      align-items: center;

      .left {
        margin-right: 15px;

        .img_1 {
          width: 60px;
          height: 60px;
        }
      }

      .right {
        .one {
          display: flex;
          width: 550px;
          justify-content: space-between;
          font-family: PingFangSC-Semibold;
          font-size: 28px;
          color: #1F2630;
          letter-spacing: 0;
          font-weight: 600;
        }

        .two {
          font-family: PingFangSC-Semibold;
          font-size: 24px;
          color: #546371;
          letter-spacing: 0;
          font-weight: 600;

          .img_1 {
            width: 40px;
            height: 30px;
          }
        }
      }
    }

    .top3 {
      margin-top: 9px;

      .one {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-family: PingFangSC-Semibold;
        font-size: 24px;
        color: #546371;
        letter-spacing: 0;
        font-weight: 600;

        .img_1 {
          width: 20px;
          height: 19px;
        }
      }

      .two {
        font-family: PingFangSC-Semibold;
        font-size: 28px;
        color: #546371;
        letter-spacing: 0;
        font-weight: 600;
      }
    }

    .line {
      background: #E0E3E7;
      height: 2px;
    }

    .top4 {
      margin-top: 10px;

      .one {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-family: PingFangSC-Regular;
        font-size: 22px;
        color: #96A5AA;
        letter-spacing: 0;
        font-weight: 400;
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
