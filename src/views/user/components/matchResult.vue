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
  <div v-if="list.arr.length" class="dataList">
    <div v-for="(item, index) in list.arr" :key="index" class="item">
      <div class="title">
        <div class="left">
          <img class="img_1" src="@/assets/images/login/ball1.svg" />
          欧洲冠军联赛
        </div>
        <div class="right">
          11/30 15:30
        </div>
      </div>
      <div class="match-content">
        <div class="left">
          <div>
            库卢维赤克肯德
          </div>
          <img class="img_1" src="@/assets/images/user/num3.png" alt="" />
        </div>
        <div class="center">
          1:2
        </div>
        <div class="right">
          <img class="img_2" src="@/assets/images/user/num9.png" alt="" />
          <div>
            克孜勒库姆
          </div>
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
import ball1 from '@/assets/images/login/ball1.svg'
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

const getNoAccount = async (num: any) => {
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
      .right{
        display: flex;
        align-items: center;
        .img_2{
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
