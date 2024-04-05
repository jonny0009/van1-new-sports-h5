<template>
  <div class="timeSelect">
    <!-- 时间 -->
    <div class="status status-2">
      <div class="status_1">
        <span>{{ $t('user.time') }}</span>
        <div class="round" @click.stop="setDate()">
          <span>{{ dateTimeVal.beginName }} </span> ~ <span>{{ dateTimeVal.endName }}</span>
          <img class="img_1" :class="[showBottom2 ? 'img_3' : '']" src="@/assets/images/user/down.png" alt="" />
        </div>
      </div>
    </div>
    <!-- 状态 -->
    <div class="status">
      <div class="status_1">
        <span>{{ $t('user.state') }}</span>
        <div class="round" @click.stop="seStatus()">
          <span>{{ commonKey.value }}</span>
          <img class="img_1" :class="[showBottom ? 'img_3' : '']" src="@/assets/images/user/down.png" alt="" />
        </div>
      </div>
    </div>
  </div>
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
    <div v-for="(item, index) in list.arr" :key="index">
      <Single v-if="Number(item.parlayNum) === 1" :item="item" class="item"></Single>
      <Bunch v-if="Number(item.parlayNum) !== 1" :item="item" class="item"></Bunch>
    </div>
  </van-list>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue'
import moment from 'moment'
import Bunch from '@/components/BettingRecord/bunch/index.vue'
import Single from '@/components/BettingRecord/single/index.vue'
import { betRecordTab } from '@/api/user'
import store from '@/store'
import { showToast } from 'vant'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const list = reactive<{ arr: any }>({ arr: [] })
const beginTime = ref<any>('')
const endTime = ref<any>('')
const popupTitle = ref(t('user.state'))
const commonKey = ref({ key: '', value: t('user.whole') })
const showBottom = ref(false)
const showBottom2 = ref(false)
const loading = ref(false)
const finished = ref(false)
const emit = defineEmits(['valueChange', 'timeChange'])
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
const dateTimeVal = ref<any>({
  beginName: moment().subtract(90, 'days').format('MM/DD'),
  endName: moment().format('MM/DD')
})

onMounted(() => {
  endTime.value = moment().valueOf()
  const oneDayDate = 24 * 60 * 60 * 1000
  beginTime.value = endTime.value - oneDayDate * 90
})
const onLoad = () => {
  getNoAccount()
}
const seStatus = () => {
  showBottom.value = true
  emit('valueChange', true, popupTitle.value, popupList.arr, commonKey.value, 1)
}
// 日期弹窗
const setDate = () => {
  showBottom2.value = true
  emit('timeChange', true, 1, beginTime.value, endTime.value)
}
const setDateTime = (values: any) => {
  const [start, end] = values
  dateTimeVal.value.beginName = moment(start).format('MM/DD')
  dateTimeVal.value.endName = moment(end).format('MM/DD')

  beginTime.value = moment(start).valueOf()
  const oneDayDate = 24 * 60 * 60 * 1000
  endTime.value = moment(end).valueOf() + (oneDayDate-1000)
  loading.value = true
  finished.value = false
  showBottom2.value = false
  page = 0
  list.arr = []
  getNoAccount()
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
    // 获取多语言
    const gidmsArr: any = []
    // 冠军国际化
    const championGidms: any = []
    list.arr.map((m: any) => {
      m.betDTOList.map((n: any) => {
        const { championType, systemId, gidm } = n
        if (championType) {
          championGidms.push(gidm)
        }
        gidmsArr.push(systemId)
      })
    })
    store.dispatch('user/getMoreTeamList', gidmsArr.join())
    store.dispatch('user/getChampionLang', championGidms.join())
    loading.value = false
    finished.value = !data.length
  }
}
defineExpose({
  setPk,
  setDateTime,
  showBottom,
  showBottom2
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

// 列表
.dataList {
  height: calc(100vh - 340px);
  overflow-y: auto;
  margin-top: 20px;
  // padding: 0 36px;

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
    color: #1f2630;
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
  height: 850px;

  > .img_1 {
    margin-top: 331px;
    width: 102px;
    height: 121px;
    margin-bottom: 57px;
  }
}
</style>
