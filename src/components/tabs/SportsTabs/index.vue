<template>
  <div class="Recommend-Match-Tabs">
    <SportsButton
      v-for="(item,idx) in sportsList"
      :key="idx"
      :text="item.text"
      :active="active===item.text"
      :class="item.text"
      @click="SportsClick(item)"
    />
  </div>
</template>
<script lang="ts" setup>
import { ref, computed } from 'vue'
import store from '@/store'
const resetParams = () => {
  active.value = 'FT'
}
const active = ref('FT')
const emit = defineEmits(['returnSportsSuccess'])
const SportsClick = (item:any) => {
  const { text } = item
  active.value = text
  emit('returnSportsSuccess', active.value)
}
const sportsList = computed(() => {
  const sports = store.state.app.sports || []
  const newSportsA = sports.filter((e:any) => {
    return !['SY', 'RB', 'COMBO', 'JC'].includes(e.gameType) && e.gameCount
    // return !['SY', 'RB', 'COMBO', 'JC'].includes(e.gameType)
  })
  let newSportsB:any = []
  if (newSportsA.length) {
    const newSportsC = newSportsA.map((e:any) => {
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
  resetParams
})

</script>
<style lang="scss" scoped>
</style>
