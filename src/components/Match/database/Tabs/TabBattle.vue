<template>
  <div class="panel">
    <van-collapse v-model="activeNames">
      <van-collapse-item name="1" title="阵容图" :border="false">
        <div class="panel-main">
          <div class="panel-main__wrapper">
            <PanelBattle :home-list="firstHomeList" :away-list="firstAwayList" />

            <!-- 替补阵容 -->
            <div class="battle-wating">
              <h3 class="title">替补阵容</h3>
              <div class="team-name">
                <span class="host">{{ matchData.homeTeamShort }}</span>
                <span class="away">{{ matchData.awayTeamShort }}</span>
              </div>
              <div class="team-grid">
                <section v-if="backupHomeList.length === 0" class="team-grid__wrap">
                  <EmptyData text="暂无主队替补阵容" />
                </section>
                <section v-else class="team-grid__wrap">
                  <div class="team-grid__item" v-for="home in backupHomeList" :key="home.playerId">
                    <span>{{ `${home.shirtNumber} ${home.playerName}` }}</span>
                  </div>
                </section>

                <section v-if="backupAwayList.length === 0" class="team-grid__wrap">
                  <EmptyData text="暂无客队替补阵容" />
                </section>
                <section v-else class="team-grid__wrap">
                  <div class="team-grid__item" v-for="away in backupAwayList" :key="away.playerId">
                    <span>{{ `${away.shirtNumber} ${away.playerName}` }}</span>
                  </div>
                </section>
              </div>
            </div>
            <!-- end -->
          </div>
        </div>
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script setup lang="ts">
import { Ref, computed, defineAsyncComponent, onMounted, ref, watch } from 'vue'
import { lineupApi } from '@/api/live'
const PanelBattle = defineAsyncComponent(() => import('../Panel/PanelBattle.vue'))

const props = defineProps({
  matchData: {
    type: Object,
    default: () => {}
  }
})
const matchData = computed(() => props.matchData || {})
watch(
  () => matchData.value,
  () => {
    // fetchLineup()
  }
)
onMounted(() => {
  fetchLineup()
})

const activeNames = ref(['1'])
const firstHomeList: Ref<any[]> = ref([])
const firstAwayList: Ref<any[]> = ref([])
const backupHomeList: Ref<any[]> = ref([])
const backupAwayList: Ref<any[]> = ref([])
const fetchLineup = async () => {
  const { icGidm, homeTeamId, awayTeamId } = props.matchData || {}
  const params = {
    gidm: icGidm,
    homeId: homeTeamId,
    awayId: awayTeamId
  }
  const res: any = await lineupApi(params)
  if (res.code === 200) {
    const { lineup } = res.data || {}
    // 首发阵容
    const firstList = (lineup || []).filter((m: any) => m.position > 0)
    firstHomeList.value = firstList.filter((m: any) => parseInt(m.team_id) === 1)
    firstAwayList.value = firstList.filter((m: any) => parseInt(m.team_id) === 2)

    // 替补阵容
    const backupList = (lineup || []).filter((m: any) => parseInt(m.substitute) === 1)
    backupHomeList.value = backupList.filter((m: any) => parseInt(m.team_id) === 1)
    backupAwayList.value = backupList.filter((m: any) => parseInt(m.team_id) === 2)
  }
}
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
    min-height: 300px;
    border-radius: 16px;
  }
}

.battle-wating {
  padding: 8px;
  .title {
    color: var(--color-live-collapse-item-title);
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 10px;
  }
  .team-name {
    display: flex;
    margin-bottom: 10px;
    > span {
      flex: 1;
      height: 52px;
      color: #fff;
      border-style: solid;
      border-width: 2px;
      border-radius: 26px;
      font-size: 24px;
      text-align: center;
      line-height: 52px;
    }
    > span.host {
      background: #48a3ff;
      border-color: #48a3ff;
      margin-right: 10px;
    }
    > span.away {
      background: #db7f91;
      border-color: #db7f91;
      margin-left: 10px;
    }
  }
  .team-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .team-grid__item {
    background: #fff;
    height: 55px;
    font-size: 22px;
    color: #0e3d66;
    letter-spacing: 0;
    font-weight: 500;
    padding: 0 20px;
    margin: 4px 2px;
    > span {
      display: block;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      text-align: center;
      line-height: 55px;
      max-width: 240px;
    }
  }
}
</style>
