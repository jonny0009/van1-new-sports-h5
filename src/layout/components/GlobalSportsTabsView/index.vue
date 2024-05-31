<template>
  <div class="sportsTabsView">
    <div class="tabs-cut">
      <van-tabs
        v-model:active="active"
        :duration="0.2"
        :shrink="homeStyle !== 2"
        :ellipsis="false"
        line-height="0"
        swipe-threshold="6"
        :scrollable="false"
        @click-tab="goClick"
      >
        <van-tab v-for="(item, index) in getBarList" :key="index" :name="item.routerName">
          <template #title>
            <div class="tabs-cut-1">
              <div
                class="item"
                :class="[
                  {
                    active: item.routerName === active,
                    homeStyleItem: homeStyle === 3,
                    itemColor: item.routerName === 'Match' && homeStyle === 2,
                    itemWidth: homeStyle !== 2
                  },
                  item.routerName
                ]"
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
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed } from 'vue'
import router from '@/router'
import store from '@/store'
import { useI18n } from 'vue-i18n'

const homeStyle = computed(() => store.state.app.homeStyle)
// const isShowCasino = computed(() => {
//   return store.state.app.isShowCasino
// })

const { t } = useI18n()

// 经典 nav 去掉早盘 , 加入体育项
const sportsList = computed(() => {
  // const sports = store.state.app.sports || []
  const sports = store.state.match.sportsListArr || []
  const newSportsA = sports.filter((e: any) => {
    return !['SY', 'RB', 'COMBO', 'JC'].includes(e.gameType) && e.num * 1
  })
  let newSportsB: any = []
  if (newSportsA.length) {
    const newSportsC = newSportsA.map((e: any) => {
      return {
        icon: e.gameType,
        text: t(`user.sports.${e.gameType}`),
        routerName: `/sport/${e.gameType}`,
        routerPath: `/sport/${e.gameType}`
      }
    })
    newSportsB = [...newSportsC]
  }

  return newSportsB
})

// 热门 Live 直播  今日  早盘 赌场
const homeBarList = ref([
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
  }
])
const homeStyleBarList = ref([
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
  }

])

// 获取bar
const getBarList = computed(() => {
  if (homeStyle.value === 2) {
    return homeStyleBarList.value
  }
  // 底下适用于 homeStyle[1,3], 与上面tab或者底下bar重复,先隐藏
  // if (isShowCasino.value) {
  //   return [...homeBarList.value, {
  //     icon: 'casino',
  //     text: t('home.casino'),
  //     routerName: 'Casino'
  //   }, ...sportsList.value]
  // } else {
  //   return [...homeBarList.value, ...sportsList.value]
  // }
  return [...homeBarList.value, ...sportsList.value]
}
)

const goClick = (val: any) => {
  store.dispatch('user/getLocationHeight', false)
  if (val.name.includes('/sport/')) {
    router.push(val.name)
    return
  }
  const params = {
    name: val.name
  }
  router.push(params)
}

const urlPathActive = ref<any>('')
const activeUrlName = computed({
  get() {
    // 如果读取计算属性的值，默认调用get方法
    urlPathActive.value = router?.currentRoute?.value?.name || 'Home'
    if (urlPathActive.value === 'Sport' && router?.currentRoute?.value?.path.includes('/sport/')) {
      if (homeStyle.value !== 2) {
        urlPathActive.value = router?.currentRoute?.value?.path || '/sport'
      } else {
        urlPathActive.value = 'Sport'
      }
    }

    return urlPathActive.value
  },
  set(v) {
    // v是计算属性下传递的实参
    // 如果要想修改计算属性的值，默认调用set方法
    urlPathActive.value = v
  }
})

const active = ref(activeUrlName)
</script>
<style lang="scss" scoped>
.sportsTabsView {
  // display: flex;
  // overflow: auto;
  // &::-webkit-scrollbar {
  //   height: 0;
  //   display: none;
  // }
  // margin-left: 3%;
  // width: 95%;
  // padding: 0 40px;
  // overflow: hidden !important;
  .tabs-cut {
    margin-left: 30px;
    .tabs-cut-1 {
      margin-left: -30px;
      margin-right: 25px;
    }
  }
  .item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--color-global-text);
    // min-width: 124px;
    padding-top: 40px;
    .name {
      // height: 20px;
      // height: 22px;
      height: 34px;
      line-height: 20px;
      font-size: 20px;
      // margin-top: 7px;
      margin-top: 5px;
      font-weight: 600;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 100%;
      text-align: center;
      span {
        display: none;
        // overflow: hidden;
        // text-overflow: ellipsis;
        white-space: nowrap;
        width: 100%;
        text-align: center;
        height: 20px;
        line-height: 20px;
        font-size: 20px;
        margin-top: 5px;
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
  .homeStyleItem {
    padding-top: 34px !important;
  }
  .itemColor {
    color: rgba(255, 166, 0, 0.91);
  }
  .itemWidth {
    min-width: 124px;
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
<style scoped>
:deep(.van-tabs--line .van-tabs__wrap) {
  height: 115px;
}
:deep(.van-tab__text) {
  /* font-size: 26px; */
  /* font-weight: 600; */
}
:deep(.van-tabs__nav--line) {
  background-color: var(--color-background-color);
}
:deep(.van-tab--shrink) {
  padding: 0 0 !important;
}
</style>
