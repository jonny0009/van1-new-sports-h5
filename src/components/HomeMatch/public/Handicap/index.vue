<template>
  <BettingOption
    v-for="(item,idx) in sendParams"
    v-if="sendParams.length"
    :key="idx+'key'"
    :market-info="item.marketInfo"
    class="betting-option"
  >
    <template #default="scope">
      <!--
        1. up-ior
        2. down-ior
       -->
      <!-- <i v-if="scope.iorChange" :class="scope.iorChange"></i> -->
      <i v-if="scope.lock" class="lock"></i>
      <span class="up-betting-name">
        <span class="text">
          <span class="team">
            {{ item.marketInfo.ratioMatch || item.marketInfo.ratioName }}
          </span>
          <span v-if="item.marketInfo.ratioTag" class="ratio">
            {{ item.marketInfo.ratioTag }}
          </span>
        </span>
      </span>
      <div class="details">
        <div class="item">{{ item.marketInfo.vior }}</div>
      </div>
    </template>
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
