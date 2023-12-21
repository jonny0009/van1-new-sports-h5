<template>
  <ArrowTitle
    class="mt10 mb10"
    :src="titleHot"
    text="热门赛事"
    @returnSuccess="returnStatus"
  />

  <div v-if="!isShow" class="Hot-Match-Group" :calss="{'noData':!firstLeaguesList.length}">
    <Loading v-if="!isLoading" />
    <template v-else>
      <EmptyIcon v-if="!firstLeaguesList.length"></EmptyIcon>
      <van-image
        v-for="(item,idx) in firstLeaguesList"
        v-else
        :key="idx"
        :src="imgUrlFormat(item.icon)"
        fit="contain"
      >
        <template #loading>
          <van-loading type="spinner" />
        </template>
        <template #error>
          <van-image fit="contain" :src="league" class="noLoadingAndError" />
        </template>
      </van-image>
    </template>
  </div>
</template>
<script lang="ts" setup>
// img
import titleHot from '@/assets/images/home/title-hot.png'
import league from '@/assets/images/home/other/league.png'
// vue
import { onBeforeMount, reactive, ref, computed, watch } from 'vue'
import store from '@/store'
import { imgUrlFormat } from '@/utils/index.ts'
// api
import { firstLeagues } from '@/api/home'
// script
const refreshChangeTime = computed(() => store.state.home.refreshChangeTime)
const timeout:any = ref('')
watch(refreshChangeTime, (val) => {
  if (val) {
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
