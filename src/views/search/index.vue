<template>
  <div class="search">
    <div class="search_box">
      <van-cell-group inset>
        <van-field v-model="keyWords" center clearable placeholder="搜索" @update:model-value="getList">
          <template #left-icon>
            <van-image class="searchImg" fit="contain" :src="searchImg" />
          </template>
        </van-field>
      </van-cell-group>
      <span class="cancel" @click="toUrl()">取消</span>
    </div>
    <!-- 推荐 -->
    <div v-if="!keyWords" class="content">
      <p v-if="!searchHistory.arr.length" class="font_1">推荐</p>
      <p v-else class="font_1 font-2">
        <span>搜索历史</span>
        <img class="img_3" src="@/assets/images/user/del.svg" alt="" @click="hanDleClear" />
      </p>
      <van-divider />
      <div v-if="!ifHistory" class="historyList">
        <div v-for="(item) in searchHistory.arr" :key="item" class="item">
          <van-image class="itemImg" fit="contain" :src="time" />
          <span class="font_2" @click="keyWordsSearch(item)">{{ item }}</span>
        </div>
      </div>
      <div v-for="(item, index) in ballList" :key="index" class="detail" @click="toUrlGame(item)">
        <div class="left">
          <van-image class="itemImg" fit="contain" :src="item.img" />
          <span class="font_2">{{ item.name }}</span>
        </div>
        <div class="right">
          <!-- 321 -->
        </div>
      </div>
    </div>
    <div v-else class="matchList">
      <div class="area-btn_1">
        <span :class="index == 1 ? 'active' : ''" @click="index = 1">联赛</span>
        <span :class="index == 2 ? 'active' : ''" @click="index = 2">比赛</span>
      </div>
      <van-loading v-if="listLoading" size="24" type="spinner" vertical />
      <League v-if="index === 1" :league-list="leagueList.arr" :key-words="keyWords"></League>
      <Match v-if="index === 2" :game-list="gameList.arr" :key-words="keyWords"></Match>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue'
import { rightSearch } from '@/api/user'
import searchImg from '@/assets/images/globalLayout/header/search.png'
import ball1 from '@/assets/images/login/ball1.svg'
import ball2 from '@/assets/images/login/ball2.svg'
import ball3 from '@/assets/images/login/ball3.svg'
import ball4 from '@/assets/images/login/ball4.svg'

// import game1 from '@/assets/images/login/game1.png'
// import game2 from '@/assets/images/login/game2.png'
// import game3 from '@/assets/images/login/game3.png'
// import game5 from '@/assets/images/user/del.svg'
import time from '@/assets/images/login/time.png'

import League from './components/league.vue'
import Match from './components/match.vue'

// import { ImageSource } from '@/config'

import { useRouter } from 'vue-router'
import { showToast } from 'vant'
import localStore from '@/utils/localStore'

const searchHistory = reactive<{ arr: any }>({ arr: localStore.getItem('searchHistory') || [] })
const $router = useRouter()
const keyWords = ref('')
const index = ref(1)
const leagueList = reactive<{ arr: any }>({ arr: [] })
const gameList = reactive<{ arr: any }>({ arr: [] })
const ifHistory = ref<Boolean>(false)
const listLoading = ref<any>(false)
const ballList = reactive(
  [
    {
      name: '足球',
      img: ball1,
      type: 'FT'
    },
    {
      name: '篮球',
      img: ball2,
      type: 'BK'
    },
    {
      name: '网球',
      img: ball3,
      type: 'TN'
    },
    {
      name: '羽毛球',
      img: ball4,
      type: 'OP_BM'
    }
  ]
)
onMounted(async () => {
})

const hanDleClear = async () => {
  searchHistory.arr = []
  localStore.setItem('searchHistory', searchHistory.arr)
}

const keyWordsSearch = (key:any) => {
  keyWords.value = key
  getList()
}
const getList = async () => {
  listLoading.value = true
  index.value = 1
  gameList.arr = []
  leagueList.arr = []
  const res: any = await rightSearch({ keywords: keyWords.value })
  if (res.code !== 200) {
    listLoading.value = false
    return showToast(res.msg)
  }
  if (res.code === 200) {
    if (keyWords.value) {
      searchHistory.arr.unshift(keyWords.value)
      localStore.setItem('searchHistory', searchHistory.arr.slice(0, 6))
      searchHistory.arr = localStore.getItem('searchHistory')
    }
    listLoading.value = false
    gameList.arr = res.data.gameInfo || []
    leagueList.arr = res.data.league || []
  }
}
const toUrl = () => {
  $router.push({ path: '/home' })
}
const toUrlGame = (item: any) => {
  $router.push({
    path: `/sport/${item.type}`
    // query: {
    //   type: item.type
    // }
  })
}

</script>

<style lang="scss" scoped>
.search {
  padding: 30px 0;

  .search_box {
    display: flex;
    align-items: center;
    padding-left: 10px;
    padding-right: 16px;

    :deep(.van-field) {
      width: 616px;
      height: 68px;
      background: #EFF1F2;
      border-radius: 34px;
    }

    .searchImg {
      height: 28px;
      width: 28px;
    }

    .cancel {
      font-family: PingFangSC-Semibold;
      font-size: 28px;
      color: #7642FD;
      letter-spacing: 0;
      font-weight: 600;
    }
  }

  .content {
    margin-top: 31px;
    padding: 0 36px;

    .font_1 {
      font-family: PingFangSC-Semibold;
      font-size: 24px;
      color: #96A5AA;
      letter-spacing: 0;
      font-weight: 600;
    }

    .font-2 {
      display: flex;
      justify-content: space-between;

      .img_3 {
        width: 24px;
        height: 24px;
      }
    }

    .historyList {
      padding-top: 20px;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      margin-bottom: 20px;

      .item {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        margin-left: 40px;

        .itemImg {
          height: 34px;
          width: 34px;
        }

        .font_2 {
          font-family: PingFangSC-Medium;
          font-size: 24px;
          color: #1F2630;
          letter-spacing: 0;
          font-weight: 500;
          margin-left: 14px;
        }
      }
    }

    .detail {
      margin-top: 20px;
      background: #EFF1F2;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 22px;

      .left {
        display: flex;
        align-items: center;

        .font_2 {
          font-family: PingFangSC-Medium;
          font-size: 24px;
          color: #1F2630;
          letter-spacing: 0;
          font-weight: 500;
          margin-left: 20px;
        }
      }

      .itemImg {
        height: 38px;
        width: 38px;
      }

      .right {
        font-family: PingFangSC-Medium;
        font-size: 28px;
        color: #96A5AA;
        letter-spacing: 0;
        text-align: right;
        font-weight: 500;
      }

    }
  }

  // 比赛列表
  .matchList {
    padding: 23px 36px;

    .area-btn_1 {
      display: flex;
      justify-content: flex-start;

      span {
        font-family: PingFangSC-Semibold;
        font-size: 28px;
        color: #97a6ab;
        letter-spacing: 0;
        font-weight: 600;
        margin-left: 80px;
      }

      .active {
        color: #000000;

        &::after {
          content: '';
          width: 100%;
          height: 6px;
          display: block;
          margin: 10px auto;
          border-bottom: 6px solid #000;
          border-radius: 6px;
        }
      }
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
</style>
