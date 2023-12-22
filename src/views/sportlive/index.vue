<template>
  <div class="sportlive">
    <div v-if="gameTypeList.length" class="sportlive-Match-Tabs">
      <TextButton text="推荐" :active="!gameType" @click="clickGameType({})" />
      <SportsButton v-for="(item,idx) in gameTypeList" :key="idx" :text="item.gameType" :active="gameType===item.gameType" @click="clickGameType(item)" />
    </div>
    <Loading v-if="!isLoading" />
    <template v-else>
      <MatchLive v-for="(item,idx) in commonMatchesList" :key="idx" :send-params="item" />
      <HomeEmpty v-if="!commonMatchesList.length"></HomeEmpty>
    </template>
    <div class="footerHeight"></div>
  </div>
</template>
<script lang="ts" setup>
import TextButton from '@/components/Button/TextButton/index.vue'
import MatchLive from '@/components/HomeMatch/MatchLive/index.vue'
import { ref, onBeforeMount } from 'vue'
import { apiRBCondition, apiCommonMatches } from '@/api/home'
const gameType:any = ref()
const isLoading = ref(false)
onBeforeMount(async () => {
  isLoading.value = false
  await getApiRBCondition()
  await getApiCommonMatches()
})
const showGameTypeList:any = ref(['FT', 'BK', 'TN', 'OP_BM'])
const gameTypeList:any = ref([])
const getApiRBCondition = async () => {
  const res:any = await apiRBCondition({ }) || {}
  if (res.code === 200 && res.data) {
    const dataList = res.data || []
    gameTypeList.value = dataList.filter((t:any) => showGameTypeList.value.includes(t.gameType))
  }
}
const commonMatchesList:any = ref([])
const getApiCommonMatches = async () => {
  const params = {
    gameType: gameType.value || '',
    showtype: 'RB',
    timeStage: 0,
    dateStage: 0,
    gameSort: 1,
    isNovice: 'Y',
    onlyFavorite: 0,
    leagueIds: '',
    gameTypeSon: '',
    page: 1,
    pageSize: 50
  }
  isLoading.value = false
  const res:any = await apiCommonMatches(params) || {}
  isLoading.value = true
  if (res.code === 200 && res.data?.matchList?.baseData) {
    const dataList = res.data?.matchList?.baseData || []
    commonMatchesList.value = dataList.filter((t:any) => showGameTypeList.value.includes(t.gameType))
  } else {
    commonMatchesList.value = []
  }
}
const clickGameType = (item:any) => {
  gameType.value = item.gameType
  getApiCommonMatches()
}
</script>
<style lang="scss" scoped>
.sportlive{
  padding: 0 40px;
}
.sportlive-Match-Tabs{
  margin: 10px 0;
  display: flex;
  overflow: auto;
  &::-webkit-scrollbar {
    height: 0;
    display: none;
  }
  .textButton {
    margin-right: 20px;
    flex-shrink: 1;
  }
  .SportsButton{
    margin-right: 20px;
    flex-shrink: 1;
  }
}
</style>
