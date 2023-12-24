<template>
  <div class="Recommend-Match-Tabs">
    <SportsButton
      v-for="(item,idx) in Tabs"
      :key="idx"
      :text="item.text"
      :active="active===item.text"
      :class="item.text"
      @click="SportsClick(item)"
    />
  </div>
</template>
<script lang="ts" setup>
// vue
import { ref } from 'vue'
const Tabs = ref([
  { text: 'FT' },
  { text: 'BK' },
  { text: 'TN' },
  { text: 'OP_BM' }
])
const active = ref('FT')
const emit = defineEmits(['returnSportsSuccess'])
const activeVal = ref(false)
const SportsClick = (item) => {
  const { text } = item
  active.value = text
  emit('returnSportsSuccess', active.value)
}
defineExpose({
  active
})
</script>
<style lang="scss" scoped>
</style>
