<template>
  <div class="matchList-1">
    <div v-for="(item, index) in props.gameList" :key="index" class="left1 left2" @click="toMatch(item)">
      <div class="left3">
        <!-- <van-image class="itemImg" fit="contain" :src="getImg(item.homeLogo)" /> -->
        <div class="itemImg">
          <img class="itemImg-1" fit="contain" :src="getImg(item.homeLogo)" />
          <img class="itemImg-2" fit="contain" :src="getImg(item.awayLogo)" />
        </div>
        <div class="center">
          <div>
            <span v-html="highlightText(props.keyWords, item.homeTeam)"></span> VS
            <span v-html="highlightText(props.keyWords, item.awayTeam)"></span>
          </div>
          <div class="center_1">
            <img class="ball4" fit="contain" src="@/assets/images/login/ball1.svg" />
            <!-- <span>哥伦比亚- 地区联赛</span> -->
            <!-- <span>{{ item.gameDate ? formatToDateTime(item.gameDate) : '' }}</span> -->
            <span>{{ getMatchTime(item.gameDate) }}</span>
          </div>
        </div>

      </div>
      <div class="right">
        <van-image class="goImg" fit="contain" :src="goImg" />
      </div>
    </div>
    <div v-if="!props.gameList.length " class="noData">
      <img class="img_1" src="@/assets/images/user/noData.png" />
      <p>
        未查询到相关数据
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ImageSource } from '@/config'

import moment from 'moment'
import goImg from '@/assets/images/login/go@2x.png'
import ball4 from '@/assets/images/login/ball4.svg'
import store from '@/store'

import { useRouter } from 'vue-router'
const $router = useRouter()

// import { ref, reactive } from 'vue'
const props = defineProps({
  gameList: {
    type: Array as any,
    default: function () {
      return []
    }
  },
  keyWords: {
    type: String,
    default: function () {
      return ''
    }
  }
})
// 获取比赛时间
const getMatchTime = (item: any) => {
  if (item) {
    return moment(item).format('MM/DD HH:mm')
  } else {
    return ''
  }
}
const getImg = (imgUrl?: any) => {
  console.log(imgUrl)
  if (imgUrl) {
    return `${ImageSource}${imgUrl}`
  }
  return ball4
}
const toMatch = async (item: any) => {
  store.dispatch('betting/setMoreShow', { status: false, moreParams: {} })

  const obj = JSON.stringify(item)
  $router.push({
    path: `/home`,
    query: {
      gidm: item.gidm,
      obj: obj
    }
  })
}
// 搜索字体颜色
const highlightText = (field: any, text: any) => {
  // 使用正则表达式替换文本中的相同字段，并添加样式
  const regex = new RegExp(field, 'gi')
  const highlightedText = text.replace(regex, `<span style="color: #7642FD;font-weight:600">${field}</span>`)
  return highlightedText
}

</script>

<style lang="scss" scoped>
.noData {
  width: 100%;
  text-align: center;
  font-family: PingFangSC-Medium;
  font-size: 24px;
  color: #96A5AA;
  letter-spacing: 0;
  font-weight: 500;

  .img_1 {
    margin-top: 331px;
    width: 102px;
    height: 121px;
    margin-bottom: 57px;

  }
}
 .matchList-1 {
      overflow-y: auto;
      height: calc(100vh - 250px);
    }

    // 比赛
    .left1 {
      margin-top: 20px;
      width: 678px;
      height: 120px;
      background: #EFF1F2;
      border-radius: 10px;
      padding: 28px 20px;
      display: flex;
      align-items: center;
      font-family: PingFangSC-Semibold;
      font-size: 24px;
      color: #1F2630;
      letter-spacing: 0;
      font-weight: 600;

      // .itemImg {
      //   height: 100px;
      //   width: 100px;
      //   background:orange;
      //   margin-right: 10px;
      // }
    }

    .left2 {
      justify-content: space-between;
      align-items: center;

      .left3 {
        display: flex;
        align-items: center;
      }

      .itemImg {
        height: 80px;
        width: 80px;
        // background:orange;
        margin-right: 0px;
        position: relative;
        &-1{
          position: absolute;
          left: 0;
          top: 0;
          width: 50px;
          height: 50px;
        }
        &-2{
          position: absolute;
          bottom: 0;
          right: 0;
          width: 50px;
          height: 50px;
        }
      }

      .center {
        margin-left: 30px;
        font-size: 24px;
        color: #1F2630;

        &_1 {
          display: flex;
          align-items: center;
          font-size: 24px;
          color: #96A5AA;

          .ball4 {
            margin-right: 10px;
            height: 24px;
            width: 24px;
          }
        }
      }

      .goImg {
        width: 30px;
        height: 35px;
      }
    }
</style>
