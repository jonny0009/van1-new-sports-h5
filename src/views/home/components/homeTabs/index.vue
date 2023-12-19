<template>
  <div class="homeTabs">
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
import ImageButton from '@/components/Button/ImageButton/index.vue'
import { ref } from 'vue'
const active = ref('ImportantRecommend')
const clickChangeActive = (item:any) => {
  homeBarArray.value.length = 0
  homeBarArray.value = homeBarArrayTable(item.value)
  active.value = item.value
}
const homeBarArrayTable = (val:any) => {
  const newActive = val || active.value
  const activeObj = {
    'ImportantRecommend': important,
    'TimeSort': time,
    'ChampionBet': champion
  }
  const homeBarArrayTable:any = [
    {
      value: 'ImportantRecommend',
      text: '重点推荐',
      icon: defaultImportant
    },
    {
      value: 'TimeSort',
      text: '按时间排',
      icon: defaultTime
    },
    {
      value: 'ChampionBet',
      text: '冠军竞猜',
      icon: defaultChampion
    }
  ]
  return [...homeBarArrayTable.map(e => {
    if (newActive === e.value) {
      e.icon = activeObj[e.value]
    }
    return e
  })]
}
const homeBarArray = ref(homeBarArrayTable())
const barclass = (item:any) => {
  return `icon-bar-${item.value}`
}
</script>
<style lang="scss" scoped>
.homeTabs{
  display:flex;
  justify-content: center;
  align-items: center;
  .item{
    margin:0 10px;
  }
}
</style>
<style lang="scss">
.homeTabs{
  display:flex;
  .ImageButton{
    .img{
      width: 36px;
      height: 36px;
    }
  }
}
</style>
