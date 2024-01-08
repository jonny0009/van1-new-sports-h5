<template>
  <!-- 列表 -->
  <Nothing v-if="!pendingData.length"></Nothing>
  <div v-if="!pendingData.length" class="no-data-height" />
  <div v-if="pendingData.length" class="dataList">
    <div v-for="(item, index) in pendingData" :key="index">
      <Single v-if="item.parlayNum ===1" :item="item" class="item"></Single>
      <Bunch v-if="item.parlayNum !==1 && item.state !==2" :item="item" class="item"></Bunch>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, computed } from 'vue'
import Nothing from '../../components/Nothing/Pending.vue'
import Bunch from './bunch.vue'
import Single from './single.vue'
import store from '@/store'

const pendingData = computed(() => store.state.user.pendingData)
onMounted(() => {
  // store.dispatch('user/pendingOrder')
  getTeamLang()
})

const getTeamLang = () => {
  // 获取多语言
  const gidmsArr: any = []
  // 冠军国际化
  const championGidms: any = []
  pendingData.value.map((m:any) => {
    m.betDTOList.map((n:any) => {
      const { championType, systemId, gidm } = n
      if (championType) {
        championGidms.push(gidm)
      }
      gidmsArr.push(systemId)
    })
  })
  store.dispatch('user/getMoreTeamList', gidmsArr.join())
  store.dispatch('user/getChampionLang', championGidms.join())
}
</script>

<style lang="scss" scoped>
.no-data-height{
  height: 100px;
}
.dataList {
  // margin-bottom: 5px;
  .item {
    margin: 0 auto;
    width: 695px;
    background: #EFF1F2;
    border-radius: 22px;
    padding: 15px 20px;
    margin-bottom: 20px;
  }
}
</style>
