<template>
  <div class="page-404">
    <div class="title">
      <img
        v-if="config.maintainLogo"
        :src="imgUrlFormat(config.maintainLogo)"
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
      <div class="tips">{{ $t('home.errorTips.tips3') }}</div>
      <div class="tips2">{{ $t('home.errorTips.tips4') }}</div>
      <div class="time">
        <van-count-down
          :time="timeDate"
          @finish="finish"
        />
      </div>

      <div class="area-btn">

        <span @click="contactUs">{{ $t('user.contactUs') }}</span>
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
  // const time = store.state.app.systemTime - new Date().getTime()s
  const msg = store.state.app.mantainMsg

  // const systemTime = store.state.app.systemTime
  // const msg = '3,2024-01-24 16:13:37,2024-01-24 23:59:59,true'
  let time = null
  if (msg) {
    const strFlag = msg.split(',')[2]
    time = strFlag.replaceAll('-', '/')
    time = new Date(time).getTime() - store.state.app.systemTime
    if (time < 0) {
      finish()
    }
  }
  return time
})

function finish() {
  $router.push('/home')
}

function contactUs() {
  $router.push('/user/contactUs')
}
</script>

<style lang="scss" scoped>
:deep(.van-count-down) {
  font-size: 100px;
  color: var(--color-primary);
}

.page-404 {
  .title {
    padding-top: 80px;
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
      padding-top: 80px;
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

 .area-btn {
      margin-top: 60px;
        text-align: center;

      span {
        display: inline-block;
        background-image: linear-gradient(
          to right,
          var(--color-login-button-color-1),
          var(--color-login-button-color-2)
        );
        text-align: center;
        font-size: 28px;
        font-weight: 500;
        font-family: PingFangSC-Semibold;
        height: 80px;
        line-height: 80px;
        width: 320px;
        border-radius: 80px;

          color: #ffff;

      }
    }
</style>
