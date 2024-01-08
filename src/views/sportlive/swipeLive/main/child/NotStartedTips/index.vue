<template>
  <div class="ft-match-wrap">
    <div class="match-info">
      <div class="match-league">
        {{ matchInfo.leagueShortName || matchInfo.leagueName }}
      </div>
      <div class="match-name-wrap">
        <div class="team-info right">
          <div class="team-name text-overflow">
            {{ matchInfo.homeTeam }}
          </div>
          <img :src="homeLogo" alt="" @error="homeLogoError = true" />
        </div>
        <div v-if="liveInfo.showType === 'RB'" class="match-date" v-html="setMatch.showRBTime(matchInfo)"></div>
        <div v-else class="match-date">
          VS
        </div>
        <div class="team-info left">
          <img :src="awayLogo" alt="" @error="awayLogoError = true" />
          <div class="team-name text-overflow">
            {{ matchInfo.awayTeam }}
          </div>
        </div>
      </div>
    </div>
    <div v-if="type !== 3 && liveInfo.name" class="anchor-info-wrap">
      <div class="anchor-info">
        <div class="anchor-avatar">
          <img :src="headPortrait" alt="" @error="avatarError = true" />
        </div>
        <div class="anchor-name text-overflow">
          {{
            liveInfo.name
          }}
        </div>
      </div>
    </div>
  </div>
</template>
<script  lang="ts" setup>
import { ref, computed } from 'vue'
import { useMatch } from '@/utils/useMatch'
import { imgUrlFormat } from '@/utils/index'
import homeIcon from '@/assets/images/empty/match/team-home.svg'
import awayIcon from '@/assets/images/empty/match/team-away.svg'
import head from './default-head.jpg'
const setMatch: any = useMatch()
const props = defineProps({
  matchInfo: {
    type: Object,
    default: () => {}
  },
  liveInfo: {
    type: Object,
    default: () => {}
  }
})
const avatarError = ref(false)
const homeLogoError = ref(false)
const awayLogoError = ref(false)
const homeLogo = computed(() => {
  if (props.matchInfo?.homeLogo && !homeLogoError.value) {
    return imgUrlFormat(props.matchInfo.homeLogo)
  }
  return homeIcon
})

const awayLogo = computed(() => {
  if (props.matchInfo?.homeLogo && !awayLogoError.value) {
    return imgUrlFormat(props.matchInfo.awayLogo)
  }
  return awayIcon
})

const headPortrait = computed(() => {
  if (props.liveInfo?.headPortrait && !avatarError.value) {
    return imgUrlFormat(props.liveInfo.headPortrait)
  }
  return head
})

const type = computed(() => {
  return props.liveInfo.recommendType
})

</script>
<style lang="scss" scoped>
.ft-match-wrap {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px 20px 0 0;
  .match-league {
    font-size: 24px;
    color: #fff;
    text-align: center;
    font-weight: 400;
  }
  .match-info {
    width: 100%;
  }
  .match-name-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 24px;
    .match-date {
      font-size: 24px;
      color: #fff;
      text-align: center;
      line-height: 32px;
      font-weight: 400;
    }
    .team-info {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      &.right {
        justify-content: flex-end;
      }
      &.left {
        justify-content: flex-start;
      }
      img {
        width: 44px;
        height: 44px;
        margin: 0 10px;
      }
      .team-name {
        font-size: 24px;
        color: #ffffff;
        text-align: right;
        font-weight: 400;
        max-width: 240px;
      }
    }
  }
  .anchor-info-wrap {
    margin-top: 10px;
    .anchor-info {
      display: inline-block;
      position: relative;
      height: 24px;
      line-height: 24px;
      padding-left: 25px;
      padding-right: 8px;
      background: rgba(0, 0, 0, 0.4);
      border-radius: 18px;
      .anchor-avatar {
        position: absolute;
        left: 1px;
        top: 1px;
        width: 22px;
        height: 22px;
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      .anchor-name {
        min-width: 60px;
        max-width: 120px;
        font-size: 12px;
        color: #ffffff;
        font-weight: 400;
      }
    }
  }
}
</style>
