<template>
  <div class="footerHeight" :class="{showFixedBetx}"></div>
</template>
<script lang="ts" setup>
import store from '@/store'
import { computed } from 'vue'
// showFixedBetx
const showFixedBetx = computed(() => store.state.app.showFixedBet)

</script>
<style lang="scss" scoped>
</style>
