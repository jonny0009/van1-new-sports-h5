<template>
  <div class="betting-collapse">
    <Loading v-if="loading" />
    <EmptyData v-else-if="betList.length === 0" :text="$t('live.platCloseAll')" />
    
    <van-tabs v-show="betList.length > 0" v-model:active="tabActive" shrink line-height="0" @change="onChangeTabs">
      <van-tab v-for="(tab, index) in tabList" :key="index" :name="tab.id + ''">
        <template #title>
          <div class="tab-title">
            <span>{{ tab.name }}</span>
          </div>
        </template>
        <!-- start -->
        <van-collapse v-model="activeNames">
          <van-collapse-item v-for="(play, i) in betList" :key="i" :name="`${i + 1}`" :border="false">
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
        <!-- end -->
      </van-tab>
    </van-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
const props = defineProps({
  groupList: {
    type: Array as any,
    default: () => []
  },
  bettingList: {
    type: Array as any,
    default: () => []
  },
  matchInfo: {
    type: Object,
    default: () => {}
  },
  loading: {
    type: Boolean,
    default: false
  },
})
const emits = defineEmits(['tab-change'])

const tabList = computed(() => props.groupList)
const betList = computed(() => props.bettingList)

const tabActive = ref(null)
const onChangeTabs = (name: string) => {
  emits('tab-change', name)
}

const matchInfo = computed(() => props.matchInfo)
const activeNames = ref(['1'])
</script>

<style lang="scss" scoped>
.betting-collapse {
  .van-tabs {
    :deep(.van-tabs__wrap) {
      .van-tabs__nav {
        height: auto;
        background: var(--color-background-color);
      }
      .van-tab--shrink {
        padding: 0 8px;
      }
      .van-tabs__line {
        display: none;
      }
    }

    .tab-title {
      min-width: 140px;
      height: 64px;
      padding: 0 20px;
      background: var(--color-global-buttonBg);
      border-radius: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--color-text-2);
      font-size: 24px;
      font-weight: 800;
      transition: all 0.3s;
    }
    .van-tab--active .tab-title {
      background-image: linear-gradient(180deg, var(--color-linear-gradient-1) 0%, var(--color-linear-gradient-2) 100%);
      color: #fff;
      .svg-icon {
        color: #fff;
      }
    }
  }

  .van-collapse {
    padding: 0 16px;
    &::after {
      border: none;
    }
  }

  .van-collapse-item {
    background: var(--color-live-collapse-item-bg);
    border-radius: 10px;
    margin-bottom: 20px;
    :deep(.van-collapse-item__title) {
      background: none;
      color: var(--color-live-collapse-item-title);
      font-weight: 700;
      .van-icon-arrow {
        color: var(--color-live-collapse-item-title);
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
    &-top {
      display: flex;
      justify-content: center;
      font-size: 24px;
      letter-spacing: 0;
      font-weight: 700;
      padding: 0 20px;
      margin-bottom: 4px;
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
      color: var(--color-live-collapse-play-nums);
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
    &-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      background: var(--color-live-collapse-card-bg);
      color: var(--color-live-collapse-base-font);
      border-radius: 20px;
      height: 94px;
      overflow: hidden;
    }
    &-item.selected {
      background-color: var(--color-primary) !important;
      color: #fff;
      .bet-bot {
        color: #fff;
      }
    }
  }
}
</style>
