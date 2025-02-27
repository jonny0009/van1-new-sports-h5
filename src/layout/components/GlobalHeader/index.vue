<template>
  <div ref="refGlobalBarHeader" class="global-bar-header">
    <div class="headerView">
      <div class="headerView-fixed">
        <div v-if="$route.meta.showheadGoBack" class="arrowLeft" @click="goBackClick">
          <van-icon name="arrow-left" />
        </div>
        <div v-else-if="isAnonymity" class="avatar" @click="toUrl('/login')">
          <img v-img="''" :type="3" style="object-fit: cover" />
        </div>
        <div v-else class="avatar" @click="showInfo">
          <img v-img="userInfo.headImg" :type="3" style="object-fit: cover" />
        </div>
        <div v-if="loginToken && !isAnonymity" class="wallet">
          <div class="cur">
            <template v-if="currentWallet.currencyLogo">
              <img :src="imgUrlFormat(currentWallet.currencyLogo)" style="object-fit: contain" />
            </template>
            <template v-else>
              <img v-if="currency === 'CNY'" :src="CNY" style="object-fit: contain" />
              <img v-else-if="currency === 'VNDK'" :src="VNDK" style="object-fit: contain" />
              <img v-else-if="currency === 'BRL'" :src="BRL" style="object-fit: contain" />
              <img v-else-if="currency === 'THB'" :src="THB" style="object-fit: contain" />
              <img v-else :src="USDTImg" style="object-fit: contain" />
            </template>
          </div>
          <span v-points="balance.balance"></span>
          <div class="transaction" @click="betShow">
            <img :src="transactionImg" />
          </div>
        </div>
        <div v-else class="wallet" @click="toUrl('/login')">{{ $t('user.logOn') }} / {{ $t('user.register') }}</div>
        <!-- @click="toUrl('/search')" -->
        <div class="right-area" @click="showSearchInfo">
          <img v-if="ifBLue" class="search" fit="contain" src="@/assets/images/user/blue/search.png" />
          <img v-else class="search" :src="searchImg" style="object-fit: contain" />
        </div>
      </div>
    </div>

    <sidebar-nav ref="childNav"></sidebar-nav>
    <!-- 搜索 -->
    <search-nav ref="searchNav"></search-nav>
  </div>
</template>
<script lang="ts" setup>
import { imgUrlFormat } from '@/utils/index'
import { getToken } from '@/utils/auth'
import router from '@/router'
import store from '@/store'
import searchImg from '@/assets/images/globalLayout/header/search.png'
import USDTImg from '@/assets/images/globalLayout/header/USDT.png'
import CNY from '@/assets/images/user/CNY.svg'
import VNDK from '@/assets/images/user/VNDK.svg'
// import BAXI from '@/assets/images/user/BAXI.svg'
import BRL from '@/assets/images/user/BRL.svg'
import THB from '@/assets/images/user/thb.svg'

import transactionImg from '@/assets/images/globalLayout/header/transaction.png'

// import { formatMoney } from '@/utils/index'
import { useRouter } from 'vue-router'
import { ref, computed, onMounted } from 'vue'

import SidebarNav from './sidebarNav.vue'
import SearchNav from './searchNav/index.vue'
const emit = defineEmits(['betShow'])
const userInfo = computed(() => store.state.user.userInfo)
const balance = computed(() => store.state.user.balance)
const currency = computed(() => store.state.user.currency)
const currentWallet = computed(() => store.state.user.currentWallet)
const theme = computed(() => store.state.app.theme)
const isAnonymity = computed(() => store.state.user.isAnonymity)
const matchLiveIndex = computed(() => store.state.app.matchLiveIndex)

const childNav = ref()
const searchNav = ref()

const ifBLue = computed(() => {
  if (theme.value === 'blue') {
    return true
  }
  return false
})

const loginToken = ref(getToken())
const $router = useRouter()
const toUrl = (url: string) => {
  store.dispatch('user/getLocationHeight', false)
  $router.push({ path: url })
}

const showInfo = () => {
  childNav.value.openNav()
}
const showSearchInfo = () => {
  store.dispatch('user/getIfSearchInfo', false)
  searchNav.value.openSearchNav()
}

const goBackClick = () => {
  store.dispatch('user/getLocationHeight', true)
  if (matchLiveIndex.value > 1) {
    router.go(-matchLiveIndex.value)
  } else {
    router.go(-1)
  }
  store.dispatch('app/setKeyValue', {
    key: 'matchLiveIndex',
    value: 0
  })
}

const betShow = () => {
  emit('betShow')
}

const refGlobalBarHeader = ref()
onMounted(() => {
  store.dispatch('app/setKeyValue', {
    key: 'globalBarHeaderHeight',
    value: refGlobalBarHeader?.value?.offsetHeight || 48
  })
})
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
    color: var(--color-global-textCl);
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--color-global-bg);

    .arrowLeft {
      width: 96px;
      height: 96px;
      position: absolute;
      left: 0;
      top: 0;
      display: flex;
      justify-content: center;
      align-items: center;

      .van-icon {
        font-size: 44px;
      }
    }

    &::before {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1px;
      box-shadow: var(--color-global-headBrBg);
    }
  }

  .wallet {
    height: 56px;
    line-height: 56px;
    min-width: 300px;
    display: inline-block;
    background: var(--color-global-showWalletbg);
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
      background: var(--color-global-transactionbg);
      right: 6px;
    }
  }

  .avatar {
    position: absolute;
    left: 40px;
    // top: 6px;
    top: 9px;
    bottom: 6px;
    width: 66px;
    height: 72px;
    border-radius: 50%;
    overflow: hidden;

    img {
      display: block;
      width: 66px;
      height: 72px;
    }
  }

  .right-area {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 40px;
    display: flex;
    align-items: center;

    .search {
      width: 40px;
      height: 40px;
      display: block;
    }
  }
}
</style>
