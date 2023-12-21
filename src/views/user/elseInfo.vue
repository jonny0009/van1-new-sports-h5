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
    <div class="user user-else">
      <div class="user-info">
        <div class="user-img" @click="goUrl('/editImg')">
          <img class="img_1" src="@/assets/images/user/head-img.png" alt="" />
        </div>
        <div class="user-right">
          <div class="user-1">
            <img class="img_1" src="@/assets/images/user/bottom2.png" alt="" />
            <span>ai-sport</span>
          </div>
          <div class="user-2">
            @ai-sport
          </div>
          <div class="user-3">
            <img class="img_1" src="@/assets/images/user/bottom2.png" alt="" />
            <span>注册时间 2023/12/12</span>
          </div>
          <div class="user-4">
            <div class="left">
              <span>0</span>
              <span @click="goElseUrl('/elseFocus')">关注</span>
            </div>
            <div class="center" />
            <div class="left right">
              <span>0</span>
              <span>粉丝</span>
            </div>
          </div>
        </div>
      </div>
      <p class="note" @click="goUrl('/editUser')">这家伙很懒，什么也没留下...</p>
      <p class="note-2">关注</p>

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
        <img class="img_1" src="@/assets/images/user/data.png" alt="" />
        <span>注单</span>
        <div class="right">
          <span>近期战绩:</span>
          <img class="img_1" src="@/assets/images/user/bottom2.png" alt="" />
          <img class="img_1" src="@/assets/images/user/bottom2.png" alt="" />
          <img class="img_1" src="@/assets/images/user/bottom2.png" alt="" />
          <img class="img_1" src="@/assets/images/user/bottom2.png" alt="" />
          <img class="img_1" src="@/assets/images/user/bottom2.png" alt="" />
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
          <img class="img_1" src="@/assets/images/user/bottom2.png" alt="" />
          <span>
            中华台北 - 超级联赛
          </span>
        </div>
        <div class="game-1 game-2">
          <img class="img_1" src="@/assets/images/user/bottom2.png" alt="" />
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
            <img class="img_1" src="@/assets/images/user/bottom2.png" alt="" />
            <span>1.00</span>
          </div>
        </div>
        <div class="game-5 game-6">
          <p>可赔付额：</p>
          <div>
            <img class="img_1" src="@/assets/images/user/bottom2.png" alt="" />
            <span class="num">3.65</span>
          </div>
        </div>
        <!-- 6 -->
        <div class="addBtn">
          <span>跟注</span>
          <!-- <img class="img_1" src="@/assets/images/user/bottom2.png" alt="" /> -->
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
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
const $router = useRouter()
const goBack = () => {
  $router.push('/user/userInfo')
}
const goUrl = (url: string) => {
  console.log(url, '======')

  // $router.push('/user' + url)
}
const goElseUrl = (url: string) => {
  $router.push('/user' + url)
}
const title = ref('他人档案')
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

</script>

<style lang="scss" scoped>
@import './style/userInfo.scss';

.note-2 {
  width: 638px;
  height: 68px;
  text-align: center;
  line-height: 68px;
  background: url('@/assets/images/user/btn.png');
  background-size: 100% 100%;
  font-size: 24px;
  color: #EFF1F2;
  font-weight: 600;
  margin: 22px auto 0;
  // display: flex;
  // align-items: center;
  // justify-content: center;
}
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
