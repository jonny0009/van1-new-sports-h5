<template>
  <!-- 球类型 -->
  <div class="ball-type">
    <sports-tabs @returnSportsSuccess="setBallSelect"></sports-tabs>
  </div>
  <!-- 时间 -->
  <div class="status">
    <div class="status_1">
      <span>{{ $t('user.time') }}</span>
      <div class="round" @click="seStatus()">
        <span>{{ commonKey.name }}</span>
        <img class="img_1 " :class="[showBottom ? 'img_3' : '']" src="@/assets/images/user/down.png" alt="" />
      </div>
    </div>
  </div>
  <van-divider class="color-line" />
  <div v-if="!list.arr.length && finished" class="noData">
    <img class="img_1" src="@/assets/images/user/noData.png" />
    <p>
      {{ $t('user.noData') }}
    </p>
  </div>
  <!-- 列表 -->
  <van-list v-if="list.arr.length || !finished" v-model:loading="loading" :finished="finished"
    :finished-text="$t('user.noMoreMatch')" :loading-text="$t('user.loadingText')" class="dataList" @load="onLoad">
    <!-- @click="toMatch(item)" -->
    <div v-for="(item, index) in list.arr" :key="index" class="item">
      <div class="title">
        <div class="left  title-left">
          <SportsIcon :icon-src="item.gameType" class="ball-img" />
          <span class="ball-name">
            {{ item.leagueName }}
          </span>
        </div>
        <div class="right">
          {{ getMatchTime(item) }}
        </div>
      </div>
      <div class="match-content">
        <div class="left">

          <div class="left-1">
            {{ item.homeTeamName }}
          </div>
          <img v-img="item.homeTeamLogo" class="img_1" alt="" :type="4" style="object-fit: contain;" />
        </div>
        <div class="center">
          {{ item.result.GM_h || 0 }}
          :
          {{ item.result.GM_c || 0 }}
        </div>
        <div class="right">

          <img v-img="item.awayTeamLogo" class="img_2" alt="" :type="5" style="object-fit: contain;" />
          <div class="right-1">
            {{ item.awayTeamName }}
          </div>
        </div>
      </div>
    </div>
  </van-list>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue'

import moment from 'moment'
import store from '@/store'
// import { useI18n } from 'vue-i18n'
// const { t } = useI18n()
import { matchResult } from '@/api/user'

const list = reactive<{ arr: any }>({ arr: [] })
// import { showToast } from 'vant'
const loading = ref(false)
const finished = ref(false)
const commonKey = ref(
  {
    name: moment().format('YYYY/MM/DD'),
    value: moment().valueOf(),
    key: 0
  }
)
const ballKey = ref(
  {
    gameType: 'FT',
    key: 'FT'
  }
)
const showBottom = ref(false)

const emit = defineEmits(['valueChange', 'timeChange'])
onMounted(() => {
  store.dispatch('app/getAllSports')
})

let page: number = 0
const onLoad = async () => {
  page++
  const params: any = {
    page: page,
    gameSort: 3,
    leagueIds: '',
    gameType: ballKey.value.gameType,
    matchTime: commonKey.value.value,
    pageSize: 10,
    gameStatus: 1,
    groupId: 3
  }
  const res: any = await matchResult(params)
  const data = res.data
  if (res.code === 200) {
    data.list.forEach((item: any) => {
      list.arr.push(item)
    })
    loading.value = false
    finished.value = list.arr.length === data.total
  } else {
    finished.value = true
    loading.value = false
    // showToast(res.msg)
  }
}
//  比赛详情
const toMatch = async (item: any) => {
  console.log(item, '取消跳转=');
  // store.dispatch('user/getResultTab', 2)
  // store.dispatch('betting/setMoreShow', { status: true, moreParams: { gidm: item.matchId } })
}
// 获取游戏时间
const getMatchTime = (item: any) => {
  if (item.gameDate) {
    return moment(item.gameDate).format('MM/DD HH:mm')
  }
  if (item.matchTime) {
    return moment(item.gameDate).format('MM/DD HH:mm')
  }
}
const seStatus = () => {
  showBottom.value = true
  // emit('valueChange', true, popupTitle.value, timeArrList.value, commonKey.value, 3)
  emit('timeChange', true, 3, commonKey.value.value)
}

async function setDateTime(val: any) {
  commonKey.value = {
    name: moment(val).format('YYYY/MM/DD'),
    value: moment(val).valueOf(),
    key: 0
  }
  page = 0
  showBottom.value = false
  loading.value = true
  finished.value = false
  list.arr = []
  onLoad()
  console.log(val)
}
// 设置球类型
const setBallSelect = (val: any) => {
  ballKey.value = { gameType: val, key: val }
  page = 0
  loading.value = true
  finished.value = false
  list.arr = []
  onLoad()
}
defineExpose({
  setDateTime, showBottom
})

</script>

<style lang="scss" scoped>
//球类型
.ball-type {
  margin-top: 30px;
}

// 状态
.status {
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: PingFangSC-Semibold;
  font-size: 24px;
  color: var(--color-search-box-text-1);
  letter-spacing: 0;
  font-weight: 600;

  .status_1 {
    display: flex;
    align-items: center;
    margin-right: 30px;

    .round {
      padding: 0 45px 0 32px;
      // width: 165px;
      height: 52px;
      text-align: center;
      line-height: 52px;
      background: var(--color-search-box-frame);
      border-radius: 32px;
      margin-left: 10px;
      position: relative;
      color: #546371;

      .img_1 {
        position: absolute;
        right: 20px;
        top: 20px;
        height: 10px;
        width: 10px;
      }

      .img_3 {
        transform: rotateZ(180deg);
      }
    }
  }
}

// 列表
.dataList {
  margin-top: 20px;
  height: calc(100vh - 435px);
  overflow-y: auto;

  .color-1 {
    color: var(--color-bg-1);
  }

  .color-2 {
    color: #1EBB52;
  }

  .color-3 {
    color: red;
  }

  .color-line {
    background: var(--color-search-box-sidebar);
  }

  .item {
    background: var(--color-search-box-frame);
    border-radius: 22px;
    padding: 20px 20px 25px 20px;
    margin-bottom: 20px;

    >.title {
      font-family: PingFangSC-Medium;
      font-size: 24px;
      color: var(--color-search-box-text-1);
      letter-spacing: 0;
      font-weight: 500;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .title-left {
        font-size: 23px;
        font-weight: 500;
        display: flex;
      }

      .ball-name {
        margin-left: 3px;
        width: 400px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      .ball-img {
        font-size: 24px;
        color: var(--color-text-3);
        font-weight: 500;
      }

      .img_1 {
        margin-right: 4px;
        height: 24px;
        width: 24px;
      }

      .right {
        font-family: PingFangSC-Regular;
        font-size: 22px;
        color: var(--color-search-box-text-2);
        letter-spacing: 0;
        text-align: right;
        font-weight: 400;
      }
    }

    .match-content {
      margin-top: 25px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      font-family: PingFangSC-Semibold;
      font-size: 24px;
      color: var(--color-search-box-text-1);
      letter-spacing: 0;
      font-weight: 600;

      .left {
        display: flex;
        align-items: center;
        font-size: 24px;

        &-1 {
          width: 200px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        >.img_1 {
          width: 48px;
          height: 48px;
          margin-left: 5px;
        }
      }

      .center {
        width: 200px;
        font-family: PingFangSC-Semibold;
        font-size: 32px;
        color: var(--color-search-box-text-1);
        letter-spacing: 0;
        text-align: center;
        font-weight: 600;
      }

      .right {
        display: flex;
        align-items: center;
        font-size: 24px;

        &-1 {
          width: 200px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        .img_2 {
          width: 48px;
          height: 48px;
          margin-right: 5px;
        }
      }
    }

  }
}

.noData {
  width: 100%;
  text-align: center;
  font-family: PingFangSC-Medium;
  font-size: 24px;
  color: var(--color-search-box-text-2);
  letter-spacing: 0;
  font-weight: 500;
  height: 850px;

  >.img_1 {
    margin-top: 331px;
    width: 102px;
    height: 121px;
    margin-bottom: 57px;

  }
}
</style>
