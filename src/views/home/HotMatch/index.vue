<template>
  <van-collapse v-model="activeNames" accordion :border="false" class="GlobalCollapse">
    <van-collapse-item name="1">
      <template #title>
        <ArrowTitle
          class="mt10 mb10 hotArrowTitle"
          :src="titleHot"
          :text="$t('home.hotMatch')"
        />
      </template>
      <div class="Hot-Match-Group-Warp">
        <div
          class="Hot-Match-Group"
          :class="[{ 'noData': noDataToggle }]"
        >
          <Loading v-if="!isLoading" />
          <template v-else>
            <HomeEmpty v-if="noDataToggle"></HomeEmpty>
            <van-image
              v-for="(item,idx) in firstLeaguesList"
              v-else
              :key="idx"
              :src="imgUrlFormat(item.homeLeagueLogo)"
              fit="contain"
              lazy-load
              @click="goSportClick(item)"
            >
              <template #loading>
                <van-loading type="spinner" class="van-new-loading" size="36px" />
              </template>
              <template #error>
                <div class="onImgError"></div>
              </template>
            </van-image>
          </template>
        </div>
        <template v-if="!noDataToggle">
          <div class="mask-left" style="display: none;"></div>
          <div class="mask-right"></div>
        </template>
      </div>
    </van-collapse-item>
  </van-collapse>
</template>
<script lang="ts" setup>
import titleHot from '@/assets/images/home/title-hot.png'
import {  ref, computed,  } from 'vue'
import { imgUrlFormat } from '@/utils/index'
import router from '@/router'
const props = defineProps({
  firstLeaguesList: {
    type: Array as any,
    default: () => []
  }
})
const activeNames = ref('1')
const isLoading = ref(false)
const noDataToggle = computed(() => props.firstLeaguesList.length === 0)
const goSportClick = (item:any) => {
  const { leagueId, gameType } = item
  router.push({
    name: 'Sport',
    query: {
      leagueId
    },
    params: {
      type: gameType
    }
  })
}
defineExpose({
  isLoading, activeNames, 
})


</script>
<style lang="scss" scoped>
  .onImgError{
    width: 200px;
    height: 176px;
    display: inline-block;
    background: url('@/assets/images/home/other/league.png') no-repeat center;
    background-size: cover;
    border-radius: 20px;
  }
  .Hot-Match-Group-Warp{
    position: relative;
    .mask-left{
      position: absolute;
      left: -10px;
      top: 0;
      width: 30px;
      height: 100%;
      pointer-events: none;
      background: var(--color-global-maskBg);
    }
    .mask-right{
      position: absolute;
      right: -10px;
      top: 0;
      width: 30px;
      height: 100%;
      pointer-events: none;
      background: var(--color-global-maskBg);
    }
  }
</style>
<style lang="scss">
.hotArrowTitle{
  .img{
    width: 24px !important;
    height: 30px !important;
  }
}
</style>
