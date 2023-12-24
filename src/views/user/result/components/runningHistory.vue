<template>
  <van-divider />
  <!-- 列表 -->
  <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" class="dataList" @load="onLoad">
    <div v-for="(item, index) in list.arr" :key="index" class="item">
      <div class="title">
        {{ getTitle(item.tradeType) }}
      </div>
      <div class="line">
        <div class="left">
          <div class="left-1">
            <div class="font">投注ID:</div>
            <span>
              <span class="font-1">{{ item.payno }}</span>
              <img v-copy="item.payno" class="img_1" src="@/assets/images/user/copy.svg" />
            </span>
          </div>
          <p class="left-2">
            <span class="font">时间:</span>
            <span>{{ formatToDateTime(item.createTime) }}</span>
          </p>
        </div>
        <div class="right">
          <div>
            <div> 投注</div>
            <div class="right-1">{{ item.currency }} {{ formatMoney(item.tradeGold) }}</div>
          </div>
          <div>
            <div> 余额</div>
            <div class="right-1">{{ item.currency }} {{ formatMoney(item.gold) }}</div>
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
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue'
import { formatToDateTime } from '@/utils/date'
import { formatMoney } from '@/utils/index'
const loading = ref(false)
const finished = ref(false)

// getTradeTypeEnums
import { capitalRecords, getTradeTypeEnums } from '@/api/user'
const list = reactive<{ arr: any }>({ arr: [] })
const typeList = reactive<{ arr: any }>({ arr: [] })
import { showToast } from 'vant'

onMounted(() => {
  TradeTyp()
})

let page: number = 0
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
    loading.value = false
    finished.value = list.arr.length === data.total
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
    return target.desc || ''
  }
}

</script>

<style lang="scss" scoped>
// 列表
.dataList {
  margin-top: 20px;
  height: calc(100vh - 330px);
  overflow-y: auto;

  .color-1 {
    color: #7642FD;
  }

  .color-2 {
    color: #1EBB52;
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
        }
      }
    }

  }
}
</style>
