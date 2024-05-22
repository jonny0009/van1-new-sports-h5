<template>
  <!-- 使用切换栏组件 -->
  <div class="tabs-cut">
    <van-tabs
      :duration="0.2"
      v-model:active="active"
      shrink
      line-height="0"
      :animated="ifAnimated"
      @change="onChangeTabs"
      :swipe-threshold="3"
      @click-tab="handleTabAnimated"
    >
      <van-tab v-for="(item, index) in sportsList" :key="index" :name="item.text">
        <template #title>
          <SportsButton
            class="tabs-cut-1"
            :text="item.text"
            :active="active === item.text"
            :showCount="true"
            :count="ifCountNum && item.gameCount"
            :class="item.text"
          />
        </template>
        <slot name="body"></slot>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed } from 'vue'
import store from '@/store'
const props = defineProps({
  tabs: {
    type: Array,
    default: () => []
  },
  isCustom: {
    type: Boolean,
    default: () => false
  },
  ifCapstan: {
    type: Boolean,
    default: () => false
  },
  ifGoodMatch: {
    type: Boolean,
    default: () => false
  },
  ifSportToday: {
    type: Boolean,
    default: () => false
  },
  ifCountNum: {
    type: Boolean,
    default: () => true
  },
  // 赛果
  ifMatchResult: {
    type: Boolean,
    default: () => false
  }
})

const setSports = (val: any) => {
  active.value = val
}
const resetParams = () => {
  active.value = 'FT'
}
const active = ref('FT')
const ifAnimated: any = ref(true)
const emit = defineEmits(['returnSportsSuccess'])

const handleTabAnimated = () => {
  if (props.ifCapstan) {
    ifAnimated.value = false
  } else {
    ifAnimated.value = true
  }
}
const onChangeTabs = () => {
  emit('returnSportsSuccess', active.value)
}
const sportsList = computed(() => {
  let sports: any = ''
  if (props.ifGoodMatch) {
    sports = store.state.app.homeTabsSports || []
  } else if (props.ifCapstan) {
    let sportsListArr = store.state.match.sportsListArr || []
    sportsListArr.map((e: any) => {
      e.gameCount = Number(e.num)
    })
    sports = sportsListArr
  } else {
    sports = store.state.app.sports || []
  }

  if (props.isCustom) {
    sports = props.tabs
  }

  const newSportsA = sports.filter((e: any) => {
    if (props.ifMatchResult) {
      return !['SY', 'RB', 'COMBO', 'JC', 'XNFT', 'XNBK'].includes(e.gameType) && e.gameCount
    }
    return !['SY', 'RB', 'COMBO', 'JC'].includes(e.gameType) && e.gameCount
  })
  let newSportsB: any = []
  if (newSportsA.length) {
    const newSportsC = newSportsA.map((e: any) => {
      return {
        text: e.gameType,
        gameCount: e.gameCount
      }
    })
    newSportsB = [...newSportsC]
  }
  const count = newSportsB.reduce((gameCount: number, item: any) => {
    return gameCount + item.gameCount * 1
  }, 0)
  const allItem = {
    text: 'all',
    gameCount: count
  }
  if (props.ifSportToday) {
    return [allItem, ...newSportsB]
  }
  return newSportsB
})
defineExpose({
  active,
  ifAnimated,
  resetParams,
  setSports
})
</script>
<style lang="scss" scoped>
.tabs-cut {
  margin-top: -10px;
}
.tabs-cut-1 {
  margin-left: -30px;
  margin-right: 10px;
}
:deep(.van-tabs__nav--complete) {
  background-color: var(--color-background-color);
}
:deep(.van-tabs__line) {
  display: none;
}
</style>
