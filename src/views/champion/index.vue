<template>
  <div class="champion-page">
    <!-- <van-pull-refresh  v-model="isRefreshLoading"  @refresh="onRefresh"> -->
    <div class="title">
      <img fit="contain" class="item-img" :src="leagueIcon" />
      <span class="st">
        {{ $t('sport.chooseLeague') }}
      </span>
    </div>
    <div class="tabs-cut">
      <van-tabs :duration="0.2" v-model:active="chooseGameType" shrink line-height="0" @change="onChangeTabs"
        :swipe-threshold="3" animated>
        <van-tab v-for="(item, index) in gameTypeTabList" :key="index" :name="item.gameType">
          <template #title>
            <SportsButton class="tabs-cut-1" :text="item.gameType" :active="chooseGameType === item.gameType"
              :class="item.text" />
          </template>
          <div class="mt10">
            <template v-if="!isLoading">
              <ul class="league-tab-wrap">
                <div class="all" :class="chooseLeagueId === '0' ? 'all-1' : ''" @click="clickLeague({ leagueId: '0' })">
                  {{ $t('sport.all') }}
                </div>
                <li v-for="(value, key) in groupedArrays" :key="key"
                  :class="chooseLeagueId === value[0].countryFlag ? 'active' : ''" @click="clickLeague(value)">
                  <div class="img-wrap">
                    <img v-img="value[0].countryFlag" type="1" fit="contain" class="item-img" />
                  </div>
                </li>
              </ul>
              <div class="league-list">
                <div v-for="(item, idx) in leagueList" :key="idx" class="up-league-item" @click="clickSportPage(item)">
                  <img v-img="item.countryFlag" type="1" fit="contain" class="my-image icon" />
                  <div class="content">
                    <div class="name">
                      <div class="name-1">
                        {{ item.countryName || 'International' }}
                      </div>
                      <div>
                        {{ item.leagueName }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </template>
            <Loading v-if="isLoading" />
          </div>
        </van-tab>
      </van-tabs>
    </div>

    <!-- </van-pull-refresh> -->

  </div>
</template>

<script lang="ts" setup>
import leagueIcon from '@/assets/images/champion/league-icon.png'
import { apiChampionGameTypes, apiChampionLeagueInfo } from '@/api/champion'
import { ref, onBeforeMount } from 'vue'
import router from '@/router'
const chooseGameType: any = ref('0')
const chooseLeagueId: any = ref('0')
const gameTypeTabList: any = ref()

const leagueListAll: any = ref()
const leagueList: any = ref()
const groupedArrays = ref<any>({})
const isLoading = ref(true)
const isRefreshLoading = ref(false)


// const clickGameType = async (item: any) => {
//   chooseGameType.value = item.gameType
//   chooseLeagueId.value = '0'
//   getChampionLeagueInfo()
// }
const onChangeTabs = async () => {
  // chooseGameType.value = item.gameType
  chooseLeagueId.value = '0'
  getChampionLeagueInfo()
}

const onRefresh = async () => {
  isRefreshLoading.value = false
  isLoading.value = true
  await getChampionGameTypes()
  await getChampionLeagueInfo()
}

const clickLeague = (item: any) => {

  if (item.leagueId === '0') {
    chooseLeagueId.value = '0'
    leagueList.value = leagueListAll.value
  } else {
    chooseLeagueId.value = item[0].countryFlag
    leagueList.value = item
    // leagueList.value = leagueListAll.value.filter((t: any) => t.leagueId === item.leagueId)
  }
}

onBeforeMount(async () => {
  await getChampionGameTypes()
  await getChampionLeagueInfo()
})

// 获取球种
const getChampionGameTypes = async () => {
  const res: any = await apiChampionGameTypes() || {}
  if (res.code === 200 && res.data) {
    gameTypeTabList.value = res.data
    chooseGameType.value = res.data[0].gameType
  }

}

// 获取联赛
const getChampionLeagueInfo = async () => {
  isLoading.value = true
  const res: any = await apiChampionLeagueInfo({ gameType: chooseGameType.value }) || {}
  if (res.code === 200 && res.data) {
    leagueListAll.value = res.data
    leagueList.value = res.data
    groupedArrays.value = res.data.reduce((acc: any, obj: any) => {
      let key = obj.countryId;
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(obj);
      return acc;
    }, {});
    isLoading.value = false
  }
}
const clickSportPage = (item: any) => {
  router.push({
    name: 'Sport',
    query: {
      leagueId: item.leagueId,
      countryId: item.countryId,
      ischampion: 'yes'
    },
    params: {
      type: item.gameType
    }
  })
}

</script>

<style lang="scss" scoped>
.champion-page {
  padding: 0 35px 96px;

  .title {
    display: flex;
    align-items: center;
    margin: 20px 0;

    img {
      width: 42px;
      height: 38px;
    }

    .st {
      margin-left: 13px;
      font-family: PingFangSC-Semibold;
      font-size: 32px;
      color: #1F2630;
      letter-spacing: 0;
      font-weight: 600;
    }
  }

  // tabs;
  .tabs-cut {
    margin-top: -10px;
    margin-bottom: 20px;
  }

  .tabs-cut-1 {
    margin-left: -30px;
    margin-right: 10px;
  }

  :deep(.van-tabs__nav--complete) {
    background-color: var(--color-background-color);
  }

  .game-type-wrap {
    margin: 23px 0 31px 0;
    overflow-x: auto;
    overflow-y: hidden;

    &::-webkit-scrollbar {
      height: 0;
      display: none;
    }

    li {
      margin: 0 8px;
    }
  }

  ul {
    display: flex;
  }

  .league-tab-wrap {
    overflow-x: auto;
    overflow-y: hidden;

    &::-webkit-scrollbar {
      height: 0;
      display: none;
    }

    li {
      font-family: PingFangSC-Medium;
      font-size: 24px;
      font-weight: 500;
      margin: 0 8px;
      background: var(--color-global-buttonBg);
      box-shadow: var(--color-global-buttonShadow);
      color: var(--color-global-minButtonCl);
      transition: all 0.3s;

      &.active {
        color: #FFFFFF;
        background: var(--color-global-buttonPrimaryBg);
      }
    }

    .all {
      border-radius: 50px;
      height: 64px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      padding: 16px 20px;
      background: var(--color-global-buttonBg);
      box-shadow: var(--color-global-buttonShadow);
      color: var(--color-global-minButtonCl);
      transition: all 0.3s;
      white-space: nowrap;
    }

    .all-1 {
      color: #FFFFFF;
      background: var(--color-global-buttonPrimaryBg);
    }

    .img-wrap,
    li {
      // border-radius: 50px;
      border-radius: 50%;
      height: 64px;
      width: 64px;
      display: flex;
      justify-content: center;
      align-items: center;

      .van-image {
        background: white;
        // border-radius: 25px;
        border-radius: 50%;
        // padding: 5px;
      }

      .item-img {
        height: 44px;
        width: 44px;
        border-radius: 50%;
      }
    }

  }

  .league-list {
    margin-top: 48px;
    height: calc(100vh - 750px);
    overflow-y: auto;

    .up-league-item {
      margin-bottom: 16px;
      height: 100px;
      background: var(--color-champion-item-bg);
      border-radius: 24px;
      display: flex;
      align-items: center;
      padding: 15px 18px;

      .my-image {
        width: 44px;
        height: 44px;
        border-radius: 50%;
      }

      .content {
        margin-left: 22px;

        .top {
          font-family: PingFangSC-Semibold;
          font-size: 24px;
          color: #5A6876;
          letter-spacing: 0;
          font-weight: 600;
        }

        .name {
          font-family: PingFangSC-Semibold;
          font-size: 24px;
          color: var(--color-champion-item-text);
          letter-spacing: 0;
          font-weight: 600;

          .name-1 {
            color: var(--color-text-4-1);
            font-size: 23px;
          }
        }
      }

    }
  }
}

:deep(.van-tabs__line) {
  display: none;
}
</style>
