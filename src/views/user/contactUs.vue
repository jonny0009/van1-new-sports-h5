<template>
  <div class="noticeDetail">
    <van-nav-bar class="bg-title" :title="title">
      <template #left>
        <van-icon name="arrow-left" class="img_1" @click="goBack()" />
      </template>
    </van-nav-bar>
    <div class="content" v-if="contactInfoArr.length">
      <div v-for="(item, index) in contactInfoArr" :key="index">
        <div class="box">
          <img v-img="item.icon" class="img_2" alt="" :type="1">
          <div class="right">
            <p>{{ item.type }}</p>
            <p>
              <span v-if="item.url" @click="toUrl(item.url, 1)">
                {{ item.contactInfo }}
              </span>
              <span v-else v-copy="item.contactInfo" class="noUrl">
                {{ item.contactInfo }}
              </span>
            </p>
          </div>
        </div>
        <div class="line-color" v-if="contactType1.length" />
      </div>
    </div>
    <div v-if="!contactInfoArr.length" class="noData">
      <img class="img_1" src="@/assets/images/user/noData.png" />
      <p>
        {{ $t('user.noData') }}
      </p>
    </div>

  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
const $router = useRouter()
import { contact } from '@/api/user'
import { showToast } from 'vant'



import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const title = ref(t('user.contactUs'))

onMounted(() => { getInfo() })


const contactInfoArr = ref<any>([])
const contactType1 = ref<any>([])
const contactType2 = ref<any>([])
const contactType3 = ref<any>([])

const getInfo = async () => {
  const res: any = await contact({})
  if (res.code !== 200) {
    return showToast(res.msg)
  }
  contactType1.value = res.data.filter((item: any) => {
    return item.type === '1'
  })
  contactType2.value = res.data.filter((item: any) => {
    return item.type === '2'
  })
  contactType3.value = res.data.filter((item: any) => {
    return item.type === '3'
  })
  contactInfoArr.value = res.data.filter((item: any) => {
    return item.state === 1
  })

  // console.log([...contactInfoArr.value], "=====");

}
const goBack = () => {
  $router.back()
}

// _blank  _self
const toUrl = (url: any, num: any) => {
  if (num === 1) {
    window.open(url, '_self')
  } else {
    window.open(`mailto:${url}`, '_self')
  }
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

  >.content {
    height: calc(100vh - 96px);
    background-color: var(--color-background-color);
    overflow-y: auto;
    padding: 0px 46px;

    .box {
      padding: 50px 20px 30px 20px;
      display: flex;

      // .icon-svg-1 {
      //   font-size: 48px;
      //   color: var(--color-bet-tabtext-2);

      // }
      .img_2 {
        height: 48px;
        width: 48px;
        border-radius: 50%;
      }

      .right {
        margin-top: 5px;
        margin-left: 22px;
        font-size: 24px;
        color: var(--color-primary);

        p {
          margin-bottom: 16px;
        }

        p:first-child {
          font-size: 28px;
          color: var(--color-text-5);
          font-weight: 500;
        }

        .noUrl {
          color: var(--color-loadingcl);
        }
      }
    }

    .line-color {
      background: var(--color-refreshcl);
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

  .noData {
    width: 100%;
    text-align: center;
    font-family: PingFangSC-Medium;
    font-size: 24px;
    color: var(--color-no-data-font);
    letter-spacing: 0;
    font-weight: 500;
    height: 850px;

    >.img_1 {
      margin-top: 331px;
      width: 102px;
      height: 121px;
      margin-bottom: 57px;

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
