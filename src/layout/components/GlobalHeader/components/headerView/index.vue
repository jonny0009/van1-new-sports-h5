<template>
  <div class="headerView">
    <div class="avatar">
      <img :src="avatarImg" style="object-fit: contain;" />
    </div>
    <div class="wallet">
      <div class="cur">
        <img :src="USDTImg" style="object-fit: contain;" />
      </div>
      0.00
      <div class="transaction">
        <img :src="transactionImg" />
      </div>
    </div>
    <div class="right-area">
      <img class="search" :src="searchImg" style="object-fit: contain;" />
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
.headerView{
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
      display: flex;
      justify-content: center;
      align-items: center;
      img{
        width: 24px;
        height: 24px;
        display: block;
      }
    }
    .cur{
      left: 6px;
      img{
        width: 40px;
        height: 40px;
      }
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
    img{
      display: block;
      width: 84px;
      height: 84px;
    }
  }
  .right-area{
    position: absolute;
    top: 0;
    bottom: 0;
    right: 30px;
    display: flex;
    align-items: center;
    .search{
      width: 40px;
      height: 40px;
      display: block;
    }
  }
}
</style>

