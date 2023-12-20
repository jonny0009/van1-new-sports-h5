<template>
  <div class="result">
    <van-nav-bar class="bg-title" :title="title">
      <template #left>
        <img class="img_1" src="@/assets/images/login/return@2x.png" alt="" @click="goBack()" />
      </template>
    </van-nav-bar>
    <div class="content">
      <div class="area-btn_1">
        <span :class="index == 1 ? 'active' : ''" @click="index = 1">投注历史</span>
        <span :class="index == 2 ? 'active' : ''" @click="index = 2">流水历史</span>
        <span :class="index == 3 ? 'active' : ''" @click="index = 3">赛果</span>
      </div>
      <div class="timeSelect">
        <div v-for="(item, index) in timeList" :key="index">
          <div
            v-if="item.timeName"
            class="time"
            :class="timeIndex == index ? 'timeActive' : ''"
            @click="selectTime(index)"
          >
            {{ item.timeName }}
          </div>
          <p v-else class="imgStyle">
            <img class="img_1" src="@/assets/images/user/selectTime.png" alt="" />
          </p>
        </div>
      </div>
      <!-- 状态 -->
      <div class="status">
        <div class="status_1">
          <span>状态</span>
          <div class="round">
            <span>全部</span>
            <img class="img_1" src="@/assets/images/user/down.png" alt="" />
          </div>
        </div>
        <div class="status_1">
          <span>球类</span>
          <div class="round">
            <span>全部</span>
            <img class="img_1" src="@/assets/images/user/down.png" alt="" />
          </div>
        </div>
      </div>
      <dataList></dataList>
    </div>
  </div>
</template>

<script lang="ts" setup>
import dataList from './components/dataList.vue'
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
const $router = useRouter()
const index = ref(1)
const timeIndex = ref(0)
const timeList = reactive([
  {
    timeName: '今日'
  },
  {
    timeName: '7天'
  },
  {
    timeName: '30天'
  },
  {
    timeName: '90天'
  },
  {
    timeName: ''
  }

])
// const content = ref('111111')
const goBack = () => {
  $router.back()
}
const selectTime = (index: number) => {
  timeIndex.value = index
}
const title = ref('结果')

</script>

<style lang="scss" scoped>
.result {
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
    overflow-y: auto;
    padding: 20px 36px;

    .area-btn_1 {
      display: flex;
      justify-content: space-around;

      span {
        font-family: PingFangSC-Semibold;
        font-size: 28px;
        color: #97a6ab;
        letter-spacing: 0;
        font-weight: 600;
      }

      .active {
        color: #000000;

        &::after {
          content: '';
          width: 50%;
          height: 6px;
          display: block;
          margin: 15px auto;
          border-bottom: 6px solid #000;
          border-radius: 6px;
        }
      }
    }

    // 时间选择
    .timeSelect {
      margin-top: 10px;
      display: flex;

      .time {
        width: 130px;
        height: 64px;
        // padding: 16px 40px;
        background: #EFF1F2;
        border-radius: 32px;
        font-family: PingFangSC-Medium;
        font-size: 24px;
        color: #2C333C;
        letter-spacing: 0;
        text-align: center;
        font-weight: 500;
        line-height: 64px;
        margin-right: 15px;
      }

      .timeActive {
        background: #7642FD;
        color: #FFFFFF;
      }

      .imgStyle {
        width: 64px;
        height: 64px;
        padding: 15px;
        background: #EFF1F2;

        // background: #7642FD;
        border-radius: 50%;
        text-align: center;

        .img_1 {
          margin-left: 2px;
          height: 34px;
          width: 34px;
          color: #000;
        }
      }

    }

    // 状态
    .status {
      margin-top: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: PingFangSC-Semibold;
      font-size: 24px;
      color: #1F2630;
      letter-spacing: 0;
      font-weight: 600;

      .status_1 {
        display: flex;
        align-items: center;
        margin-right: 30px;

        .round {
          width: 165px;
          height: 52px;
          text-align: center;
          line-height: 52px;
          background: #EFF1F2;
          border-radius: 32px;
          margin-left: 10px;
          position: relative;

          .img_1 {
            position: absolute;
            right: 20px;
            top: 20px;
            height: 10px;
            width: 10px;
          }
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
