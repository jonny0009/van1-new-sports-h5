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
      <!--
        <i
          v-if="scope.iorChange"
          :class="scope.iorChange"
        ></i>
      -->
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
        <div class="item">
          <i
            class="vior-down"
            :class="{'change-odds':scope.iorChange === 'down-ior'}"
          ></i>
          <span class="vior">
            <!-- <span
              v-show="item.marketInfo.oldIor"
              class="oldIor"
              :class="{
                'ss' :scope.iorChange
              }"
            >
              {{ item.marketInfo.oldIor }}
            </span> -->
            <span
              class="vior"
              :class="{
                'ss' :scope.iorChange
              }"
            >
              {{ item.marketInfo.vior }}
            </span>
          </span>
          <i
            class="vior-up"
            :class="{'change-odds':scope.iorChange === 'up-ior'}"
          ></i>
        </div>
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
