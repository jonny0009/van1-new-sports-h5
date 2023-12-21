<template>
  <div class="game-page">
    <iframe
      :src="gameUrl"
      width="100%"
      height="100%"
      frameborder="0"
    ></iframe>
  </div>
</template>

<script lang="ts" setup>
import { ref, onBeforeMount } from 'vue'
import { apiGetGameDetail } from '@/api/common'

const gameUrl: any = ref('')

onBeforeMount(async () => {
  getGameDetail()
})

// 获取冠军
const getGameDetail = async () => {
  const params = {
    appType: 2,
    supplierId: 'aigame',
    gameKey: 'BAC-V2.0',
    openType: 2,
    dirType: 3,
    terType: 2
  }
  const res:any = await apiGetGameDetail(params) || {}
  if (res.code === 200 && res.data) {
    gameUrl.value = res.data.url
  }
}

</script>

<style lang="scss" scoped>
.game-page{
  height:calc(100vh - 96px - 88px);
  padding: 0;
}

</style>
