<template>
  <div class="panel-bet">
    <EmptyData v-if="playBetList.length === 0" />
    <BettingCollapse v-else :data-list="playBetList" :match-info="matchInfo" />
  </div>
</template>

<script setup lang="ts">
import { computed, watch, onMounted, Ref, ref } from 'vue'
import { useBetting } from '@/utils/useBetting'
import BettingCollapse from '@/components/BettingCollapse/index.vue'
import store from '@/store'

const matchInfo = computed(() => store.state.match.matchInfo)
watch(
  () => matchInfo.value,
  () => {
    getBetList()
  }
)
onMounted(() => {
  getBetList()
})

const { getPlayGroupType } = useBetting()

const playBetList: Ref<any> = ref([])
const getBetList = async () => {
  if (matchInfo.value && matchInfo.value.gidm) {
    playBetList.value = await getPlayGroupType(matchInfo.value)
  }
}
</script>

<style lang="scss" scoped>
.panel-bet {
  padding: 20px 15px;
}
</style>
