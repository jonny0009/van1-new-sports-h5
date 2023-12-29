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
    <!-- 状态 -->
    <div class="status">
      <div class="status_1">
        <span>{{ $t('user.state') }}</span>
        <div class="round" @click.stop="seStatus()">
          <span>{{ commonKey.value }}</span>
          <img class="img_1 " :class="[showBottom ? 'img_3' : '']" src="@/assets/images/user/down.png" alt="" />
        </div>
      </div>
    </div>
  </div>

  <!-- 列表 -->
  <!-- <div v-if="list.arr.length" class="dataList"> -->
  <div v-if="!list.arr.length &&finished" class="noData">
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
    <div v-for="(item, index) in list.arr" :key="index">
      <Single v-if="item.parlayNum ==1" :item="item" class="item"></Single>
      <Bunch v-if="item.parlayNum !=1" :item="item" class="item"></Bunch>
    </div>
  </van-list>

</template>

<script lang="ts" setup>
import { ref, reactive, onMounted, defineExpose } from 'vue'
import moment from 'moment'

import Bunch from './bunch.vue'
import Single from './single.vue'

// import arrow from '@/assets/images/components/title/arrow.png'
// getGameManyInfo
import { betRecordTab } from '@/api/user'
const list = reactive<{ arr: any }>({ arr: [] })
import { showToast } from 'vant'

import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const timeIndex = ref(2)
const beginTime = ref<any>('')
const endTime = ref<any>('')
const popupTitle = ref(t('user.state'))
const commonKey = ref({ key: '', value: t('user.whole') })
const showBottom = ref(false)
const loading = ref(false)
const finished = ref(false)

const emit = defineEmits(['valueChange'])

// const showTime = ref(false)
const popupList = reactive<{ arr: any[] }>({
  arr: [
    {
      value: t('user.whole'),
      key: ''
    },
    {
      value: t('user.noFinal'),
      key: '0'
    },
    {
      value: t('user.final'),
      key: '1'
    }
  ]
})
const timeList = reactive([
  {
    timeName: ''
  },
  {
    timeName: t('user.today')
  },
  // {
  //   timeName: t('user.fortyEight')
  // },
  {
    timeName: t('user.sevenDay')
  }

])
onMounted(() => {
  endTime.value = moment().valueOf()
  const oneDayDate = 24 * 60 * 60 * 1000
  beginTime.value = endTime.value - oneDayDate * 7
  // getNoAccount()
})
const onLoad = () => {
  getNoAccount()
}
const seStatus = () => {
  showBottom.value = true
  emit('valueChange', true, popupTitle.value, popupList.arr, commonKey.value, 1)
}
async function setPk(val: any) {
  commonKey.value = val
  loading.value = true
  finished.value = false
  page = 0
  list.arr = []
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
  if (index === 1) {
    startDate = nowDate - oneDayDate
  }
  // 近48小时
  // if (index === 1) {
  //   startDate = nowDate - oneDayDate * 2
  // }
  // 近7天
  if (index === 2) {
    startDate = nowDate - oneDayDate * 7
  }
  // console.log();

  beginTime.value = startDate
  endTime.value = endDate
  loading.value = true
  finished.value = false
  page = 0
  list.arr = []
  getNoAccount()
}

let page: number = 0
const getNoAccount = async () => {
  page++
  const params = {
    orderState: commonKey.value.key,
    page: page,
    pageSize: 10,
    beginTime: beginTime.value,
    endTime: endTime.value
  }

  const res: any = await betRecordTab(params)
  if (res.code !== 200) {
    loading.value = false
    finished.value = true
    return showToast(res.msg)
  }
  const data = res.data
  if (res.code === 200) {
    data.forEach((item: any) => {
      list.arr.push(item)
    })
    loading.value = false
    finished.value = !data.length
  }
}
defineExpose({
  setPk, showBottom
})

</script>

<style lang="scss" scoped>
// 时间选择
.timeSelect {
  // margin: 30px 0;
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;

  .time {
    width: 130px;
    height: 64px;
    // padding: 16px 40px;
    background: var(--van-result-box);
    border-radius: 32px;
    font-family: PingFangSC-Medium;
    font-size: 24px;
    color: var(--color-search-box-text-1);
    letter-spacing: 0;
    text-align: center;
    font-weight: 500;
    line-height: 64px;
    margin-right: 15px;
  }

  .timeActive {
    background: var(--color-bg-1);
    color: #FFFFFF;
  }

  .imgStyle {
    // margin-left: 180px;
    margin-right: 10px;
    width: 64px;
    height: 64px;
    padding: 15px;
    background: var(--color-search-box-frame);

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
  margin-left: 30px;
  // margin-top: 20px;
  display: flex;
  align-items: center;

  justify-content: flex-end;
  font-family: PingFangSC-Semibold;
  font-size: 24px;
  color: var( --color-search-box-text-1);
  letter-spacing: 0;
  font-weight: 600;

  .status_1 {
    display: flex;
    align-items: center;
    margin-right: 30px;
    .round {
      // width: 165px;
      // width: 170px;
      white-space: nowrap;
      padding: 0 25px;
      height: 52px;
      text-align: center;
      line-height: 52px;
      background: var(--color-search-box-frame);
      border-radius: 32px;
      margin-left: 10px;
      position: relative;
      font-size: 23px;

      .img_1 {
        position: absolute;
        right: 10px;
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
  height: calc(100vh - 380px);
  overflow-y: auto;
  margin-top: 20px;
  // padding: 0 36px;

  .color-1 {
    color: var(--color-bg-1);
  }

  .color-2 {
    color: #1EBB52;
  }
  .color-3 {
    color: red;
  }

  .item {
    background: var(--color-search-box-frame);
    border-radius: 22px;
    padding: 15px 20px;
    margin-bottom: 20px;

  }
}

// 弹窗
.popup-title {
  font-family: PingFangSC-Semibold;
  font-size: 32px;
  color: var(--color-search-box-text-1);
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
    color: var(--color-bg-1);
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

   >.img_1 {
    margin-top: 331px;
    width: 102px;
    height: 121px;
    margin-bottom: 57px;

  }
}
</style>
