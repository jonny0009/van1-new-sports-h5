<template>
  <div>
    <!-- 战力 -->
    <div class="top-1 top-2">
      <img class="img_1" src="@/assets/images/user/bottom.png" alt="" />
      <span>注单</span>
      <div class="right">
        <!-- 显示5个,问号是进行中的 -->
        <span>近期战绩:</span>
        <!-- <img class="img_1" src="@/assets/images/user/ask.svg" alt="" /> -->
        <span v-for="(item, index) in recordNum.arr" :key="index" class="img_1">
          <img v-if="item === 1" class="img_1" src="@/assets/images/user/fail.svg" alt="" />
          <img v-else class="img_1" src="@/assets/images/user/win.svg" alt="" />
        </span>
      </div>
    </div>
    <!-- 列表 -->
    <div class="top-3">
      <div class="left" @click="goUrl('/elseInfo')">
        <img class="img_1" src="@/assets/images/user/head-img.png" alt="" />
        <div class="name">
          <div>ai-sport</div>
          <div>@ai-sport</div>
        </div>
      </div>
      <div class="right">
        已结束
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
      <!-- 未结算先不展示live addBtn 按钮置灰色-->
      <div class="addBtn-1">
        <span>加注</span>
        <!-- <img class="img_1" src="@/assets/images/user/num8.png" alt="" /> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue'

import { betRecordTab } from '@/api/user'

import { showToast } from 'vant'

import { useRouter } from 'vue-router'
const $router = useRouter()
import moment from 'moment'

const beginTime = ref<any>('')
const endTime = ref<any>('')
const recordNum = ref<any>({})

const list = reactive<{ arr: any }>({ arr: [] })

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
  $router.push('/user' + url)
}
</script>

<style lang="scss" scoped>
@import '../index.scss';

</style>
