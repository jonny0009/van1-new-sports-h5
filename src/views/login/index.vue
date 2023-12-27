<template>
  <div class="login-page">
    <van-nav-bar class="bg-title">
      <template #left>
        <img class="img_1" src="@/assets/images/login/return@2x.png" alt="" @click="goBack()" />
      </template>
      <template #title>
        <img class="img_2" src="@/assets/images/login/ai-logo@2x.png" alt="" />
      </template>
      <template #right>
        <img class="img_3" src="@/assets/images/login/service@2x.png" alt="" />
      </template>
    </van-nav-bar>
    <div class="content">
      <p class="title">{{ $t('user.WelcomeToAI') }}</p>
      <span class="desc">{{ $t('user.text1') }}</span>
      <div class="area-btn">
        <span @click="register">{{ $t('user.register') }}</span>
        <span @click="login">{{ $t('user.logOn') }}</span>
      </div>
      <div class="ban">
        <img class="ban_1" src="@/assets/images/login/login.png" alt="" />
      </div>

      <div class="list-set">
        <div class="item" @click="showPk(3)">
          <div class="label-info flex align-center">
            <div class="icon"><img src="@/assets/images/login/pankou@2x.png" /></div>
            <div class="label">{{ $t('user.Handicap') }}</div>
          </div>
          <div class="label-right">
            <div class="label">{{ plateMask.value }}</div>
            <img class="arrow" src="@/assets/images/login/go@2x.png" />
          </div>
        </div>
      </div>
    </div>
    <van-popup v-model:show="showBottom" position="bottom" closeable round>
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
import { ref, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import store from '@/store'
import localStore from '@/utils/localStore'
// import { getPlateMask } from '@/api/user'

const $router = useRouter()
const popupTitle = ref('')
const commonKey = reactive({ key: '' })
const popupIndex = ref(0)
const popupList = reactive<{ arr: any[] }>({ arr: [] })

const showBottom = ref(false)

import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const plateMaskObj: any = localStore.getItem('plateMaskObj')
const plateMask = ref<any>((plateMaskObj || {}))

const plateData = reactive<{ arr: any[] }>({
  arr: [
    {
      value: t('user.Europe'),
      key: 'E'
    },
    {
      value: t('user.hk'),
      key: 'H'
    }

  ]
})

onMounted(() => {
  const obj = plateData.arr.find((item: any) => {
    if (item.key === plateMask.value.key || '') {
      return item
    }
  })
  plateMask.value = obj
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
    localStore.setItem('plateMaskObj', val)
    plateMask.value = val
    store.dispatch('user/configSettingNew', { handicapType: val.key })
  }
  showBottom.value = false
}

const goBack = () => {
  $router.back()
}
const register = () => {
  $router.push({ path: '/register' })
}
const login = () => {
  $router.push({ path: '/sign_in' })
}

</script>

<style lang="scss" scope>
.bg-title {
  width: 100%;
  height: 150px;
  background: url('@/assets/images/login/bg-tit@2x.png');
  background-size: 100% 100%;

  .img_1 {
    width: 36px;
    height: 36px;
  }

  .img_2 {
    width: 77px;
    height: 63px;
  }

  .img_3 {
    width: 34px;
    height: 37px;
  }
}

.content {
  background: #ffffff;
  border-radius: 16px 16px 0px 0px;
  padding: 0 45px;

  .title {
    font-family: PingFangSC-Semibold;
    font-size: 40px;
    color: #000;
    letter-spacing: 0;
    font-weight: 600;
    padding-top: 22.5px;
  }

  .desc {
    display: block;
    font-family: PingFangSC-Semibold;
    font-size: 24px;
    color: #97a6ab;
    letter-spacing: 0;
    font-weight: 600;
  }

  .area-btn {
    margin-top: 20px;

    span {
      display: inline-block;
      background-image: linear-gradient(to right, #623AF8, #4121AF);
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

          >img {
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

          color: #96a5aa;
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
  color: #1F2630;
  letter-spacing: 0;
  font-weight: 600;
  margin: 24px 0 0 38px;
}

.pk-list {
  padding-top: 30px;

  .item {
    font-size: 26px;
    color: #1F2630;
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
    color: #7642FD;
  }
}
</style>

<style scoped>
:deep(.van-nav-bar__content) {
  height: 150px;
}

:deep(.van-icon) {
  font-size: 48px;
}
</style>
