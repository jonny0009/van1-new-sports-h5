<template>
  <div class="panel-bet">
    <EmptyData v-if="playBetList.length === 0" />
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
.panel-bet {
  padding: 20px 36px;
}
</style>
