<template>
  <div class="editUser">
    <van-nav-bar class="bg-title" :title="title" :border="false">
      <template #left>
        <span @click="goBack()">{{ $t('user.cancellation') }}</span>
      </template>
      <template #right>
        <span @click="handleSave()">{{ $t('user.save') }}</span>
      </template>
    </van-nav-bar>
    <div class="content">
      <div class="head">
        <img class="img_1" :src="getImg(peopleInfo.headImg)" alt="" />
        <div class="edit" @click="goUrl('/editImg')">{{ $t('user.editText') }}</div>
      </div>
      <div class="edit-name">
        <span>{{ $t('user.EditNickname') }}</span>
        <img class="img_1" src="@/assets/images/user/edit1.png" alt="" @click="goUrl('/editName')" />
      </div>
      <!-- 内容框 -->
      <p class="explain">{{ $t('user.Personal') }}</p>
      <div class="explain-box">
        <van-field v-model="remark" rows="10" autosize type="textarea" maxlength="50" show-word-limit />
      </div>
      <p class="explain privacy">{{ $t('user.PrivacySettings') }}</p>

      <!-- 账户 -->
      <div class="account-1">
        <div class="top-1">
          <img v-if="privacy === 0&&ifBLue" class="img_1" src="@/assets/images/user/blue/pitch.png" alt="" />
          <img v-else-if="privacy === 0&&!ifBLue" class="img_1" src="@/assets/images/user/pitch.png" alt="" />
          <div v-else class="round" @click="handlePrivacy(0)"></div>
          {{ $t('user.PublicAccount') }}
        </div>
        <div class="top-2">
          {{ $t('user.font2') }}
        </div>
      </div>
      <div class="account-1">
        <div class="top-1">
          <img v-if="privacy === 1&&ifBLue" class="img_1" src="@/assets/images/user/blue/pitch.png" alt="" />
          <img v-else-if="privacy === 1&&!ifBLue" class="img_1" src="@/assets/images/user/pitch.png" alt="" />
          <div v-else class="round" @click="handlePrivacy(1)"></div>
          {{ $t('user.PrivateAccount') }}
        </div>
        <div class="top-2">
          {{ $t('user.font3') }}
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { playerInfo, updatePlayerInfo, setPrivacy } from '@/api/user'
import { showToast } from 'vant'
import avatarImg from '@/assets/images/globalLayout/header/avatar.png'
import store from '@/store'
import { ImageSource } from '@/config'
const userInfo = computed(() => store.state.user.userInfo)
const theme = computed(() => store.state.app.theme)

const $router = useRouter()
const remark = ref('')
const privacy = ref(0)
const peopleInfo = ref<any>({})

const ifBLue = computed(() => {
  if (theme.value === 'blue') {
    return true
  }
  return false
})

import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const title = ref(t('user.EditProfile'))

// const dataList = reactive([])
const goBack = () => {
  $router.push('/user/userInfo')
}
const goUrl = (url: string) => {
  $router.push('/user' + url)
}
const handleSave = async () => {
  // $router.push('/user/userInfo')
  const params = {
    nickName: userInfo.value.nickName,
    headImg: '',
    profiles: remark.value
  }
  const res: any = await updatePlayerInfo(params)
  if (res.code !== 200) {
    return showToast(res.msg)
  }
  showToast(t('user.EditSuccessfully'))
  store.dispatch('user/userInfo')
  $router.push('/user/userInfo')
}
const handlePrivacy = async (num :any) => {
  if (privacy.value === num) return
  privacy.value = num
  const params = {
    privacy: privacy.value
  }
  const res: any = await setPrivacy(params)
  if (res.code !== 200) {
    return showToast(res.msg)
  }
  showToast(t('user.EditSuccessfully'))
}
const getImg = (imgUrl: string) => {
  if (imgUrl) {
    return `${ImageSource}${imgUrl}`
  }
  return avatarImg
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
  remark.value = res.data.profiles
  privacy.value = res.data.privacy
  peopleInfo.value = res.data
}

</script>

<style lang="scss" scoped>
.editUser {
  .bg-title {
    width: 100%;
    height: 150px;
    font-family: PingFangSC-Semibold;
    color: var( --color-bg-1);
    letter-spacing: 0;
    font-weight: 600;
    background-color: var(--color-background-color);

  }

  >.content {
    height: calc(100vh - 150px);
    padding: 0px 40px;
    background-color: var(--color-background-color);

    .head {
      // width: 106px;
      width: 126px;
      height: 126px;
      background-color: var(--color-background-color);
      border-radius: 106px;
      margin: 0 auto;
      overflow: hidden;
      position: relative;
      z-index: 100;

      .img_1 {
        width: 100%;
        height: 100%;
      }

      .edit {
        position: absolute;
        bottom: 2px;
        width: 126px;
        height: 32px;
        background-color: rgba(0, 0, 0, 0.5);
        text-align: center;
        color: #fff;
        font-family: PingFangSC-Semibold;
        font-size: 20px;
        color: #FFFFFF;
        letter-spacing: 0;
        text-align: center;
        font-weight: 600;
      }
    }

    .edit-name {
      margin-top: 22px;
      font-family: PingFangSC-Semibold;
      font-size: 26px;
      color: var(--color-search-box-text-1);
      letter-spacing: 0;
      text-align: center;
      font-weight: 600;
      display: flex;
      align-items: center;
      justify-content: center;

      .img_1 {
        width: 23px;
        height: 23px;
        margin-left: 7px;
      }
    }

    .explain {
      margin-top: 15px;
      font-family: PingFangSC-Semibold;
      font-size: 22px;
      color: var(--color-search-box-text-2);
      letter-spacing: 0;
      font-weight: 600;
      margin-bottom: 18px;
    }

    .privacy {
      margin-top: 30px;
    }

    .account-1 {
      margin-top: 11px;
      border: 2px solid var( --color-user-edit-info-color) ;
      border-radius: 20px;
      padding: 20px 40px;
      margin-bottom: 20px;

      .top-1 {
        font-family: PingFangSC-Semibold;
        font-size: 26px;
        color: var(--color-search-box-text-1);
        letter-spacing: 0;
        font-weight: 600;
        display: flex;
        align-items: center;

        .img_1 {
          height: 38px;
          width: 38px;
          margin-right: 9px;
        }

        .round {
          height: 38px;
          width: 38px;
          margin-right: 9px;
          border: 2px solid rgba(150, 165, 170, 1);
          border-radius: 50%;
        }
      }

      .top-2 {
        margin-top: 15px;
        font-family: PingFangSC-Semibold;
        font-size: 23px;
        color: var(--color-search-box-text-2);
        letter-spacing: 0;
        line-height: 29px;
        font-weight: 600;
      }
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
  color: var(--color-search-box-text-1);
}

:deep(.van-icon) {
  font-size: 48px;
}

:deep(.van-field__word-limit) {
  margin-top: -30px;
  font-size: 22px;
  margin-right: 20px;
  color: var(--color-search-box-text-2);
}

:deep(.van-field__control) {
  background: var(--color-search-box-frame);
  border-radius: 20px;
  /* width: 666px; */
  height: 150px;
  padding: 30px;
}
</style>
