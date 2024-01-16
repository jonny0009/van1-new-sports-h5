<template>
  <div class="battle-matrix">
    <img class="bg" :src="coverBg" alt="" />
    <div class="battle-matrix__home">
      <div
        v-for="(_home, i) in homeTeams"
        :key="i"
        :class="[`col-${i + 1}`, 'flex', i === 1 ? 'flex-around' : 'flex-between']"
      >
        <div class="col-team" v-for="item in homeTeams[i]" :key="item.playerId">
          <div class="nums">
            <span>{{ item.shirtNumber }}</span>
          </div>
          <div class="name">{{ item.playerName }}</div>
        </div>
      </div>
    </div>

    <div class="battle-matrix__away">
      <div
        v-for="(_away, i) in awayTeams"
        :key="i"
        :class="[`col-${i + 1}`, 'flex', i === 0 ? 'flex-around' : 'flex-between']"
      >
        <div class="col-team" v-for="item in awayTeams[i]" :key="item.playerId">
          <div class="nums">
            <span>{{ item.shirtNumber }}</span>
          </div>
          <div class="name">{{ item.playerName }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import FtBg from '@/assets/images/live/ft_bg.svg'
import BkBg from '@/assets/images/live/bk_bg.svg'
import { computed } from 'vue'
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

const homeTeams = computed(() => chunkCell(props.homeList, 3))
const awayTeams = computed(() => chunkCell(props.awayList, 3).reverse())

const chunkCell = (data: any[], size: number) => {
  return data.reduce((chunks, item, i) => {
    const calc = (chunks[(i / size) | 0] = chunks[(i / size) | 0] || [])
    calc.push(item)
    return chunks
  }, [])
}
</script>

<style lang="scss" scoped>
.battle-matrix {
  position: relative;
  padding: 8px;
  .bg {
    display: block;
    width: 100%;
  }

  .flex {
    display: flex;
    &.flex-between {
      justify-content: space-between;
    }
    &.flex-around {
      justify-content: space-around;
    }
  }

  .col-team {
    width: 160px;
    font-size: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .nums {
      width: 48px;
      height: 58px;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      background-image: url('@/assets/images/live/ball_blue.png');
      > span {
        display: block;
        text-align: center;
        color: #fff;
        line-height: 46px;
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

  &__home {
    position: absolute;
    left: 0;
    top: 100px;
    width: 100%;
    padding: 0 30px;
    .col-1 {
      margin-bottom: 46px;
    }
  }

  &__away {
    position: absolute;
    left: 0;
    bottom: 100px;
    width: 100%;
    padding: 0 30px;
    .col-2 {
      margin-top: 46px;
    }
  }
}
</style>
