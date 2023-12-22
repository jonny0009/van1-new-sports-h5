<template>
  <div class="editUser">
    <van-nav-bar class="bg-title" :title="title" :border="false">
      <template #left>
        <span @click="goBack()">取消</span>
      </template>
      <template #right>
        <span @click="handleSave()">保存</span>
      </template>
    </van-nav-bar>
    <div class="content">
      <div class="head">
        <img class="img_1" src="@/assets/images/user/head-img.png" alt="" />
        <div class="edit" @click="goUrl('/editImg')">编辑</div>
      </div>
      <div class="edit-name">
        <span>编辑昵称</span>
        <img class="img_1" src="@/assets/images/user/edit.png" alt="" @click="goUrl('/editName')" />
      </div>
      <!-- 内容框 -->
      <p class="explain">个人简介</p>
      <div class="explain-box">
        <van-field v-model="remark" rows="10" autosize type="textarea" maxlength="256" show-word-limit />
      </div>
      <p class="explain privacy">隐私设置</p>

      <!-- 账户 -->
      <div class="account-1">
        <div class="top-1">
          <img v-if="privacy === 1" class="img_1" src="@/assets/images/user/pitch.png" alt="" />
          <div v-else class="round" @click="privacy = 1"></div>
          公开帐户（推荐）
        </div>
        <div class="top-2">
          其他用户可以直接关注你，查看你的档案和注单。你还是可以隐藏具体的注单。这是默认设置。
        </div>
      </div>
      <div class="account-1">
        <div class="top-1">
          <img v-if="privacy === 2" class="img_1" src="@/assets/images/user/pitch.png" alt="" />
          <div v-else class="round" @click="privacy = 2"></div>
          私密帐户
        </div>
        <div class="top-2">
          其他用户只有在你接受他们的关注请求时才能看到你的档案和注单。你在平台的体验会比较私密。
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const $router = useRouter()
const remark = ref('')
const privacy = ref(1)
// const dataList = reactive([])
const goBack = () => {
  $router.push('/user/userInfo')
}
const goUrl = (url:string) => {
  $router.push('/user' + url)
}
const handleSave = () => {
  // $router.push('/user/userInfo')
}
const title = ref('编辑档案')

</script>

<style lang="scss" scoped>
:root {
  --van-field-word-limit-font-size: 30px;
  --van-toast-text-padding: 20px 30px;
  --van-toast-font-size: 28px;
}

.editUser {
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
    height: calc(100vh - 150px);
    padding: 0px 40px;

    .head {
      width: 106px;
      height: 126px;
      background-color: #FFFFFF;
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
        width: 106px;
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
      color: #1F2630;
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
      color: #96A5AA;
      letter-spacing: 0;
      font-weight: 600;
      margin-bottom: 18px;
    }

    .privacy {
      margin-top: 30px;
    }

    .account-1 {
      margin-top: 11px;
      border: 2px solid rgba(239, 241, 242, 1);
      border-radius: 20px;
      padding: 20px 40px;
      margin-bottom: 20px;

      .top-1 {
        font-family: PingFangSC-Semibold;
        font-size: 26px;
        color: #1F2630;
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
        color: #96A5AA;
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
  color: #FFFFFF;
  letter-spacing: 0;
  text-align: center;
  font-weight: 500;
  color: black;
}

:deep(.van-icon) {
  font-size: 48px;
}

:deep(.van-field__word-limit) {
  margin-top: -30px;
  font-size: 22px;
  margin-right: 20px;
  color: #96A5AA;
}

:deep(.van-field__control) {
  background: #EFF1F2;
  border-radius: 20px;
  /* width: 666px; */
  height: 276px;
  padding: 30px;
}
</style>
