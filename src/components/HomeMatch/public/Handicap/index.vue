<template>
  <BettingOption
    v-for="(item,idx) in sendParams"
    v-if="sendParams.length"
    :key="idx+'key'"
    :market-info="item.marketInfo"
    class="betting-option"
  >
    <span class="up-betting-name">
      <span class="text">{{ item.marketInfo.ratioName }}</span>
    </span>
    <div class="details">
      <div class="item">{{ item.marketInfo.vior }}</div>
    </div>
  </BettingOption>
</template>
<script lang="ts" setup>
defineProps({
  sendParams: {
    type: Array,
    default: function () {
      return []
    }
  }
})
</script>
