<template>
  <ArrowTitle
    class="mt10 mb10"
    :src="titleHot"
    :text="$t('home.hotMatch')"
    @returnSuccess="returnStatus"
  />
  <Transition>
    <div v-show="!isShow" class="Hot-Match-Group-Warp">
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
  </Transition>
</template>
<script lang="ts" setup>
import titleHot from '@/assets/images/home/title-hot.png'
import { onBeforeMount, reactive, ref, computed, watch } from 'vue'
import store from '@/store'
import { imgUrlFormat } from '@/utils/index'
import { firstLeagues } from '@/api/home'
import router from '@/router'
const refreshChangeTime = computed(() => store.state.home.refreshChangeTime)
const noDataToggle = computed(() => firstLeaguesList.length === 0)
const timeout:any = ref('')
watch(refreshChangeTime, (val) => {
  if (val) {
    clearTimeout(timeout.value)
    timeout.value = setTimeout(() => {
      isShow.value = false
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
const isShow = ref(false)
const returnStatus = (val:any) => {
  isShow.value = val
}
</script>

<style lang="scss" scoped>
  .onImgError{
    width: 176px;
    height: 176px;
    display: inline-block;
    background: url('@/assets/images/home/other/league.png') no-repeat center;
    background-size: cover;
    border-radius: 46px;
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
