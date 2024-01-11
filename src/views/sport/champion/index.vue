<template>
  <div class="sport-champion-list">
    <div class="champion-title">
      <ArrowTitle class="mt10 mb10 goodArrowTitle" :src="titleIcon" :text="$t('sport.champion')" @returnSuccess="CloseClick" />
    </div>
    <div v-show="isOpen" class="champion-group-body">
      <Loading v-if="championListLoading" />
      <template v-else>
        <div v-for="(item, idx) in championList" v-if="championList.length" :key="idx" class="league-champion-item">
          <div class="league-champion-item__header">
            <img v-img="championIcon" class="icon">
            <div class="title">{{ item.champion.championType }}</div>
          </div>
          <Championitem :game-detail="item" />
        </div>
        <HomeEmpty v-else></HomeEmpty>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import championIcon from '@/assets/images/champion/league-icon.png'
import Championitem from './champion-item.vue'
import titleIcon from '@/assets/images/home/title-recommend.png'
import { ref } from 'vue'
const isOpen: any = ref(true)
defineProps({
  championList: {
    type: Array as any,
    default: function () {
      return []
    }
  },
  championListLoading: {
    type: Boolean,
    default: function () {
      return false
    }
  }
})
const CloseClick = (val:any) => {
  isOpen.value = !val
}
</script>

<style lang="scss" scoped>
.sport-champion-list{
  .champion-title{
    height: 100px;
    display: flex;
    align-items: center;
    img{
      width: 42px;
      height: 38px;
    }
    .st{
      margin-left: 13px;
      font-family: PingFangSC-Semibold;
      font-size: 32px;
      color: #1F2630;
      letter-spacing: 0;
      font-weight: 600;
    }
  }
  .champion-group-body{
    .league-champion-item{
      padding: 20px;
      border-radius: 32px;
      background: var(--color-match-Bg);

      margin-bottom: 20px;
      .league-champion-item__header{
        display: flex;
        align-items: center;
        height: 30px;
        img{
          width: 30px;
          height: 30px;
        }
        .title{
          font-weight: 800;
          font-size: 24px;
          margin-left: 10px;
        }
      }

    }

  }
}
</style>
