<template>
  <!-- 列表 -->
  <div class="dataList">
    <div class="item">
      <div class="top">
        <div class="left">
          <img class="img_1" src="@/assets/images/user/logo.png" alt="" />
        </div>
        <div class="right">
          <div class="font_1">库卢维赤克肯德</div>
          <div class="font_2">乌兹别克斯坦 - 超级联赛</div>
        </div>
      </div>
      <!-- 2 -->
      <div class="top2">
        <div class="left">
          <img class="img_1" src="@/assets/images/user/logo.png" alt="" />
        </div>
        <div class="right">
          <div class="one">
            <span>
              克孜勒库姆
            </span>
            <span>
              2.38
            </span>
          </div>
          <div class="one two">
            <span>
              克孜勒库姆
            </span>
            <span>
              2.38
            </span>
          </div>
        </div>
      </div>
      <!-- 3 -->
      <div class="top3">
        <div class="one">
          <span>投注额：</span>
          <span>1.00</span>
        </div>
        <div class="one two">
          <span>投注额：</span>
          <span>1.00</span>
        </div>
      </div>
      <!-- line -->
      <div class="line" />
      <!-- num-->
      <div class="top4">
        <div class="one">
          <span>注单ID：</span>
          <span>17018533129094466</span>
        </div>
        <div class="one">
          <span>注单ID：</span>
          <span>17018533129094466</span>
        </div>
        <div class="one">
          <span>注单ID：</span>
          <span>17018533129094466</span>
        </div>
      </div>

    </div>
  </div>
</template>

<script lang="ts" setup>
// import { ref, reactive } from 'vue'

</script>

<style lang="scss" scoped>
// 列表
.dataList {
  margin-top: 20px;

  .item {
    background: #EFF1F2;
    border-radius: 22px;
    padding: 15px 20px;

    .top {
      display: flex;

      .img_1 {
        height: 80px;
        width: 80px;
      }

      .right {
        margin-left: 18px;

        .font_1 {
          font-family: PingFangSC-Semibold;
          font-size: 28px;
          color: #1F2630;
          letter-spacing: 0;
          font-weight: 600;
        }

        .font_2 {
          font-family: PingFangSC-Semibold;
          font-size: 24px;
          color: #546371;
          letter-spacing: 0;
          font-weight: 600;
        }
      }
    }

    .top2 {
      background: #E2E6E8;
      border-radius: 20px;
      padding: 20px 10px;
      display: flex;
      align-items: center;

      .left {
        margin-right: 15px;

        .img_1 {
          width: 60px;
          height: 60px;
        }
      }

      .right {
        .one {
          display: flex;
          width: 550px;
          justify-content: space-between;
          font-family: PingFangSC-Semibold;
          font-size: 28px;
          color: #1F2630;
          letter-spacing: 0;
          font-weight: 600;
        }

        .two {
          font-family: PingFangSC-Semibold;
          font-size: 24px;
          color: #546371;
          letter-spacing: 0;
          font-weight: 600;
        }
      }
    }

    .top3 {
      margin-top: 9px;

      .one {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-family: PingFangSC-Semibold;
        font-size: 24px;
        color: #546371;
        letter-spacing: 0;
        font-weight: 600;
      }

      .two {
        font-family: PingFangSC-Semibold;
        font-size: 28px;
        color: #546371;
        letter-spacing: 0;
        font-weight: 600;
      }
    }

    .line {
      background: #E0E3E7;
      height: 2px;
    }

    .top4 {
      margin-top: 10px;

      .one {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-family: PingFangSC-Regular;
        font-size: 22px;
        color: #96A5AA;
        letter-spacing: 0;
        font-weight: 400;
      }
    }
  }
}
</style>
