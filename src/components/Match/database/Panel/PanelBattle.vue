<template>
  <div class="battle-matrix">
    <img class="bg" :src="coverBg" alt="" />
    <div class="lineup-container">
      <div class="battle-matrix-row">
        <div v-for="(_home, i) in homeTeams" :key="i" :class="[`lineup-col home col-${i + 1}`]">
          <div class="col-team" v-for="item in _home" :key="item.playerId">
            <div class="nums home">
              <span>{{ item.shirtNumber }}</span>
            </div>
            <div class="name">{{ item.playerName }}</div>
          </div>
        </div>
        <span class="is-home col-team position-0">
          <div class="nums home">
            <span>{{ homePostOne.shirtNumber || ' ' }}</span>
          </div>
          <div class="name">{{ homePostOne.playerName }}</div>
        </span>
      </div>

      <div class="battle-matrix-row">
        <div v-for="(_away, i) in awayTeams" :key="i" :class="[`lineup-col away col-${i + 1}`]">
          <div class="col-team" v-for="item in _away" :key="item.playerId">
            <div class="nums away">
              <span>{{ item.shirtNumber }}</span>
            </div>
            <div class="name text-overflow">{{ item.playerName }}</div>
          </div>
        </div>
        <span class="is-away col-team position-0">
          <div class="nums away">
            <span>{{ awayPostOne.shirtNumber || ' ' }}</span>
          </div>
          <div class="name">{{ awayPostOne.playerName }}</div>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import FtBg from '@/assets/images/live/ft_bg.png'
import BkBg from '@/assets/images/live/bk_bg.png'
import { computed, ref } from 'vue'
import store from '@/store'

const props = defineProps({
  homeList: {
    type: Array as any,
    default: () => []
  },
  awayList: {
    type: Array as any,
    default: () => []
  }
})

const matchInfo = computed(() => store.state.match.matchInfo)
const coverBg = computed(() => {
  const { gameType } = matchInfo.value
  if (gameType == 'BK') {
    return BkBg
  }
  return FtBg
})
const sortPos = (arr: any) => {
  return arr.sort((a: any, b: any) => b.position - a.position)
}
const homePostOne: any = ref({})
const awayPostOne: any = ref({})
const homeTeams = computed(() => {
  if (!props.homeList.length) {
    return
  }
  let arr1: any[] = []
  let arr2: any[] = []
  let arr3: any[] = []
  //默认4-3-3阵形
  props.homeList.forEach((item: any) => {
    if ([1].indexOf(item.position * 1) > -1) {
      homePostOne.value = Object.assign(item)
    }
    if ([2, 3, 4, 5].indexOf(item.position * 1) > -1) {
      arr1.push(Object.assign(item))
    }
    if ([6, 7, 8].indexOf(item.position * 1) > -1) {
      arr2.push(Object.assign(item))
    }
    if ([9, 10, 11].indexOf(item.position * 1) > -1) {
      arr3.push(Object.assign(item))
    }
  })
  return [sortPos(arr1), sortPos(arr2), sortPos(arr3)]
})
const awayTeams = computed(() => {
  if (!props.awayList.length) {
    return
  }
  let arr1: any[] = []
  let arr2: any[] = []
  let arr3: any[] = []
  //默认4-3-3阵形
  props.awayList.forEach((item: any) => {
    if ([1].indexOf(item.position * 1) > -1) {
      awayPostOne.value = Object.assign(item)
    }
    if ([2, 3, 4, 5].indexOf(item.position * 1) > -1) {
      arr1.push(Object.assign(item))
    }
    if ([6, 7, 8].indexOf(item.position * 1) > -1) {
      arr2.push(Object.assign(item))
    }
    if ([9, 10, 11].indexOf(item.position * 1) > -1) {
      arr3.push(Object.assign(item))
    }
  })
  return [sortPos(arr1), sortPos(arr2), sortPos(arr3)]
})
</script>

<style lang="scss" scoped>
.battle-matrix {
  position: relative;
  padding: 8px;

  .bg {
    display: block;
    width: 100%;
  }

  .lineup-container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .battle-matrix-row {
    flex: 1;
    position: relative;
  }

  .position-0 {
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    background-repeat: no-repeat;
    background-size: 100% 100%;

    &.is-home {
      top: 30px;
    }
    &.is-away {
      bottom: 30px;
    }

    > span {
      display: block;
      text-align: center;
      color: #fff;
      line-height: 46px;
    }
  }

  .lineup-col {
    position: absolute;
    display: flex;

    &.home {
      &.col-1 {
        left: 20px;
        right: 20px;
        top: 110px;
      }
      &.col-2 {
        left: 20%;
        right: 20%;
        top: 220px;
      }
      &.col-3 {
        left: 20%;
        right: 20%;
        top: 360px;
      }
    }
    &.away {
      &.col-1 {
        left: 20px;
        right: 20px;
        bottom: 110px;
      }
      &.col-2 {
        left: 20%;
        right: 20%;
        bottom: 220px;
      }
      &.col-3 {
        left: 20%;
        right: 20%;
        bottom: 360px;
      }
    }
  }

  .col-team {
    flex: 1;
    font-size: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    .nums {
      width: 48px;
      height: 58px;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      > span {
        display: block;
        text-align: center;
        color: #fff;
        line-height: 46px;
      }
      &.away {
        background-image: url('@/assets/images/live/ball_red.png');
      }
      &.home {
        background-image: url('@/assets/images/live/ball_blue.png');
      }
    }
    .name {
      width: 100%;
      text-align: center;
      color: #ffffff;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}
</style>
