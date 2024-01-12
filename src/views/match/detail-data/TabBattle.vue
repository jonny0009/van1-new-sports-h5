<template>
  <div class="panel">
    <van-collapse v-model="activeNames">
      <van-collapse-item name="1" title="阵容图" :border="false">
        <div class="panel-main">
          <div class="panel-main__wrapper">
            <PanelBattle />

            <!-- 替补阵容 -->
            <div class="battle-wating">
              <h3 class="title">替补阵容</h3>
              <div class="team-name">
                <span class="host">陶森大学老虎</span>
                <span class="away">石溪</span>
              </div>
              <div class="team-table"></div>
            </div>
            <!-- end -->
          </div>
        </div>
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'
const PanelBattle = defineAsyncComponent(() => import('@/components/Match/PanelBattle.vue'))

const activeNames = ref(['1'])
</script>

<style lang="scss" scoped>
.panel {
  .van-collapse {
    padding: 0 16px;
    &::after {
      border: none;
    }
  }
  .van-collapse-item {
    background: var(--color-live-collapse-item-bg);
    border-radius: 10px;
    margin-bottom: 20px;
    :deep(.van-collapse-item__title) {
      background: none;
      color: var(--color-live-collapse-item-title);
      font-weight: 700;
      .van-icon-arrow {
        color: var(--color-live-collapse-item-title);
        font-weight: 700;
      }
    }
    :deep(.van-collapse-item__content) {
      background: none;
      padding: 0;
    }
  }

  &-main {
    font-size: 24px;
    padding: 4px;
  }

  &-main__wrapper {
    background: #f4f5fa;
    min-height: 300px;
    border-radius: 16px;
  }
}

.battle-wating {
  padding: 8px;
  .title {
    color: var(--color-live-collapse-item-title);
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 10px;
  }
  .team-name {
    display: flex;
    > span {
      flex: 1;
      height: 52px;
      color: #fff;
      border-style: solid;
      border-width: 2px;
      border-radius: 26px;
      font-size: 24px;
      text-align: center;
      line-height: 52px;
    }
    > span.host {
      background: #48a3ff;
      border-color: #48a3ff;
      margin-right: 10px;
    }
    > span.away {
      background: #db7f91;
      border-color: #db7f91;
      margin-left: 10px;
    }
  }
}
</style>
