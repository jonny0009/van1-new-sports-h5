<template>
  <div class="noticeDetail">
    <van-nav-bar class="bg-title" :title="title">
      <template #left>
        <!-- <img class="img_1" src="@/assets/images/login/return@2x.png" alt="" @click="goBack()" /> -->
        <van-icon name="arrow-left" class="img_1" @click="goBack()" />
      </template>
    </van-nav-bar>
    <div class="content">
      <div class="top1">
        <span>{{ $t('user.account') }}</span>
        <span class="font2">{{ userInfo.nickName }}</span>
      </div>
      <div class="top1">
        <span>{{ $t('user.currency') }}</span>
        <span class="font2">{{ currency }}</span>
      </div>
      <div class="top1" @click="showPk(1)">
        <span>{{ $t('user.lang') }}</span>
        <div class="font3 cursor">
          <div class="font2 img-span">
            <img :src="getImg(lang?.key)" alt="" class="qizi">
            <span> {{ lang?.value }} </span>
          </div>
          <img class="arrow" src="@/assets/images/login/go@2x.png" />
        </div>
      </div>
      <div class="top1" @click="showPk(3)">
        <span>{{ $t('user.Handicap') }}</span>
        <div class="font3">
          <span class="font2">{{ plateMask?.value }}</span>
          <img class="arrow" src="@/assets/images/login/go@2x.png" />
        </div>
      </div>
    </div>
    <van-popup v-model:show="showBottom" position="bottom" :duration="0.2" closeable round>
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
            <img class="qizi" :src="getImg(item.key)" alt="">
            <span>
              {{ item.value }}
            </span>
          </p>
          <span v-if="commonKey.key === item.key">
            <van-icon name="success" />
          </span>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, reactive } from 'vue'
import { getBrowserLanguage } from '@/utils'
import { useRouter } from 'vue-router'
import localStore from '@/utils/localStore'
import store from '@/store'
import { useI18n } from 'vue-i18n'
import { ImageSource } from '@/config'

const language: any = localStore.getItem('language')
const lang = ref<any>(language || {})

const languageList = computed(() => {
  let LanguageB: any = []
  const LanguageA = store.state.app.queryCMerLanguage.accessLanguage || []
  const LanguageType = store.state.app.queryCMerLanguage.translate || {}
  LanguageA.map((item: any) => {
    item.value = LanguageType[item.key][item.key]
  })
  LanguageB = [...LanguageA]
  return LanguageB
})

const userInfo = computed(() => store.state.user.userInfo)
const currency = computed(() => store.state.user.currency)
const commonKey = reactive({ key: '' })
const showBottom = ref(false)
const popupTitle = ref('')
const popupIndex = ref(0)

const popupList = reactive<{ arr: any[] }>({ arr: [] })

const { t } = useI18n()
const title = ref(t('user.edit'))
const $router = useRouter()

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

onMounted(() => {
  store.dispatch('app/queryCMerLanguage')
  const obj = plateData.arr.find((item: any) => {
    if (item.key === plateMaskKey || '') {
      return item
    }
  })
  plateMask.value = obj || defaultPlate

  getLangs()
})

const goBack = () => {
  $router.back()
}
// 弹窗
function showPk(val?: any) {
  popupIndex.value = val
  popupList.arr = []
  if (val === 1) {
    popupList.arr = languageList.value || []
    commonKey.key = lang.value?.key || getBrowserLanguage()
    popupTitle.value = 'lang'
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
    localStorage.setItem('locale', val.key)
    localStore.setItem('language', val)
    window.location.reload()
  }

  if (popupIndex.value === 3) {
    plateMask.value = val
    store.dispatch('user/configSettingNew', { handicapType: val.key })
  }
  showBottom.value = false
}

// 默认选中以及获取设置语言
function getLangs() {
  if (!lang.value?.value) {
    const selectLang = localStorage.getItem('locale') || getBrowserLanguage()
    const obj = languageList.value.find((item:any) => item.key === selectLang)
    lang.value = obj
  }
}

const getImg = (val:any) => {
  const obj: any = {
    'zh-cn': 'cn',
    'en-us': 'en',
    'vi-vn': 'vn',
    'ko-kr': 'kr',
    'pt-pt': 'pt',
    'th-th': 'th',
    'ja-jp': 'jp',
    'es-es': 'es',
    'id-id': 'id',
    'zh-tw': 'hk',
    'zh-sg': 'sg',
    'hi-in': 'in',
    'tr-tr': 'tr'
  }
  const name = obj[val]
  const imgUrl = `/FE/common/langIcon/${name}.png`
  return `${ImageSource}${imgUrl}`
}
</script>

<style lang="scss" scoped>
.noticeDetail {
  .bg-title {
    background-color: var(--title-background-color-2);
    .img_1 {
      margin-top: -15px;
      width: 36px;
      height: 36px;
      color: var(--title-text-font-color);
    }
  }

  > .content {
    height: calc(100vh - 96px);
    background-color: var(--color-background-color);
    overflow-y: auto;
    padding: 42px 36px;

    .top1 {
      margin-bottom: 20px;
      width: 678px;
      height: 100px;
      padding: 30px 24px;
      background: var(--color-search-box-frame);
      border-radius: 20px;
      font-family: PingFangSC-Medium;
      font-size: 28px;
      color: var(--color-search-box-text-1);
      letter-spacing: 0;
      font-weight: 500;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .font2 {
        font-family: PingFangSC-Medium;
        font-size: 28px;
        color: var(--color-search-box-text-2);
        letter-spacing: 0;
        text-align: right;
        font-weight: 500;
        width: 300px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
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
    color: var(--color-search-box-text-1);
    letter-spacing: 0;
    font-weight: 600;
    margin: 24px 0 0 38px;
  }

  .pk-list {
    padding-top: 30px;
    max-height: 600px;
    overflow: auto;
    .item {
      font-size: 26px;
      color: var(--color-user-pop-up-text-color);
      letter-spacing: 1px;
      padding: 40px;
      border-bottom: 2px solid #eaeaea;
      display: flex;
      justify-content: space-between;
      p {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        img {
          display: inline-block;
          margin-right: 10px;
        }
      }
    }

    .item-color {
      color: var(--color-user-pop-up-text-color-2);
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
//弹窗关闭图标
:deep(.van-popup__close-icon) {
  color: var(--color-text-4);
}
</style>

<style scoped>
:deep(.van-nav-bar__content) {
  height: 96px;
}

:deep(.van-nav-bar__title) {
  height: 90px;
  line-height: 90px;
  font-family: PingFangSC-Medium;
  font-size: 28px;
  /* color: #FFFFFF; */
  letter-spacing: 0;
  text-align: center;
  font-weight: 500;
  color: var(--title-text-font-color);
}

:deep(.van-icon) {
  font-size: 48px;
}

.qizi {
  height: 40px;
}
.img-span {
  display: flex;
  justify-items: center;
  align-items: center;
  justify-content: flex-end;
}
.img-span > img {
  display: inline-block;
  margin-right: 5px;
}
</style>
