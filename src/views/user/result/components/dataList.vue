<template>
  <div class="timeSelect">
    <div v-for="(item, index) in timeList" :key="index">
      <div v-if="item.timeName" class="time" :class="timeIndex == index ? 'timeActive' : ''" @click.stop="selectTime(index)">
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
      <div class="round" @click.stop="seStatus()">
        <span>{{ commonKey.value }}</span>
        <img class="img_1 " :class="[showBottom ? 'img_3' : '']" src="@/assets/images/user/down.png" alt="" />
      </div>
    </div>
  </div>
  <!-- 列表 -->
  <div v-if="list.arr.length" class="dataList">
    <div v-for="(item, index) in list.arr" :key="index">
      <Single v-if="item.parlayNum ==1" :item="item" class="item"></Single>
      <Bunch v-if="item.parlayNum !=1 && item.state !==2" :item="item" class="item"></Bunch>
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
import moment from 'moment'

import Bunch from './bunch.vue'
import Single from './single.vue'

// import arrow from '@/assets/images/components/title/arrow.png'
// getGameManyInfo
import { betRecordTab } from '@/api/user'
const list = reactive<{ arr: any }>({ arr: [] })
import { showToast } from 'vant'
const timeIndex = ref(0)
const beginTime = ref<any>('')
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
  {
    timeName: ''
  }

])
onMounted(() => {
  endTime.value = moment().valueOf()
  const oneDayDate = 24 * 60 * 60 * 1000
  beginTime.value = endTime.value - oneDayDate
  getNoAccount()
})

async function setPk(val: any) {
  commonKey.value = val
  showBottom.value = false
  getNoAccount()
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
  getNoAccount()
}
const seStatus = () => {
  showBottom.value = true
}

const getNoAccount = async () => {
  const params = {
    orderState: commonKey.value.key,
    page: 1,
    pageSize: 10,
    beginTime: beginTime.value,
    endTime: endTime.value
  }

  const res: any = await betRecordTab(params)
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
  height: calc(100vh - 450px);
  overflow-y: auto;
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
