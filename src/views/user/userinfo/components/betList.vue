<template>
  <div>
    <!-- 战力 -->
    <div class="top-1 top-2">
      <div class="left-text">
        <img v-if="ifBlueTheme" class="img_1" src="@/assets/images/user/blue/monad.png" alt="" />
        <img v-else class="img_1" src="@/assets/images/user/bottom.png" alt="" />
        <span>{{ $t('user.betForm') }}</span>
      </div>
      <div class="right">
        <!-- 显示5个,问号是进行中的 -->
        <span class="right-text">{{ $t('user.RecentAchievements') }}:</span>
        <!-- <img class="img_1" src="@/assets/images/user/ask.svg" alt="" /> -->
        <span v-for="(item, index) in list.arr.slice(0, 5)" :key="index" class="img_1">
          <img v-if="item.state === 2" class="img_1" src="@/assets/images/user/win.svg" alt="" />
          <img v-else-if="item.state === 3" class="img_1" src="@/assets/images/user/fail.svg" alt="" />
          <img v-else-if="item.state === 4" class="img_1" src="@/assets/images/user/P.svg" alt="" />
          <img v-else class="img_1" src="@/assets/images/user/D1.png" alt="" />
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
            <img v-img="props.peopleInfo.headImg" class="img_1" :type="3" style="object-fit: cover" />

            <div class="name">
              <div>{{ userInfo.nickName }}</div>
              <div class="name-2">{{ userInfo.loginName }}</div>
            </div>
          </div>
          <div class="right">
            {{ $t('user.end') }}
          </div>
        </div>
        <Single v-if="Number(item.parlayNum) === 1" :item="item" class="item" :ifUserInfo="false"></Single>
        <Bunch v-if="Number(item.parlayNum) !== 1" :item="item" class="item" :ifUserInfo="false"></Bunch>
      </div>
    </van-list>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted, computed } from 'vue'
import Bunch from '@/components/BettingRecord/bunch/index.vue'
import Single from '@/components/BettingRecord/single/index.vue'
import { betRecordTab } from '@/api/user'
import { showToast } from 'vant'
import moment from 'moment'
import store from '@/store'

const userInfo = computed(() => store.state.user.userInfo)
const ifBlueTheme = computed(() => store.state.app.theme === 'blue')
const beginTime = ref<any>('')
const endTime = ref<any>('')
const loading = ref(false)
const finished = ref(false)
const list = reactive<{ arr: any }>({ arr: [] })
const props = defineProps({
  peopleInfo: {
    type: Object,
    default: () => {}
  }
})

onMounted(() => {
  endTime.value = moment().valueOf()
  const oneDayDate = 24 * 60 * 60 * 1000
  // beginTime.value = endTime.value - oneDayDate * 7
  beginTime.value = endTime.value - oneDayDate * 90
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

    list.arr.map((m: any) => {
      m.betDTOList.map((n: any) => {
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
  .item {
    background: var(--color-search-box-frame);
    border-radius: 22px;
    padding: 15px 20px;
    margin-bottom: 20px;
  }
}
</style>
