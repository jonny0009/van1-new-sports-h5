<template>
  <!-- <div class="Recommend-Match-Tabs">
        <SportsButton
      v-for="(item,idx) in sportsList"
      :key="idx"
      :text="item.text"
      :active="active===item.text"
      :class="item.text"
      @click="SportsClick(item)"
    />
  </div> -->
   <!-- 使用切换栏组件 -->
   <div class="tabs-cut">
    <van-tabs :duration="0.2" v-model:active="active" shrink line-height="0" :animated="ifAnimated"  @change="onChangeTabs" :swipe-threshold="3" @click-tab="ifAnimated=true">
      <van-tab v-for="(item, index) in sportsList" :key="index" :name="item.text" >
        <template #title>
          <SportsButton class="tabs-cut-1"  :text="item.text" :active="active === item.text"
            :class="item.text" />
        </template>
        <slot name="body"></slot>
      </van-tab>
    </van-tabs>
   </div>
</template>
<script lang="ts" setup>
import { ref, computed } from 'vue'
import store from '@/store'
const setSports = (val: any) => {
  console.log('setSports setSports', val)
  active.value = val
}
const resetParams = () => {
  active.value = 'FT'
}
const active = ref('FT')
const ifAnimated:any = ref(true)
const emit = defineEmits(['returnSportsSuccess'])
// const SportsClick = (item:any) => {
//   const { text } = item
//   active.value = text
//   emit('returnSportsSuccess', active.value)
// }
const onChangeTabs = () => {
  emit('returnSportsSuccess', active.value)
}
const sportsList = computed(() => {
  const sports = store.state.app.sports || []
  const newSportsA = sports.filter((e: any) => {
    return !['SY', 'RB', 'COMBO', 'JC'].includes(e.gameType) && e.gameCount
    // return !['SY', 'RB', 'COMBO', 'JC'].includes(e.gameType)
  })
  let newSportsB: any = []
  if (newSportsA.length) {
    const newSportsC = newSportsA.map((e: any) => {
      return {
        text: e.gameType
      }
    })
    newSportsB = [...newSportsC]
  }
  return newSportsB
})
defineExpose({
  active,
  ifAnimated,
  resetParams,
  setSports,
})
</script>
<style lang="scss" scoped>
  .tabs-cut{
    margin-top: -10px;
  }
  .tabs-cut-1{
    margin-left: -30px;
    margin-right: 10px;
  }
  :deep(.van-tabs__nav--complete) {
    background-color: var(--color-background-color);
  }
</style>
