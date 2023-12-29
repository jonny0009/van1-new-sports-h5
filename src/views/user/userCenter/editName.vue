<template>
  <div class="editName">
    <van-nav-bar class="bg-title" :title="title" :border="false">
      <template #left>
        <span @click="goBack()">{{ $t('user.cancellation') }}</span>
      </template>
      <template #right>
        <span @click="handleSave()">{{ $t('user.save') }}</span>
      </template>
    </van-nav-bar>
    <div class="content">
      <van-field
        v-model="username"
        :class="[username ? 'bb' : '']"
        name=""
        label=""
        :placeholder="$t('user.nickname')"
        maxlength="16"
        clearable
        :rules="[{ required: true, message: $t('user.nickname') }]"
        @update:model-value="updateName"
      />

      <!--用户名规则  -->
      <p class=" edit-name">{{ $t('user.font7') }}</p>
      <p class="userName">{{ $t('user.text3') }}:</p>
      <p class="explain">
        <img v-if="!ifStandard" class="noPitch" src="@/assets/images/login/noPitch.png" />
        <img v-else class="noPitch" src="@/assets/images/login/pitch.png" />
        <span>{{ $t('user.font5') }}</span>
      </p>
      <p class="explain">
        <img v-if="!ifSpecial" class="noPitch" src="@/assets/images/login/noPitch.png" />
        <img v-else class="noPitch" src="@/assets/images/login/pitch.png" />
        <span>{{ $t('user.font6') }}</span>
      </p>
      <p class="explain">
        <img v-if="!ifSpace" class="noPitch" src="@/assets/images/login/noPitch.png" />
        <img v-else class="noPitch" src="@/assets/images/login/pitch.png" />
        <span>{{ $t('user.text6') }}</span>
      </p>
    </div>

  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue'
import { playerInfo, updatePlayerInfo } from '@/api/user'
import { useRouter } from 'vue-router'
import store from '@/store'
const userInfo = computed(() => store.state.user.userInfo)
const $router = useRouter()
const username = ref<String>('')
const ifSpace = ref<Boolean>(false)
const ifSpecial = ref<Boolean>(false)
const ifStandard = ref<Boolean>(false)
import { showToast } from 'vant'

import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const title = ref(t('user.EditNickname'))

const updateName = (str: string) => {
  if (!str) {
    ifSpace.value = false
    ifSpecial.value = false
    ifStandard.value = false
    return
  }
  if (str.indexOf(' ') !== -1) {
    ifSpace.value = false
  } else {
    ifSpace.value = true
  }
  const regex = /^[a-zA-Z0-9]{4,16}$/
  // const regex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{4,16}$/
  if (regex.test(str)) {
    ifStandard.value = true
  } else {
    ifStandard.value = false
  }
  if (str.indexOf('admin') > 0 || str.indexOf('test') > 0) {
    ifSpecial.value = false
  } else {
    const regex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{2,16}$/
    if (regex.test(str)) {
      ifSpecial.value = true
    } else {
      ifSpecial.value = false
    }
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
  username.value = res.data.nickName
  updateName(res.data.nickName)
}
const handleSave = async () => {
  if (!ifStandard.value || !ifStandard.value || !ifStandard.value) {
    return showToast(t('user.text11'))
  }
  const params = {
    nickName: username.value,
    lang: localStorage.getItem('locale')
  }
  const res: any = await updatePlayerInfo(params)
  if (res.code !== 200) {
    return showToast(res.msg)
  }
  showToast(t('user.EditSuccessfully'))

  store.dispatch('user/userInfo')
  $router.push('/user/userInfo')
}

const goBack = () => {
  $router.back()
}

</script>

<style lang="scss" scope>
.editName {

  .bg-title {
    width: 100%;
    height: 150px;
    // background: url('@/assets/images/login/bg-tit@2x.png');
    background-size: 100% 100%;
    font-family: PingFangSC-Semibold;
    color: var(--color-bg-1);
    letter-spacing: 0;
    font-weight: 600;
    background-color: var(--color-background-color);

  }

  >.content {
    padding: 56px 50px;
    height: 88.8vh;
    background-color: var(--color-background-color);

    .setPassWorld {
      font-family: PingFangSC-Semibold;
      font-size: 34px;
      color: var(--color-search-box-text-1);
      letter-spacing: 0;
      font-weight: 600;
      margin-left: 10px;
      margin-bottom: 29px;
    }
  }

  .userName {
    margin-top: 12px;
    font-family: PingFangSC-Semibold;
    font-size: 24px;
    color: var(--color-search-box-text-1);
    letter-spacing: 0;
    font-weight: 600;
    margin-left: 15px;
  }
  .edit-name{
    color: #8a979c;
    font-weight: normal;
    font-size: 24px;
    // color: red;
    margin-left: 15px;
    margin-top: 7px;
  }

  .explain {
    margin-top: 12px;
    display: flex;
    align-items: center;
    font-family: PingFangSC-Regular;
    font-size: 24px;
    color: var(--color-search-box-text-1);
    letter-spacing: 0;
    font-weight: 400;
    margin-left: 15px;

    .noPitch {
      width: 23px;
      height: 23px;
      margin-right: 14px;
    }

  }

  .van-cel {
    margin-top: 30px;

    &::after {
      // border-bottom: 1px solid #97a6ab;
    }
  }
}
</style>

<style scoped>
:deep(.van-nav-bar__content) {
  height: 90px;
}

:deep(input::placeholder) {
  font-family: PingFangSC-Semibold;
  font-size: 24px;
  color: #97a6ab;
  letter-spacing: 0;
  font-weight: 600;
}

:deep(.bb.van-cell::after) {
  border-bottom: 8px solid var(--color-bg-1);
}

:deep(.van-cell::after) {
  border-bottom: 2px solid #97a6ab;
}

:deep(.van-cel::after) {
  border-bottom: 2px solid #97a6ab !important;
}

:deep(.van-field__control) {
  height: 50px;
  font-size: 30px;
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
