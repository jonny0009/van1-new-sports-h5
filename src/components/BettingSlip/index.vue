<template>
  <div class="betting-slip-popup" :class="{ open }">
    <div class="betting-slip-header" @click="toogle">
      <div class="bet-header-left">
        <span class="bet-icon"><van-icon name="orders-o" /></span>
        <span class="bet-title">投注单</span>
        <span class="bet-arrow"><van-icon name="arrow-down" /></span>
      </div>
      <div v-if="open" class="bet-switch-wrap">
        <span class="label">接受陪率变化</span>
        <van-switch
          v-model="checked"
          :size="20"
          active-color="#fff"
          inactive-color="#baa0fe"
          class="bet-ior-switch"
          @click.stop
        >
          <template #node>
            <div class="icon-wrapper">
              <van-icon :name="checked ? 'success' : 'cross'" color="#9912fe" />
            </div>
          </template>
        </van-switch>
      </div>
      <div v-else class="bet-all-ior">@0.00</div>

    </div>
    <div class="betting-slip-container">
      <div class="bet-tab">
        <div
          v-for="(item, index) in tabs"
          :key="index"
          :class="{ active: type === item.type }"
          class="bet-item"
          @click="type = item.type"
        >
          {{ item.title }}
        </div>
        <div
          class="tab-line"
          :style="{
            left: tableLeft
          }"
        ></div>
      </div>

    </div>

  </div>
</template>
<script lang="ts" setup>
import { ref, computed } from 'vue'
const open = ref(!false)
const checked = ref(false)
const type = ref(1)
const tabs = ref([
  {
    type: 1,
    title: '单关'
  },
  {
    type: 2,
    title: '串关'
  },
  {
    type: 3,
    title: '进行中'
  }
])
const tableLeft = computed(() => {
  return `calc(100% / 3 * ${type.value - 1} + (100% / 3 - 27vw) / 2 )`
})

const toogle = () => {
  open.value = !open.value
}

</script>
<style lang="scss" scoped>
.betting-slip-popup {
  max-height: calc(100vh - 40px);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background: #fff;
  z-index: 8;
  display: flex;
  flex-direction: column;
  transform: translateY(100%) translateY(-185px);
  transition: transform .3s;

  &.open {
    transform: translateY(100%) translateY(-615px);
  }
}

.betting-slip-header {
  height: 96px;
  padding-left: 40px;
  padding-right: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-image: linear-gradient(270deg, #9C10FE 0%, #7541FD 100%);
  border-radius: 10px 10px 0px 0px;

  .bet-icon {
    width: 30px;
    color: #FFFFFF;
  }

  .bet-title {
    margin-left: 22px;
    margin-right: 30px;
    font-family: PingFangSC-Medium;
    font-size: 28px;
    color: #FFFFFF;
    letter-spacing: 0;
    text-align: center;
    font-weight: 500;
  }

  .bet-arrow {
    width: 25px;
    color: #FFFFFF;
  }

  .bet-all-ior {
    font-family: Arial-BoldMT;
    font-size: 32px;
    color: #FFFFFF;
    letter-spacing: 0;
    text-align: center;
    font-weight: 700;
  }

  .bet-switch-wrap {
    display: flex;
    align-items: center;

    .label {
      font-family: PingFangSC-Medium;
      font-size: 24px;
      color: #FFFFFF;
      letter-spacing: 0;
      text-align: center;
      font-weight: 500;
    }

    .bet-ior-switch {
      margin-left: 10px;
    }
  }
}

.betting-slip-container {
  height: 430px;

  .bet-tab {
    position: relative;
    display: flex;
    align-items: center;
    height: 80px;

    .bet-item {
      flex: 1;
      text-align: center;
      font-family: PingFangSC-Medium;
      font-size: 28px;
      color: #919191;
      letter-spacing: 0;
      text-align: center;
      font-weight: 500;

      &.active {
        color: #000000;
      }

    }

    .tab-line {
      position: absolute;
      bottom: 0;
      height: 6px;
      left: 0;
      background-color: #000;
      width: 27vw;
      transition: all .3s;
      border-radius: 3px;
    }
  }
}
</style>
