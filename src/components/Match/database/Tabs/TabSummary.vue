<template>
  <div class="panel">
    <van-collapse v-model="activeNames">
      <van-collapse-item
        name="1"
        :title="$t('live.solveAnalyse')"
        :border="false"
        v-if="JSON.stringify(anlyzeList) !== '{}'"
      >
        <div class="panel-main">
          <div class="panel-main__wrapper">
            <EmptyData v-if="JSON.stringify(anlyzeList) === '{}'" />
            <PanelAnalyze v-else :data="anlyzeList" :matchData="matchData" />
          </div>
        </div>
      </van-collapse-item>
      <van-collapse-item name="2" :title="$t('live.score')" :border="false" v-if="scoreList.length">
        <div class="panel-main">
          <div class="panel-main__wrapper">
            <EmptyData v-if="scoreList.length === 0" />
            <PanelScore v-else :score-list="scoreList" :matchData="matchData" />
          </div>
        </div>
      </van-collapse-item>

      <van-collapse-item name="3" :title="$t('live.summaryInfo')" :border="false" v-if="staticsList.length">
        <div class="panel-main">
          <div class="panel-main__wrapper">
            <EmptyData v-if="staticsList.length === 0" />
            <PanelStatistic v-else :data="staticsList" />
          </div>
        </div>
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'
const PanelAnalyze = defineAsyncComponent(() => import('../Panel/PanelAnalyze.vue'))
const PanelScore = defineAsyncComponent(() => import('../Panel/PanelScore.vue'))
const PanelStatistic = defineAsyncComponent(() => import('../Panel/PanelStatistic.vue'))

defineProps({
  matchData: {
    type: Object,
    default: () => {}
  },
  staticsList: {
    type: Array,
    default: () => []
  },
  scoreList: {
    type: Array,
    default: () => []
  },
  anlyzeList: {
    type: Object,
    default: () => {}
  }
})

const activeNames = ref(['1'])
</script>

<style lang="scss" scoped>
.panel {
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

  &-main {
    font-size: 24px;
    padding: 4px;
  }

  &-main__wrapper {
    // background: #f4f5fa;
    background-color: var(--color-background-color);
    // min-height: 300px;
    border-radius: 16px;
  }
}
</style>
