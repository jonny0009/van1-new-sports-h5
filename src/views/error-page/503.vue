<template>
  <div class="page-404">
    <div class="title">
      <img
        v-if="config.maintainLogo"
        :src="imgUrlFormat( config.maintainLogo)"
        alt=""
      >
      <img
        v-else
        src="@/assets/images/page404/bluelogo.png"
      />
    </div>
    <div class="content">
      <div class="img-warp">
        <img src="@/assets/images/page404/maintain.png" />
      </div>
      <div class="tips">网站维护中</div>
      <div class="tips2">重新开放倒数</div>
      <div class="time">
        <van-count-down
          :time="timeDate"
          @finish="finish"
        />
      </div>

    </div>

  </div>
</template>

<script lang="ts" setup>
import store from '@/store'
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { imgUrlFormat } from '@/utils/index'

const $router = useRouter()

const config = computed(() => store.state.app.customizeConfig)

const timeDate = computed(() => {
  const time = store.state.app.systemTime - new Date().getTime()
  console.log(time)
  return time
})

function finish() {
  // $router.push('/home')
}
</script>

<style lang="scss" scoped>
:deep(.van-count-down) {
  font-size: 100px;
  color: var(--color-primary);
}

.page-404 {
  .title {
    padding-top: 86px;
    width: 100%;
    text-align: center;
    img {
      width: 317px;
      height: 100px;
    }
  }
  .content {
    .img-warp {
      text-align: center;
      padding-top: 150px;
      width: 100%;
      img {
        width: 400px;
      }
    }
    .tips {
      margin-top: 92px;
      text-align: center;
      font-size: 36px;
      color: var(--color-primary);
    }
    .tips2 {
      margin-top: 50px;
      text-align: center;
      font-size: 24px;
      color: rgb(136, 166, 187);
    }
    .time {
      margin-top: 40px;
      text-align: center;

      // margin-top: 40px;
      // text-align: center;
      // font-size: 100px;
      // color: rgb(72, 163 ,255);
    }
  }
}
</style>
