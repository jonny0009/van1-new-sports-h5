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
        v-for="(item, index) in navList"
        :key="index"
        :disabled="item.value === 'community'"
        :title="item.text"
        :name="item.value"
      >
      </van-tab>
    </van-tabs>
  </div>
</template>

<script lang="ts" setup>
import { reactive, computed } from 'vue'
import { showToast } from 'vant'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

import router from '@/router'
import store from '@/store'
const ifThemeBlue = computed(() => {
  return store.state.app.theme === 'blue'
})

const isShowCasino = computed(() => {
  return store.state.app.isShowCasino
})

const active = computed(() => {
  const routerName: any = router?.currentRoute?.value?.name || ''
  const routerNameToLowerCase = routerName.toLowerCase()
  const isrouterNameToLowerCase = ['match', 'casino'].includes(routerNameToLowerCase)
  if (!isrouterNameToLowerCase) {
    store.dispatch('app/setKeyValue', {
      key: 'showSportsTop',
      value: true
    })
  } else {
    store.dispatch('app/setKeyValue', {
      key: 'showSportsTop',
      value: false
    })
  }
  return isrouterNameToLowerCase ? routerNameToLowerCase : 'home'
})

const navList = computed(() => {
  const arr = [{
    text: t('home.sport'),
    value: 'home'
  },
  {
    text: t('home.live'),
    value: 'match'
  }
  ]
  if (isShowCasino.value) {
    arr.push({
      text: t('home.casino'),
      value: 'casino'
    })
  }
  return arr
})

// 更换点击触发
const emit = defineEmits(['tabChangeValue'])
// tab 点击
const changeTab = (val: any) => {
  if (val.name === 'community') {
    showToast(t('home.stayTuned'))
    return
  }
  // store.dispatch('betting/setMoreShow', { status: false, moreParams: {} })
  emit('tabChangeValue', val.name)
  // let urlParams = val.name
  // router.push(`/` + urlParams)
  // setTimeout(() => {
  // if (val.name === 'home') {
  //   store.dispatch('app/setKeyValue', {
  //     key: 'showSportsTop',
  //     value: true
  //   })
  // } else {
  //   store.dispatch('app/setKeyValue', {
  //     key: 'showSportsTop',
  //     value: false
  //   })
  // }
  // }, 200)
}

// 标签颜色
const tabColor = (num: any) => {
  if (num === 1) {
    if (ifThemeBlue.value) {
      return '#0E3D66'
    }
    return '1F2630'
  }
  if (num === 2) {
    if (ifThemeBlue.value) {
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
