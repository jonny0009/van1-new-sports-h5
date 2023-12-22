<template>
  <div class="search">
    <div class="search_box">
      <van-cell-group inset>
        <van-field v-model="keyWords" center clearable placeholder="搜索">
          <template #left-icon>
            <van-image class="searchImg" fit="contain" :src="searchImg" />
          </template>
        </van-field>
      </van-cell-group>
      <span class="cancel" @click="toUrl()">取消</span>
    </div>
    <!-- 推荐 -->
    <div v-if="!keyWords" class="content">
      <p v-if="ifHistory" class="font_1">推荐</p>
      <p v-else class="font_1">搜索历史</p>
      <van-divider />
      <div v-if="!ifHistory" class="historyList">
        <div v-for="i in 6" :key="i" class="item">
          <van-image class="itemImg" fit="contain" :src="time" />
          <span class="font_2">{{ "中超" }}</span>
        </div>
      </div>
      <div v-for="(item, index) in ballList" :key="index" class="detail">
        <div class="left">
          <van-image class="itemImg" fit="contain" :src="item.img" />
          <span class="font_2">{{ item.name }}</span>
        </div>
        <div class="right">
          321
        </div>
      </div>
    </div>
    <div v-else class="matchList">
      <div class="area-btn_1">
        <span :class="index == 1 ? 'active' : ''" @click="index = 1">联赛</span>
        <span :class="index == 2 ? 'active' : ''" @click="index = 2">比赛</span>
      </div>
      <div v-if="index === 1">
        <div v-for="i in 3" :key="i" class="left1">
          <van-image class="itemImg" fit="contain" :src="game1" />
          <span class="font_2">{{ "德国-甲级联赛" }}</span>
        </div>
      </div>
      <div v-if="index === 2">
        <div v-for="i in 3" :key="i" class="left1 left2">
          <div class="left3">
            <van-image class="itemImg" fit="contain" :src="game1" />
            <div class="center">
              <div>
                <span>足球</span>恩维加多 [备]
              </div>
              <div class="center_1">
                <van-image class="ball4" fit="contain" :src="game1" />
                <span>哥伦比亚- 地区联赛</span>
                <span>27-11 23:00</span>
              </div>
            </div>

          </div>
          <div class="right">
            <van-image class="goImg" fit="contain" :src="goImg" />
          </div>
        </div>
      </div>
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
import game1 from '@/assets/images/login/game1.png'
// import game2 from '@/assets/images/login/game2.png'
// import game3 from '@/assets/images/login/game3.png'
import goImg from '@/assets/images/login/go@2x.png'
import time from '@/assets/images/login/time.png'
import { useRouter } from 'vue-router'
const $router = useRouter()
const keyWords = ref('')
const index = ref(1)
const ifHistory = ref<Boolean>(false)
const ballList = reactive(
  [
    {
      name: '足球',
      img: ball1
    },
    {
      name: '篮球',
      img: ball2
    },
    {
      name: '网球',
      img: ball3
    },
    {
      name: '羽毛球',
      img: ball4
    }
  ]
)
onMounted(async () => {
  getList()
})
const getList = async () => {
  const res: any = await rightSearch({ keywords: 1 })
  console.log(res, '=====')
}
const toUrl = () => {
  $router.push({ path: '/home' })
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
