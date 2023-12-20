<template>
  <div class="notice">
    <van-nav-bar class="bg-title" :title="title">
      <template #left>
        <img class="img_1" src="@/assets/images/login/return@2x.png" alt="" @click="goBack()" />
      </template>
    </van-nav-bar>
    <div class="content">
      <div v-if="dataList.length" class="noData">
        <img class="img_1" src="@/assets/images/user/noData.png" />
        <p>
          未查询到相关数据
        </p>
      </div>
      <div class="list">
        <van-swipe-cell v-for="i in 10" :key="i" :before-close="beforeClose" class="itemContent">
          <div class="cell" @click="toDetail(i)">
            <p class="font_1">服务器将于13:00停服维修</p>
            <p class="font_2">由于版本升级，服务器升级更新，更新停服的时间为13:00时，请各位玩家合理安排时间，对于玩家带来的不便，表意抱歉只说。</p>
            <div class="font_3">
              <span>查看完整讯息</span>
              <span>2023/12/10 13:59:59</span>
            </div>
          </div>
          <template #right>
            <img class="img_close" src="@/assets/images/user/close.png" />
          </template>
        </van-swipe-cell>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
// import { showConfirmDialog } from 'vant'
const $router = useRouter()
const title = ref('消息')
const dataList = reactive([])
const goBack = () => {
  $router.push({ path: '/home' })
}
const toDetail = (i: any) => {
  console.log(i, '====')

  $router.push('/user/noticeDetail')
}
const beforeClose = (position: any) => {
  console.log(position, '====11')
  // switch (position.position) {
  //   case 'left':
  //   case 'cell':
  //   case 'outside':
  //     return true
  //   case 'right':
  //     return new Promise((resolve) => {
  //       showConfirmDialog({
  //         title: '确定删除吗？'
  //       })
  //         .then(() => resolve(true))
  //         .catch(() => resolve(false))
  //     })
  // }
}

</script>

<style lang="scss" scoped>
.notice {
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
    height: calc(100vh - 150px);

    .noData {
      text-align: center;
      font-family: PingFangSC-Medium;
      font-size: 24px;
      color: #96A5AA;
      letter-spacing: 0;
      font-weight: 500;

      .img_1 {
        margin-top: 331px;
        width: 102px;
        height: 121px;
        margin-bottom: 57px;

      }
    }

    // 数据列表
    .list {
      padding: 42px 36px;

      .itemContent {
        margin-bottom: 20px;
      }

      .cell {
        background: #EFF1F2;
        border-radius: 10px 0 0 10px;
        padding: 25px;

        .font_1 {
          font-family: PingFangSC-Semibold;
          font-size: 28px;
          color: #1F2630;
          letter-spacing: 0;
          font-weight: 600;
        }

        .font_2 {
          margin-top: 20px;
          font-family: PingFangSC-Medium;
          font-size: 24px;
          color: #546371;
          letter-spacing: 0;
          font-weight: 500;
        }

        .font_3 {
          display: flex;
          justify-content: space-between;
          margin-top: 20px;
          font-family: PingFangSC-Regular;
          font-size: 24px;
          color: #546371;
          letter-spacing: 0;
          font-weight: 400;
        }

      }
    }

    .img_close {
      height: 36px;
      width: 36px;
    }

    :deep(.van-swipe-cell__right) {
      height: 100%;
      width: 106px;
      text-align: center;
      line-height: 262px;
      background: red;
      border-radius: 0px 10px 10px 0px;
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
