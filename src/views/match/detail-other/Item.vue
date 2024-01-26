<template>
  <div class="item">
    <div class="photo">
      <van-image :src="imgCover" fit="cover">
        <template v-slot:error>
          <img :src="imageSource + 'FE/common/live/img_video_bg_FT.jpg'" alt="" />
        </template>
      </van-image>
      <span class="state" v-if="item.showType == 'RB'">{{ $t('live.hotNow') }}</span>
    </div>

    <div class="main">
      <div class="main-title">
        <SvgIcon v-if="leagueIcon" :name="leagueIcon" />
        <strong>{{ item.leagueName }}</strong>
      </div>

      <div class="main-team">
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

      <div class="main-desc">
        <div class="name">{{ item.leagueShortName }}</div>
        <div class="hots">
          <img :src="hotIcon" alt="" />
          <span>{{ watchNumText }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { ImageSource } from '@/config'
// import { useI18n } from 'vue-i18n'
import store from '@/store'
import sHot1 from '@/assets/images/live/s_hot.png'
import sHot2 from '@/assets/images/live/s_hot2.png'

const props = defineProps({
  item: {
    type: Object,
    default: () => {}
  }
})
// const { t } = useI18n()
const theme = computed(() => store.state.app.theme)
const hotIcon = computed(() => {
  if (theme.value == 'blue') {
    return sHot2
  }
  return sHot1
})
const imageSource = ref(ImageSource)
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
  // if (props.item.showType == 'RB') {
  //   return t('live.xLooks', { num })
  // }
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
  display: flex;
  overflow: hidden;
  color: var(--color-live-base-font);
  background: var(--color-live-card-bg);
  border-radius: 10px;
  height: 220px;
  .photo {
    position: relative;
    min-width: 330px;
    width: 330px;
    height: 220px;
    .van-image {
      display: block;
      overflow: hidden;
      width: 100%;
      height: 100%;
      border-radius: 10px;
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
  }

  .main {
    flex: 1;
    padding: 0 14px 0 22px;
    &-title {
      display: flex;
      align-items: center;
      font-size: 24px;
      padding: 14px 0 14px 8px;
      > img {
        width: 24px;
        height: 24px;
        margin-right: 8px;
      }
      > strong {
        max-width: 180px;
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
          max-width: 200px;
        }
      }
      .score {
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
      padding: 0 0;
      .name {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        max-width: 160px;
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
}
</style>
