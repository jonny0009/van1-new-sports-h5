<template>
  <div class="panel-more">
    <div class="more-item" v-for="item in 3" :key="item">
      <div class="photo">
        <van-image src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
        <span class="state">热播中</span>
      </div>

      <div class="main">
        <div class="main-title">
          <img src="@/assets/images/live/s_foot.png" alt="" />
          <span>印度 - 孟买超级联赛</span>
        </div>

        <div class="main-team">
          <div class="cell">
            <div class="head">
              <img src="@/assets/images/live/team_img.png" alt="" />
              <span>孟买青少年</span>
            </div>
            <div class="score">
              <span>3</span>
            </div>
          </div>
          <div class="cell">
            <div class="head">
              <img src="@/assets/images/live/team_img.png" alt="" />
              <span>孟买青少年</span>
            </div>
            <div class="score">
              <span>3</span>
            </div>
          </div>
        </div>

        <div class="main-desc">
          <div class="name">兮兮喜欢喵喵</div>
          <div class="hots">
            <img src="@/assets/images/live/s_hot.png" alt="" />
            <span>115,564</span>
          </div>
        </div>
      </div>
      <!-- end -->
    </div>
  </div>
</template>

<script lang="ts" setup>
// import { reactive, ref } from 'vue'
</script>

<style lang="scss" scoped>
.panel-more {
  padding: 0 36px;
}

.more-item {
  background: #eff1f2;
  border-radius: 10px;
  height: 220px;
  display: flex;
  overflow: hidden;
  margin: 0 0 20px 0;
  .photo {
    position: relative;
    width: 330px;
    height: 220px;
    .van-image {
      display: block;
      overflow: hidden;
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }
    .state {
      position: absolute;
      left: 0;
      top: 0;
      min-width: 84px;
      height: 34px;
      padding: 0 10px;
      color: #fff;
      font-size: 24px;
      background-image: linear-gradient(-68deg, #d700ff 0%, #af00ff 100%);
      border-radius: 10px 0px 10px 0px;
    }
  }

  .main {
    flex: 1;
    padding: 0 14px 0 22px;
    &-title {
      display: flex;
      align-items: center;
      font-size: 24px;
      padding: 14px 0 14px 8px;
      > img {
        width: 24px;
        height: 24px;
        margin-right: 8px;
      }
      > span {
        max-width: 260px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        zoom: 0.95;
      }
    }

    &-team {
      color: #1f2630;
      font-size: 24px;
      font-weight: 800;
      .cell {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 16px;
      }
      .head {
        display: flex;
        align-items: center;
        > img {
          width: 40px;
          height: 40px;
          margin-right: 10px;
        }
        > span {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          max-width: 220px;
        }
      }
      .score {
        color: #546371;
        font-size: 30px;
        font-weight: 600;
      }
    }

    &-desc {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #1f2630;
      font-size: 24px;
      font-weight: 800;
      padding: 0 0;
      .name {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        max-width: 144px;
      }
      .hots {
        display: flex;
        align-items: center;
        > img {
          width: 20px;
          margin-right: 8px;
        }
      }
    }
  }
}
</style>
