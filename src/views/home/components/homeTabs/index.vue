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
const homeBarArray = ref(
  [
    {
      value: 'Home',
      text: '重点推荐',
      icon: defaultImportant
    },
    {
      value: 'live',
      text: '按时间排',
      icon: defaultTime
    },
    {
      value: 'FT',
      text: '冠军竞猜',
      icon: defaultChampion
    }
  ]
)
const barclass = (item:any) => {
  return `icon-bar-${item.value}`
}
const active = ref('Home')
const clickChangeActive = (item:any) => {
  active.value = item.value
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
