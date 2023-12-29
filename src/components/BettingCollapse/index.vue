<template>
  <div class="betting-collapse">
    <van-collapse v-model="activeNames">
      <van-collapse-item v-for="(play, i) in props.dataList" :key="i" :name="`${i + 1}`" :border="false">
        <template #title>
          <span v-play="play.playInfo"></span>
        </template>
        <div :class="['bet', play.ratioList?.length === 3 ? 'col-3' : 'col-2']">
          <BettingOption v-for="(item, ind) in play.ratioList" :key="ind" :market-info="item" class="bet-item">
            <template #default="scope">
              <div class="bet-top">
                <span class="name">{{ item.ratioMatch || item.ratioName }}</span>
                <span class="tag" v-if="item.ratioTag">{{ item.ratioTag }}</span>
              </div>
              <div class="bet-bot">
                <img class="lock" v-if="scope.lock" src="@/assets/images/live/lock.png" alt="" />
                <div class="odds" v-else>
                  <i
                    v-if="matchInfo.showtype == 'RB'"
                    class="vior-down"
                    :class="{ 'change-odds': scope.iorChange === 'down-ior' }"
                  ></i>
                  <div
                    v-if="matchInfo.showtype == 'RB'"
                    class="RB-ChangeIor"
                    :class="{
                      'no-RBtransition': !['up-ior', 'down-ior'].includes(item.iorChangeTransition)
                    }"
                  >
                    <transition :name="['up-ior', 'down-ior'].includes(item.iorChangeTransition) ? 'listdown' : ''">
                      <div v-if="item.iorChangeTransition === 'up-ior'" class="vior">
                        {{ item.iorChangeTransition === 'up-ior' ? item.vior : item.oldIor }}
                      </div>
                      <div v-else-if="item.iorChangeTransition === 'down-ior'" class="vior">
                        {{ item.iorChangeTransition === 'down-ior' ? item.vior : item.oldIor }}
                      </div>
                      <div v-else class="vior">
                        {{ item.vior }}
                      </div>
                    </transition>
                  </div>
                  <span v-else class="vior">
                    {{ item.vior }}
                  </span>
                  <i
                    v-if="matchInfo.showtype == 'RB'"
                    class="vior-up"
                    :class="{ 'change-odds': scope.iorChange === 'up-ior' }"
                  ></i>
                </div>
              </div>
            </template>
          </BettingOption>
        </div>
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
const props = defineProps({
  dataList: {
    type: Array as any,
    default: () => []
  },
  matchInfo: {
    type: Object,
    default: () => {}
  }
})
const matchInfo = computed(() => props.matchInfo)
const activeNames = ref(['1'])
</script>

<style lang="scss" scoped>
.betting-collapse {
  .van-hairline--top-bottom:after {
    border: none;
  }
  .van-collapse-item {
    background: #eff1f2;
    border-radius: 10px;
    margin-bottom: 20px;
    :deep(.van-collapse-item__title) {
      background: none;
      color: #1f2630;
      font-weight: 700;
      .van-icon-arrow {
        color: #1f2630;
        font-weight: 700;
      }
    }
    :deep(.van-collapse-item__content) {
      background: none;
      padding: 0;
    }
  }

  .bet {
    font-family: PingFangSC-Medium;
    font-size: 24px;
    padding: 0 20px 20px 20px;
    display: grid;
    grid-gap: 20px;
    &.col-2 {
      grid-template-columns: 1fr 1fr;
    }
    &.col-3 {
      grid-template-columns: 1fr 1fr 1fr;
    }
    &-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      background: #ffffff;
      color: #546371;
      border-radius: 20px;
      height: 94px;
      overflow: hidden;
      &.selected {
        background: #7643fd;
        color: #fff;
      }
    }
    &-top {
      display: flex;
      justify-content: center;
      font-size: 24px;
      letter-spacing: 0;
      font-weight: 500;
      padding: 0 20px;
      margin-bottom: 6px;
      .name {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .tag {
        margin-left: 6px;
      }
    }
    &-bot {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 28px;
      .odds {
        display: flex;
        align-items: center;
        font-size: 24px;
        .vior {
          padding: 0 8px;
        }
      }
      .lock {
        width: 22px;
      }
    }
  }
}
</style>
