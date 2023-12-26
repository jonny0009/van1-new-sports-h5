<template>
  <div class="noticeDetail">
    <van-nav-bar class="bg-title" :title="title">
      <template #left>
        <img class="img_1" src="@/assets/images/login/return@2x.png" alt="" @click="goBack()" />
      </template>
    </van-nav-bar>
    <div class="content">
      <div class="top1">
        <span>{{ $t('user.userName') }}</span>
        <span class="font2">{{ userInfo.nickName }}</span>
      </div>
      <div class="top1">
        <span>{{ $t('user.currency') }}</span>
        <span class="font2">{{ currency }}</span>
      </div>
      <div class="top1" @click="showPk(1)">
        <span>{{ $t('user.lang') }}</span>
        <div class="font3">
          <span class="font2">{{ lang.value || '简体中文' }}</span>
          <img class="arrow" src="@/assets/images/login/go@2x.png" />
        </div>
      </div>
      <div class="top1" @click="showPk(3)">
        <span>{{ $t('user.Handicap') }}</span>
        <div class="font3">
          <span class="font2">{{ plateMask.value }}</span>
          <img class="arrow" src="@/assets/images/login/go@2x.png" />
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
import { ref, computed, onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router'
// import { getCMerAccessWallet } from '@/api/user'
const $router = useRouter()
import localStore from '@/utils/localStore'
import store from '@/store'
// import { showToast } from 'vant'

const languages = computed(() => store.state.app.queryCMerLanguage.accessLanguage)

const languageType = computed(() => store.state.app.queryCMerLanguage.translate)

const language: any = localStore.getItem('language')
const lang = ref<any>(language || {})

const userInfo = computed(() => store.state.user.userInfo)
const currency = computed(() => store.state.user.currency)
// const balance = computed(() => store.state.user.balance)
const commonKey = reactive({ key: '' })
// const current = ref('')
const showBottom = ref(false)

const popupTitle = ref('')
const popupIndex = ref(0)

const popupList = reactive<{ arr: any[] }>({ arr: [] })

import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const title = ref(t('user.account'))

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
  store.dispatch('app/queryCMerLanguage')
  // getCurrent()
  const obj = plateData.arr.find((item: any) => {
    if (item.key === plateMask.value.key || '') {
      return item
    }
  })
  plateMask.value = obj
})
// const getCurrent = async () => {
//   const res: any = await getCMerAccessWallet({})
//   if (res.code === 200) {
//     current.value = res.data[0].currency
//   } else {
//     showToast(res.msg)
//   }
// }
const goBack = () => {
  $router.back()
}
// 弹窗
function showPk(val?: any) {
  popupIndex.value = val
  popupList.arr = []
  if (val === 1) {
    const languageObj = JSON.parse(JSON.stringify(languageType.value || '' as string))[lang.value.key]
    languages.value.map((e: any) => {
      if (languageObj[e.key]) {
        e.value = languageObj[e.key]
      }
    })
    popupList.arr = languages.value
    commonKey.key = lang.value.key
    popupTitle.value = 'area'
  }
  if (val === 3) {
    popupList.arr = plateData.arr
    commonKey.key = plateMask.value.key
    popupTitle.value = 'Handicap'
  }

  showBottom.value = true
}
// 设置
async function setPk(val: any) {
  if (popupIndex.value === 1) {
    lang.value = val
    const languageObj = JSON.parse(JSON.stringify(languageType.value || '' as string))[lang.value.key]
    lang.value.value = languageObj[lang.value.key]
    localStorage.setItem('locale', val.key)
    localStore.setItem('language', lang.value)
    window.location.reload()
  }

  if (popupIndex.value === 3) {
    localStore.setItem('plateMaskObj', val)
    plateMask.value = val
    store.dispatch('user/configSettingNew', { handicapType: val.key })
  }
  showBottom.value = false
}

</script>

<style lang="scss" scoped>
.noticeDetail {
  .bg-title {
    width: 100%;
    height: 150px;
    background: url('@/assets/images/login/bg-tit@2x.png');
    background-size: 100% 100%;

    .img_1 {
      width: 36px;
      height: 36px;
    }
  }

  >.content {
    height: calc(100vh - 150px);
    overflow-y: auto;
    padding: 42px 36px;

    .top1 {
      margin-bottom: 20px;
      width: 678px;
      height: 100px;
      padding: 30px 24px;
      background: #EFF1F2;
      border-radius: 20px;
      font-family: PingFangSC-Medium;
      font-size: 28px;
      color: #1F2630;
      letter-spacing: 0;
      font-weight: 500;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .font2 {
        font-family: PingFangSC-Medium;
        font-size: 28px;
        color: #96A5AA;
        letter-spacing: 0;
        text-align: right;
        font-weight: 500;
      }

      .font3 {
        display: flex;
        align-items: center;

        .arrow {
          margin-left: 10px;
          height: 26px;
          width: 26px;
        }
      }
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

}

:deep(.van-field__control) {
  height: 50px;
  font-size: 30px;
}

:deep(.van-icon) {
  font-size: 40px;
}
</style>

<style scoped>
:deep(.van-nav-bar__content) {
  height: 150px;
}

:deep(.van-nav-bar__title) {
  height: 90px;
  line-height: 90px;
  font-family: PingFangSC-Medium;
  font-size: 28px;
  color: #FFFFFF;
  letter-spacing: 0;
  text-align: center;
  font-weight: 500;
}

:deep(.van-icon) {
  font-size: 48px;
}
</style>
