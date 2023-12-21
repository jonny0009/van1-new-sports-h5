<template>
  <div class="Recommend-Match-Tabs">
    <SportsButton v-for="(item,idx) in Tabs" :key="idx" :text="item.text" :active="active===item.text" @click="SportsClick(item)" />
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
const SportsClick = (item) => {
  console.log(item)
}
</script>
<style lang="scss" scoped>
</style>
