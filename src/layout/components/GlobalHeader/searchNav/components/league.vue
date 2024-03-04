<template>
  <div class="matchList-1">
    <div v-for="(item, index) in props.leagueList" :key="index" class="left1" @click="toLeague(item)">
      <SportsIcon :icon-src="item.gameType" class="itemImg" />
      <div class="font_2" v-html="highlightText(props.keyWords, item.name)"></div>
    </div>
    <div v-if="!props.leagueList.length" class="noData">
      <img class="img_1" src="@/assets/images/user/noData.png" />
      <p>
        {{ $t('user.noDataRelated') }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>

import { useRouter } from 'vue-router'
const $router = useRouter()
import store from '@/store'


const emit = defineEmits(['showSearchValue'])

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
  store.dispatch('user/getIfSearchInfo',item.id)
  emit('showSearchValue', false)
  $router.push({
    path: `/sport/${item.gameType}`,
    query: {
      leagueId: item.id
    }
  })
}
// 搜索字体颜色
const highlightText = (field: any, text: any) => {
  // 使用正则表达式替换文本中的相同字段，并添加样式
  const regex = new RegExp(field, 'gi')
  const highlightedText = text.replace(regex, `<span style="color:var(--color-bg-1);font-weight:600">${field}</span>`)
  return highlightedText
}

</script>

<style lang="scss" scoped>
.noData {
  width: 100%;
  text-align: center;
  font-family: PingFangSC-Medium;
  font-size: 24px;
  color: var(--color-no-data-font);
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
  // height: calc(100vh - 240px);
  height: calc(100vh - 275px);
  margin-top: 15px;
}

// 比赛
.left1 {
  margin-bottom: 20px;
  width: 678px;
  height: 120px;
  background: var(--color-search-box-frame);
  border-radius: 10px;
  padding: 28px 20px;
  display: flex;
  align-items: center;
  font-family: PingFangSC-Semibold;
  font-size: 24px;
  color: var(--color-search-box-text-1);
  letter-spacing: 0;
  font-weight: 600;

  .itemImg {
    // height: 64px;
    // width: 64px;
    font-size: 38px;
    margin-right: 15px;
    color: var(--color-search-box-text-2);
    font-weight: 400;
  }
}
</style>
