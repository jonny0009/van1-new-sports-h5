<template>
  <div class="matchList-1">
    <div v-for="(item, index) in props.leagueList" :key="index" class="left1" @click="toLeague(item)">
      <van-image class="itemImg" fit="contain" :src="ball3" />
      <div class="font_2" v-html="highlightText(props.keyWords, item.name)"></div>
    </div>
    <div v-if="!props.leagueList.length " class="noData">
      <img class="img_1" src="@/assets/images/user/noData.png" />
      <p>
        未查询到相关数据
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ball3 from '@/assets/images/login/ball3.svg'
// import { ref, reactive } from 'vue'
const props = defineProps({
  leagueList: {
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
const toLeague = async (item: any) => {
  console.log(item, '联赛跳转====')
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
  height: 1100px;

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

  .itemImg {
    height: 64px;
    width: 64px;
    margin-right: 15px;
  }
}

.left2 {
  justify-content: space-between;
  align-items: center;

  .left3 {
    display: flex;
    align-items: center;
  }

  .itemImg {
    width: 50px;
    height: 50px;
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
