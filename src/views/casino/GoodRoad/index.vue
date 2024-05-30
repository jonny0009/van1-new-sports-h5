<template>
  <section class="good-road-view">
    <div class="title">
      <span>{{ $t('home.casinoTitleObj.title1') }}</span>
    </div>
    <Loading v-if="loading" />
    <div v-else-if="list.length" class="list">
      <TableInfo v-for="(item, index) in list" :key="index" :table-info="item"></TableInfo>
    </div>
    <EmptyData v-else />
  </section>
  <van-popup v-model:show="show" round position="bottom" teleport="body" :style="{ height: '84%' }">
    <iframe ref="iframeRef" width="100%" height="100%" style="border: none" :src="url" frameborder="0"></iframe>
  </van-popup>
</template>

<script lang="ts" setup>
import { getBJGameUrl } from '@/api/home'
import TableInfo from './TableInfo.vue'
import { ref } from 'vue'
import { closeToast, showLoadingToast } from 'vant'
import { getBrowserLanguage } from '@/utils'
import { BaccaratUtils } from '@/utils/BaccaratUtils'
import { useI18n } from 'vue-i18n'
import store from '@/store'
const { t } = useI18n()

defineProps({
  list: {
    type: Object,
    default: () => {}
  },
  loading: {
    type: Boolean,
    default: true
  }
})
const show = ref(false)
const iframeRef = ref()
const baccaratUtils = ref()
const url = ref('')
const handleClose: any = () => {
  show.value = false
}
const handleUpdateBalance = () => {
  store.dispatch('user/getCurrency')
}
const goodRoadShow = async () => {
  show.value = !show.value
  const params = {
    supplierId: 'aigame',
    gameKey: 'BAC-V2.0',
    openType: 2,
    dirType: 1,
    terType: 2
  }
  showLoadingToast({
    duration: 20000,
    message: t('home.loading')
  })
  const gres: any = await getBJGameUrl(params).finally(() => {
    closeToast()
  })

  if (!baccaratUtils.value) {
    baccaratUtils.value = new BaccaratUtils(iframeRef.value, { handleClose, handleUpdateBalance })
  }

  if (gres?.code === 200) {
    const lang = localStorage.getItem('locale') || getBrowserLanguage()
    const gameUrl = gres.data['url'].replace('&isAi=1', '')
    url.value = `${gameUrl}&language=${lang}#/multiple`
  }
}
const miTablesShow = async () => {
  show.value = !show.value
  const params = {
    supplierId: 'aigame',
    gameKey: 'VIR_BAC',
    openType: 2,
    dirType: 1,
    appType: 2
  }
  showLoadingToast({
    duration: 20000,
    message: t('home.loading')
  })
  const gres: any = await getBJGameUrl(params).finally(() => {
    closeToast()
  })

  if (!baccaratUtils.value) {
    baccaratUtils.value = new BaccaratUtils(iframeRef.value, { handleClose, handleUpdateBalance })
  }

  if (gres?.code === 200) {
    const lang = localStorage.getItem('locale') || getBrowserLanguage()
    const gameUrl = gres.data['url'].replace('&isAi=1', '')
    url.value = `${gameUrl}&language=${lang}`
  }
}
</script>
<style lang="scss" scoped>
.good-road-view {
  padding: 35px;
  padding-bottom: 0px;
  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 36px;
    color: rgb(14, 61, 102);
    font-size: 32px;
    font-weight: 600;
  }

}
</style>
