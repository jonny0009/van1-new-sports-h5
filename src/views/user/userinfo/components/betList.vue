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
        <span v-for="(item, index) in recordNum.arr" :key="index" class="img_1">
          <img v-if="item !== 1" class="img_1" src="@/assets/images/user/fail.svg" alt="" />
          <img v-else class="img_1" src="@/assets/images/user/win.svg" alt="" />
        </span>
      </div>
    </div>
    <!-- 列表 -->
    <div v-if="list.arr.length" class="dataList">
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
    </div>

    <!-- <div class="top4">
      <div class="game-1">
        <img class="img_1" src="@/assets/images/user/num5.png" alt="" />
        <span>
          中华台北 - 超级联赛
        </span>
      </div>
      <div class="game-1 game-2">
        <img class="img_1" src="@/assets/images/user/num7.png" alt="" />
        <span>
          半场
        </span>
      </div>
      <div class="game-3">
        <div class="match-1">
          <div class="left">
            <img class="img_1" src="@/assets/images/user/bottom1.png" alt="" />
            <span>
              台北
            </span>
          </div>
          <div class="right">
            2
          </div>
        </div>
        <div class="match-1 match-2">
          <div class="left">
            <img class=" img_2" src="@/assets/images/user/bottom2.png" alt="" />
            <span>
              台北天龙
            </span>
          </div>
          <div class="right">
            0
          </div>
        </div>

      </div>
      <div class="game-3 game-4">
        <div class="match-1">
          <div class="left">
            <img class="img_1" src="@/assets/images/user/plate.png" alt="" />
            <div>
              <p>大于 2</p>
              <p class="plate">全场 大小盘</p>
            </div>
          </div>
          <div class="right-1">
            @3.64
          </div>
        </div>
      </div>
      <div class="game-5">
        <p>投注额：</p>
        <div>
          <img class="img_1" src="@/assets/images/user/num1.png" alt="" />
          <span>1.00</span>
        </div>
      </div>
      <div class="game-5 game-6">
        <p>实际赔付:</p>
        <div>
          <img class="img_1" src="@/assets/images/user/num2.png" alt="" />
          <span class="num">3.65</span>
        </div>
      </div>
      <div class="addBtn-1">
        <span>加注</span>
        <img class="img_1" src="@/assets/images/user/num8.png" alt="" />
      </div>
    </div> -->
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
const recordNum = ref<any>({})

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
  getBetList()
})
const getBetList = async () => {
  const params = {
    orderState: '1',
    page: 1,
    pageSize: 5,
    beginTime: beginTime.value,
    endTime: endTime.value
  }

  const res: any = await betRecordTab(params)
  if (res.code !== 200) {
    return showToast(res.msg)
  }
  list.arr = res.data
  const resultArr: any = []
  list.arr.map((item: any) => {
    if (item.winAndLossGold >= 0) {
      resultArr.push(1)
    } else {
      resultArr.push(0)
    }
  })
  recordNum.value.arr = resultArr
  console.log()
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
  // height: calc(100vh - 450px);
  // overflow-y: auto;
  margin-top: 20px;

  .color-1 {
    color: #7642FD;
  }

  .color-2 {
    color: #1EBB52;
  }
  .color-3 {
    color: red;
  }

  .item {
    background: #EFF1F2;
    border-radius: 22px;
    padding: 15px 20px;
    margin-bottom: 20px;

  }
}
</style>
