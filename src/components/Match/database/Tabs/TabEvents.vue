<template>
  <div class="panel">
    <van-collapse v-model="activeNames">
      <van-collapse-item name="1" title="文字实况" :border="false">
        <div class="panel-main">
          <div class="panel-main__wrapper">
            <!-- start -->
            <div v-if="showEventFT" class="panel-scene">
              <div class="panel-scene__item" v-for="(item, i) in eventsList" :key="i">
                <div class="label">
                  <div class="labs">
                    <img v-if="iconTag[item.typeId]" :src="iconTag[item.typeId]" alt="" />
                    <img v-else src="@/assets/images/live/scene_flag.png" alt="" />
                    <strong>{{ item.time }}’</strong>
                  </div>
                </div>

                <div class="context">
                  <div class="head">
                    <img v-img="item.homeLogo" :type="4" alt="" />
                    <span>{{ item.homeOrAway }}</span>
                  </div>
                  <div class="cont">
                    <span>{{ item.playerName }} {{ item.typeName }}</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- end -->
            <EmptyData v-else />
          </div>
        </div>
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script setup lang="ts">
import { Ref, onMounted, ref, computed } from 'vue'
import { scoresstaticseventsApi } from '@/api/live'
import store from '@/store'
import iconBall from '@/assets/images/live/scene_ball.png'
import iconTran from '@/assets/images/live/scene_tran.png'
import iconYellow from '@/assets/images/live/scene_yellow.png'

const props = defineProps({
  matchData: {
    type: Object,
    default: () => {}
  }
})

const activeNames = ref(['1'])
const matchInfo = computed(() => store.state.match.matchInfo)

const eventsList: Ref<any[]> = ref([])
const fetchStaticsEvents = async () => {
  if (!(props.matchData && props.matchData.icGidm)) {
    return
  }
  const { homeTeamId, awayTeamId, icGidm } = props.matchData
  const params = {
    gidm: icGidm,
    homeId: homeTeamId,
    awayId: awayTeamId
  }
  const res: any = await scoresstaticseventsApi(params)
  if (res.code === 200) {
    const data = res.data || {}
    eventsList.value = data.events || []
  }
}
const iconTag = computed(() => {
  const obj: any = {
    9: iconBall,
    18: iconYellow,
    21: iconYellow,
    22: iconYellow,
    23: iconTran,
    30: iconBall
  }
  return obj
})
const showEventFT = computed(() => {
  const { gameType, showtype } = matchInfo.value
  return eventsList.value.length > 0 && gameType === 'FT' && showtype == 'RB'
})

onMounted(() => {
  fetchStaticsEvents()
})
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

.panel-scene {
  padding: 0 0 0 22px;
}

.panel-scene__item {
  display: flex;
  min-height: 100px;
  border-left: 1px solid #fff;
  border-bottom: 1px solid #fff;
  padding: 24px 0;
  .label {
    display: flex;
    width: 120px;
  }
  .label .labs {
    height: 30px;
    display: flex;
    align-items: center;
    margin-top: 5px;
    margin-left: -10px;
    > img {
      display: block;
      width: 30px;
      height: 30px;
      margin: 0 12px 0 0;
    }
    > strong {
      font-size: 24px;
      color: #0e3d66;
      font-weight: 500;
    }
  }

  .context {
    .head {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      > img {
        height: 38px;
        margin: 0 14px 0 0;
      }
      > span {
        font-size: 22px;
        color: #88a6bb;
        font-weight: 400;
      }
    }
    .cont {
      font-size: 24px;
      color: #0e3d66;
    }
  }
}
</style>
