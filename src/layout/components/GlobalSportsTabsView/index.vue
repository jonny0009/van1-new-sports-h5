<template>
  <div class="sportsTabsView">
    <div
      v-for="(item, idx) in sportsList"
      :key="idx"
      class="item"
      :class="{
        'active':item.value === active
      }"
      @click="clickChangeActive(item)"
    >
      <SportsIcon :icon-src="item.value" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import SportsIcon from '@/components/Button/SportsIcon/index.vue'
import { ref, computed, watch } from 'vue'
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
  let active = route.query.type || route.params.type
  if (!active) {
    active = getRouteName()
  }
  return active || 'home'
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
  .item{
    flex:1;
    display:flex;
    justify-content:center;
    align-items:center;
    color:#546371;
    .iconfont{
      font-size:44px;
      font-weight: 100;
    }
    &.active{
      color:#7642fe;
    }
  }
}
</style>
