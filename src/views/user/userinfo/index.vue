<template>
  <div class="userInfo">
    <div class="user" :class="{'user-blue':ifBLue}">
      <div class="nav-bar">
        <span class="left">
          <img class="img_1" src="@/assets/images/login/return@2x.png" alt="" @click="goBack()" />
        </span>
        <span class="center">
          {{ title }}
        </span>
        <span class="left">
          <img class="img_1" src="@/assets/images/user/edit.png" alt="" @click="goUrl('/editUser')" />
        </span>
      </div>
      <div class="user-info">
        <div class="user-img" @click="goUrl('/editImg')">
          <img v-img="peopleInfo.headImg" class="img_1" :type="3" style="object-fit: cover;" />
        </div>
        <div class="user-right">
          <div class="user-1">
            <img class="img_1" src="@/assets/images/user/ball.svg" alt="" />
            <span>{{ peopleInfo.nickName }}</span>
          </div>
          <div class="user-2">
            {{ userInfo.loginName|| '' }}
          </div>
          <div class="user-3">
            <img class="img_1" src="@/assets/images/user/star.svg" alt="" />
            <span>{{ $t('user.RegistrationTime') }} {{ formatToDateTime(userInfo.createTime) }}</span>
          </div>
          <div class="user-4">
            <div class="left" @click="goUrl('/selfFocus?num=1')">
              <span>{{ peopleInfo.followNum }}</span>
              <span>{{ $t('user.follow') }}</span>
            </div>
            <div class="center" />
            <div class="left right" @click="goUrl('/selfFocus?num=2')">
              <span>{{ peopleInfo.fansCount }}</span>
              <span>{{ $t('user.fans') }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="note" @click.stop="goUrl('/editUser')">{{ peopleInfo.profiles }}</div>

    </div>
    <div class="content">
      <div class="top-1">
        <img v-if="ifBlueTheme" class="img_1" src="@/assets/images/user/blue/betData.png" alt="" />
        <img v-else class="img_1" src="@/assets/images/user/data.png" alt="" />
        <span>{{ $t('user.text8',{num:90}) }}</span>
      </div>
      <div class="circle">
        <div v-for="(item, index) in dataList.arr" :key="index" class="num-1">
          <div class="left"> <img class="img_1" :src="item.img" alt="" /></div>
          <div class="right">
            <div v-if="index===0">{{ item.num }}</div>
            <div v-else>{{ formatMoney(item.num) }}</div>
            <div>{{ item.name }}</div>
          </div>
        </div>
      </div>
      <!-- 注单列表 -->
      <bet-list :people-info="peopleInfo"></bet-list>
      <!-- <div class="foot" /> -->
    </div>

  </div>
</template>

<script lang="ts" setup>
import img from '@/directive/img'
import data1 from '@/assets/images/user/data1.png'
import data2 from '@/assets/images/user/data2.png'
import data3 from '@/assets/images/user/data3.png'
import data4 from '@/assets/images/user/data4.png'
import { ref, reactive, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
const $router = useRouter()

import { standings } from '@/api/user'
import { showToast } from 'vant'
import { formatToDateTime } from '@/utils/date'
import { formatMoney } from '@/utils/index'

import BetList from './components/betList.vue'

import store from '@/store'
const userInfo = computed(() => store.state.user.userInfo)
const peopleInfo = computed(() => store.state.user.peopleInfo)
const theme = computed(() => store.state.app.theme)
const ifBlueTheme = computed(() => store.state.app.theme === 'blue')

const userStandInfo = ref<any>({})
const currentNumber = ref<any>('')

const ifBLue = computed(() => {
  if (theme.value === 'blue') {
    return true
  }
  return false
})

import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const goBack = () => {
  $router.push('/home')
}
const goUrl = (url: string) => {
  if (url.includes('selfFocus')) {
    return
  }
  $router.push('/user' + url)
}
const title = ref(t('user.personalProfile'))
const dataList = reactive<{ arr: any }>({
  arr: [
    {
      num: 0,
      name: t('user.winRate'),
      img: data1
    },
    {
      num: 0,
      name: t('user.profit'),
      img: data2
    },
    {
      num: 0,
      name: t('user.BetAmount'),
      img: data3
    },
    {
      num: 0,
      name: t('user.refund'),
      img: data4
    }
  ]
})
onMounted(() => {
  store.dispatch('user/getAccountInfo')
  // 获取战力
  getStandings()
})

const getStandings = async () => {
  const params = {
    type: '3',
    lastDayCount: 90
  }
  const res: any = await standings(params)
  if (res.code !== 200) {
    return showToast(res.msg)
  }
  userStandInfo.value = res.data
  currentNumber.value = userStandInfo.value.winRatio * 100 || 0
  // dataList.arr[0].num = (userStandInfo.value.winRatio * 100)
  dataList.arr[0].num = String(userStandInfo.value.winRatio * 100).replace(/^(.*\..{2}).*$/, '$1') + '%'
  dataList.arr[1].num = userStandInfo.value.winOrderAmount - userStandInfo.value.orderAmount || 0
  dataList.arr[2].num = userStandInfo.value.orderAmount || 0
  dataList.arr[3].num = userStandInfo.value.winOrderAmount || 0
}

</script>

<style lang="scss" scoped>
@import './index.scss';
</style>

<style scoped>
:deep(.van-field__control) {
  height: 50px;
  font-size: 30px;
}

:deep(.van-icon) {
  font-size: 40px;
}

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
  font-weight: 600;
}

:deep(.van-icon) {
  font-size: 48px;
}
</style>
