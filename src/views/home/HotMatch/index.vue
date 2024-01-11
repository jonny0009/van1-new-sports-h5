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
              :src="imgUrlFormat(item.icon)"
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
import { onBeforeMount, reactive, ref, computed, watch } from 'vue'
import store from '@/store'
import { imgUrlFormat } from '@/utils/index'
import { firstLeagues } from '@/api/home'
import router from '@/router'
const activeNames = ref('1')
const refreshChangeTime = computed(() => store.state.home.refreshChangeTime)
const noDataToggle = computed(() => firstLeaguesList.length === 0)
const timeout:any = ref('')
watch(refreshChangeTime, (val) => {
  if (val) {
    activeNames.value = '1'
    clearTimeout(timeout.value)
    timeout.value = setTimeout(() => {
      getFirstLeagues()
    }, 100)
  }
})
const firstLeaguesList = reactive([])
const isLoading = ref(false)
const getFirstLeagues = async () => {
  isLoading.value = false
  const res:any = await firstLeagues()
  isLoading.value = true
  if (res.code === 200) {
    const list:any = res?.data || []
    firstLeaguesList.length = 0
    firstLeaguesList.push(...list)
  }
}
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
const init = () => {
  getFirstLeagues()
}
onBeforeMount(() => {
  init()
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
