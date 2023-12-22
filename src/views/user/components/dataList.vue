<template>
  <!-- 列表 -->
  <div class="dataList">
    <div v-for="i in 3" :key="i" class="item">
      <div class="top">
        <div class="left">
          <div class="top-img">
            <img class="img_1" src="@/assets/images/user/num3.png" alt="" />
            <img class="img_2" src="@/assets/images/user/num9.png" alt="" />
          </div>
        </div>
        <div class="right">
          <div class="font_1">库卢维赤克肯德 v 克孜勒库姆<span class="color-1"> [{{ '1:0' }}]</span></div>
          <div class="font_2">乌兹别克斯坦 - 超级联赛</div>
        </div>
      </div>
      <!-- 2 -->
      <div class="top2">
        <div class="left">
          <img class="img_1" src="@/assets/images/user/plate.png" alt="" />
        </div>
        <div class="right">
          <div class="one">
            <span>
              克孜勒库姆
            </span>
            <span class="color-2">
              @2.38
            </span>
          </div>
          <div class="one two">
            <span>
              全场 1X2
            </span>
            <span>
              <img class="img_1" src="@/assets/images/user/win.svg" alt="" />
              <!-- <img class="img_1" src="@/assets/images/user/fail.svg" alt="" /> -->
            </span>
          </div>
        </div>
      </div>
      <!-- 3 -->
      <div class="top3">
        <div class="one">
          <span>投注额：</span>
          <div>
            <img class="img_1" src="@/assets/images/user/num1.png" alt="" />
            <span> 1.00</span>
          </div>
        </div>
        <div class="one two">
          <span>投注额：</span>
          <div>
            <img class="img_1" src="@/assets/images/user/num2.png" alt="" />
            <span class="color-1"> 1.00</span>
          </div>
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

  .color-1 {
    color: #7642FD;
  }

  .color-2 {
    color: #1EBB52;
  }

  .item {
    background: #EFF1F2;
    border-radius: 22px;
    padding: 15px 20px;
    margin-bottom: 20px;

    .top {
      display: flex;

      .top-img {
        height: 80px;
        width: 80px;
        position: relative;

        .img_1 {
          position: absolute;
          top: 0;
          left: 0;
          height: 50px;
          width: 50px;
        }

        .img_2 {
          position: absolute;
          bottom: 0;
          right: 0;
          height: 50px;
          width: 50px;
        }
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
      margin-top: 20px;
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

          .img_1 {
            width: 40px;
            height: 30px;
          }
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
        .img_1{
          width: 20px;
          height: 19px;
        }
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
