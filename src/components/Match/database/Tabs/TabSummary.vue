<template>
  <div class="panel">
    <van-collapse v-model="activeNames">
      <van-collapse-item name="1" :title="$t('live.solveAnalyse')" :border="false">
        <div class="panel-main">
          <div class="panel-main__wrapper">
            <EmptyData v-if="anlyzeList.length === 0" />
            <PanelAnalyze v-else :data="anlyzeList" />
          </div>
        </div>
      </van-collapse-item>

      <van-collapse-item name="2" :title="$t('live.score')" :border="false">
        <div class="panel-main">
          <div class="panel-main__wrapper">
            <EmptyData v-if="scoreList.length === 0" />
            <PanelScore v-else :score-list="scoreList" />
          </div>
        </div>
      </van-collapse-item>

      <van-collapse-item name="3" :title="$t('live.summaryInfo')" :border="false">
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
import { defineAsyncComponent, onMounted, ref, watch } from 'vue'
import { scoresstaticseventsApi, betAnalyzeApi } from '@/api/live'
const PanelAnalyze = defineAsyncComponent(() => import('../Panel/PanelAnalyze.vue'))
const PanelScore = defineAsyncComponent(() => import('../Panel/PanelScore.vue'))
const PanelStatistic = defineAsyncComponent(() => import('../Panel/PanelStatistic.vue'))

const props = defineProps({
  matchData: {
    type: Object,
    default: () => {}
  }
})

watch(
  () => props.matchData,
  () => {
    fetchStaticsEvents()
  }
)
onMounted(() => {
  fetchStaticsEvents()
  fetchBetAnlyze()
})

const anlyzeList = ref([])
const staticsList = ref([])
const scoreList = ref([])
const fetchStaticsEvents = async () => {
  if (!(props.matchData && props.matchData.icGidm)) {
    return
  }

  const { homeTeamId, awayTeamId, icGidm } = props.matchData
  const params = {
    gidm: icGidm,
    homeId: homeTeamId,
    awayId: awayTeamId
    // type: ''
  }
  const res: any = await scoresstaticseventsApi(params)
  if (res.code === 200) {
    const data = res.data || {}
    staticsList.value = data.statics || []
    scoreList.value = data.scores || []
  }
}

const fetchBetAnlyze = async () => {
  const { systemId } = props.matchData

  const res: any = await betAnalyzeApi({
    systemId
  })
  if (res.code === 200) {
    const data = res.data || {}
    anlyzeList.value = data
  }
}

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
    background: #f4f5fa;
    // min-height: 300px;
    border-radius: 16px;
  }
}
</style>
