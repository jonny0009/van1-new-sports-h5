<template>
  <div class="item">
    <div class="item-photo">
      <van-image :src="imgCover" fit="cover">
        <template v-slot:error>
          <img :src="imageSource + 'FE/common/live/img_video_bg_FT.jpg'" alt="" />
        </template>
      </van-image>
      <div class="state" v-if="item.showType == 'RB'">{{ $t('live.hotNow') }}</div>
      <div class="footer">
        <span v-if="item.showType == 'RB'" v-html="setMatch.showRBTime(item)"></span>
        <span v-else>{{ formatToDateTime(item.gameDate, 'MM-DD HH:mm') }}</span>
      </div>
      <div class="mask-reseve" v-if="item.showType != 'RB'">
        <span>{{ $t('live.xHas', { num: watchNumText }) }}</span>
        <span>{{ $t('live.playNow') }}</span>
      </div>
    </div>

    <div class="item-title">
      <SvgIcon v-if="leagueIcon" :name="leagueIcon" />
      <strong>{{ item.leagueName }}</strong>
    </div>

    <div class="item-team">
      <div class="cell">
        <div class="head">
          <img v-img="item.homeLogo" :type="4" alt="" />
          <span>{{ item.homeTeam }}</span>
        </div>
        <div class="score">
          <span>{{ gameInfo.sc_game_H || gameInfo.sc_FT_H }}</span>
        </div>
      </div>
      <div class="cell">
        <div class="head">
          <img v-img="item.awayLogo" :type="5" alt="" />
          <span>{{ item.awayTeam }}</span>
        </div>
        <div class="score">
          <span>{{ gameInfo.sc_game_A || gameInfo.sc_FT_C || gameInfo.sc_FT_A }}</span>
        </div>
      </div>
    </div>

    <div class="item-desc">
      <div class="name">{{ item.nickname || item.leagueShortName }}</div>
      <div class="hots">
        <img :src="hotIcon" alt="" />
        <span>{{ watchNumText }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { ImageSource } from '@/config'
import { formatToDateTime } from '@/utils/date'
import { useMatch } from '@/utils/useMatch'
import { useI18n } from 'vue-i18n'
import store from '@/store'
import sHot1 from '@/assets/images/live/s_hot.png'
import sHot2 from '@/assets/images/live/s_hot2.png'

const props = defineProps({
  item: {
    type: Object,
    default: () => {}
  }
})
const { t } = useI18n()
const theme = computed(() => store.state.app.theme)
const hotIcon = computed(() => {
  if (theme.value == 'blue') {
    return sHot2
  }
  return sHot1
})
const imageSource = ref(ImageSource)
const setMatch: any = useMatch()
const gameInfo = computed(() => props.item?.gameInfo)
const imgCover = computed(() => {
  const item = props.item
  if (!item.anchorId) {
    if (item.gameType == 'BK') {
      return ImageSource + 'FE/common/live/img_video_bg_BK.jpg'
    } else {
      return ImageSource + 'FE/common/live/img_video_bg_FT.jpg'
    }
  }
  return ImageSource + item.cover
})

const watchNumText = computed(() => {
  const num = props.item.watchTotal.toLocaleString()
  if (props.item.showType == 'RB') {
    // return t('live.xLooks', { num })
    return num
  }
  // return t('live.xReserve', { num })
  return num
})
const leagueIcon = computed(() => {
  const icon: any = {
    FT: 'live-football',
    BK: 'live-basketball',
    TN: 'live-tennisball',
    OP_BM: 'live-badminton'
  }
  return icon[props.item.gameType]
})
</script>

<style lang="scss" scoped>
.item {
  width: 330px;
  height: 440px;
  border-radius: 10px;
  color: var(--color-live-base-font);
  background: var(--color-live-card-bg);
  overflow: hidden;
  &-photo {
    position: relative;
    width: 100%;
    height: 220px;
    .van-image {
      position: relative;
      width: 100%;
      height: 100%;
      border-radius: 10px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .footer {
      color: #fff;
      background: rgba(0, 0, 0, 0.5);
      font-size: 24px;
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      padding: 4px 10px;
      z-index: 2;
    }
    .state {
      position: absolute;
      left: 0;
      top: 0;
      min-width: 84px;
      height: 34px;
      padding: 0 10px;
      color: #fff;
      font-size: 24px;
      background-image: linear-gradient(
        -68deg,
        var(--color-linear-gradient-tag-1) 0%,
        var(--color-linear-gradient-tag-2) 100%
      );
      border-radius: 10px 0px 10px 0px;
    }
    .mask-reseve {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      font-size: 22px;
      color: var(--color-live-spec-font-1);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      border-radius: 10px;
      overflow: hidden;
    }
  }

  &-title {
    display: flex;
    align-items: center;
    font-size: 24px;
    padding: 14px 16px;
    > img {
      width: 24px;
      height: 24px;
      margin-right: 8px;
    }
    > strong {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      zoom: 0.95;
    }
    .svg-icon {
      opacity: 0.5;
      margin-right: 8px;
    }
  }

  &-team {
    color: var(--color-live-team-font);
    font-size: 24px;
    font-weight: 800;
    padding: 0 8px;
    .cell {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 16px;
    }
    .head {
      display: flex;
      align-items: center;
      height: 40px;
      > img {
        width: 40px;
        margin-right: 10px;
      }
      > span {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        max-width: 220px;
      }
    }
    .score {
      // color: #546371;
      font-size: 28px;
      font-weight: 600;
    }
  }

  &-desc {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 24px;
    font-weight: 800;
    padding: 0 8px;
    .name {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      max-width: 140px;
    }
    .hots {
      display: flex;
      align-items: center;
      max-width: 280px;
      > img {
        width: 20px;
        margin-right: 8px;
      }
      > span {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        max-width: 180px;
      }
    }
  }
}
</style>
