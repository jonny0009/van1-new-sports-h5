<template>
  <ArrowTitle
    class="mt10 mb10"
    :src="titleHot"
    :text="$t('home.hotMatch')"
    @returnSuccess="returnStatus"
  />
  <div v-if="!isShow" class="Hot-Match-Group-Warp">
    <div
      class="Hot-Match-Group"
      :class="[{ 'noData': noDataToggle }]"
      @touchstart="start($event)"
      @touchmove="move($event)"
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
//
// 左右滑动事件
const getAngle = (angx:any, angy:any) => {
  return Math.atan2(angy, angx) * 180 / Math.PI
}
const getDirection = (startx:any, starty:any, endx:any, endy:any) => {
  var angx = endx - startx
  var angy = endy - starty
  var result = 0 // 默认标记没有滑动
  // 如果滑动距离太短
  if (Math.abs(angx) < 2 && Math.abs(angy) < 2) {
    return result
  }
  var angle = getAngle(angx, angy)
  if (angle >= -135 && angle <= -45) {
    result = 1 // 向上
    // console.log('向上')
  } else if (angle > 45 && angle < 135) {
    result = 2 // 向下
    // console.log('向下')
  } else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
    result = 3 // 向左
    // console.log('向左')
  } else if (angle >= -45 && angle <= 45) {
    result = 4 // 向右
    // console.log('向右')
  }
  return result
}

const startPos:any = ref({})
const start = (event:any) => {
  const touchS = event.targetTouches[0] // touches数组对象获得屏幕上所有的touch，取第一个touch
  startPos.value = {
    x: touchS.pageX,
    y: touchS.pageY,
    time: new Date()
  } // 取第一个touch的坐标值
}
const move = (event:any) => {
  const touchE = event.changedTouches[0]
  endPos.value = {
    x: touchE.pageX,
    y: touchE.pageY,
    timeStemp: new Date()
  }

  const { x, y } = startPos.value
  direction.value = getDirection(x, y, endPos.value.x, endPos.value.y)

  // console.log(event)
  // // 当屏幕有多个touch或者页面被缩放过，就不执行move操作
  // if (event.targetTouches.length > 1 || event.scale && event.scale !== 1) return
}

const endPos:any = ref({})
const direction = ref({})

</script>

<style lang="scss" scoped>
  .onImgError{
    width: 200px;
    height: 176px;
    display: inline-block;
    background: url('@/assets/images/home/other/league.png') no-repeat center;
    background-size: contain;
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
      background: linear-gradient(90deg,#fff,hsla(0,0%,100%,0));
    }
    .mask-right{
      position: absolute;
      right: -10px;
      top: 0;
      width: 30px;
      height: 100%;
      pointer-events: none;
      background: linear-gradient(270deg,#fff,hsla(0,0%,100%,0));
    }
  }
</style>
