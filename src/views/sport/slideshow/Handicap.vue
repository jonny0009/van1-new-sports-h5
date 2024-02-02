<template>
  <BettingOption
    v-for="(item,idx) in sendParams"
    v-if="sendParams.length"
    :key="idx+'key'"
    :market-info="item.marketInfo"
    class="betting-option betting-option-score"
  >
    <template #default="scope">
      <i v-if="scope.lock" class="lock"></i>
      <span class="up-betting-name">
        <span class="text">
          <span class="team">
            {{ item.ratioType==='RH'? $t('user.homeName') : $t('user.awayName' )}}
            <!-- {{ item.marketInfo.ratioMatch || item.marketInfo.ratioName }} -->
          </span>
          <span v-if="item.marketInfo.ratioTag" class="ratio">
            {{ item.marketInfo.ratioTag }}
          </span>
        </span>
      </span>
      <div class="details">
        <div class="item">
          <i
            v-if="type === 'RB'"
            class="vior-down"
            :class="{'change-odds': scope.iorChange === 'down-ior' }"
          ></i>
          <div
            v-if="type === 'RB'"
            class="RB-ChangeIor"
            :class="{
              'no-RBtransition': !['up-ior','down-ior'].includes(item.marketInfo.iorChangeTransition)
            }"
          >
            <transition
              :name="['up-ior','down-ior'].includes(item.marketInfo.iorChangeTransition) ? 'listdown':''"
            >
              <div
                v-if="item.marketInfo.iorChangeTransition === 'up-ior'"
                class="vior"
              >
                {{ item.marketInfo.iorChangeTransition === 'up-ior'? item.marketInfo.vior : item.marketInfo.oldIor }}
              </div>
              <div v-else-if="item.marketInfo.iorChangeTransition === 'down-ior'" class="vior">
                {{ item.marketInfo.iorChangeTransition === 'down-ior'? item.marketInfo.vior : item.marketInfo.oldIor }}
              </div>
              <div v-else class="vior">
                {{ item.marketInfo.vior }}
              </div>
            </transition>
          </div>
          <span
            v-else
            class="vior"
          >
            {{ item.marketInfo.vior }}
          </span>
          <i
            v-if="type === 'RB'"
            class="vior-up"
            :class="{'change-odds':scope.iorChange === 'up-ior' }"
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
  },
  type: {
    type: String,
    default: function () {
      return 'RR'
    }
  }
})

</script>

<style lang="scss" scoped>
      .betting-option-score {
        width: 320px;
        height: 64px;
        border-radius: 16px;
        background-color: rgba(255, 255, 255, 0.27);
        padding: 0 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
  </style>





