<template>
  <div class="panel-bet">
    <BettingCollapse
      :match-info="matchInfo"
      :group-list="playGroupBetList"
      :betting-list="playBettingList"
      :loading="apiLoading"
      @tab-change="findGroupById"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useBetting } from '@/utils/useBetting'
import BettingCollapse from '@/components/BettingCollapse/index.vue'
import store from '@/store'

const matchInfo = computed(() => store.state.match.matchInfo)
const { findGroupById, playGroupBetList, playBettingList, apiLoading } = useBetting()
</script>

<style lang="scss" scoped>
.panel-bet {
  padding: 20px 0;
}
</style>
