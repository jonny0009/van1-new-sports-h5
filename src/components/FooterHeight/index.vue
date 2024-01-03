<template>
  <div class="footerHeight" :class="{showFixedBetx}"></div>
</template>
<script lang="ts" setup>
import store from '@/store'
import { computed, onMounted } from 'vue'
// showFixedBetx
const showFixedBetx = computed(() => store.state.app.showFixedBet)
onMounted(() => {
  console.log(store.state.app)
})

</script>
<style lang="scss" scoped>
</style>
