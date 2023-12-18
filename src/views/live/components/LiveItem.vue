<template>
  <div class="item">
    <div class="item-photo">
      <van-image src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
      <div class="state">热播中</div>
      <div class="footer">
        <span>第二节 03:38</span>
      </div>
    </div>

    <div class="item-title">
      <img src="@/assets/images/live/s_foot.png" alt="" />
      <span>印度 - 孟买超级联赛</span>
    </div>

    <div class="item-team">
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

    <div class="item-desc">
      <div class="name">兮兮喜欢喵喵</div>
      <div class="hots">
        <img src="@/assets/images/live/s_hot.png" alt="" />
        <span>115,564</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  item: Object
})
</script>

<style lang="scss" scoped>
.item {
  width: 165px;
  height: 220px;
  background: #eff1f2;
  border-radius: 10px;
  overflow: hidden;
  &-photo {
    position: relative;
    width: 100%;
    height: 110px;
    .van-image {
      width: 100%;
      height: 100%;
    }
    .footer {
      color: #fff;
      background: rgba(0, 0, 0, 0.5);
      font-size: 12px;
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      padding: 2px 5px;
    }
    .state {
      position: absolute;
      left: 0;
      top: 0;
      min-width: 42px;
      height: 17px;
      padding: 0 5px;
      background: #cf00ff;
      color: #fff;
      font-size: 12px;
    }
  }

  &-title {
    display: flex;
    align-items: center;
    font-size: 12px;
    padding: 7px 8px;
    > img {
      width: 12px;
      height: 12px;
      margin-right: 4px;
    }
    > span {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      zoom: 0.95;
    }
  }

  &-team {
    color: #1f2630;
    font-size: 12px;
    font-weight: 800;
    padding: 0 4px;
    .cell {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 8px;
    }
    .head {
      display: flex;
      align-items: center;
      > img {
        width: 20px;
        height: 20px;
        margin-right: 5px;
      }
      > span {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        max-width: 110px;
      }
    }
    .score {
      color: #546371;
      font-size: 15px;
      font-weight: 600;
    }
  }

  &-desc {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #1f2630;
    font-size: 12px;
    font-weight: 800;
    padding: 0 4px;
    .name {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      max-width: 72px;
    }
    .hots {
      display: flex;
      align-items: center;
      > img {
        width: 10px;
        margin-right: 4px;
      }
    }
  }
}
</style>
