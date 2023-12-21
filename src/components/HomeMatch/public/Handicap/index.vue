<template>
  <BettingOption
    v-for="(item,idx) in props.sendParams"
    v-if="props.sendParams.length"
    :key="idx+'key'"
    :market-info="item.marketInfo"
    class="betting-option"
  >
    <span class="up-betting-name">
      <span class="text">{{ item.marketInfo.ratioName }}</span>
    </span>
    <div class="details">
      <div class="item">{{ item.ior }}</div>
    </div>
  </BettingOption>
</template>
<script lang="ts" setup>
const props = defineProps({
  sendParams: {
    type: Array,
    default: function () {
      return []
    }
  }
})
</script>
