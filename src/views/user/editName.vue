<template>
  <div class="editName">
    <van-nav-bar class="bg-title" :title="title" :border="false">
      <template #left>
        <span @click="goBack()">取消</span>
      </template>
      <template #right>
        <span @click="handleSave()">保存</span>
      </template>
    </van-nav-bar>
    <div class="content">
      <van-field
        v-model="username"
        :class="[username ? 'bb' : '']"
        name=""
        label=""
        placeholder="输入昵称"
        maxlength="16"
        clearable
        :rules="[{ required: true, message: '请输入昵称' }]"
        @update:model-value="updateName"
      />

      <!--用户名规则  -->
      <p class=" edit-name">7天可以修改一次昵称，请认真修改哦!</p>
      <p class="userName">用户名必须:</p>
      <p class="explain">
        <img v-if="!ifStandard" class="noPitch" src="@/assets/images/login/noPitch.png" />
        <img v-else class="noPitch" src="@/assets/images/login/pitch.png" />
        <span>4个字符 (最多16个)</span>
      </p>
      <p class="explain">
        <img v-if="!ifSpecial" class="noPitch" src="@/assets/images/login/noPitch.png" />
        <img v-else class="noPitch" src="@/assets/images/login/pitch.png" />
        <span>1个字母和1个数字(不能包含特殊字符)</span>
      </p>
      <p class="explain">
        <img v-if="!ifSpace" class="noPitch" src="@/assets/images/login/noPitch.png" />
        <img v-else class="noPitch" src="@/assets/images/login/pitch.png" />
        <span>不能有空格</span>
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

const title = ref('编辑昵称')

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
    return showToast('请按规则修改')
  }
  const params = {
    nickName: username.value,
    lang: localStorage.getItem('locale')
  }
  const res: any = await updatePlayerInfo(params)
  if (res.code !== 200) {
    return showToast(res.msg)
  }
  showToast('编辑成功')
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
    color: #7642FD;
    letter-spacing: 0;
    font-weight: 600;

  }

  .content {
    padding: 56px 50px;

    .setPassWorld {
      font-family: PingFangSC-Semibold;
      font-size: 34px;
      color: #000000;
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
    color: #000000;
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
    color: #000000;
    letter-spacing: 0;
    font-weight: 400;
    margin-left: 15px;

    .noPitch {
      width: 23px;
      height: 23px;
      margin-right: 14px;
    }

  }

  .loginBtn {
    height: 80px;
    width: 650px;
    margin-top: 80px;
    border-radius: 80px;
    font-family: PingFangSC-Semibold;
    font-size: 28px;
    color: #1F2630;
    letter-spacing: 0;
    font-weight: 600;
    line-height: 80px;
    text-align: center;
    background: #DFE4E5;
  }

  .registerBtn {
    background: #7642FD;
    color: #FFFF;
  }

  .literal {
    margin-top: 40px;
    text-align: center;
    font-family: PingFangSC-Semibold;
    font-size: 24px;
    color: #000000;
    letter-spacing: 0;
    font-weight: 600;
  }

  .register {
    font-family: PingFangSC-Semibold;
    font-size: 24px;
    color: #7642FD;
    letter-spacing: 0;
    font-weight: 600;
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
  border-bottom: 8px solid #7642FD;
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
  color: #FFFFFF;
  letter-spacing: 0;
  text-align: center;
  font-weight: 500;
  color: black;
}
</style>
