<template>
  <div class="panel-bet">
    <van-collapse v-model="activeNames">
      <van-collapse-item title="滚球 亚洲让分盘" name="1" :border="false">
        <div class="bet">
          <div class="bet-item" v-for="item in 3" :key="item">
            <div class="top">
              <span>查部伊</span>
              <span>-0.25</span>
            </div>
            <div class="bot">
              <span class="num">2.37</span>
              <span class="ico">
                <img src="@/assets/images/live/sub.png" alt="" />
              </span>
            </div>
          </div>
        </div>
      </van-collapse-item>

      <van-collapse-item title="滚球投注 大小盘" name="2" :border="false">
        <div class="bet">
          <div class="bet-item active" v-for="item in 2" :key="item">
            <div class="top">
              <span>查部伊</span>
              <span>-0.25</span>
            </div>
            <div class="bot">
              <span class="num">2.37</span>
              <span class="ico">
                <img src="@/assets/images/live/sup.png" alt="" />
              </span>
            </div>
          </div>
        </div>
      </van-collapse-item>
      <van-collapse-item title="总进球 大小盘" name="3" :border="false">
        <div class="bet">
          <div class="bet-item" v-for="item in 2" :key="item">
            <div class="top">
              <span>查部伊</span>
              <span>-0.25</span>
            </div>
            <div class="bot">
              <span class="lock">
                <img src="@/assets/images/live/lock.png" alt="" />
              </span>
            </div>
          </div>
        </div>
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue'
import { playGroup } from '@/api/live'
const props = defineProps({
  matchInfo: Object
})

const activeNames = ref(['1'])

const getPlayGroup = async () => {
  const gameType = props.matchInfo?.gameType
  const res = await playGroup({ gameType })
  const data = res.data || {}
  const aiFormatGroup = data['veteran'] || []
  console.log(aiFormatGroup)
}
watch(
  () => props.matchInfo,
  () => {
    getPlayGroup()
  }
)

onMounted(() => {
  getPlayGroup()
})
</script>

<style lang="scss" scoped>
.panel-bet {
  padding: 0 36px;
  .van-hairline--top-bottom:after {
    border: none;
  }
  .van-collapse-item {
    background: #eff1f2;
    border-radius: 10px;
    margin-bottom: 20px;
    :deep(.van-collapse-item__title) {
      background: none;
      color: #1f2630;
      font-weight: 700;
      .van-icon-arrow {
        color: #1f2630;
        font-weight: 700;
      }
    }
    :deep(.van-collapse-item__content) {
      background: none;
      padding: 0;
    }
  }
}

.bet {
  font-family: PingFangSC-Medium;
  font-size: 24px;
  display: flex;
  flex-wrap: wrap;
  &-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 310px;
    height: 94px;
    background: #ffffff;
    color: #546371;
    border-radius: 20px;
    margin: 0 0 20px 20px;
    &.active {
      background: #7643fd;
      color: #fff;
    }
  }
  .top {
    font-size: 24px;
    letter-spacing: 0;
    font-weight: 500;
    text-align: center;
  }
  .bot {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    margin-top: 4px;
    img {
      display: block;
      width: 100%;
    }
    .ico {
      width: 22px;
      margin-left: 12px;
    }
    .lock {
      width: 22px;
    }
  }
}
</style>
