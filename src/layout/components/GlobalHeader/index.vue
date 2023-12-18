<template>
  <div class="global-bar-header">
    <div class="avatar">
      <van-image
        width="42"
        height="42"
        radius="100%"
        fit="contain"
        :src="'22'"
      >
        <template #error>
          <van-image
            width="42"
            height="42"
            fit="contain"
            :src="avatarImg"
          />
        </template>
      </van-image>
    </div>
    <div class="wallet">
      <div class="cur">
        <van-image
          width="24"
          height="24"
          radius="100%"
          fit="contain"
          :src="USDTImg"
        />
      </div>
      0.00
      <div class="transaction">
        <van-image
          width="14"
          height="14"
          fit="contain"
          :src="transactionImg"
        />
      </div>
    </div>
    <div class="right-area">
      <van-image
        width="20"
        height="20"
        fit="contain"
        :src="searchImg"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import searchImg from '@/assets/images/globalLayout/header/search.png'
import avatarImg from '@/assets/images/globalLayout/header/avatar.png'
import USDTImg from '@/assets/images/globalLayout/header/USDT.png'
import transactionImg from '@/assets/images/globalLayout/header/transaction.png'
</script>
<style lang="scss" scoped>
.global-bar-header{
  height: 96px;
  color: #fff;
  display:flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom,#181f2a 0,#2a0572 100%);
  position: relative;
  .wallet{
    height: 56px;
    line-height: 56px;
    min-width: 300px;
    display: inline-block;
    background: linear-gradient(90deg,#7642fe,#491cab);
    border-radius: 100px;
    position: relative;
    text-align: center;
    font-weight: 800;
    font-size: 26px;
    font-family: PingFangSC-Semibold,SF-Pro-Bold,system-ui;
    padding: 0 66px;
    .transaction,
    .cur{
      position: absolute;
      top: 4px;
      width: 48px;
      height: 48px;
      border-radius: 100%;
      overflow: hidden;
    }
    .cur{
      left: 6px;
    }
    .transaction{
      background: #7642fe;
      right: 6px;
    }
  }
  .avatar{
    position: absolute;
    left: 30px;
    top: 6px;
    bottom: 6px;
  }
  .right-area{

  }
}
</style>
