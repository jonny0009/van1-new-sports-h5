<template>
  <div class="result">
    <van-nav-bar class="bg-title" :title="$t('user.result')">
      <template #left>
        <van-icon name="arrow-left" class="img_1" @click="goBack()" />
      </template>
    </van-nav-bar>
    <div class="content">
      <!-- tab切换栏 -->
      <van-tabs
        v-model:active="index"
        :swipeable="true"
        line-height="3px"
        color="#1F2630 "
        title-inactive-color="#96A5AA"
        title-active-color="#1F2630"
        line-width="40px"
        :duration="0.3"
      >
        <van-tab :title="$t('user.BettingHistory')">
          <dataList ref="childRefA" @valueChange="setStatus"></dataList>
        </van-tab>
        <van-tab :title="$t('user.FlowingHistory')">
          <RunningHistory></RunningHistory>
        </van-tab>
        <van-tab :title="$t('user.matchResult')">
          <MatchResult ref="childRefB" @valueChange="setStatus"></MatchResult>
        </van-tab>
      </van-tabs>

      <!-- 弹窗===11 -->
      <van-popup
        v-model:show="showBottom"
        position="bottom"
        :duration="0.2"
        closeable
        round
        :style="{ maxHeight: '50%' }"
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
                {{ $t(`user.sports.${item.gameType}`) }}
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
    </div>
  </div>
</template>

<script lang="ts" setup>
import dataList from './components/dataList.vue'

import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import RunningHistory from './components/runningHistory.vue'
import MatchResult from './components/matchResult.vue'

// import { useI18n } from 'vue-i18n'
// const { t } = useI18n()

const popupTitle = ref<any>('')
const commonKey = ref<any>({})
const popupList = reactive<{ arr: any[] }>({ arr: [] })

const $router = useRouter()
const way = ref(1)
const index = ref(0)
const childRefA = ref()
const childRefB = ref()
const showBottom = ref(false)

const goBack = () => {
  $router.back()
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
    childRefB.value.setBallSelect(val)
  }
  if (way.value === 3) {
    childRefB.value.setPk(val)
  }
}
const handleClose = (item: any) => {
  console.log(item)
  if (way.value === 1) {
    childRefA.value.showBottom = false
  }
  if (way.value === 2) {
    childRefB.value.showBottom1 = false
  }
  if (way.value === 3) {
    childRefB.value.showBottom = false
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss';

:deep(.van-field__control) {
  height: 50px;
  font-size: 30px;
}

:deep(.van-icon) {
  font-size: 40px;
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
    color: var(--color-search-box-text-1);
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
:deep(.van-tab__text--ellipsis){
  font-size: 28px;;
  overflow: visible !important;
  white-space:nowrap;
}
:deep(.van-tabs__nav--line){
  background-color: var(--color-background-color);
}
</style>
