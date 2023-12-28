<template>
  <div class="item">
    <div class="photo">
      <van-image :src="imgCover" fit="cover"></van-image>
      <span class="state" v-if="item.showType == 'RB'">{{ $t('live.hotNow') }}</span>
    </div>

    <div class="main">
      <div class="main-title">
        <SvgIcon v-if="item.gameType == 'FT'" name="live-football" />
        <SvgIcon v-if="item.gameType == 'BK'" name="live-basketball" />
        <span>{{ item.leagueName }}</span>
      </div>

      <div class="main-team">
        <div class="cell">
          <div class="head">
            <img v-img="item.homeLogo" :type="2" alt="" />
            <span>{{ item.homeTeam }}</span>
          </div>
          <div class="score">
            <span>{{ gameInfo.sc_game_H || gameInfo.sc_FT_H }}</span>
          </div>
        </div>
        <div class="cell">
          <div class="head">
            <img v-img="item.awayLogo" :type="2" alt="" />
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
          <img src="@/assets/images/live/s_hot.png" alt="" />
          <span>{{ watchNumText }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { ImageSource } from '@/config'
// import { formatToDateTime } from '@/utils/date'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const props = defineProps({
  item: {
    type: Object,
    default: () => {}
  }
})

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
    return t('live.xLooks', { num })
  }
  return t('live.xReserve', { num })
})
</script>

<style lang="scss" scoped>
.item {
  background: #eff1f2;
  border-radius: 10px;
  height: 220px;
  display: flex;
  overflow: hidden;
  margin: 0 0 20px 0;
  .photo {
    position: relative;
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
      background-image: linear-gradient(-68deg, #d700ff 0%, #af00ff 100%);
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
      > span {
        max-width: 260px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        zoom: 0.95;
      }
      .svg-icon {
        color: #999;
        margin-right: 8px;
      }
    }

    &-team {
      color: #1f2630;
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
        > img {
          width: 40px;
          height: 40px;
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
        color: #546371;
        font-size: 30px;
        font-weight: 600;
      }
    }

    &-desc {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #1f2630;
      font-size: 24px;
      font-weight: 800;
      padding: 0 0;
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
}
</style>
