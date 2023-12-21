<template>
  <div class="barTabsView">
    <div
      v-for="(item, idx) in homeBarArray"
      :key="idx"
      class="item"
      :class="{
        'active':item.value === active
      }"
      @click="clickChangeActive(item)"
    >
      <ImageButton
        :active="item.value === active"
        :text="item.text"
        :src="item.icon"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import defaultChampion from '@/assets/images/home/homeTabs/homeTabs-default-champion.png'
import champion from '@/assets/images/home/homeTabs/homeTabs-champion.png'
import defaultTime from '@/assets/images/home/homeTabs/homeTabs-default-time.png'
import time from '@/assets/images/home/homeTabs/homeTabs-time.png'
import important from '@/assets/images/home/homeTabs/homeTabs-important.png'
import defaultImportant from '@/assets/images/home/homeTabs/homeTabs-default-important.png'
import { ref, watch, computed } from 'vue'
import router from '@/router'
const getRouteName = () => {
  const routerName: any = router?.currentRoute?.value?.name || ''
  return routerName.toLowerCase()
}
const getRouteNameObj:any = {
  'home': 'ImportantRecommend',
  'hometime': 'TimeSort',
  'champion': 'ChampionBet'
}
const active = ref(getRouteNameObj[getRouteName()])
const currentRoute = computed(() => router?.currentRoute?.value?.name)
watch(currentRoute, (val) => {
  if (val) {
    active.value = getRouteNameObj[getRouteName()]
    console.log(active.value, 'active.value active.value')
    console.log(homeBarArrayTable(active.value), 'assctive.value active.value')
  }
})
const clickChangeActive = (item:any) => {
  const { value, name } = item
  homeBarArray.value.length = 0
  homeBarArray.value.push(...homeBarArrayTable(value))
  active.value = value
  const params:any = { name }
  router.push(params)
}
const homeBarArrayTable = (val:any):Array<any> => {
  const newActive = val || active.value
  const activeObj:any = {
    'ImportantRecommend': important,
    'TimeSort': time,
    'ChampionBet': champion
  }
  const homeBarArrayTableArray:any = [
    {
      value: 'ImportantRecommend',
      text: '重点推荐',
      icon: defaultImportant,
      name: 'Home'
    },
    {
      value: 'TimeSort',
      text: '按时间排',
      icon: defaultTime,
      name: 'HomeTime'
    },
    {
      value: 'ChampionBet',
      text: '冠军竞猜',
      icon: defaultChampion,
      name: 'Champion'
    }
  ]
  return [...homeBarArrayTableArray.map((e:any) => {
    if (newActive === e.value) {
      e.icon = activeObj[e.value]
    }
    return e
  })]
}
const homeBarArray:any = ref(homeBarArrayTable(''))

</script>
<style lang="scss" scoped>
.barTabsView{
  display:flex;
  justify-content: center;
  align-items: center;
  .item{
    margin:0 10px;
  }
}
</style>
<style lang="scss">
.barTabsView{
  display:flex;
  .ImageButton{
    .img{
      width: 36px;
      height: 36px;
    }
  }
}
</style>
