<template>
  <div class="doubleRowNav">
    <van-tabs
      v-model:active="active"
      line-height="3px"
      :color="tabColor(1)"
      :title-inactive-color="tabColor(2)"
      :title-active-color="tabColor(1)"
      line-width="38px"
      swipe-threshold="2"
      animated
      :duration="0.2"
      @click-tab="changeTab"
    >
      <van-tab
        :disabled="item.value === 'community'"
        v-for="(item, index) in navList.arr"
        :title="item.text"
        :key="index"
      >
      </van-tab>
    </van-tabs>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, computed, watch } from 'vue'
import { showToast } from 'vant'

import { useI18n } from 'vue-i18n'
const { t } = useI18n()

import router from '@/router'
import { useRoute } from 'vue-router'
const route = useRoute()

import store from '@/store'
const ifThemeBlue = computed(() => {
  return store.state.app.theme === 'blue'
})

const active = ref(1)
watch(
  () => route.path,
  (to) => {
    const isSportRouterName = ['/match', '/casino'].includes(to)
    if (!isSportRouterName) {
      active.value = 1
    }
  }
)

const navList = reactive<{ arr: any[] }>({
  arr: [
    {
      text: t('home.Community'),
      value: 'community'
    },
    {
      text: t('home.sport'),
      value: 'home'
    },
    {
      text: t('home.live'),
      value: 'match'
    },
    {
      text: t('home.casino'),
      value: 'casino'
    }
  ]
})
// tab 点击
const changeTab = (val: any) => {
  console.log('val')
  if (val.name === 0) {
    showToast(t('home.stayTuned'))
    return
  }
  let urlParams = navList.arr[active.value]
  store.dispatch('betting/setMoreShow', { status: false, moreParams: {} })
  router.push(`/` + urlParams.value)
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
</script>

<style lang="scss" scoped>
.doubleRowNav {
  margin-top: 30px;
  width: 90%;
  margin-left: 5%;
}
</style>
<style scoped>
:deep(.van-tabs--line .van-tabs__wrap) {
  height: 65px;
}
:deep(.van-tab__text) {
  font-size: 26px;
  font-weight: 600;
}
:deep(.van-tabs__nav--line) {
  background-color: var(--color-background-color);
}
</style>
