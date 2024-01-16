<template>
  <div class="statistic">
    <div class="statistic-item" v-for="(item, index) in list" :key="index">
      <div class="statistic-item__header">
        <span class="host">{{ item.homeTeamTime }}</span>
        <span class="text">{{ item.typeCnName }}</span>
        <span class="away">{{ item.awayTeamTime }}</span>
      </div>

      <div class="statistic-item__content">
        <section class="host" :style="{ flex: `${calcHomePer(item)} 1 0` }">
          <div class="bar"></div>
        </section>
        <section class="away" :style="{ flex: `${calcAwayPer(item)} 1 0` }">
          <div class="bar"></div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  data: {
    type: Array as any,
    default: () => []
  }
})
const list = ref(props.data)

const calcHomePer = (item: any) => {
  const homeNum = parseFloat(item.homeTeamTime)
  const awayNum = parseFloat(item.awayTeamTime)
  const rst = (homeNum / (homeNum + awayNum)) * 100
  return rst.toFixed(1)
}
const calcAwayPer = (item: any) => {
  const homeNum = parseFloat(item.homeTeamTime)
  const awayNum = parseFloat(item.awayTeamTime)
  const rst = (awayNum / (homeNum + awayNum)) * 100
  return rst.toFixed(1)
}
</script>

<style lang="scss" scoped>
.statistic {
  min-height: 300px;
  padding: 10px 0;
}
.statistic-item {
  padding: 14px 40px;
}
.statistic-item__header {
  display: flex;
  justify-content: space-between;
  .text {
    font-size: 24px;
    color: #0e3d66;
    text-align: center;
    font-weight: 500;
  }
  .host,
  .away {
    font-size: 32px;
    font-weight: 500;
  }
  .host {
    color: #48a3ff;
  }
  .away {
    color: #ff5c24;
  }
}

.statistic-item__content {
  display: flex;
  > section {
    &:not(:first-child) {
      margin-left: 8px;
    }
    .bar {
      width: 100%;
      height: 12px;
      transition: all 0.3s;
    }
  }
  > section.host {
    color: #48a3ff;
    .bar {
      background-color: #48a3ff;
    }
  }
  > section.away {
    color: #ff5c24;
    .bar {
      background-color: #ff5c24;
    }
  }
}
</style>
