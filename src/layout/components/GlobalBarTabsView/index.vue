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
        :class="item.value"
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
import { ref, computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
import router from '@/router'
const active = computed(() => {
  const getRouteNameObj:any = {
    'home': 'ImportantRecommend',
    'hometime': 'TimeSort',
    'champion': 'ChampionBet'
  }
  const routerName: any = router?.currentRoute?.value?.name || ''
  const newRouterName = routerName.toLowerCase()
  const val = getRouteNameObj[newRouterName]
  return val
})

watch(active, (val) => {
  if (val) {
    homeBarArray.value.length = 0
    homeBarArray.value.push(...homeBarArrayTable(active.value))
  }
})
const clickChangeActive = (item:any) => {
  const { name } = item
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
      text: t('home.focusRecommend'),
      icon: defaultImportant,
      name: 'Home'
    },
    {
      value: 'TimeSort',
      text: t('home.timeSort'),
      icon: defaultTime,
      name: 'HomeTime'
    },
    {
      value: 'ChampionBet',
      text: t('home.championBetting'),
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
  margin: 0 40px;
  grid-gap: 36px;
  overflow: auto;
  &::-webkit-scrollbar {
    height: 0;
    display: none;
  }
  .item{
    flex-shrink: 1;
  }
}
</style>
<style lang="scss">
.barTabsView{
  display:flex;
  .ImageButton{
    .img{
      width: 36px !important;
      height: 36px !important;
    }

    &.ImportantRecommend{
      .img{
        width: 32px !important;
        height: 32px !important;
      }
    }
  }
}
</style>
