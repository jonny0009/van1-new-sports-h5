<template>
  <div class="champion-page">
    <div class="title">
      <img
        fit="contain"
        class="item-img"
        :src="leagueIcon"
      />
      <span class="st">
        {{ $t('sport.chooseLeague') }}
      </span></div>
    <ul class="game-type-wrap">
      <li v-for="(item, idx) in gameTypeTabList" :key="idx" @click="clickGameType(item)">
        <SportsButton :text="item.gameType" :active="chooseGameType===item.gameType" />
      </li>
    </ul>
    <ul class="league-tab-wrap">
      <li :class="chooseLeagueId==='0'?'active':''" @click="clickLeague({leagueId:'0'})">{{ $t('sport.all') }}</li>
      <li v-for="(item, idx) in leagueListAll" :key="idx" :class="chooseLeagueId===item.leagueId ? 'active':''" @click="clickLeague(item)">
        <div class="img-wrap">
          <img
            v-img="item.leagueIcon"
            type="1"
            width="23"
            height="23"
            fit="contain"
            class="item-img"
          />
        </div>
      </li>
    </ul>
    <div class="league-list">
      <div v-for="(item, idx) in leagueList" :key="idx" class="up-league-item" @click="clickSportPage(item)">
        <img
          v-img="item.leagueIcon"
          type="1"
          fit="contain"
          class="my-image icon"
        />
        <div class="content">
          <!-- <div class="top"><span v-game="item.gameType" class="sport">
          </span></div> -->
          <div class="name">{{ item.leagueName }}</div>
        </div>
      </div>
    </div>
  </div></template>

<script lang="ts" setup>
import leagueIcon from '@/assets/images/champion/league-icon.png'
import { apiChampionGameTypes, apiChampionLeagueInfo } from '@/api/champion'
import { ref, onBeforeMount } from 'vue'
import router from '@/router'
const chooseGameType:any = ref('0')
const chooseLeagueId:any = ref('0')
const gameTypeTabList:any = ref()

const leagueListAll:any = ref()
const leagueList:any = ref()

const clickGameType = async (item: any) => {
  chooseGameType.value = item.gameType
  chooseLeagueId.value = '0'
  getChampionLeagueInfo()
}

const clickLeague = (item: any) => {
  chooseLeagueId.value = item.leagueId
  if (item.leagueId === '0') {
    leagueList.value = leagueListAll.value
  } else {
    leagueList.value = leagueListAll.value.filter((t:any) => t.leagueId === item.leagueId)
  }
}

onBeforeMount(async () => {
  await getChampionGameTypes()
  await getChampionLeagueInfo()
})

// 获取球种
const getChampionGameTypes = async () => {
  const res:any = await apiChampionGameTypes() || {}
  if (res.code === 200 && res.data) {
    gameTypeTabList.value = res.data
    chooseGameType.value = res.data[0].gameType
  }
}

// 获取联赛
const getChampionLeagueInfo = async () => {
  const res:any = await apiChampionLeagueInfo({ gameType: chooseGameType.value }) || {}
  if (res.code === 200 && res.data) {
    leagueListAll.value = res.data
    leagueList.value = res.data
  }
}
const clickSportPage = (item: any) => {
  router.push({
    name: 'Sport',
    query: {
      leagueId: item.leagueId
    },
    params: {
      type: item.gameType
    }
  })
}

</script>

<style lang="scss" scoped>
.champion-page{
  padding: 0 35px 190px;
  .title{
    display: flex;
    align-items: center;
    margin: 20px 0;
    img{
      width: 42px;
      height: 38px;
    }
    .st{
      margin-left: 13px;
      font-family: PingFangSC-Semibold;
      font-size: 32px;
      color: #1F2630;
      letter-spacing: 0;
      font-weight: 600;
    }
  }
  .game-type-wrap{
    margin: 23px 0 31px 0;
    li{
      margin: 0 8px;
    }
  }
  ul{
    display: flex;
  }
  .league-tab-wrap{
    li{
      font-family: PingFangSC-Medium;
      font-size: 24px;
      font-weight: 500;
      margin: 0 8px;
      background: #EFF1F2;
      &.active{
        color: #FFFFFF;
        background: #7642FD;
      }
    }
    .img-wrap,li{
      border-radius: 50px;
      height: 64px;
      width: 64px;
      display: flex;
      justify-content: center;
      align-items: center;
      .van-image{
        background: white;
        border-radius: 25px;
        padding: 5px;
      }
    }
  }
  .league-list{
    margin-top: 48px;
    .up-league-item{
      margin-bottom: 16px;
      height: 100px;
      background: #EFF1F2;
      border-radius: 24px;
      display: flex;
      align-items: center;
      padding: 15px 18px;
      .my-image{
        width: 44px;
        height: 44px;
    }
      .content{
        margin-left: 22px;
        .top{
          font-family: PingFangSC-Semibold;
          font-size: 24px;
          color: #5A6876;
          letter-spacing: 0;
          font-weight: 600;
        }
        .name{
          font-family: PingFangSC-Semibold;
          font-size: 24px;
          color: #000000;
          letter-spacing: 0;
          font-weight: 600;
        }
      }

    }
  }
}
</style>
