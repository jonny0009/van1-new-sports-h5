<template>
  <div class="noticeDetail">
    <van-nav-bar class="bg-title" :title="title">
      <template #left>
        <img class="img_1" src="@/assets/images/login/return@2x.png" alt="" @click="goBack()" />
      </template>
    </van-nav-bar>
    <div class="content">
      <div class="area-btn_1">
        <span :class="index == 1 ? 'active' : ''" @click="index = 1">关注</span>
        <span :class="index == 2 ? 'active' : ''" @click="index = 2">粉丝</span>
      </div>
      <div v-if="index == 1" class="info">
        <div v-for="i in 5" :key="i" class="info-1">
          <div class="left">
            <img class="img_1" src="@/assets/images/user/head-img.png" alt="" />
            <div class="left-1">
              <p>dyamimo</p>
              <p>@dyamimo</p>
              <p>There is no going back</p>
            </div>
          </div>
          <div class="right">
            已关注
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const $router = useRouter()
const index = ref(1)
const goBack = () => {
  $router.back()
}
const title = ref('他人的关注')

</script>

<style lang="scss" scoped>
.noticeDetail {
  .bg-title {
    width: 100%;
    height: 150px;
    background: url('@/assets/images/login/bg-tit@2x.png');
    background-size: 100% 100%;

    .img_1 {
      width: 36px;
      height: 36px;
    }
  }

  .content {
    height: calc(100vh - 350px);
    overflow-y: auto;
    padding: 42px 36px;

    .area-btn_1 {
      display: flex;
      justify-content: space-around;

      span {
        font-family: PingFangSC-Semibold;
        font-size: 28px;
        color: #97a6ab;
        letter-spacing: 0;
        font-weight: 600;
        width: 95px;
        text-align: center;
      }

      .active {
        color: #000000;

        &::after {
          content: '';
          width: 100%;
          height: 7px;
          display: block;
          margin: 10px auto;
          border-bottom: 7px solid #000;
          border-radius: 7px;
        }
      }
    }

    .info {
      padding: 31px 0;

      .info-1 {
        // background: #E5ECF3;
        border-bottom: 2px solid #E5ECF3;
        padding: 37px 0 21px 0;
        display: flex;
        justify-content: space-between;

        .left {
          display: flex;

          .img_1 {
            width: 55px;
            height: 67px;
            margin-right: 20px;
          }

          .left-1 {
            font-family: PingFangSC-Medium;
            font-size: 28px;
            color: #1F2630;
            letter-spacing: 0;
            font-weight: 500;

            p:nth-child(2) {
              font-family: PingFangSC-Medium;
              font-size: 24px;
              color: #96A5AA;
              letter-spacing: 0;
              font-weight: 500;
            }

            p:nth-child(3) {
              font-family: PingFangSC-Medium;
              font-size: 24px;
              color: #546371;
              letter-spacing: 0;
              font-weight: 500;
            }
          }
        }

        .right {
          background: #EFF1F2;
          border-radius: 32px;
          width: 141px;
          height: 52px;
          text-align: center;
          font-family: PingFangSC-Semibold;
          font-size: 24px;
          color: #1F2630;
          letter-spacing: 0;
          font-weight: 600;
          line-height: 52px;
        }
      }
    }

  }

}

:deep(.van-field__control) {
  height: 50px;
  font-size: 30px;
}

:deep(.van-icon) {
  font-size: 40px;
}
</style>

<style scoped>
:deep(.van-nav-bar__content) {
  height: 150px;
}

:deep(.van-nav-bar__title) {
  height: 90px;
  line-height: 90px;
  font-family: PingFangSC-Medium;
  font-size: 28px;
  color: #FFFFFF;
  letter-spacing: 0;
  text-align: center;
  font-weight: 500;
}

:deep(.van-icon) {
  font-size: 48px;
}
</style>
