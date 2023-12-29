<template>
  <van-divider />
  <!-- 列表 -->
  <div v-if="!list.arr.length && finished" class="noData">
    <img class="img_1" src="@/assets/images/user/noData.png" />
    <p>
      {{ $t('user.noData') }}
    </p>
  </div>
  <van-list
    v-if="list.arr.length ||!finished"
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
              <div v-if="item.payWay==4"> {{ $t('user.compensate') }}</div>
              <div v-else> {{ $t('user.betNum') }}</div>
              <div class="right-1">
                <img v-if="item.currency === 'CNY'" :src="CNY1" style="object-fit: contain;" />
                <img v-else-if="item.currency === 'VNDK'" :src="VNDK1" style="object-fit: contain;" />
                <img v-else :src="USDT1" style="object-fit: contain;" />
                {{ formatMoney(item.tradeGold) }}
              </div>

            </div>
            <div>
              <div> {{ $t('user.balance') }}</div>
              <div class="right-1">
                <img v-if="item.currency === 'CNY'" :src="CNY1" style="object-fit: contain;" />
                <img v-else-if="item.currency === 'VNDK'" :src="VNDK1" style="object-fit: contain;" />
                <img v-else :src="USDT1" style="object-fit: contain;" />
                {{ formatMoney(item.gold) }}</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </van-list>

</template>

<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue'
import { formatToDateTime } from '@/utils/date'
import { formatMoney } from '@/utils/index'
import moment from 'moment'

import CNY1 from '@/assets/images/user/CNY1.svg'
import VNDK1 from '@/assets/images/user/VNDK1.svg'
import USDT1 from '@/assets/images/user/USDT1.png'

const loading = ref(false)
const finished = ref(false)

// getTradeTypeEnums
import { capitalRecords, getTradeTypeEnums } from '@/api/user'
const list = reactive<{ arr: any }>({ arr: [] })
const dataList = reactive<{ arr: any }>({ arr: [] })
const typeList = reactive<{ arr: any }>({ arr: [] })
import { showToast } from 'vant'

onMounted(() => {
  TradeTyp()
})

let page: number = 1
const onLoad = async () => {
  page++
  const params: any = {
    page: page,
    pageSize: 20,
    beginDate: '',
    endDate: '',
    needCount: 1,
    tradeType: ''
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
const TradeTyp = async () => {
  const res: any = await getTradeTypeEnums({})
  if (res.code !== 200) {
    return showToast(res.msg)
  }
  typeList.arr = res.data
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

</script>

<style lang="scss" scoped>
// 列表
.dataList {
  margin-top: 20px;
  height: calc(100vh - 280px);
  overflow-y: auto;

  >&-item {
    margin-bottom: 10px;
  }

  .color-1 {
    color: #7642FD;
  }

  .color-2 {
    color: #1EBB52;
  }

  .date-title {
    font-family: PingFangSC-Semibold;
    font-size: 24px;
    color: #1F2630;
    letter-spacing: 0;
    font-weight: 600;
    margin-bottom: 10px;
    margin-left: 7px;
  }

  .item {
    background: #EFF1F2;
    border-radius: 22px;
    padding: 15px 20px;
    margin-bottom: 20px;

    >.title {
      font-family: PingFangSC-Medium;
      font-size: 24px;
      color: #1F2630;
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
        color: #96A5AA;
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
        color: #96A5AA;
        letter-spacing: 0;
        font-weight: 400;

        &-1 {
          font-family: PingFangSC-Semibold;
          font-size: 28px;
          color: #000000;
          letter-spacing: 0;
          font-weight: 600;
          img{
            width: 20px;
            height: 20px;
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
  color: #96A5AA;
  letter-spacing: 0;
  font-weight: 500;

  > .img_1 {
    margin-top: 331px;
    width: 102px;
    height: 121px;
    margin-bottom: 57px;

  }
}</style>
