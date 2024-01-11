<template>
  <van-collapse v-model="activeNames" accordion :border="false" class="GlobalCollapse">
    <van-collapse-item name="1">
      <template #title>
        <ArrowTitle
          class="mt10 goodArrowTitle"
          :src="titleRecommend"
          :text="$t('home.goofMatch')"
        />
      </template>
      <div class="goodMatch">
        <SportsTabs ref="refSportsTabs" class="pb10 pt10" @returnSportsSuccess="returnSportsSuccess" />
        <Loading v-if="!isLoading" />
        <template v-else>
          <HomeEmpty v-if="!recommendEventsList.length" />
          <HomeMatchHandicap v-for="(item,idx) in recommendEventsList" :key="idx" :send-params="item" class="mb10" />
        </template>
        <div v-if="recommendEventsList.length" class="Button-MatchMore mt10" @click="goToSport">
          <span>
            {{ $t('home.lookMoreMatch') }}
          </span>
        </div>
      </div>
    </van-collapse-item>
  </van-collapse>
</template>
<script lang="ts" setup>
import Dayjs from 'dayjs'
import { arrayGetKey } from '@/utils/home/arrayGetKey'
const dateUtil = Dayjs
import titleRecommend from '@/assets/images/home/title-recommend.png'
import { onBeforeMount, reactive, ref, computed, watch } from 'vue'
import store from '@/store'
import router from '@/router'
import { recommendEvents } from '@/api/home'
const refreshChangeTime = computed(() => store.state.home.refreshChangeTime)
const timeout:any = ref('')
const activeNames = ref('1')
const refSportsTabs = ref()
watch(refreshChangeTime, (val) => {
  if (val) {
    refSportsTabs.value?.resetParams()
    activeNames.value = '1'
    clearTimeout(timeout.value)
    timeout.value = setTimeout(() => {
      getRecommendEvents()
    }, 100)
  }
})
const recommendEventsList = reactive([])
const isLoading = ref(false)
const getRecommendEvents = async (gameType:any = 'FT') => {
  const params = {
    gradeType: 1,
    gameType: gameType,
    startDate: dateUtil().format('YYYY-MM-DD') + ' 00:00:00',
    endDate: dateUtil().add(1, 'day').format('YYYY-MM-DD') + ' 23:59:59'
  }
  isLoading.value = false
  const res:any = await recommendEvents(params)
  isLoading.value = true
  if (res.code === 200) {
    const data:any = res?.data || {}
    const { baseData } = data
    recommendEventsList.length = 0
    recommendEventsList.push(...baseData)
  }
}
const returnSportsSuccess = (val:any) => {
  gameType.value = val
  getRecommendEvents(val)
}
const init = () => {
  getRecommendEvents()
}
onBeforeMount(() => {
  init()
})

const gameType = ref('FT')
const goToSport = () => {
  router.push({
    name: 'Sport',
    params: {
      type: gameType.value
    }
  })
}
</script>
<style lang="scss">
.goodArrowTitle{
  .img{
    width: 34px !important;
    height: 30px !important;
  }
}
</style>
