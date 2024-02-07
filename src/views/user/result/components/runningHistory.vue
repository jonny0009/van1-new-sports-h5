<template>
  <div class="timeSelect">
    <!-- 时间选择 -->
    <div class="status status-2">
      <div class="status_1">
        <span>{{ $t('user.time') }}</span>
        <div class="round" @click.stop="setDate()">
          <span>{{ dateTimeVal.beginName }} </span> ~ <span>{{ dateTimeVal.endName }}</span>
          <img class="img_1 " :class="[showBottom2 ? 'img_3' : '']" src="@/assets/images/user/down.png" alt="" />
        </div>
      </div>
    </div>

    <!-- 状态 -->
    <div class="status">
      <div class="status_1">
        <span>{{ $t('user.type') }}</span>
        <div class="round" @click.stop="seStatus()">
          <span>{{ commonKey.value }}</span>
          <img class="img_1 " :class="[showBottom ? 'img_3' : '']" src="@/assets/images/user/down.png" alt="" />
        </div>
      </div>
    </div>
  </div>
  <van-divider class="color-line" />
  <!-- 列表 -->
  <div v-if="!list.arr.length && finished" class="noData">
    <img class="img_1" src="@/assets/images/user/noData.png" />
    <p>
      {{ $t('user.noData') }}
    </p>
  </div>
  <van-list
    v-if="list.arr.length || !finished"
    v-model:loading="loading"
    :finished="finished"
    :finished-text="$t('live.noMore')"
    :loading-text="$t('user.loadingText')"
    class="dataList"
    @load="onLoad"
  >
    <div v-for="(outItem, outIndex) in dataList.arr" :key="outIndex" class="dataList-item">
      <div class="date-title">{{ outItem.date }}</div>
      <div v-for="(item, index) in outItem.list" :key="index" class="item">
        <div class="title">
          {{ getTitle(item.tradeType) }}
        </div>
        <div class="line">
          <div class="left">
            <div class="left-1">
              <div class="font">{{ $t('user.betId') }}:</div>
              <span>
                <span class="font-1">{{ item.payno }}</span>
                <img v-copy="item.payno" class="img_1" src="@/assets/images/user/copy.svg" />
              </span>
            </div>
            <p class="left-2">
              <span class="font">{{ $t('user.time') }}:</span>
              <span>{{ formatToDateTime(item.createTime) }}</span>
            </p>
          </div>
          <div class="right">
            <div>
              <div v-if="getPayStatus(item)"> {{ $t('user.compensate') }}</div>
              <div v-else> {{ $t('user.betNum') }}</div>
              <div class="right-1">
                <span class="money-symbol">{{ currency }}</span>
                <span v-points="item.tradeGold"></span>
              </div>
            </div>
            <div>
              <div> {{ $t('user.balance') }}</div>
              <div class="right-1">
                <span class="money-symbol">{{ currency }}</span>
                <span v-points="item.gold"></span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </van-list>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted, computed } from 'vue'
import { formatToDateTime } from '@/utils/date'
import moment from 'moment'
import store from '@/store'

const currency = computed(() => store.state.user.currency)
// const currentWallet = computed(() => store.state.user.currentWallet)

import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const loading = ref(false)
const finished = ref(false)
const showBottom = ref(false)
const showBottom2 = ref(false)
const commonKey = ref({ key: '', value: t('user.whole') })
const popupTitle = ref(t('user.type'))

const beginTime = ref<any>('')
const endTime = ref<any>('')

// getTradeTypeEnums
import { capitalRecords, getTradeTypeEnums } from '@/api/user'
const list = reactive<{ arr: any }>({ arr: [] })
const dataList = reactive<{ arr: any }>({ arr: [] })
const typeList = reactive<{ arr: any }>({ arr: [] })

const emit = defineEmits(['valueChange', 'timeChange'])

const popupList = reactive<{ arr: any[] }>({ arr: [] })

import { showToast } from 'vant'

const dateTimeVal = ref<any>({
  beginName: moment().subtract(90, 'days').format('MM/DD'),
  endName: moment().format('MM/DD')
})

onMounted(() => {
  TradeTyp()
  endTime.value = moment().valueOf()
  const oneDayDate = 24 * 60 * 60 * 1000
  beginTime.value = endTime.value - oneDayDate * 90
})

const setDateTime = (values: any) => {
  const [start, end] = values
  dateTimeVal.value.beginName = moment(start).format('MM/DD')
  dateTimeVal.value.endName = moment(end).format('MM/DD')

  beginTime.value = moment(start).valueOf()
  endTime.value = moment(end).valueOf()
  loading.value = true
  finished.value = false
  showBottom2.value = false
  page = 0
  list.arr = []
  onLoad()
}
// 结算方式
const getPayStatus = (item:any) => {
  if (item.tradeType === 'SETTLEMENT' || item.tradeType === 'CASHOUT_ALL') {
    return true
  }
  return false
}

async function setPk(val: any) {
  commonKey.value = val
  loading.value = true
  finished.value = false
  page = 0
  list.arr = []
  onLoad()
  console.log(val)
}

let page: number = 0
const onLoad = async () => {
  page++
  const params: any = {
    page: page,
    pageSize: 20,
    beginDate: beginTime.value,
    endDate: endTime.value,
    needCount: 1,
    tradeType: commonKey.value.key
  }
  const res: any = await capitalRecords(params)
  const data = res.data
  if (res.code === 200) {
    data.transferRecordRspList.forEach((item: any) => {
      list.arr.push(item)
    })
    const listObj: any = {}
    const listFlag: any = []
    const sortArr = list.arr.sort((a: any, b: any) => {
      return b.createTime - a.createTime
    })
    sortArr.map((item: any) => {
      const date = moment(item.createTime).format('YYYY/MM/DD')
      if (listObj[date]) {
        listObj[date].list.push(item)
      } else {
        listObj[date] = {
          date: date,
          list: [item]
        }
      }
    })
    Object.keys(listObj).map(item => {
      listFlag.push(JSON.parse(JSON.stringify(listObj[item])))
    })

    dataList.arr = listFlag
    loading.value = false
    finished.value = !data.transferRecordRspList.length
  } else {
    showToast(res.msg)
  }
}
const seStatus = () => {
  showBottom.value = true
  emit('valueChange', true, popupTitle.value, popupList.arr, commonKey.value, 2)
}
// 日期弹窗
const setDate = () => {
  showBottom2.value = true
  emit('timeChange', true, 2, beginTime.value, endTime.value)
}
const TradeTyp = async () => {
  const res: any = await getTradeTypeEnums({})
  if (res.code !== 200) {
    return showToast(res.msg)
  }
  typeList.arr = res.data
  popupList.arr = [{
    value: t('user.whole'),
    key: ''
  },
  ...res.data
  ]
  popupList.arr.map((item) => {
    if (item.tradeType) {
      item.value = getTitle(item.tradeType)
      item.key = item.tradeType
    }
  })
}
// 获取标题
const getTitle = (type: any) => {
  if (typeList.arr.length) {
    const target = typeList.arr.find((item: any) => item.tradeType === type)
    const closeType = JSON.parse(target.manyName)
    const lang: any = localStorage.getItem('locale') || {}
    return closeType[lang] || ''
  }
}

defineExpose({
  setPk, setDateTime, showBottom, showBottom2
})

</script>

<style lang="scss" scoped>
// 时间选择
.timeSelect {
  margin-top: 23px;
  display: flex;
  align-items: center;
  padding-left: 30px;
  justify-content: space-around;
}

// 状态
.status {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-family: PingFangSC-Semibold;
  font-size: 24px;
  color: var(--color-search-box-text-1);
  letter-spacing: 0;
  font-weight: 600;

  .status_1 {
    display: flex;
    align-items: center;
    margin-right: 30px;
    white-space: nowrap;

    .round {
      white-space: nowrap;
      padding: 0 25px;
      padding-right: 35px;
      height: 52px;
      text-align: center;
      line-height: 52px;
      background: var(--color-search-box-frame);
      border-radius: 32px;
      margin-left: 10px;
      position: relative;
      font-size: 23px;
      color: #546371;

      &-text {
        white-space: nowrap;
      }

      .img_1 {
        position: absolute;
        right: 15px;
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

.color-line {
  margin-top: 20px;
  margin-bottom: 18px;
  background: var(--color-search-box-sidebar);
}

// 列表
.dataList {
  margin-top: 20px;
  // height: calc(100vh - 280px);
  height: calc(100vh - 320px);
  overflow-y: auto;

  >&-item {
    margin-bottom: 10px;
  }

  .color-1 {
    color: var(--color-bg-1);
  }

  .color-2 {
    color: #1ebb52;
  }



  .date-title {
    font-family: PingFangSC-Semibold;
    font-size: 24px;
    color: var(--color-search-box-text-1);
    letter-spacing: 0;
    font-weight: 600;
    margin-bottom: 10px;
    margin-left: 7px;
  }

  .item {
    background: var(--van-result-box);
    border-radius: 22px;
    padding: 15px 20px;
    margin-bottom: 20px;

    >.title {
      font-family: PingFangSC-Medium;
      font-size: 24px;
      color: var(--color-search-box-text-1);
      letter-spacing: 0;
      font-weight: 500;
    }

    >.line {
      // margin-top: 5px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .left {
        font-family: PingFangSC-Regular;
        font-size: 22px;
        color: var(--color-search-box-text-2);
        letter-spacing: 0;
        font-weight: 400;

        &-1 {
          display: flex;
          // align-items: center;
          margin-bottom: 12px;

          .font {
            margin-right: 5px;

            &-1 {
              display: inline-block;
              width: 230px;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
          }
        }

        &-2 {
          .font {
            margin-right: 5px;
          }
        }

        .img_1 {
          width: 20px;
          height: 24px;
          margin-left: 8px;
        }
      }

      .right {
        font-family: PingFangSC-Regular;
        font-size: 22px;
        color: var(--color-search-box-text-2);
        letter-spacing: 0;
        font-weight: 400;

        &-1 {
          font-family: PingFangSC-Semibold;
          font-size: 28px;
          color: var(--color-search-box-text-1);
          letter-spacing: 0;
          font-weight: 600;
          display: flex;
          align-items: center;

          img {
            width: 20px;
            height: 20px;
          }

          .money-symbol {
            font-size: 24px;
            color: var(--color-search-box-text-1);
            margin-right: 5px;
          }
        }
      }
    }
  }
}

.noData {
  width: 100%;
  text-align: center;
  font-family: PingFangSC-Medium;
  font-size: 24px;
  color: var(--color-no-data-font);
  letter-spacing: 0;
  font-weight: 500;
  height: 850px;

  >.img_1 {
    margin-top: 331px;
    width: 102px;
    height: 121px;
    margin-bottom: 57px;
  }
}
</style>
