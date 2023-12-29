<template>
  <div class="global-bar-header">
    <div class="headerView">
      <div class="headerView-fixed">
        <div class="avatar" @click="showInfo">
          <img :src="getImg(userInfo.headImg)" style="object-fit: contain;" />
        </div>
        <div v-if="loginToken" class="wallet">
          <div class="cur">
            <img v-if="currency==='CNY'" :src="CNY" style="object-fit: contain;" />
            <img v-else-if="currency==='VNDK'" :src="VNDK" style="object-fit: contain;" />
            <img v-else :src="USDTImg" style="object-fit: contain;" />
          </div>
          <span>{{ formatMoney(balance.balance) }}</span>
          <div class="transaction">
            <img :src="transactionImg" />
          </div>
        </div>
        <div v-else class="wallet" @click="toUrl('/login')">
          {{ $t('user.logOn') }}  / {{ $t('user.register') }}
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
              <van-image class="headImg" fit="contain" :src="getImg(userInfo.headImg)" />
            </div>
            <div class="right">
              <div class="head">
                <div class="head_1" @click="toUser('/userInfo')"> {{ $t('user.ViewProfile') }} </div>
                <img class="headImg_1" fit="contain" src="@/assets/images/user/notice.svg" @click="toUser('/notice')" />
              </div>
              <div class="money">
                <img v-if="currency==='CNY'" class="headImg_2" :src="CNY" style="object-fit: contain;" />
                <img v-else-if="currency==='VNDK'" class="headImg_2" :src="VNDK" style="object-fit: contain;" />
                <img v-else class="headImg_2" :src="USDTImg" style="object-fit: contain;" />
                <span>{{ formatMoney(balance.balance) }}</span>
              </div>
            </div>
          </div>
          <p class="font_3 font_4">{{ userInfo.nickName }}</p>
          <p class="font_3">{{ userInfo.loginName || '' }}</p>
        </div>
        <div class="line" />
        <!-- 导航 -->
        <div class="nav">
          <div class="menu" @click="toUser('/result')">
            <img class="menu_1" fit="contain" src="@/assets/images/user/result.svg" />
            <div class="menu_2">{{ $t('user.result') }}</div>
          </div>
          <div class="menu" @click="toUser('/edit')">
            <img class="menu_1" fit="contain" src="@/assets/images/user/edit.svg" />
            <div class="menu_2">{{ $t('user.edit') }}</div>
          </div>
          <!-- <div class="menu" @click="toUser('/customer')">
            <img class="menu_1" fit="contain" src="@/assets/images/user/icon2.svg" />
            <div class="menu_2">{{ $t('user.customer') }}</div>
          </div> -->
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
import { getToken } from '@/utils/auth'

import { ImageSource } from '@/config'

import searchImg from '@/assets/images/globalLayout/header/search.png'
import avatarImg from '@/assets/images/globalLayout/header/avatar.png'
import USDTImg from '@/assets/images/globalLayout/header/USDT.png'
import CNY from '@/assets/images/user/CNY.svg'
import VNDK from '@/assets/images/user/VNDK.svg'
// import BAXI from '@/assets/images/user/BAXI.svg'
import transactionImg from '@/assets/images/globalLayout/header/transaction.png'

import logoImg from '@/assets/images/user/logo.png'

import { formatMoney } from '@/utils/index'

import { useRouter } from 'vue-router'
import { ref, computed } from 'vue'
import store from '@/store'
const userInfo = computed(() => store.state.user.userInfo)
const balance = computed(() => store.state.user.balance)
const currency = computed(() => store.state.user.currency)

const showLeft = ref(false)
const loginToken = ref(getToken())
const $router = useRouter()
const toUrl = (url: string) => {
  $router.push({ path: url })
}
// 用户导航
const toUser = (url?: string) => {
  if (url === '/customer') {
    // console.log(window.AIConfig.static_url, '===')
    console.log('客服===')
    return
  }
  showLeft.value = false
  $router.push({ path: '/user' + url })
}
const getImg = (imgUrl: string) => {
  if (imgUrl) {
    return `${ImageSource}${imgUrl}`
  }
  return avatarImg
}

const showInfo = () => {
  showLeft.value = true
}
</script>

<style lang="scss" scoped>
.headerView {
  height: 96px;

  .headerView-fixed {
    position: fixed;
    z-index: 99;
    left: 0;
    top: 0;
    width: 100%;
    height: 96px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(to bottom, #181f2a 0, #2a0572 100%);
  }

  .wallet {
    height: 56px;
    line-height: 56px;
    min-width: 300px;
    display: inline-block;
    background: linear-gradient(90deg, #7642fe, #491cab);
    border-radius: 100px;
    position: relative;
    text-align: center;
    font-weight: 800;
    font-size: 26px;
    font-family: PingFangSC-Semibold, SF-Pro-Bold, system-ui;
    padding: 0 66px;

    .transaction,
    .cur {
      position: absolute;
      top: 4px;
      width: 48px;
      height: 48px;
      border-radius: 100%;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 24px;
        height: 24px;
        display: block;
      }
    }

    .cur {
      left: 6px;

      img {
        width: 40px;
        height: 40px;
      }
    }

    .transaction {
      background: #7642fe;
      right: 6px;
    }
  }

  .avatar {
    position: absolute;
    left: 30px;
    top: 6px;
    bottom: 6px;
    width: 84px;
    height: 84px;
    border-radius: 50%;
    overflow: hidden;
    img {
      display: block;
      width: 84px;
      height: 84px;
    }
  }

  .right-area {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 30px;
    display: flex;
    align-items: center;

    .search {
      width: 40px;
      height: 40px;
      display: block;
    }
  }
}

.userInfo {
  // background: var(--color-background-color);
  background: #FFFFFF;
  height: 100vh;
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
          background: var(--color-search-box-sidebar);
          border-radius: 24px;
          padding: 7px 18px;
          font-family: PingFangSC-Medium;
          font-size: 24px;
          color: var(--color-search-box-text-1);
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
        background-image: linear-gradient(90deg, var(--color-search-box-sidebar-1) 0%, var(--color-search-box-sidebar-2) 100%);
        border-radius: 28px;
        height: 40px;
        width: 292px;
        font-family: PingFangSC-Medium;
        font-size: 24px;
        color: var(--color-sidebar-font);
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
      color: var(--color-search-box-text-1);
      letter-spacing: 0;
      font-weight: 400;
      width: 250px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;

    }

    .font_4 {
      color: var(--color-search-box-text-1);
      font-weight: 500;
    }
  }

  .line {
    margin-top: -20px;
    background: #E5ECF3;
    height: 2px;
    width: 100%;
  }

  .logoImg {
    margin-top: 280px;
    text-align: center;
  }

  .logo {
    width: 197px;
    height: 175px;
  }

  // 导航
  .nav {
    padding: 54px;
    font-family: PingFangSC-Medium;
    font-size: 28px;
    color: var(--color-search-box-text-1);
    letter-spacing: 0;
    font-weight: 500;

    .menu {
      display: flex;
      margin-bottom: 65px;
      align-items: center;

      &_1 {
        height: 46px;
        width: 46px;
        margin-right: 22px;
      }
    }
  }

}</style>
