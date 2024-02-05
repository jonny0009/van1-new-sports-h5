<template>
  <div class="login-page">
    <van-nav-bar class="bg-title" :class="[changeImg ? 'theme' : '']" :border="false" @click-right="onClickRight">
      <template #left>
        <van-icon
          name="arrow-left"
          class="img_1"
          @click="goBack()"
        />
      </template>
      <template #title>
        <img v-if="ifBLue" class="img_2" src="@/assets/images/user/blue/logo1.png" alt="" />
        <img v-else class="img_2" src="@/assets/images/user/logo1.png" alt="" />
      </template>
      <template #right>

        <template v-if="config.loginBanner">
          <img
            :src="config.loginBanner "
            alt=""
          >
        </template>
        <template v-else>
          <img
            v-if="ifBLue"
            class="img_3"
            src="@/assets/images/user/blue/sever.png"
            alt=""
          />
          <img
            v-else
            class="img_3"
            src="@/assets/images/login/service@2x.png"
            alt=""
          />
        </template>

      </template>
    </van-nav-bar>
    <!-- 头部=== -->
    <div class="head-height" />
    <div class="content">
      <p class="title">{{ $t('user.WelcomeToAI') }}</p>
      <span class="desc">{{ $t('user.text1') }}</span>
      <div class="area-btn">
        <span @click="register">{{ $t('user.register') }}</span>
        <span @click="login">{{ $t('user.logOn') }}</span>
      </div>
      <div class="ban">
        <img
          v-if="ifBLue"
          class="ban_1"
          src="@/assets/images/user/blue/login_bg.png"
          alt=""
        />
        <img
          v-else
          class="ban_1"
          src="@/assets/images/login/login.png"
          alt=""
        />
      </div>

      <div class="list-set">
        <div
          class="item"
          @click="showPk(3)"
        >
          <div class="label-info flex align-center">
            <div class="icon"><img src="@/assets/images/login/pankou@2x.png" /></div>
            <div class="label">{{ $t('user.Handicap') }}</div>
          </div>
          <div class="label-right">
            <div class="label">{{ plateMask?.value }}</div>
            <img
              class="arrow"
              src="@/assets/images/login/go@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
    <van-popup
      v-model:show="showBottom"
      :duration="0.2"
      position="bottom"
      closeable
      round
    >
      <div class="popup-title">{{ $t(`user.${popupTitle}`) }}</div>
      <div class="pk-list">
        <div
          v-for="(item, index) in popupList.arr"
          :key="index"
          class="item"
          :class="[commonKey.key === item.key ? 'item-color' : '']"
          @click="setPk(item)"
        >
          <p>
            <span>
              {{ item.value }}
            </span>
            <span v-if="commonKey.key === item.key">
              <van-icon name="success" />
            </span>
          </p>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
// import store from '@/store'
import localStore from '@/utils/localStore'
// import { getPlateMask } from '@/api/user'
// import { getToken } from '@/utils/auth'
import store from '@/store'

const $router = useRouter()
const popupTitle = ref('')
const changeImg = ref(true)
const commonKey = reactive({ key: '' })
const popupIndex = ref(0)
const popupList = reactive<{ arr: any[] }>({ arr: [] })
const theme = computed(() => store.state.app.theme)
const config = computed(() => store.state.app.customizeConfig)

const showBottom = ref(false)

import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const ifBLue = computed(() => {
  if (theme.value === 'blue') {
    return true
  }
  return false
})

const plateMaskKey: any = localStore.getItem('plateMaskKey') || ''
const plateMask = ref<any>({})

const plateData = reactive<{ arr: any[] }>({
  arr: [
    {
      value: t('user.hk'),
      key: 'H'
    },
    {
      value: t('user.Europe'),
      key: 'E'
    },
    {
      value: t('user.IDOdd'),
      key: 'I'
    },
    {
      value: t('user.MYOdd'),
      key: 'M'
    }
  ]
})
const defaultPlate = {
  value: t('user.hk'),
  key: 'H'
}

const onClickRight = () => {
  $router.push({
    name: 'ContactUs'
  })
  console.log('onClickRight')
}

onMounted(() => {
  const obj = plateData.arr.find((item: any) => {
    if (item.key === plateMaskKey || '') {
      return item
    }
  })
  plateMask.value = obj || defaultPlate
})

// 弹窗
function showPk(val?: any) {
  popupIndex.value = val
  popupList.arr = []
  if (val === 3) {
    popupList.arr = plateData.arr
    commonKey.key = plateMask.value.key
    popupTitle.value = 'Handicap'
  }

  showBottom.value = true
}
// 设置
async function setPk(val: any) {
  if (popupIndex.value === 3) {
    localStore.setItem('plateMaskKey', val.key)
    plateMask.value = val
    // if (getToken()) {
    //   store.dispatch('user/configSettingNew', { handicapType: val.key })
    // }
  }
  showBottom.value = false
}

const goBack = () => {
  $router.back()
}
const register = () => {
  // $router.push({ path: '/register' })
  console.log('注册本版本支持==')
}
const login = () => {
  $router.push({ path: '/sign_in' })
}
</script>

<style lang="scss" scope>
.login-page {
  .bg-title {
    width: 100%;
    height: 80px;
    background-color: var(--title-background-color-2);
    background-size: 100% 100%;

    .img_1 {
      margin-top: -10px;
      // margin-top: 50px;
      width: 36px;
      height: 36px;
      color: var(--title-text-font-color);
    }

    .img_2 {
      margin-top: 55px;
      margin-top: 15px;
      // width: 77px;
      height: 63px;
      color: var(--title-text-font-color);
    }

    .img_3 {
      // margin-top: 55px;
      width: 34px;
      height: 37px;
      color: var(--title-text-font-color);
    }
  }

  // .theme{
  //   background: url('@/assets/images/globalLayout/header/avatar.png');
  // }
  .head-height {
    height: 16px;
    background-color: var(--title-background-color-2);
    border-bottom: 1px solid var(--color-global-headBrBg);
  }

  .content {
    // margin-top:-26px ;
    margin-top: 0px;
    height: calc(100vh - 150px);
    background: var(--color-background-color);
    border-radius: 16px 16px 0px 0px;
    padding: 0 45px;

    .title {
      font-family: PingFangSC-Semibold;
      font-size: 40px;
      color: var(--color-search-box-text-1);
      letter-spacing: 0;
      font-weight: 600;
      padding-top: 22.5px;
    }

    .desc {
      display: block;
      font-family: PingFangSC-Semibold;
      font-size: 24px;
      color: var(--color-search-box-text-2);
      letter-spacing: 0;
      font-weight: 600;
    }

    .area-btn {
      margin-top: 20px;

      span {
        display: inline-block;
        background-image: linear-gradient(
          to right,
          var(--color-login-button-color-1),
          var(--color-login-button-color-2)
        );
        text-align: center;
        font-size: 28px;
        font-weight: 500;
        font-family: PingFangSC-Semibold;
        height: 80px;
        line-height: 80px;
        width: 320px;
        border-radius: 80px;

        &:first-child {
          background: #e5ecf3;
          color: #000;
        }

        &:last-child {
          color: #ffff;
          margin-left: 20px;
        }
      }
    }

    .ban {
      margin-top: 35px;

      img {
        width: 100%;
        height: 274px;
      }
    }

    .list-set {
      padding-top: 73px;

      .item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 73px;

        &:not(:last-child) {
          margin-bottom: 15px;
        }

        .label-info {
          font-size: 27px;

          .icon {
            width: 36px;
            height: 36px;
            margin-right: 23px;

            > img {
              display: block;
              width: 100%;
              height: 100%;
            }
          }
        }

        .label-right {
          display: flex;
          align-items: center;

          .label {
            font-family: PingFangSC-Regular;
            font-size: 27px;

            color: var(--color-search-box-text-2);
            letter-spacing: 1px;
            text-align: right;
            font-weight: 400;
          }

          .arrow {
            margin-left: 8px;
            width: 25px;
            height: 25px;
          }
        }
      }
    }
  }

  .flex {
    display: flex;

    &.align-center {
      align-items: center;
    }
  }

  .popup-title {
    font-family: PingFangSC-Semibold;
    font-size: 32px;
    color: var(--color-search-box-text-1);
    letter-spacing: 0;
    font-weight: 600;
    margin: 24px 0 0 38px;
  }

  .pk-list {
    padding-top: 30px;

    .item {
      font-size: 26px;
      color: var(--color-user-pop-up-text-color);
      letter-spacing: 1px;
      padding: 40px;
      border-bottom: 2px solid #eaeaea;

      p {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }

    .item-color {
      color: var(--color-user-pop-up-text-color-2);
    }
  }
}
</style>

<style scoped>
:deep(.van-nav-bar__content) {
  height: 96px;
}

:deep(.van-icon) {
  font-size: 48px;
}

/* //弹窗关闭图标 */
:deep(.van-popup__close-icon) {
  color: var(--color-text-4);
}
</style>
