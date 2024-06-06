<template>
  <div class="result">
    <van-nav-bar class="bg-title" :title="$t('user.result')">
      <template #left>
        <van-icon name="arrow-left" class="img_1" @click="goBack()" />
      </template>
    </van-nav-bar>
    <div class="content">
      <!-- tab切换栏   swipeable"-->
      <van-tabs
        v-model:active="index"
        line-height="3px"
        :color="tabColor(1)"
        :title-inactive-color="tabColor(2)"
        :title-active-color="tabColor(1)"
        line-width="40px"
        swipe-threshold="2"
        animated
        :duration="0.2"
      >
        <van-tab :title="$t('user.BettingHistory')">
          <dataList ref="childRefA" @valueChange="setStatus" @timeChange="setDate"></dataList>
        </van-tab>
        <van-tab :title="$t('user.FlowingHistory')">
          <RunningHistory ref="childRefC" @valueChange="setStatus" @timeChange="setDate"></RunningHistory>
        </van-tab>
        <van-tab :title="$t('user.matchResult')">
          <MatchResult ref="childRefB" @valueChange="setStatus" @timeChange="setDate"></MatchResult>
        </van-tab>
      </van-tabs>

      <!-- 弹窗===11 -->
      <van-popup
        v-model:show="showBottom"
        position="bottom"
        :duration="0.2"
        closeable
        round
        :style="{ maxHeight: '60%' }"
        @close="handleClose('close')"
      >
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
              <span v-if="way === 1">
                {{ item.value }}
              </span>
              <span v-if="way === 2">
                {{ item.value }}
              </span>
              <span v-if="way === 3">
                {{ item.name }}
              </span>
              <span v-if="commonKey.key === item.key">
                <van-icon name="success" />
              </span>
            </p>
          </div>
        </div>
      </van-popup>
      <!-- 时间弹窗 日期范围 -->
      <van-calendar
        v-model:show="show"
        type="range"
        :min-date="minDate"
        :max-date="maxDate"
        :default-date="defaultDate"
        @confirm="onConfirm"
        @close="setDateBottom()"
      />
      <!-- 单个日历 -->
      <van-calendar
        v-model:show="showTime"
        type="single"
        :min-date="minDateSingle"
        :max-date="maxDateSingle"
        :default-date="defaultDateSingle"
        @confirm="onConfirm"
        @close="setDateBottom()"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import dataList from './components/dataList.vue'
import moment from 'moment'

import { ref, reactive, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import RunningHistory from './components/runningHistory.vue'
import MatchResult from './components/matchResult.vue'
import store from '@/store'

const ifThemeBlue = computed(() => {
  return store.state.app.theme === 'blue'
})
// import { useI18n } from 'vue-i18n'
// const { t } = useI18n()

const popupTitle = ref<any>('')
const commonKey = ref<any>({})
const popupList = reactive<{ arr: any[] }>({ arr: [] })

const $router = useRouter()
const way = ref(1)
const dateWay = ref(1)
const index = computed(() => store.state.user.resultTab || 0)
const childRefA = ref()
const childRefB = ref()
const childRefC = ref()
const showBottom = ref(false)

const show = ref(false)
const showTime = ref(false)

const currentDate = moment().valueOf()
const oneDayDate = 24 * 60 * 60 * 1000

const maxDate = ref<any>(new Date())
const minDate = ref<any>(new Date(currentDate - oneDayDate * 90))
const maxDateSingle = ref<any>(new Date())
const minDateSingle = ref<any>(new Date(currentDate - oneDayDate * 15))

const defaultDate = ref<any>([new Date(currentDate - oneDayDate * 7), new Date()])
const defaultDateSingle = ref<any>(new Date())

onMounted(() => {})
const goBack = () => {
  $router.back()
}
// 标签颜色
const tabColor = (num: any) => {
  if (num === 1) {
    if (ifThemeBlue) {
      return '#0E3D66'
    }
    return '1F2630'
  }
  if (num === 2) {
    if (ifThemeBlue) {
      return '#88A6BB'
    }
    return '96A5AA'
  }
}

const setStatus = (value: any, popupTitleChild: any, popupListChild: any, commonKeyChild: any, wayChild: any) => {
  popupTitle.value = popupTitleChild
  commonKey.value = commonKeyChild
  popupList.arr = [...popupListChild]
  way.value = wayChild
  showBottom.value = value
}
async function setPk(val: any) {
  showBottom.value = false
  commonKey.value = val
  if (way.value === 1) {
    childRefA.value.setPk(val)
  }
  if (way.value === 2) {
    childRefC.value.setPk(val)
  }
  if (way.value === 3) {
    childRefB.value.setPk(val)
  }
}
const setDate = (val: any, num: any, start: any, end: any) => {
  console.log(num)
  dateWay.value = num
  if (num === 1) {
    defaultDate.value = [new Date(start), new Date(end)]
    show.value = val
  }
  if (num === 2) {
    defaultDate.value = [new Date(start), new Date(end)]
    show.value = val
  }
  if (num === 3) {
    defaultDateSingle.value = new Date(start)
    showTime.value = val
  }
}
const onConfirm = (val: any) => {
  if (dateWay.value === 1) {
    childRefA.value.setDateTime(val)
    show.value = false
  }
  if (dateWay.value === 2) {
    childRefC.value.setDateTime(val)
    show.value = false
  }
  if (dateWay.value === 3) {
    childRefB.value.setDateTime(val)
    showTime.value = false
  }
}
const setDateBottom = () => {
  if (dateWay.value === 1) {
    childRefA.value.showBottom2 = false
  }
  if (dateWay.value === 2) {
    childRefC.value.showBottom2 = false
  }
  if (dateWay.value === 3) {
    childRefB.value.showBottom = false
  }
}

const handleClose = (item: any) => {
  console.log(item)
  if (way.value === 1) {
    childRefA.value.showBottom = false
  }
  if (way.value === 2) {
    childRefC.value.showBottom = false
  }
  if (way.value === 3) {
    childRefB.value.showBottom = false
  }
}
</script>

<style lang="scss" scoped>
:deep(.van-field__control) {
  height: 50px;
  font-size: 30px;
}

:deep(.van-icon) {
  font-size: 40px;
}
.result {
  .bg-title {
    background-color: var(--title-background-color-2);
    .img_1 {
      margin-top: -15px;
      width: 36px;
      height: 36px;
      color: var(--title-text-font-color);
    }
  }

  > .content {
    background-color: var(--color-background-color);
    padding: 20px 36px;
    height: 92.8vh;
  }
}
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
    color: var(--color-user-pop-up-text-color);
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
    color: var(--color-user-pop-up-text-color-2);
  }
}
</style>

<style scoped>
:deep(.van-nav-bar__content) {
  height: 96px;
}

:deep(.van-nav-bar__title) {
  height: 96px;
  line-height: 96px;
  font-family: PingFangSC-Medium;
  font-size: 28px;
  letter-spacing: 0;
  text-align: center;
  font-weight: 500;
  color: var(--title-text-font-color);
}

:deep(.van-icon) {
  font-size: 48px;
}

:deep(.van-tabs--line .van-tabs__wrap) {
  height: 65px;
}

:deep(.van-tab__text--ellipsis) {
  font-size: 28px;
  overflow: visible !important;
  white-space: nowrap;
}

:deep(.van-tabs__nav--line) {
  background-color: var(--color-background-color);
}

:deep(.van-calendar__day--middle) {
  color: var(--color-primary);
}
:deep(.van-calendar__selected-day) {
  background: var(--color-primary);
}
/* //弹窗关闭图标 */
:deep(.van-popup__close-icon) {
  color: var(--color-text-4);
}
</style>
