<template>
  <div>
    <!-- 战力 -->
    <div class="top-1 top-2">
      <img class="img_1" src="@/assets/images/user/bottom.png" alt="" />
      <span>{{ $t('user.betForm') }}</span>
      <div class="right">
        <!-- 显示5个,问号是进行中的 -->
        <span>{{ $t('user.RecentAchievements') }}:</span>
        <!-- <img class="img_1" src="@/assets/images/user/ask.svg" alt="" /> -->
        <span v-for="(item, index) in list.arr.slice(0,5)" :key="index" class="img_1">
          <img v-if="item.winAndLossGold <0" class="img_1" src="@/assets/images/user/fail.svg" alt="" />
          <img v-else class="img_1" src="@/assets/images/user/win.svg" alt="" />
        </span>
      </div>
    </div>
    <!-- 列表 -->

    <van-list
      v-model:loading="loading"
      :finished="finished"
      :finished-text="$t('live.noMore')"
      class="dataList"
      :loading-text="$t('user.loadingText')"
      @load="getBetList"
    >
      <div v-for="(item, index) in list.arr" :key="index">
        <div class="top-3">
          <div class="left" @click="goUrl('/elseInfo')">
            <img class="img_1" :src="getImg(props.peopleInfo.headImg)" alt="" />
            <div class="name">
              <div>{{ userInfo.nickName }}</div>
              <div class="name-2">{{ userInfo.loginName }}</div>
            </div>
          </div>
          <div class="right">
            {{ $t('user.end') }}
          </div>
        </div>
        <Single v-if="item.parlayNum == 1" :item="item" class="item"></Single>
        <Bunch v-if="item.parlayNum != 1 && item.state !== 2" :item="item" class="item"></Bunch>
      </div>
    </van-list>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted, computed } from 'vue'

import Bunch from './bunch.vue'
import Single from './single.vue'

import { betRecordTab } from '@/api/user'

import { showToast } from 'vant'

// import { useRouter } from 'vue-router'
// const $router = useRouter()
import moment from 'moment'

import store from '@/store'
const userInfo = computed(() => store.state.user.userInfo)

import avatarImg from '@/assets/images/globalLayout/header/avatar.png'

const beginTime = ref<any>('')
const endTime = ref<any>('')

const loading = ref(false)
const finished = ref(false)

const list = reactive<{ arr: any }>({ arr: [] })
import { ImageSource } from '@/config'

const props = defineProps({
  peopleInfo: {
    type: Object,
    default: () => { }
  }
})
const getImg = (imgUrl: string) => {
  if (imgUrl) {
    return `${ImageSource}${imgUrl}`
  }
  return avatarImg
}

onMounted(() => {
  endTime.value = moment().valueOf()
  const oneDayDate = 24 * 60 * 60 * 1000
  beginTime.value = endTime.value - oneDayDate * 7
  // 获取结算已结算注单
  // getBetList()
})
let page: number = 0
const getBetList = async () => {
  page++
  const params = {
    orderState: '1',
    page: page,
    pageSize: 5,
    beginTime: beginTime.value,
    endTime: endTime.value
  }

  const res: any = await betRecordTab(params)
  if (res.code !== 200) {
    loading.value = false
    finished.value = true
    return showToast(res.msg)
  }
  const data = res.data
  if (res.code === 200) {
    data.forEach((item: any) => {
      list.arr.push(item)
    })
    // 获取多语言
    const gidmsArr: any = []
    // 冠军国际化
    const championGidms: any = []

    list.arr.map((m:any) => {
      m.betDTOList.map((n:any) => {
        const { championType, systemId, gidm } = n
        if (championType) {
          championGidms.push(gidm)
        }
        gidmsArr.push(systemId)
      })
    })
    store.dispatch('user/getMoreTeamList', gidmsArr.join())
    store.dispatch('user/getChampionLang', championGidms.join())

    loading.value = false
    finished.value = !data.length
  }
}
const goUrl = (url: string) => {
  console.log(url, '他人未开放===')

  // $router.push('/user' + url)
}
</script>

<style lang="scss" scoped>
@import '../index.scss';

// 列表
.dataList {
  margin-top: 30px;

  .color-1 {
    color: var(--color-bg-1);
  }

  .color-2 {
    color: #1EBB52;
  }

  .color-3 {
    color: red;
  }

  .item {
    background: var(--color-search-box-frame);
    border-radius: 22px;
    padding: 15px 20px;
    margin-bottom: 20px;

  }
}
</style>
