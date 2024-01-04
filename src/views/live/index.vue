<template>
  <div class="live-page" :class="{ 'has-bet': showFixedBet }">
    <van-tabs
      v-model:active="navActive"
      swipeable
      sticky
      shrink
      offset-top="12.8vw"
      line-height="0"
      @change="onChangeTabs"
    >
      <van-tab v-for="(nav, index) in navList" :key="index" :name="nav.type">
        <template #title>
          <div class="tab-title">
            <SvgIcon :name="nav.iconName" />
            <span>{{ nav.title }}</span>
          </div>
        </template>

        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
          <van-list v-model:loading="loading" :finished="finished" :finished-text="t('live.noMore')" @load="onLoad">
            <div class="no-data" v-if="finished && list.length === 0">
              <EmptyIcon />
            </div>
            <div class="grid-wrapper">
              <div class="flex-item" v-for="item in list" :key="item.gidm">
                <LiveItem :item="item" @click="onItemClick(item)" />
              </div>
            </div>
          </van-list>
        </van-pull-refresh>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, Ref, onMounted, computed } from 'vue'
import LiveItem from './components/LiveItem.vue'
import { anchorLiveList } from '@/api/live'
import router from '@/router'
import { useI18n } from 'vue-i18n'
import store from '@/store'

onMounted(() => {})

const showFixedBet = computed(() => store.state.app.showFixedBet)
const { t } = useI18n()
const navList = reactive([
  { type: 'RB', title: t('live.hot'), iconName: 'live-hot' },
  { type: 'FT', title: t('live.football'), iconName: 'live-football' },
  { type: 'BK', title: t('live.basketball'), iconName: 'live-basketball' },
  { type: 'TN', title: t('live.tennisball'), iconName: 'live-tennisball' },
  { type: 'OP_BM', title: t('live.badminton'), iconName: 'live-badminton' }
])
const navActive = ref('RB')

let page: number = 0
const list: Ref<any[]> = ref([])
const loading = ref(false)
const finished = ref(false)
const refreshing = ref(false)
const onLoad = async () => {
  if (refreshing.value) {
    list.value = []
    refreshing.value = false
  }
  page++
  const params: any = {
    page: page,
    pageSize: 20
  }
  if (navActive.value == 'RB') {
    params.rbType = 1
  } else {
    params.gameType = navActive.value
  }
  const res: any = await anchorLiveList(params)
  const data = res.data
  if (res.code == 200) {
    data.list.forEach((item: any) => {
      list.value.push(item)
    })
    loading.value = false
    finished.value = list.value.length == data.total
  } else {
    finished.value = true
  }
}

const onRefresh = () => {
  page = 0
  finished.value = false
  loading.value = true
  onLoad()
}

const onChangeTabs = () => {
  refreshing.value = true
  onRefresh()
}

const onItemClick = (item: any) => {
  router.push(`/broadcast/${item.gidm}`)
}
</script>

<style lang="scss" scoped>
.live-page {
  height: 100%;
  padding-bottom: 88px;
  &.has-bet {
    padding-bottom: calc(88px + 96px);
  }

  .van-tabs {
    :deep(.van-tabs__wrap) {
      height: 110px;
    }

    .tab-title {
      height: 64px;
      padding: 0 20px;
      background: #eff1f2;
      border-radius: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #0e3d66;
      font-size: 24px;
      font-family: PingFangSC-Semibold, SF-Pro-Bold, system-ui;
      font-weight: 800;
      transition: all 0.3s;
      .svg-icon {
        font-size: 38px;
        margin-right: 14px;
        color: #88a6bb;
      }
    }
    .van-tab--active .tab-title {
      background-image: linear-gradient(180deg, var(--color-linear-gradient-1) 0%, var(--color-linear-gradient-2) 100%);
      color: #fff;
      .svg-icon {
        color: #fff;
      }
    }
  }

  .grid-wrapper {
    display: grid;
    grid-gap: 0;
    grid-template-columns: 1fr 1fr;
    padding: 0 28px;
    .flex-item {
      display: flex;
      justify-content: center;
      margin: 0 0 30px 0;
    }
  }

  .no-data {
    display: flex;
    justify-content: center;
    padding: 50px 0 0 0;
  }
}

// .navbar {
//   width: 100%;
//   overflow-x: auto;
//   overflow-y: hidden;
//   white-space: nowrap;
//   display: flex;
//   padding: 0 32px;
//   margin: 0 0 10px 0;
//   &::-webkit-scrollbar {
//     display: none;
//   }
//   &-item {
//     height: 64px;
//     padding: 0 20px;
//     background: #eff1f2;
//     border-radius: 32px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     color: #0e3d66;
//     font-size: 24px;
//     font-family: PingFangSC-Semibold, SF-Pro-Bold, system-ui;
//     font-weight: 800;
//     transition: all 0.3s;
//     &:not(:last-child) {
//       margin-right: 8px;
//     }
//     .svg-icon {
//       font-size: 38px;
//       margin-right: 14px;
//       color: #88a6bb;
//     }
//     > img {
//       width: auto;
//       height: 38px;
//       margin-right: 14px;
//     }
//     &.active {
//       background-image: linear-gradient(180deg, var(--color-linear-gradient-1) 0%, var(--color-linear-gradient-2) 100%);
//       color: #fff;
//       .svg-icon {
//         color: #fff;
//       }
//     }
//   }
// }

// .wrapper {
//   padding: 0 0 0 25px;
//   .no-data {
//     display: flex;
//     justify-content: center;
//     padding: 50px 0 0 0;
//   }
//   .van-list {
//     display: flex;
//     flex-wrap: wrap;
//     :deep(.van-list__loading),
//     :deep(.van-list__finished-text) {
//       width: 100%;
//     }
//   }
//   .live-item {
//     margin: 0 10px;
//     margin-top: 30px;
//   }
// }
</style>
