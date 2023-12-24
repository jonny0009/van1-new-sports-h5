<template>
  <div class="userInfo">
    <van-nav-bar class="bg-title" :title="title" :border="false">
      <template #left>
        <img class="img_1" src="@/assets/images/login/return@2x.png" alt="" @click="goBack()" />
      </template>
      <template #right>
        <img class="img_1" src="@/assets/images/user/edit.png" alt="" @click="goUrl('/editUser')" />
      </template>
    </van-nav-bar>
    <div class="user">
      <div class="user-info">
        <div class="user-img" @click="goUrl('/editImg')">
          <img class="img_1" :src="getImg(peopleInfo.headImg)" alt="" />
        </div>
        <div class="user-right">
          <div class="user-1">
            <img class="img_1" src="@/assets/images/user/ball.svg" alt="" />
            <span>{{ peopleInfo.nickName }}</span>
          </div>
          <div class="user-2">
            {{ peopleInfo.email || '' }}
          </div>
          <div class="user-3">
            <img class="img_1" src="@/assets/images/user/star.svg" alt="" />
            <span>{{ '注册时间' }} {{ formatToDateTime(peopleInfo.createTime) }}</span>
          </div>
          <div class="user-4">
            <div class="left" @click="goUrl('/selfFocus?num=1')">
              <span>{{ peopleInfo.followNum }}</span>
              <span>关注</span>
            </div>
            <div class="center" />
            <div class="left right" @click="goUrl('/selfFocus?num=2')">
              <span>{{ peopleInfo.fansCount }}</span>
              <span>粉丝</span>
            </div>
          </div>
        </div>
      </div>
      <p class="note" @click="goUrl('/editUser')">{{ peopleInfo.profiles }}</p>

    </div>
    <div class="content">
      <div class="top-1">
        <img class="img_1" src="@/assets/images/user/data.png" alt="" />
        <span>投注数据（近90天）</span>
      </div>
      <div class="circle">
        <div v-for="(item, index) in dataList.arr" :key="index" class="num-1">
          <div class="left"> <img class="img_1" :src="item.img" alt="" /></div>
          <div class="right">
            <div>{{ item.num }}</div>
            <div>{{ item.name }}</div>
          </div>
        </div>
      </div>
      <!-- top2 -->
      <div class="top-1 top-2">
        <img class="img_1" src="@/assets/images/user/bottom.png" alt="" />
        <span>注单</span>
        <div class="right">
          <span>近期战绩:</span>
          <img class="img_1" src="@/assets/images/user/ask.svg" alt="" />
          <img class="img_1" src="@/assets/images/user/fail.svg" alt="" />
          <img class="img_1" src="@/assets/images/user/win.svg" alt="" />
          <img class="img_1" src="@/assets/images/user/win.svg" alt="" />
          <img class="img_1" src="@/assets/images/user/fail.svg" alt="" />
        </div>
      </div>
      <!-- elseInfo -->
      <div class="top-3">
        <div class="left" @click="goUrl('/elseInfo')">
          <img class="img_1" src="@/assets/images/user/head-img.png" alt="" />
          <div class="name">
            <div>ai-sport</div>
            <div>@ai-sport</div>
          </div>
        </div>
        <div class="right">
          进行中
        </div>
      </div>
      <!-- four -->
      <div class="top4">
        <div class="game-1">
          <img class="img_1" src="@/assets/images/user/num5.png" alt="" />
          <span>
            中华台北 - 超级联赛
          </span>
        </div>
        <div class="game-1 game-2">
          <img class="img_1" src="@/assets/images/user/num7.png" alt="" />
          <!-- <SportsIcon class="img_2" :icon-src="img1" style="color:#7642FD" /> -->
          <span>
            半场
          </span>
        </div>
        <!-- 框 -->
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
        <!-- 框4 -->
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
        <!-- 5 -->
        <div class="game-5">
          <p>投注额：</p>
          <div>
            <img class="img_1" src="@/assets/images/user/num1.png" alt="" />
            <span>1.00</span>
          </div>
        </div>
        <div class="game-5 game-6">
          <p>可赔付额：</p>
          <div>
            <img class="img_1" src="@/assets/images/user/num2.png" alt="" />
            <span class="num">3.65</span>
          </div>
        </div>
        <!-- 6 -->
        <div class="addBtn">
          <span>加注</span>
          <img class="img_1" src="@/assets/images/user/num8.png" alt="" />
        </div>
      </div>
      <div class="foot" />
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
import { playerInfo } from '@/api/user'
import { showToast } from 'vant'
import { ImageSource } from '@/config'
import avatarImg from '@/assets/images/globalLayout/header/avatar.png'
import { formatToDateTime } from '@/utils/date'

import store from '@/store'
const userInfo = computed(() => store.state.user.userInfo)

const peopleInfo = ref<any>({})
// const img1 = ref('live')
const $router = useRouter()
const goBack = () => {
  $router.push('/home')
}
const goUrl = (url: string) => {
  $router.push('/user' + url)
}
const title = ref('个人档案')
const dataList = reactive<{ arr: any }>({
  arr: [
    {
      num: 0,
      name: '投注次数',
      img: data1
    },
    {
      num: 0,
      name: '被跟注次数',
      img: data2
    },
    {
      num: 0,
      name: '平均投注额',
      img: data3
    },
    {
      num: 0,
      name: '平均赔率',
      img: data4
    }
  ]
})
onMounted(() => {
  getAccountInfo()
})
const getImg = (imgUrl: string) => {
  if (imgUrl) {
    return `${ImageSource}${imgUrl}`
  }
  return avatarImg
}
const getAccountInfo = async () => {
  const params = {
    fPlayerId: userInfo.value.playerId
  }
  const res: any = await playerInfo(params)
  if (res.code !== 200) {
    return showToast(res.msg)
  }
  peopleInfo.value = res.data
}

</script>

<style lang="scss" scoped>
@import './style/userInfo.scss';
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
