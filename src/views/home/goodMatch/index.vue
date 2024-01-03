<template>
  <ArrowTitle
    class="mt10"
    :src="titleRecommend"
    :text="$t('home.goofMatch')"
    @returnSuccess="returnStatus"
  />
  <Transition>
    <div v-if="!isShow" class="goodMatch">
      <SportsTabs class="pb10 pt10" @returnSportsSuccess="returnSportsSuccess" />
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
  </Transition>
</template>
<script lang="ts" setup>
import Dayjs from 'dayjs'
const dateUtil = Dayjs
import titleRecommend from '@/assets/images/home/title-recommend.png'
import { onBeforeMount, reactive, ref, computed, watch } from 'vue'
import store from '@/store'
import router from '@/router'
import { recommendEvents } from '@/api/home'
const refreshChangeTime = computed(() => store.state.home.refreshChangeTime)
const timeout:any = ref('')
watch(refreshChangeTime, (val) => {
  if (val) {
    clearTimeout(timeout.value)
    timeout.value = setTimeout(() => {
      isShow.value = false
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
const isShow = ref(false)
const returnStatus = (val:any) => {
  isShow.value = val
}

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
