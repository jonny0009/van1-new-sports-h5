<template>
  <div class="noticeDetail">
    <van-nav-bar class="bg-title" :title="title">
      <template #left>
        <van-icon name="arrow-left" class="img_1" @click="goBack()" />
      </template>
    </van-nav-bar>
    <div class="content">
      <!-- <div class="top1">
        <span>{{ $t('user.userName') }}</span>
        <span class="font2">{{ '111' }}</span>
      </div> -->
      <div class="box">
        <SvgIcon name="user-telegram" class="icon-svg-1" />
        <div class="right">
          <p v-copy="info.account">Telegram</p>
          <p>Telegram</p>
          <p>Telegram</p>
          <p>Telegram</p>
        </div>
      </div>
      <div class="line-color" />
      <div class="box">
        <SvgIcon name="user-email" class="icon-svg-1" />
        <div class="right">
          <p>Email</p>
          <p>Telegram</p>
          <p>Telegram</p>
          <p>Telegram</p>
        </div>
      </div>
      <div class="line-color" />
      <div class="box">
        <SvgIcon name="user-skype" class="icon-svg-1" />
        <div class="right">
          <p>Skype</p>
          <p>
            <a href="mailto:xxx@gmail.com">Telegram</a>
          </p>
          <p>
            <a href="mailto:xxx@gmail.com">Telegram</a>
          </p>
          <p>
            <a href="mailto:xxx@gmail.com">Telegram</a>
          </p>

        </div>
      </div>
      <div class="line-color" />

    </div>

  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
const $router = useRouter()

import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const title = ref(t('user.contactUs'))
const info = ref<any>({
  account: '你好'
})

onMounted(() => { getInfo() })

const getInfo = () => {
  console.log('获取信息====')
}
const goBack = () => {
  $router.back()
}

// _blank  _self
// const toUrl = () => {
//   window.open('mailto:xxx@gmail.com', '_self')
// }

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

  >.content {
    height: calc(100vh - 96px);
    background-color: var(--color-background-color);
    overflow-y: auto;
    padding: 0px 46px;

    .box {
      padding: 50px 20px 30px 20px;
      display: flex;

      .icon-svg-1 {
        font-size: 48px;
        color: var(--color-bet-tabtext-2);

      }

      .right {
        margin-top: 5px;
        margin-left: 22px;
        font-size: 24px;
        color: var(--color-primary);

        p {
          margin-bottom: 16px;
        }
        p:first-child{
          font-size: 28px;
          color: var(--color-text-5);
          font-weight: 500;
        }
      }
    }

    .line-color {
      background: #E5ECF3;
      height: 2px;
    }

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
</style>
