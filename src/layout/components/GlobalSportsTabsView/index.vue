<template>
  <div class="sportsTabsView">
    <div
      v-for="(item, idx) in homeBarList"
      :key="idx"
      class="item"
      :class="
        [
          {
            'active':item.routerName === active
          },
          item.routerName
        ]
      "
      @click="goClick(item)"
    >
      <SportsIcon :icon-src="item.icon" />
      <div class="name">
        {{ item.text }}
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed } from 'vue'
import router from '@/router'

// 热门 Live 直播  今日  早盘 赌场
const homeBarList = ref([
  {
    icon: 'home',
    text: '热门',
    routerName: 'Home'
  },
  {
    icon: 'sportlive',
    text: '滚球',
    routerName: 'Sportlive'
  },
  {
    icon: 'live',
    text: '直播',
    routerName: 'Broadcast',
    meta: {
      showSportsTabsView: true
    }
  },
  {
    icon: 'today',
    text: '今天早盘',
    routerName: 'HomeTime'
  },
  {
    icon: 'homeTime',
    text: '早盘',
    routerName: 'HomeTime'
  },
  {
    icon: 'casino',
    text: '赌场',
    routerName: 'Casino'
  }
])

const goClick = ({ routerName }:any) => {
  const params = {
    name: routerName
  }
  router.push(params)
}

const active:any = computed(() => {
  const active = router?.currentRoute?.value?.name || ''
  return active
})

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
    flex-direction:column;
    justify-content:center;
    align-items:center;
    color: var(--color-text-3);
    min-width: 124px;
    .name{
      line-height: 20px;
      font-size: 20px;
      margin-top: 7px;
      // color: #2D89E6;
    }
    .iconfont{
      position: relative;
      font-size:44px;
      font-weight: 100;
      height: auto;
    }
    &.active{
      color:var(--color-primary);
    }

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
    &.OP_BO{
      .iconfont{
        &.icon-blue-OP_BO{
          font-size:52px;
        }
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
