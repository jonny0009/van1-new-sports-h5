<template>
  <div class="home-page">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <HotMatch ref="refHotMatch" :firstLeaguesList="firstLeaguesList" />
      <GoodMatch ref="refGoodMatch" :leagueIdArr="leagueIdArr" />
      <LatestMatch ref="refLatestMatch" :leagueIdArr="leagueIdArr" />
    </van-pull-refresh>
    <FooterHeight />
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import HotMatch from './HotMatch/index.vue'
import GoodMatch from './GoodMatch/index.vue'
import LatestMatch from './LatestMatch/index.vue'
import store from '@/store'
import { onMounted, onBeforeUnmount, reactive, watch, computed } from 'vue'
import { recommendLeague } from '@/api/home'
const refHotMatch = ref()
const isLoading = ref(false)
const onRefresh = () => {
  isLoading.value = false
  store.dispatch('home/setRefreshChangeTime', new Date().getTime())
}
onMounted(() => {
  getFirstLeagues()
  //获取比赛方式联赛
  getFirstLeaguesGameType()
})
const refreshChangeTime = computed(() => store.state.home.refreshChangeTime)
const timeout: any = ref('')
watch(refreshChangeTime, (val) => {
  if (val) {
    refHotMatch.value.activeNames = '1'
    clearTimeout(timeout.value)
    timeout.value = setTimeout(() => {
      getFirstLeagues()
      //获取比赛方式联赛
      getFirstLeaguesGameType()
    }, 100)
  }
})
const firstLeaguesList: any = reactive([])
const getFirstLeagues = async () => {
  refHotMatch.value.isLoading = false
  const res: any = await recommendLeague({ gameType: 'home', showType: 'FAST' })
  refHotMatch.value.isLoading = true
  if (res.code === 200) {
    const list: any = res?.data.list || []
    firstLeaguesList.length = 0
    firstLeaguesList.push(...list)
  }
}

const leagueIdArr: any = ref([])
const getFirstLeaguesGameType = async () => {
  refHotMatch.value.isLoading = false
  const res: any = await recommendLeague({ gameType: 'FT', showType: 'FAST' })
  refHotMatch.value.isLoading = true
  if (res.code === 200) {
    leagueIdArr.value = []
    const list: any = res?.data.list || []
    list.map((n: any) => {
      if (n.leagueId) {
        leagueIdArr.value.push(n.leagueId)
      }
    })
    if (!leagueIdArr.value.length) {
      leagueIdArr.value = ['']
    }
  }
}
onBeforeUnmount(() => {
  store.dispatch('home/setKeyValue', {
    key: 'RrefShow',
    value: true
  })
  store.dispatch('home/setKeyValue', {
    key: 'OUrefShow',
    value: true
  })
  store.dispatch('home/setKeyValue', {
    key: 'MrefShow',
    value: true
  })
})
</script>
<style lang="scss" scoped>
.home-page {
  overflow: hidden;
  padding: 0 40px;

  .van-pull-refresh {
    min-height: calc(100vh - 96px);
  }

  .refresh-wrap {
    padding-bottom: 190px;
  }
}
</style>
