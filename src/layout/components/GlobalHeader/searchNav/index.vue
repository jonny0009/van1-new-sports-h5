<template>
  <div>
    <van-popup v-model:show="showSearchNav" :duration="0.2" position="right" :style="{ width: '100%', height: '100%' }">
      <div class="search">
        <div class="search_box">
          <van-cell-group inset>
            <van-field
              v-model="keyWords"
              center
              clearable
              :placeholder="$t('user.search')"
              @update:model-value="getList"
            >
              <template #left-icon>
                <img v-if="ifBLue" class="searchImg" fit="contain" src="@/assets/images/user/blue/search.png" />
                <van-image v-else class="searchImg" fit="contain" :src="searchImg" />
              </template>
            </van-field>
          </van-cell-group>
          <span class="cancel" @click="toUrl()">{{ $t('user.cancellation') }}</span>
        </div>
        <!-- 推荐 -->
        <div v-if="!keyWords" class="content">
          <div v-if="searchHistory.arr.length">
            <p class="font_1 font-2">
              <span>{{ $t('user.SearchHistory') }}</span>
              <img v-if="ifBLue" class="img_3" src="@/assets/images/user/blue/delete.png" alt="" @click="hanDleClear" />
              <img v-else class="img_3" src="@/assets/images/user/del.svg" alt="" @click="hanDleClear" />
            </p>
            <van-divider class="line-color" />
            <div class="historyList">
              <div v-for="item in searchHistory.arr" :key="item" class="item">
                <van-image class="itemImg" fit="contain" :src="time" />
                <span class="font_2" @click="keyWordsSearch(item)">{{ item }}</span>
              </div>
            </div>
          </div>
          <!-- 热门搜索 -->
          <div v-if="hotList.arr.length" class="hot-recommend">
            <p class="font_1">{{ $t('user.hotSearch') }}</p>
            <van-divider class="line-color" />
            <div class="hot-list">
              <span v-for="item in hotList.arr" :key="item" class="item" @click="keyWordsSearch(item.hotSearchName)">
                {{ item.hotSearchName }}
              </span>
            </div>
          </div>
          <!-- 推荐 -->
          <p class="font_1">{{ $t('user.recommend') }}</p>
          <van-divider class="line-color" />
          <div class="content-list">
            <div v-for="(item, index) in sportsList" :key="index" class="detail" @click="toUrlGame(item)">
              <div class="left">
                <SportsIcon :icon-src="item.value" class="itemImg" />
                <span class="font_2">
                  {{ $t(`user.sports.${item.gameType}`) }}
                </span>
              </div>
              <div class="right">
                {{ item.gameCount }}
              </div>
            </div>
          </div>
        </div>

        <div v-else class="matchList">
          <div class="area-btn_1">
            <span :class="index === 1 ? 'active' : ''" @click="index = 1">{{ $t('user.league') }}</span>
            <span :class="index === 2 ? 'active' : ''" @click="index = 2">{{ $t('user.competition') }}</span>
          </div>
          <van-loading v-if="listLoading" size="24" type="spinner" vertical />
          <League
            v-if="index === 1"
            @showSearchValue="HandleShowSearchNav"
            :league-list="leagueList.arr"
            :key-words="keyWords"
          ></League>
          <Match
            v-if="index === 2"
            @showSearchValue="HandleShowSearchNav"
            :game-list="gameList.arr"
            :key-words="keyWords"
          ></Match>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted, computed } from 'vue'
import { getBrowserLanguage } from '@/utils'
import { rightSearch, hotSearch } from '@/api/user'
import SportsIcon from '@/components/Button/SportsIcon/index.vue'

import searchImg from '@/assets/images/globalLayout/header/search.png'
import time from '@/assets/images/login/time.png'

import League from './components/league.vue'
import Match from './components/match.vue'

import { useRouter } from 'vue-router'
const $router = useRouter()

const showSearchNav = ref(false)

// const $route = useRoute()

import { showToast } from 'vant'
import localStore from '@/utils/localStore'
const theme = computed(() => store.state.app.theme)

import store from '@/store'

const ifBLue = computed(() => {
  if (theme.value === 'blue') {
    return true
  }
  return false
})

const searchHistory = reactive<{ arr: any }>({ arr: localStore.getItem('searchHistory') || [] })
const keyWords = ref('')
const index = ref(1)
const leagueList = reactive<{ arr: any }>({ arr: [] })
const gameList = reactive<{ arr: any }>({ arr: [] })
// const ifHistory = ref<Boolean>(false)
const listLoading = ref<any>(false)

const hotList = reactive<{ arr: any }>({ arr: [] })
onMounted(async () => {
  // 热门搜索
  // getHotSearchList()
  // store.dispatch('app/getAllSports')
})

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
        value: e.gameType,
        gameType: e.gameType,
        gameCount: e.num * 1,
        name: 'Sport'
      }
    })
    newSportsB = [...newSportsC]
  }

  return newSportsB
})

const openSearchNav = () => {
  // 热门搜索
  keyWords.value = ''
  getHotSearchList()
  store.dispatch('app/getAllSports')
  showSearchNav.value = true
}
const HandleShowSearchNav = (val: any) => {
  showSearchNav.value = val
}

const getHotSearchList = async () => {
  const params = {
    lang: localStorage.getItem('locale') || getBrowserLanguage(),
    gameType: ''
  }
  const res: any = (await hotSearch(params)) || {}
  if (res.code === 200) {
    hotList.arr = res.data
  }
}

const hanDleClear = async () => {
  searchHistory.arr = []
  localStore.setItem('searchHistory', searchHistory.arr)
}

const keyWordsSearch = (key: any) => {
  keyWords.value = key
  getList()
}
const getList = async () => {
  listLoading.value = true
  index.value = 1
  gameList.arr = []
  leagueList.arr = []
  const res: any = await rightSearch({ keywords: keyWords.value })
  if (res.code !== 200) {
    listLoading.value = false
    return showToast(res.msg)
  }
  if (res.code === 200) {
    if (keyWords.value) {
      if (!searchHistory.arr.includes(keyWords.value)) {
        searchHistory.arr.unshift(keyWords.value)
        localStore.setItem('searchHistory', searchHistory.arr.slice(0, 100))
        searchHistory.arr = localStore.getItem('searchHistory')
      }
    }
    listLoading.value = false
    gameList.arr = res.data.gameInfo || []
    leagueList.arr = res.data.league || []
  }
}
const toUrl = () => {
  store.dispatch('user/getLocationHeight', true)
  showSearchNav.value = false
  // $router.back()
  // store.dispatch('betting/setMoreShow', { status: false, moreParams: {} })
  // $router.push({ path: '/home' })
}
const toUrlGame = (item: any) => {
  // store.dispatch('betting/setMoreShow', { status: false, moreParams: {} })
  showSearchNav.value = false
  $router.push({
    path: `/sport/${item.gameType}`
  })
}
defineExpose({
  openSearchNav
})
</script>

<style lang="scss" scoped>
.search {
  padding: 30px 0;
  background-color: var(--color-background-color);
  height: 100vh;

  .search_box {
    display: flex;
    align-items: center;
    padding-left: 10px;
    padding-right: 16px;
    :deep(.van-field) {
      width: 585px;
      height: 68px;
      padding-top: 13px;
      background: var(--color-search-box) !important;
      border-radius: 34px;
      display: flex;
      align-items: center;
    }

    :deep(.van-field__body) {
      margin-top: -8px;
      .van-field__control {
        // color: var(--color-text-5);
        color: var(--color-text-4);
      }
    }

    .searchImg {
      height: 28px;
      width: 28px;
    }

    .cancel {
      font-family: PingFangSC-Semibold;
      font-size: 26px;
      color: var(--color-search-box-text);
      letter-spacing: 0;
      font-weight: 600;
      white-space: nowrap;
    }
  }

  > .content {
    // height: calc(100vh - 126px);
    height: calc(100vh - 136px);
    overflow-y: auto;
    margin-top: 31px;
    padding: 0 36px;
    background-color: var(--color-background-color);

    .line-color {
      background: #e5ecf3;
      height: 2px;
      margin-top: 6px;
    }

    .font_1 {
      font-family: PingFangSC-Semibold;
      font-size: 24px;
      color: #96a5aa;
      letter-spacing: 0;
      font-weight: 600;
    }

    .font-2 {
      display: flex;
      justify-content: space-between;

      .img_3 {
        width: 24px;
        height: 24px;
      }
    }

    .historyList {
      padding-top: 0px;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      margin-bottom: 20px;
      max-height: 108px;
      overflow: hidden;

      .item {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        margin-left: 40px;
        color: var(--color-search-box-text-1);

        .itemImg {
          height: 34px;
          width: 34px;
        }

        .font_2 {
          font-family: PingFangSC-Medium;
          font-size: 24px;
          letter-spacing: 0;
          font-weight: 500;
          margin-left: 14px;
        }
      }
    }

    // 热门推荐
    .hot-recommend {
      .hot-list {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-wrap: wrap;

        .item {
          display: inline-block;
          font-family: PingFangSC-Medium;
          margin-right: 20px;
          margin-bottom: 13px;
          // height: 60px;
          padding: 15px 10px;
          font-size: 24px;
          color: var(--color-search-box-text-1);
          letter-spacing: 0;
          font-weight: 500;
          background: var(--color-search-box-frame);
          border-radius: 10px;
        }
      }
    }

    .content-list {
      // height: calc(100vh - 300px);
      padding-bottom: 50px;
      margin-top: -7px;
      // overflow-y: auto;
    }

    .detail {
      margin-top: 20px;
      background: var(--color-search-box-frame);
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 22px;

      .left {
        display: flex;
        align-items: center;

        .font_2 {
          font-family: PingFangSC-Medium;
          font-size: 24px;
          color: var(--color-search-box-text-1);
          letter-spacing: 0;
          font-weight: 500;
          margin-left: 20px;
        }
      }

      .itemImg {
        height: 38px;
        width: 38px;
        color: var(--color-search-box-text-2);
      }

      .right {
        font-family: PingFangSC-Medium;
        font-size: 28px;
        color: var(--color-search-box-text-2);
        letter-spacing: 0;
        text-align: right;
        font-weight: 500;
      }
    }
  }

  // 比赛列表
  .matchList {
    padding: 23px 36px;
    .area-btn_1 {
      display: flex;
      justify-content: flex-start;

      span {
        font-family: PingFangSC-Semibold;
        font-size: 28px;
        color: #97a6ab;
        letter-spacing: 0;
        font-weight: 600;
        margin-left: 80px;
      }

      .active {
        color: var(--color-search-box-text-1);

        &::after {
          content: '';
          width: 100%;
          height: 6px;
          display: block;
          margin: 10px auto;
          border-bottom: 6px solid #000;
          border-radius: 6px;
        }
      }
    }
  }
}

:deep(.van-field__control) {
  font-size: 28px;
  font-weight: 500;
}

:deep(.van-icon) {
  font-size: 45px;
}

:deep(.van-cell-group--inset) {
  background-color: var(--color-background-color);
}
:deep(.van-overlay) {
  // background: var(--color-background-color);
  margin-top: 1px;
}
</style>

<style>
:root {
  --van-field-placeholder-text-color: var(--color-text-4);
}
</style>
