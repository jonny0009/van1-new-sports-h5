<template>
  <div class="editImg">
    <van-nav-bar class="bg-title" :title="title" :border="false">
      <template #left>
        <span @click="goBack()">{{ $t('user.cancellation') }}</span>
      </template>
      <template #right>
        <span @click="handleSave()">{{ $t('user.save') }}</span>
      </template>
    </van-nav-bar>
    <div class="title">
      <img v-img="postImg" class="img_1" :type="3" style="object-fit: cover;" />
    </div>
    <!-- 切换栏 -->
    <div class="area-btn_1">
      <span :class="index === 1 ? 'active' : ''" @click="index = 1">{{ $t('user.football') }}</span>
      <span :class="index === 2 ? 'active' : ''" @click="index = 2">{{ $t('user.otherCharacters') }}</span>
      <!-- <span :class="index == 3 ? 'active' : ''" @click="index = 3">背景颜色</span> -->
    </div>
    <div class="editName-content">
      <div v-if="index === 1" class="img-style">
        <div v-for="i in 16" :key="i" class="select-img">
          <van-image class="img_1" fit="contain" :src="getImgUrl(i, 1)" @click="getSelectImg(i,1)" />
        </div>
      </div>
      <div v-if="index === 2" class="img-style">
        <div v-for="i in 16" :key="i" class="select-img">
          <van-image class="img_1" fit="contain" :src="getImgUrl(i, 2)" @click="getSelectImg(i,2)" />
        </div>
      </div>
      <div v-if="index === 3" class="img-style">
        <div v-for="i in 16" :key="i" class="select-img">
          <div class="img_2" :class="[`background-${i}`]" />
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue'
import {getBrowserLanguage } from '@/utils'

import { useRouter } from 'vue-router'
const $router = useRouter()
import { playerInfo, updatePlayerInfo } from '@/api/user'
import { ImageSource } from '@/config'

import { showToast } from 'vant'

import { useI18n } from 'vue-i18n'
const { t } = useI18n()

import store from '@/store'
const userInfo = computed(() => store.state.user.userInfo)

const index = ref(1)
const postImg = ref<any>('')

const title = ref(t('user.EditAvatar'))

const handleSave = async () => {
  const params = {
    headImg: postImg.value,
    nickName: userInfo.value.nickName,
    lang: localStorage.getItem('locale')|| getBrowserLanguage()
  }
  const res: any = await updatePlayerInfo(params)
  if (res.code !== 200) {
    return showToast(res.msg)
  }
  showToast(t('user.EditSuccessfully'))

  store.dispatch('user/userInfo')
  $router.push('/user/userInfo')
}
// 更换头像
const getSelectImg = (num: any, index: any) => {
  if (index === 1) {
    postImg.value = `/FE/common/head/newsport/star/${num}.png`
  }
  if (index === 2) {
    postImg.value = `/FE/common/head/newsport/else/${num}.png`
  }
}
const getImgUrl = (num: any, index: any) => {
  if (index === 1) {
    const imgUrl = `/FE/common/head/newsport/star/${num}.png`
    return `${ImageSource}${imgUrl}`
  }
  if (index === 2) {
    const imgUrl = `/FE/common/head/newsport/else/${num}.png`
    return `${ImageSource}${imgUrl}`
    // return new URL(`../../assets/images/user/else/${num}.png`, import.meta.url).href
  }
}
onMounted(() => {
  getAccountInfo()
})
const getAccountInfo = async () => {
  const params = {
    fPlayerId: userInfo.value.playerId
  }
  const res: any = await playerInfo(params)
  if (res.code !== 200) {
    return showToast(res.msg)
  }
  postImg.value = res.data.headImg || ''
}

const goBack = () => {
  $router.back()
}

</script>

<style lang="scss" scope>
.editImg {
  background: var(--color-background-color);
  .bg-title {
    width: 100%;
    height: 150px;
    // background: url('@/assets/images/login/bg-tit@2x.png');
    background-size: 100% 100%;
    font-family: PingFangSC-Semibold;
    color: var( --color-bg-1);
    letter-spacing: 0;
    font-weight: 600;
    background: var(--color-background-color);

  }

  .title {
    width: 210px;
    height: 232px;
    margin: 0 auto;
    background: var(--color-background-color);
    border-radius: 60%;

    .img_1 {
      width: 100%;
      height: 100%;
      border-radius: 60%;
    }
  }

  .area-btn_1 {
    margin-top: 69px;
    display: flex;
    justify-content: space-around;

    span {
      font-family: PingFangSC-Semibold;
      font-size: 28px;
      color: var(--color-search-box-text-2);
      letter-spacing: 0;
      font-weight: 600;
      text-align: center;
      display: inline-block;
      width: 268px;
      white-space: normal;
      word-break:break-all;
    }

    .active {
      color: var( --color-search-box-text-1);

      &::after {
        content: '';
        width: 100%;
        height: 7px;
        display: block;
        margin: 15px auto;
        border-bottom: 6px solid var( --color-search-box-text-1);
        border-radius: 7px;
      }
    }
  }

   > .editName-content {
    margin-top: -16px;
    padding: 40px 55px 0;
    height: calc(100vh - 512px);
    overflow-y: auto;
    // padding: 56px 50px;
    background: var(--van-result-box);

    .img-style {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
    }

    .select-img {
      width: 137px;
      height: 137px;
      background: var(--van-result-box);
      margin-right: 22px;
      margin-bottom: 36px;
      border-radius: 50%;
      overflow: hidden;

      .img_1 {
        width: 137px;
        height: 137px;
      }

      .img_2 {
        width: 137px;
        height: 137px;
        background-image: linear-gradient(180deg, #9419CC 0%, #5721AB 100%);
        border-radius: 50%;
      }
      .background-1 {
        background-image: linear-gradient(180deg, #9419CC 0%, #5721AB 100%);
      }
      .background-2 {
        background-image: linear-gradient(180deg, #48E0A0 0%, #36C891 100%);
      }
      .background-3 {
        background-image: linear-gradient(180deg, #FE6D74 0%, #FF3231 100%);
      }
      .background-4 {
        background-image: linear-gradient(180deg, #CEC8D6 0%, #BEABE5 100%);
      }
      .background-5 {
        background-image: linear-gradient(180deg, #699FFF 0%, #0B5CC5 100%);
      }
      .background-6 {
        background-image: linear-gradient(180deg, #D35928 0%, #F2A172 100%);
      }
      .background-7 {
        background-image: linear-gradient(180deg, #289C41 0%, #8FE175 100%);
      }
      .background-8 {
        background-image: linear-gradient(180deg, #AD3BCE 0%, #F976F0 100%);
      }
      .background-9 {
        background-image: linear-gradient(180deg, #5F94F2 0%, #C0EDEA 100%);
      }
      .background-10 {
        background-image: linear-gradient(180deg, #777777 0%, #D8D8D8 100%);
      }
      .background-11 {
        background-image: linear-gradient(180deg, #2D2D2D 0%, #5F5F5F 100%);
      }
      .background-12 {
        background: #DF2020;
      }
      .background-13 {
        background: #F96400;
      }
      .background-14 {
        background: #F7B501;
      }
      .background-15 {
        background: #6DD400;
      }
      .background-16 {
        background: #44D7B5;
      }

    }

  }

}
</style>

<style scoped>
:deep(.van-nav-bar__content) {
  height: 90px;
}

:deep(.van-icon) {
  font-size: 40px;
}

:deep(.van-nav-bar__left) {
  font-size: 26px;
}

:deep(.van-nav-bar__right) {
  font-size: 26px;
}

:deep(.van-nav-bar__title) {
  height: 90px;
  line-height: 90px;
  font-family: PingFangSC-Medium;
  font-size: 28px;
  letter-spacing: 0;
  text-align: center;
  font-weight: 500;
  color:var( --color-search-box-text-1);
}
</style>
