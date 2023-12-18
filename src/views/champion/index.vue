<template>
  <div class="champion-page">
    <div class="title">
      <van-image
        width="42"
        height="38"
        fit="contain"
        class="item-img"
        :src="leagueIcon"
      />
      <span class="st">
        选择联赛
      </span></div>
    <ul class="game-type-wrap">
      <li v-for="(item, idx) in gameTypeList" :key="idx">
        <van-image
          width="23"
          height="23"
          fit="contain"
          class="item-img"
          :src="item.iocn"
        />
        {{ item.text }}</li>
    </ul>
    <ul class="league-wrap">
      <li>全部</li>
      <li v-for="(item, idx) in LeagueList" :key="idx">
        <div class="img-wrap">
          <van-image
            width="23"
            height="23"
            fit="contain"
            class="item-img"
            :src="item.iocn"
          />
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import leagueIcon from '@/assets/images/champion/league-icon.png'
import { imgUrlFormat } from '@/utils'
import { ref } from 'vue'
const gameTypeList:any = ref([
  {
    gameType: 'FT',
    text: '足球',
    iocn: leagueIcon
  },
  {
    gameType: 'FT',
    text: '篮球',
    iocn: leagueIcon
  },
  {
    gameType: 'FT',
    text: '足球',
    iocn: leagueIcon
  }
])

const LeagueList:any = ref([
  {
    gameType: 'FT',
    LeagueId: '1111',
    iocn: leagueIcon
  },
  {
    gameType: 'FT',
    LeagueId: '1111',
    iocn: leagueIcon
  },
  {
    gameType: 'FT',
    LeagueId: '1111',
    iocn: leagueIcon
  }
])
console.log(1234)

</script>

<style lang="scss">
.champion-page{
  padding: 0 35px;
  .title{
    display: flex;
    align-items: center;
    .st{
      margin-left: 13px;
      font-family: PingFangSC-Semibold;
      font-size: 32px;
      color: #1F2630;
      letter-spacing: 0;
      font-weight: 600;
    }
  }
  ul{
    display: flex;
  }
  .league-wrap{
    li{
      margin: 0 8px;
    }
    .img-wrap,li{
      border-radius: 50px;
      background: #EFF1F2;
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
}
</style>
