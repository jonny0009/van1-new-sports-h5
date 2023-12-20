<template>
  <div class="sportsTabsView">
    <div
      v-for="(item, idx) in homeBarArray"
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
import { ref } from 'vue'
import router from '@/router'
const homeBarArray = ref(
  [
    {
      value: 'Home',
      name: 'Home'
    },
    {
      value: 'live',
      name: 'Sportlive'
    },
    {
      value: 'FT',
      name: 'Sport'
    },
    {
      value: 'BK',
      name: 'Sport'
    },
    {
      value: 'TN',
      name: 'Sport'
    },
    {
      value: 'OP_BM',
      name: 'Sport'
    }
  ]
)
const active = ref('Home')
const clickChangeActive = (item:any) => {
  const { value, name } = item
  active.value = value
  let params = {}
  params.name = name
  if (name === 'Sport') {
    params = {
      name,
      query: {
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
