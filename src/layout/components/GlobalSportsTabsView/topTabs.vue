<template>
  <div class="sportsTabsView">
    <div
      v-for="(item, idx) in homeBarList"
      :key="idx"
      class="item"
      :class="[
        {
          active: item.routerName === active,
          itemColor: item.routerName === 'Match'
        },
        item.routerName
      ]"
      @click="goClick(item)"
    >
      <SportsIcon :icon-src="item.icon" />
      <div class="name">
        <span>
          {{ item.text }}
        </span>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed } from 'vue'
import router from '@/router'
import store from '@/store'
import { useI18n } from 'vue-i18n'
import { statistics } from '@/api/home'
const { t } = useI18n()

// 热门 Live 直播  今日  早盘 赌场
const homeBarList = ref([
  {
    icon: 'live',
    text: t('home.live'),
    routerName: 'Match',
    meta: {
      showSportsTabsView: true
    }
  },
  {
    icon: 'home',
    text: t('home.hot'),
    routerName: 'Home'
  },
  {
    icon: 'sportlive',
    text: t('sport.sports.RB'),
    routerName: 'Sportlive'
  },
  {
    icon: 'today',
    text: t('home.todayUpcoming'),
    routerName: 'sportToday'
  },
  {
    icon: 'homeTime',
    text: t('home.latestMatch'),
    routerName: 'Sport'
  },
  {
    icon: 'casino',
    text: t('home.casino'),
    routerName: 'Casino'
  }
])

const getStatistics = async () => {
  const res: any = await statistics({ showType: 'FAST' })
  if (res?.code === 200 && res?.data) {
    const stResult = res.data?.stResult || []
    store.commit('match/SET_SPORTS_LIST', stResult)
  }
}
getStatistics()

const goClick = ({ routerName }: any) => {
  store.dispatch('user/getLocationHeight', false)
  const params = {
    name: routerName
  }
  router.push(params)
}

const active: any = computed(() => {
  const active = router?.currentRoute?.value?.name || 'Home'
  return active
})
</script>
<style lang="scss" scoped>
.sportsTabsView {
  display: flex;
  overflow: auto;
  &::-webkit-scrollbar {
    height: 0;
    display: none;
  }
  .item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--color-global-text);
    min-width: 124px;
    padding-top: 40px;
    .name {
      // height: 20px;
      height: 22px;
      line-height: 20px;
      font-size: 20px;
      // margin-top: 7px;
      margin-top: 5px;
      font-weight: 600;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      // width: 100%;
      text-align: center;
      span {
        display: none;
        // overflow: hidden;
        // text-overflow: ellipsis;
        white-space: nowrap;
        // width: 100%;
        text-align: center;
        height: 20px;
        line-height: 20px;
        font-size: 20px;
      }
    }
    .iconfont {
      position: relative;
      font-size: 48px;
      font-weight: 100;
      height: auto;
    }
    &.active {
      color: var(--color-primary);
      .name {
        span {
          display: inline-block;
        }
      }
    }

    &.BK_AFT {
      .iconfont {
        top: 2px;
        font-size: 52px;
      }
    }
    &.OP_SN {
      .iconfont {
        top: 2px;
        font-size: 52px;
      }
    }
    &.OP_BO {
      .iconfont {
        &.icon-blue-OP_BO {
          font-size: 52px;
        }
      }
    }
  }
  .itemColor {
    color: rgba(255, 166, 0, 0.91);
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
