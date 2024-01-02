<template>
  <div class="sportsTabsView">
    <div
      v-for="(item, idx) in sportsList"
      :key="idx"
      class="item"
      :class="
        [
          {
            'active':item.value === active
          },
          item.value
        ]
      "
      @click="clickChangeActive(item)"
    >
      <SportsIcon :icon-src="item.value" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import SportsIcon from '@/components/Button/SportsIcon/index.vue'
import { ref, computed } from 'vue'
import router from '@/router'
import { useRoute } from 'vue-router'
import store from '@/store'

const homeBarArray = ref(
  [
    {
      value: 'home',
      name: 'Home'
    },
    {
      value: 'sportlive',
      name: 'Sportlive'
    }
  ]
)

const sportsList = computed(() => {
  const sports = store.state.app.sports || []
  const newSportsA = sports.filter((e:any) => {
    return !['SY', 'RB', 'COMBO', 'JC'].includes(e.gameType) && e.gameCount
  })
  let newSportsB:any = [

  ]
  if (newSportsA.length) {
    const newSportsC = newSportsA.map((e:any) => {
      return {
        value: e.gameType,
        name: 'Sport'
      }
    })
    newSportsB = [...homeBarArray.value, ...newSportsC]
  }

  return newSportsB
})

const getRouteName = () => {
  const routerName: any = router?.currentRoute?.value?.name || ''
  return routerName.toLowerCase()
}

const active:any = computed(() => {
  const route = useRoute()
  let active = route.query.type || route.params.type || ''
  if (!active) {
    active = getRouteName() || ''
  }
  //
  const sports = [
    'FT', 'BK', 'TN', 'BS', 'JC',
    'BF', 'BK_AFT', 'OP_DJ', 'OP_IH',
    'OP_RU', 'OP_HB', 'OP', 'RB',
    'OP_MMA', 'OP_BO', 'OP_SN', 'OP_DR',
    'OP_TN', 'OP_FH', 'OP_FB', 'OP_BV',
    'OP_CK', 'OP_VB', 'OP_MS', 'OP_BA', 'OP_GF',
    'DR', 'OP_BM', 'OP_JR', 'OP_LO', 'OP_CY',
    'OP_OF', 'OP_SB', 'OP_FU', 'OP_TT',
    'OP_GY', 'OP_TAF', 'OP_SS', 'OP_SW',
    'OP_BS', 'OP_WS', 'OP_BD', 'sportlive'
  ]
  return sports.includes(active) ? active : 'home'
})

const clickChangeActive = (item:any) => {
  const { value, name } = item
  let params:any = {}
  params.name = name

  if (name === 'Sport') {
    params = {
      name,
      params: {
        type: value
      }
    }
  }
  router.push(params)
}
</script>
<style lang="scss" scoped>
.sportsTabsView{
  display:flex;
  height:88px;
  overflow: auto;
  &::-webkit-scrollbar {
    height: 0;
    display: none;
  }
  .item{
    flex:1;
    display:flex;
    justify-content:center;
    align-items:center;
    color:#546371;
    min-width: 124px;
    .iconfont{
      position: relative;
      font-size:44px;
      font-weight: 100;
      height: auto;
    }
    &.active{
      color:var(--color-primary);
    }
    // &.OP_DJ{
    //   .iconfont{
    //     top: 4px;
    //     font-size:54px;
    //   }
    // }

    &.BK_AFT{
      .iconfont{
        top: 2px;
        font-size:52px;
      }
    }
    &.OP_SN{
      .iconfont{
        top: 2px;
        font-size:52px;
      }
    }
  }
}
</style>

<!--
  color:transparent;
  mask-image: -webkit-linear-gradient(-45deg, #caff55 20%, #45cd00 60%);
  background-image: -webkit-linear-gradient(-45deg, #caff55 20%, #45cd00 60%);
  background-clip: text;
  -webkit-text-fill-color: transparent;

  color:transparent;
  mask-image: -webkit-linear-gradient(-45deg, #caff55 20%, #45cd00 60%);
  background-image: -webkit-linear-gradient(-45deg, #caff55 20%, #45cd00 60%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
-->
