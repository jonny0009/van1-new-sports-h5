<template>
  <div class="global-bar-header">
    <div class="headerView">
      <div class="headerView-fixed">
        <div class="avatar" @click="showInfo">
          <img :src="avatarImg" style="object-fit: contain;" />
        </div>
        <div class="wallet" @click="toUrl('/login')">
          <div class="cur">
            <img :src="USDTImg" style="object-fit: contain;" />
          </div>
          0.00
          <div class="transaction">
            <img :src="transactionImg" />
          </div>
        </div>
        <div class="right-area" @click="toUrl('/search')">
          <img class="search" :src="searchImg" style="object-fit: contain;" />
        </div>
      </div>
    </div>

    <van-popup v-model:show="showLeft" :duration="0.2" position="left" :style="{ width: '71.5%', height: '100%' }">
      <div class="userInfo">
        <!-- 头部 -->
        <div class="top">
          <div class="top_1">
            <div class="left">
              <van-image class="headImg" fit="contain" :src="avatarImg" />
            </div>
            <div class="right">
              <div class="head">
                <div class="head_1">查看档案</div>
                <img class="headImg_1" fit="contain" src="@/assets/images/user/notice.svg" @click="toUser('/notice')" />
              </div>
              <div class="money">
                <van-image class="headImg_2" fit="contain" :src="USDTImg" />
                <span>200,334,050.26</span>
              </div>
            </div>
          </div>
          <p class="font_3 font_4">{{ 'dilychsy789' }}</p>
          <p class="font_3">{{ '@dilychsy789' }}</p>
        </div>
        <div class="line" />
        <!-- 导航 -->
        <div class="nav">
          <div class="menu" @click="toUser('/result')">
            <img class="menu_1" fit="contain" src="@/assets/images/user/result.svg" />
            <div class="menu_2">结果</div>
          </div>
          <div class="menu" @click="toUser('/edit')">
            <img class="menu_1" fit="contain" src="@/assets/images/user/edit.svg" />
            <div class="menu_2">设置</div>
          </div>
          <div class="menu" @click="toUser('/customer')">
            <img class="menu_1" fit="contain" src="@/assets/images/user/icon2.svg" />
            <div class="menu_2">客服</div>
          </div>
        </div>
        <!-- logo -->
        <div class="logoImg">
          <van-image class="logo" fit="contain" :src="logoImg" />
        </div>
      </div>
    </van-popup>

  </div>
</template>
<script lang="ts" setup>
import searchImg from '@/assets/images/globalLayout/header/search.png'
import avatarImg from '@/assets/images/globalLayout/header/avatar.png'
import USDTImg from '@/assets/images/globalLayout/header/USDT.png'
import transactionImg from '@/assets/images/globalLayout/header/transaction.png'

import logoImg from '@/assets/images/user/logo.png'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const showLeft = ref(false)
const $router = useRouter()
const toUrl = (url:string) => {
  $router.push({ path: url })
}
// 用户导航
const toUser = (url?: string) => {
  if (url === '/customer') {
    console.log('客服===')
    return
  }
  showLeft.value = false
  $router.push({ path: '/user' + url })
}

const showInfo = () => {
  showLeft.value = true
}
</script>

<style lang="scss" scoped>
.headerView{
  height: 96px;
  .headerView-fixed{
    position: fixed;
    z-index: 99;
    left: 0;
    top: 0;
    width: 100%;
    height: 96px;
    color: #fff;
    display:flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(to bottom,#181f2a 0,#2a0572 100%);
  }

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
.userInfo {
  background: #FFFFFF;
  font-family: PingFangSC-Medium;
  font-size: 28px;
  color: #000000;
  letter-spacing: 0;
  font-weight: 500;

  .top {
    padding: 84px 52px;

    &_1 {
      display: flex;
      align-items: center;
    }

    .headImg {
      width: 100px;
      height: 120px;
    }

    .right {
      margin-left: 34px;

      .head {
        display: flex;
        align-items: center;
        justify-content: space-between;

        &_1 {
          background: #E5ECF3;
          border-radius: 24px;
          padding: 7px 18px;
          font-family: PingFangSC-Medium;
          font-size: 24px;
          color: #000000;
          letter-spacing: 0;
          font-weight: 500;
        }

        .headImg_1 {
          height: 34px;
          width: 34px;
        }
      }

      .money {
        margin-top: 18px;
        background-image: linear-gradient(90deg, #7642FD 0%, #491CAB 100%);
        border-radius: 28px;
        height: 40px;
        width: 292px;
        font-family: PingFangSC-Medium;
        font-size: 24px;
        color: #FFFFFF;
        letter-spacing: 0;
        font-weight: 500;
        padding: 2px;
        display: flex;
        align-items: center;

        .headImg_2 {
          height: 34px;
          width: 34px;
          margin-right: 39px;
        }
      }
    }

    .font_3 {
      font-family: PingFangSC-Regular;
      font-size: 24px;
      color: #1F2630;
      letter-spacing: 0;
      font-weight: 400;
    }

    .font_4 {
      color: #000000;
      font-weight: 500;
    }
  }
  .line{
    margin-top: -20px;
    background: #E5ECF3;
    height: 2px;
    width: 100%;
  }
  .logoImg{
    margin-top: 280px;
    text-align: center;
  }
  .logo{
    width: 197px;
    height: 175px;
  }

  // 导航
  .nav {
    padding: 54px;
    font-family: PingFangSC-Medium;
    font-size: 28px;
    color: #000000;
    letter-spacing: 0;
    font-weight: 500;

    .menu {
      display: flex;
      margin-bottom: 65px;

      &_1 {
        height: 46px;
        width: 46px;
        margin-right: 22px;
      }
    }
  }

}

</style>
