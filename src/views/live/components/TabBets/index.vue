<template>
  <div class="panel-bet">
    <div v-if="playBetList.length === 0" class="no-data">
      <SvgIcon name="empty" />
      <span class="empty-text">{{ $t('live.emptyText') }}</span>
    </div>
    <BettingCollapse v-else :data-list="playBetList" :match-info="props.matchInfo" />
  </div>
</template>

<script lang="ts" setup>
import { Ref, ref, watch, onMounted } from 'vue'
import { useBetting } from '@/utils/useBetting'
import BettingCollapse from '@/components/BettingCollapse/index.vue'

const { getPlayGroupType } = useBetting()
const props = defineProps({
  matchInfo: {
    type: Object,
    default: () => {}
  },
  nav: [String, Number]
})

const playBetList: Ref<any> = ref([])
const fetchData = async () => {
  playBetList.value = await getPlayGroupType(props.matchInfo)
}

watch(
  () => props.matchInfo,
  () => {
    fetchData()
  }
)

onMounted(() => {
  fetchData()
})
</script>

<style lang="scss" scoped>
.no-data {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;
  .svg-icon {
    font-size: 168px;
  }
  .empty-text {
    margin-top: 20px;
    font-size: 24px;
    line-height: 24px;
    color: #96a5aa;
  }
}

.panel-bet {
  padding: 20px 36px;
}
</style>
