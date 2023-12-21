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
import { ref, computed } from 'vue'
import router from '@/router'
import { useRoute } from 'vue-router'
const homeBarArray = ref(
  [
    {
      value: 'home',
      name: 'Home'
    },
    {
      value: 'sportlive',
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
const getRouteName = () => {
  const routerName: any = router?.currentRoute?.value?.name || ''
  return routerName.toLowerCase()
}

const active:any = computed(() => {
  const route = useRoute()
  let active = route.query.type
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
