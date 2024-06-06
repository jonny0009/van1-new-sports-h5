<template>
  <div>
    <van-popup v-model:show="showLeft" :duration="0.2" position="left" :style="{ width: '71.5%', height: '100%' }">
      <div class="userInfo">
        <!-- 头部 -->
        <div class="top">
          <div class="top_1">
            <div class="left">
              <img
                v-img="userInfo.headImg"
                class="headImg"
                :type="3"
                style="object-fit: cover;"
                @click.stop="toUser('/userInfo')"
              />
            </div>
            <div class="right">
              <div class="head">
                <div class="head_1" @click.self="toUser('/userInfo')"> {{ $t('user.ViewProfile') }} </div>
                <img
                  v-if="ifBLue"
                  class="headImg_1"
                  fit="contain"
                  src="@/assets/images/user/blue/bell.png"
                  @click="toUser('/notice')"
                />
                <img
                  v-else
                  class="headImg_1"
                  fit="contain"
                  src="@/assets/images/user/notice.svg"
                  @click="toUser('/notice')"
                />
              </div>
              <div class="money">
                <template v-if="currentWallet.currencyLogo">
                  <img class="headImg_2" :src="imgUrlFormat(currentWallet.currencyLogo)" style="object-fit: contain;" />
                </template>
                <template v-else>
                  <img v-if="currency === 'CNY'" class="headImg_2" :src="CNY" style="object-fit: contain;" />
                  <img v-else-if="currency === 'VNDK'" class="headImg_2" :src="VNDK" style="object-fit: contain;" />
                  <img v-else-if="currency==='BRL'" class="headImg_2" :src="BRL" style="object-fit: contain;" />
                  <img v-else-if="currency==='THB'" class="headImg_2" :src="THB" style="object-fit: contain;" />
                  <img v-else class="headImg_2" :src="USDTImg" style="object-fit: contain;" />
                </template>

                <span>{{ formatMoney(balance.balance) }}</span>
              </div>
            </div>
          </div>
          <p class="font_3 font_4">{{ userInfo.nickName }}</p>
          <p class="font_3">{{ userInfo.loginName || '' }}</p>
          <!-- 粉丝/关注 -->
          <div class="user-4">
            <div class="left">
              <span>{{ peopleInfo.followNum }}</span>
              <span>{{ $t('user.follow') }}</span>
            </div>
            <div class="center" />
            <div class="left right">
              <span>{{ peopleInfo.fansCount }}</span>
              <span>{{ $t('user.fans') }}</span>
            </div>
          </div>

        </div>
        <van-divider class="line" />
        <!-- 导航 -->
        <div class="nav">
          <div class="menu" @click="toUser('/result')">
            <img v-if="ifBLue" class="menu_1" fit="contain" src="@/assets/images/user/blue/result.png" />
            <img v-else class="menu_1" fit="contain" src="@/assets/images/user/result.svg" />
            <div class="menu_2">{{ $t('user.result') }}</div>
          </div>
          <div class="menu" @click="toUser('/edit')">
            <img v-if="ifBLue" class="menu_1" fit="contain" src="@/assets/images/user/blue/edit.png" />
            <img v-else class="menu_1" fit="contain" src="@/assets/images/user/edit1.svg" />
            <div class="menu_2">{{ $t('user.edit') }}</div>
          </div>
          <!-- 联系我们 -->
          <div class="menu" @click="toUser('/contactUs')">
            <img v-if="ifBLue" class="menu_1" fit="contain" src="@/assets/images/user/blue/sever.png" />
            <img v-else class="menu_1" fit="contain" src="@/assets/images/user/icon2.svg" />
            <div class="menu_2">{{ $t('user.customer') }}</div>
          </div>
        </div>
        <!-- logo -->
        <div class="logoImg">
          <template v-if="config.leftLogo">
            <van-image class="logo" fit="contain" :src="imgUrlFormat(config.leftLogo)" />
          </template>
          <template v-else>
            <van-image v-if="ifBLue" class="logo" fit="contain" :src="aiLogo" />
            <van-image v-else class="logo" fit="contain" :src="logoImg" />
          </template>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { formatMoney, imgUrlFormat } from '@/utils/index'

import logoImg from '@/assets/images/user/logo.png'
import aiLogo from '@/assets/images/user/blue/ai_logo.png'
import USDTImg from '@/assets/images/globalLayout/header/USDT.png'

import store from '@/store'

const userInfo = computed(() => store.state.user.userInfo)
const peopleInfo = computed(() => store.state.user.peopleInfo)
const balance = computed(() => store.state.user.balance)
const currency = computed(() => store.state.user.currency)
const currentWallet = computed(() => store.state.user.currentWallet)
const theme = computed(() => store.state.app.theme)
const config = computed(() => store.state.app.customizeConfig)

import CNY from '@/assets/images/user/CNY.svg'
import VNDK from '@/assets/images/user/VNDK.svg'
import BRL from '@/assets/images/user/BRL.svg'
import THB from '@/assets/images/user/thb.svg'

import { useRouter } from 'vue-router'
const $router = useRouter()

const showLeft = ref(false)

const ifBLue = computed(() => {
  if (theme.value === 'blue') {
    return true
  }
  return false
})

// 用户导航
const toUser = (url?: string) => {
  if (url === '/result') {
    store.dispatch('user/getResultTab', 0)
  }
  showLeft.value = false
  $router.push({ path: '/user' + url })
}
const openNav = () => {
  store.dispatch('user/getAccountInfo')
  showLeft.value = true
}

defineExpose({
  openNav
})

</script>

<style lang="scss" scoped>
.userInfo {
  // background: var(--color-background-color);
  background: #FFFFFF;
  height: 100vh;
  font-family: PingFangSC-Medium;
  font-size: 28px;
  color: var(--color-bet-tabtext-2);
  letter-spacing: 0;
  font-weight: 500;
  z-index: 100;

  .top {
    padding: 84px 52px;

    &_1 {
      display: flex;
      align-items: center;
    }

    .headImg {
      width: 103px;
      height: 108px;
      border-radius: 50%;
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
          color: var(--color-bet-tabtext-2);
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
        // background-image: linear-gradient(90deg, var(--color-search-box-sidebar-1) 0%, var(--color-search-box-sidebar-2) 100%);
        background: var(--color-search-box-sidebar);
        border-radius: 28px;
        height: 40px;
        width: 292px;
        font-family: PingFangSC-Medium;
        font-size: 24px;
        // color: var(--color-sidebar-font);
        color: var(--color-bet-tabtext-2);
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
      color: var(--color-text-2);
      font-family: PingFangSC-Medium;
      font-size: 24px;
      font-weight: 500;
    }

    //粉丝/关注
    .user-4 {
      margin-top: 10px;
      font-family: PingFangSC-Regular;
      font-size: 24px;
      color: var(--color-global-minButtonicoCl);
      letter-spacing: 0;
      font-weight: 400;
      display: flex;
      align-items: center;

      .left {
        span:first-child {
          font-family: PingFangSC-Semibold;
          font-size: 24px;
          color: var(--color-bet-tabtext-2);
          letter-spacing: 0;
          font-weight: 400;
          margin-right: 8px;
        }
      }

      .center {
        width: 2px;
        height: 20px;
        font-family: PingFangSC-Semibold;
        background: #96A5AA;
        margin-left: 12px;
        margin-top: 5px;
      }

      .right {
        margin-left: 12px;
      }
    }
  }

  .line {
    margin-top: -45px;
    background: var(--color-search-box-sidebar);
    width: 100%;
  }

  .logoImg {
    margin-top: 280px;
    text-align: center;
  }

  .logo {
    // width: 197px;
    // width: 333px;
    width: 343px;
    height: 100px;
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
}
</style>
