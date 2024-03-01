<template>
  <div class="HandicapScore">
    <div class="score-left">
      <div class="box1">
        <div class="box1-left">{{ sendParams.homeTeam }}</div>
        <div class="box1-right">
          <div @click="handleMinusHome" class="symbolNum">-</div>
          <span><van-stepper v-model="scoreNumHome" min="0" :max="homeMaxNum" theme="round" :disable-input="true"
              :show-plus="false" :show-minus="false" /></span>
          <div @click="handlePlusHome" class="symbolNum">+</div>
        </div>
      </div>
      <div class="box1 box2">
        <div class="box1-left">{{ sendParams.awayTeam }}</div>
        <div class="box1-right">
          <div @click="handleMinusAway" class="symbolNum">-</div>
          <span><van-stepper v-model="scoreNumAway" min="0" :max="awayMaxNum" theme="round" :disable-input="true"
              :show-plus="false" :show-minus="false" /></span>
          <div @click="handlePlusAway" class="symbolNum">+</div>
        </div>
      </div>
    </div>
    <div class="score-right">
      <Handicap :send-params="getHandicap(type, screenParamsArr)" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import Handicap from '../Handicap/index.vue'
import { getHandicap } from '@/utils/home/getHandicap'
import { ref, onMounted } from 'vue'
const props = defineProps({
  sendParams: {
    type: Object,
    default: function () {
      return {}
    }
  },
  type: {
    type: String,
    default: function () {
      return 'RR'
    }
  }
})
const scoreNumHome: any = ref(0)
const scoreNumAway: any = ref(0)
const screenParamsArr: any = ref([])
onMounted(() => {
  getScoreMaxNum()
  screenParamsArr.value = JSON.parse(JSON.stringify(props.sendParams))
  let scoreParams: any = screenParamsArr.value[props.type]
  scoreParams.ratioData = [scoreParams.ratioData[0]]
  screenParamsArr.value[props.type] = scoreParams
})
//主队减少
const handleMinusHome = () => {
  if (scoreNumHome.value === 0) return
  scoreNumHome.value--
  getScoreArr()

}
const handlePlusHome = () => {
  if (scoreNumHome.value === homeMaxNum.value) return
  scoreNumHome.value++
  getScoreArr()
}
//客队减少
const handleMinusAway = () => {
  if (scoreNumAway.value === 0) return
  scoreNumAway.value--
  getScoreArr()
}
const handlePlusAway = () => {
  if (scoreNumAway.value === awayMaxNum.value) return
  scoreNumAway.value++
  getScoreArr()
}
// 筛选比分数组
const getScoreArr = () => {
  let ratioTypeNum = 'H' + scoreNumHome.value + 'C' + scoreNumAway.value
  screenParamsArr.value = JSON.parse(JSON.stringify(props.sendParams))
  let scoreParams: any = screenParamsArr.value[props.type]
  let singleParams = scoreParams.ratioData.find((item: any) => {
    return item.ratioType === ratioTypeNum
  })
  if (!singleParams) {
    singleParams = {
      id: '-',
      ior: '-',
      ratioType: ratioTypeNum
    }
  }
  scoreParams.ratioData = [singleParams]
  screenParamsArr.value[props.type] = scoreParams
}
// 获取主队步进器最大值
const homeMaxNum: any = ref('9')
const awayMaxNum: any = ref('9')
const getScoreMaxNum = () => {
  const scoreParams: any = props.sendParams[props.type]
  const numArrH: any = []
  const numArrC: any = []
  scoreParams.ratioData.map((item: any) => {
    numArrH.push(Number(item.ratioType[1]))
    numArrC.push(Number(item.ratioType[3]))
  })
  homeMaxNum.value = Math.max(...numArrH);
  awayMaxNum.value = Math.max(...numArrC);
}
</script>
<style lang="scss" scoped>
.HandicapScore {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .score-left {
    .box1 {
      background: var(--color-match-BetBg);
      color: var(--color-text-3);
      font-size: 24px;
      width: 414px;
      height: 44px;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;

      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 23px;

      &-left {
        width: 248px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      &-right {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .symbolNum {
        width: 20px;
        height: 38px;
        text-align: center;
      }
    }

    .box2 {
      margin-top: 8px;
      border-top-left-radius: 0px;
      border-top-right-radius: 0px;
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;
    }
  }

  .score-right {
    min-width: 208px;
    margin-left: 10px;
  }

}


:deep(.van-stepper__input) {
  font-size: 26px;
  color: var(--color-match-IorCl);
}
</style>

