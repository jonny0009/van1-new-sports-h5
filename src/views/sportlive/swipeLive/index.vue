<template>
  <div v-if="swipeList.length" class="swipeLive">
    <van-swipe class="my-swipe" indicator-color="white" @change="swipeChange">
      <van-swipe-item v-for="(match, idx) in swipeList" :key="idx">
        <div class="wrap">
          <MatchItem :key="match.gidm" :live-info="match" :match-index="idx" :active-index="activeIndex" />
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script lang="ts" setup>
import MatchItem from './main/MatchItem.vue'
import { anchorLiveList } from '@/api/live'
import { ref, onBeforeMount, onUnmounted, onActivated, onDeactivated } from 'vue'

const activeIndex = ref(0)
const swipeList: any = ref([])

const init = async () => {
  const params = {
    page: 1,
    pageSize: 5,
    rbType: 1
  }
  const res: any = await anchorLiveList(params)
  if (res.code === 200) {
    const dataArray = res?.data?.list || []
    swipeList.value = dataArray
  }
}

const swipeChange = (index: any) => {
  activeIndex.value = index
}

const timer: any = ref()
onUnmounted(() => {
  clearInterval(timer.value)
})
onDeactivated(() => {
  clearInterval(timer.value)
})
onActivated(() => {
  clearInterval(timer.value)
  console.log(1234)
  timer.value = setInterval(() => {
    init()
  }, 15 * 1000)
})

onBeforeMount(() => {
  swipeList.value.length = 0
  init()
  timer.value = setInterval(() => {
    init()
  }, 10 * 1000)
})
</script>
<style lang="scss" scoped>
.swipeLive {
  margin: 0 40px;
  padding: 0 0 20px;
  position: relative;
}

.my-swipe {
  .van-swipe-item {
    color: #fff;
    font-size: 20px;
    height: 384px;
    text-align: center;
    display: flex;
    flex-direction: column;

    .wrap {
      flex: 1;
      overflow: auto;
      position: relative;
      background: #000;
      border-bottom-right-radius: 15px;
      border-bottom-left-radius: 15px;

      .loading {
        position: absolute;
        left: 50%;
        top: 50%;
        z-index: 99;
        transform: translate3d(-50%, -50%, 0);
      }
    }
  }
}
</style>
<style lang="scss">
.swipeLive {
  .van-swipe__indicators {
    bottom: 18px;

    .van-swipe__indicator {
      width: 12px;
      height: 12px;
    }

    .van-swipe__indicator--active {
      width: 24px;
      height: 12px;
      border-radius: 24px;
    }
  }
}
</style>
