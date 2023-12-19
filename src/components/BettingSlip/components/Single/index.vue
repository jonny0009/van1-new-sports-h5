<template>
  <div class="Single-wrap">
    <div class="remove">
      <van-icon name="cross" />
    </div>
    <div class="content">
      <div class="title">
        <van-icon name="circle" />
        <div class="betting-name">小于 +2.75</div>
      </div>
      <div class="details">
        <div class="play-name">全场 大小盘</div>
        <div class="team-info">巴巴斯托 对 艾美利亚</div>
      </div>
      <div class="betting-odds">@2.04</div>
      <div class="action">
        <div class="betting-slip-input">
          <span class="currency"><van-icon name="balance-o" /></span>
          <div style="flex: 1 1 0%;"></div>
          <span class="amount">123</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>

const props = defineProps({
  market: {
    default: () => {}
  }
})
console.log(props)
</script>
<style scoped lang="scss">
.Single-wrap {
  display: flex;
  align-items: center;
  height: 178px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url('@/assets/images/betting/single-bg.png');

  .remove {
    width: 76px;
    height: 178px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url('@/assets/images/betting/single-close-bg.png');
  }

  .content {
    height: 178px;
    flex: 1;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;

    .title {
      display: flex;
      align-items: center;
      line-height: 16px;

      .betting-name {
        margin-left: 8px;
        font-family: PingFangSC-Medium;
        font-size: 28px;
        color: #000000;
        letter-spacing: 0;
        font-weight: 500;
      }
    }

    .details {
      margin-bottom: 2px;

      .play-name {
        font-family: PingFangSC-Medium;
        font-size: 24px;
        color: #546371;
        letter-spacing: 0;
        font-weight: 500;
      }

      .team-info {
        font-family: PingFangSC-Medium;
        font-size: 24px;
        color: #546371;
        letter-spacing: 0;
        font-weight: 500;
      }
    }

    .betting-odds {
      font-family: PingFangSC-Semibold;
      font-size: 30px;
      color: #7642FD;
      letter-spacing: 1px;
      font-weight: 600;
    }

    .action {
      position: absolute;
      right: 10px;
      bottom: 10px;
      width: 100%;
      display: flex;
      justify-content: flex-end;

      .betting-slip-input {
        position: relative;
        width: 200px;
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 5px;
        padding-right: 11px;
        border-radius: 0.16rem;
        border: 2px solid #96A5AA;
        border-radius: 10px;
        background-color: #fff;
        font-family: PingFangSC-Semibold;
        font-size: 24px;
        color: #000000;
        letter-spacing: 0.8px;
        text-align: justify;
        font-weight: 600
      }

      .amount {
        font-family: PingFangSC-Semibold;
        font-size: 24px;
        color: #000000;
        letter-spacing: 0.8px;
        text-align: justify;
        font-weight: 600;
      }
    }
  }
}
</style>
