<template>
  <!-- 列表 -->
  <Nothing v-if="!pendingData.length"></Nothing>
  <div v-if="pendingData.length" class="dataList">
    <div v-for="(item, index) in pendingData" :key="index">
      <Single v-if="Number(item.parlayNum) === 1" :item="item" :isPenDing="true" class="item"></Single>
      <Bunch v-if="Number(item.parlayNum) !== 1" :item="item" :isPenDing="true" class="item"></Bunch>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, computed } from 'vue'
import Nothing from '../../components/Nothing/Pending.vue'
import Bunch from '@/components/BettingRecord/bunch/index.vue'
import Single from '@/components/BettingRecord/single/index.vue'
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
  // 提前结算信息
  // const aheadOrderList: any = []
  pendingData.value.map((m: any) => {
    m.betDTOList.map((n: any) => {
      const { championType, systemId, gidm } = n
      if (championType) {
        championGidms.push(gidm)
      }
      gidmsArr.push(systemId)
    })
    // if (m.creditState === 0) {
    //   const orderObj = {
    //     orderId: m.orderId
    //   }
    //   aheadOrderList.push(orderObj)
    // }
  })
  store.dispatch('user/getMoreTeamList', gidmsArr.join())
  store.dispatch('user/getChampionLang', championGidms.join())

  // if (aheadOrderList.length) {
  //   store.dispatch('user/getOrderList', JSON.stringify(aheadOrderList))
  // }
}
</script>

<style lang="scss" scoped>
.dataList {
  padding: 20px 0;
  .item {
    margin: 0 auto;
    width: 695px;
    // background: #eff1f2;
    background: var(--color-search-box-frame);
    border-radius: 22px;
    padding: 15px 20px;
    margin-bottom: 20px;
  }
}
</style>
