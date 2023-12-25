<template>
  <div class="home-page">
    <!-- 热门赛事 -->
    <HotMatch ref="refHotMatch" />
    <!-- 推荐比赛 -->
    <GoodMatch ref="refGoodMatch" />
    <!-- 早盘 -->
    <LatestMatch ref="refLatestMatch" />
    <div class="footerHeight"></div>
  </div>
</template>

<script lang="ts" setup>
import HotMatch from './HotMatch/index.vue'
import GoodMatch from './GoodMatch/index.vue'
import LatestMatch from './LatestMatch/index.vue'
import store from '@/store'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()

onMounted(() => {
  if (route.query.gidm) {
    const params = JSON.parse(route.query.obj as string)
    store.dispatch('betting/setMoreShow', { status: true, moreParams: params })
  }
})

</script>
<style lang="scss" scoped>
.home-page{
  overflow: hidden;
  padding: 0 40px;
 .van-pull-refresh {
    min-height: calc(100vh - 96px);
  }
  .refresh-wrap{
    padding-bottom: 190px;
  }
}
</style>
