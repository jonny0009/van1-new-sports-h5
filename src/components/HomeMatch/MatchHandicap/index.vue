<template>
  <div class="homeMatchHandicap">
    <div class="home-tabs-play">
      <div class="time">
        {{ matchDate(props.sendParams.gameDate) }}
      </div>
      <div class="play">
        <div class="flex-1"></div>
        <span
          class="btn R"
          :class="[
            {
              'active':RrefShow
            }
          ]"
          @click="Rclick"
        >
          让分
        </span>
        <span
          class="btn OU"
          :class="[
            {
              'active':OUrefShow
            }
          ]"
          @click="OUclick"
        >
          大小
        </span>
        <span
          class="btn M"
          :class="[
            {
              'active':MrefShow
            }
          ]"
          @click="Mclick"
        >
          独赢
        </span>
      </div>
    </div>
    <div class="home-match">
      <div calss="up-match-group__body">
        <div class="up-match">
          <!--  -->
          <div class="up-match__header border-bottom">
            <div class="match-info">
              <div class="match-team-logo">
                <img
                  v-img="props.sendParams.homeLogo"
                  class="my-image home"
                  alt=""
                  style="object-fit: contain;"
                >
                <img
                  v-img="props.sendParams.awayLogo"
                  class="my-image away"
                  alt=""
                  style="object-fit: contain;"
                >
              </div>
              <div class="match-info__content">
                <div class="team">
                  <span class="match-team-name">
                    {{ getTeam(props.sendParams) }}
                  </span>
                  <div class="flex-1"></div>
                  <div class="up-match-time">1:30 AM</div>
                </div>
                <div class="up-match-league">
                  <SportsIcon :icon-src="props.sendParams.gameType" />
                  <div class="text">{{ getLeagueShortName(props.sendParams) }}</div>
                </div>
              </div>
            </div>
          </div>

          <!--  -->
          <div class="up-match__body">
            <!-- 全场 亚洲让分盘 -->
            <div v-if="RrefShow" ref="Rref" class="match-betting-item">
              <div class="match-betting-item__title">
                <div class="flex-cross-center">
                  全场 亚洲让分盘
                  <van-popover
                    placement="top"
                    theme="dark"
                    trigger="click"
                  >
                    <div class="popover-text">
                      全场让分盘
                    </div>
                    <template #reference>
                      <van-icon name="info" />
                    </template>
                  </van-popover>
                </div>
              </div>
              <div class="match-betting-item__content">
                <div class="betting-select">
                  <div class="betting-select__list">
                    <div v-for="(item,idx) in getRList(props.sendParams)" :key="idx" class="betting-option">
                      <span class="up-betting-name">
                        <span class="text">
                          {{ item.ratioType }}
                        </span>
                        <span class="point">{{ item.ratio }}</span>
                      </span>
                      <div class="details">
                        <div class="item">{{ item.ior }}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- 全场 大小盘  -->
            <div v-if="OUrefShow" ref="OUref" class="match-betting-item">
              <div class="match-betting-item__title">
                <div class="flex-cross-center">
                  全场 大小盘
                </div>
              </div>
              <div class="match-betting-item__content">
                <div class="betting-select">
                  <div class="betting-select__list">
                    <div v-for="(item,idx) in getOUList(props.sendParams)" :key="idx" class="betting-option">
                      <span class="up-betting-name">
                        <span class="text">{{ item.ratioType }}</span>
                        <span class="point">{{ item.ratio }}</span>
                      </span>
                      <div class="details">
                        <div class="item">{{ item.ior }}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- 全场 1X2 -->
            <div v-if="MrefShow" ref="Mref" class="match-betting-item">
              <div class="match-betting-item__title">
                <div class="flex-cross-center">
                  全场 1X2
                </div>
              </div>
              <div class="match-betting-item__content">
                <div class="betting-select">
                  <div class="betting-select__list">
                    <div v-for="(item,idx) in getMList(props.sendParams)" :key="idx" class="betting-option">
                      <span class="up-betting-name">
                        <span class="text">{{ item.ratioType }}</span>
                      </span>
                      <div class="details">
                        <div class="item">{{ item.ior }}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--

             -->
          </div>
        </div>
      </div>
      <!--  -->

      <div class="up-match__footer">
        <div class="match-footer">
          <div class="match-footer__item">
            <span>更多玩法</span>
            <span class="num">149</span>
            <van-icon class="arrow" name="arrow" />
          </div>
          <div class="match-footer__item">
            <span>投注动态</span>
            <span class="num">45</span>
            <van-icon class="arrow" name="arrow" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { matchDate } from '@/utils/matchDate.ts'
import SportsIcon from '@/components/Button/SportsIcon/index.vue'
import { ref } from 'vue'
const props = defineProps({
  sendParams: {
    type: Object,
    default: function () {
      return { }
    }
  }
})
const getTeam = ({ homeTeamAbbr, awayTeamAbbr }:any) => {
  if (!homeTeamAbbr) {
    return ''
  }
  return `${homeTeamAbbr} V ${awayTeamAbbr}`
}
const getLeagueShortName = ({ leagueShortName }:any) => {
  if (!leagueShortName) {
    return ''
  }
  return `${leagueShortName}`
}
const RrefShow = ref(true)
const Rclick = () => {
  RrefShow.value = !RrefShow.value
}
const OUrefShow = ref(true)
const getRList = (item:any) => {
  const { R } = item || {}
  const { game, ratioData } = R || {}
  const newObject = Object.assign({}, item, R, game)
  const newRatioData = (ratioData || []).map(e => {
    return Object.assign({}, e, newObject)
  })
  return newRatioData
}
const OUclick = () => {
  OUrefShow.value = !OUrefShow.value
}
const getOUList = (item:any) => {
  const { OU } = item || {}
  const { game, ratioData } = OU || {}
  const newObject = Object.assign({}, item, OU, game)
  const newRatioData = (ratioData || []).map(e => {
    return Object.assign({}, e, newObject)
  })
  return newRatioData
}
const MrefShow = ref(true)
const Mclick = () => {
  MrefShow.value = !MrefShow.value
}
const getMList = (item:any) => {
  const { M } = item || {}
  const { game, ratioData } = M || {}
  const newObject = Object.assign({}, item, M, game)
  const newRatioData = (ratioData || []).map(e => {
    return Object.assign({}, e, newObject)
  })
  return newRatioData
}
</script>
