<template>
  <div class="panel">
    <van-collapse v-model="activeNames">
      <van-collapse-item name="1" title="竞猜分析" :border="false">
        <div class="panel-main">
          <div class="panel-main__wrapper">
            <PanelAnalyze />
          </div>
        </div>
      </van-collapse-item>

      <van-collapse-item name="2" title="比分" :border="false">
        <div class="panel-main">
          <div class="panel-main__wrapper">2</div>
        </div>
      </van-collapse-item>

      <van-collapse-item name="3" title="统计信息" :border="false">
        <div class="panel-main">
          <div class="panel-main__wrapper">3</div>
        </div>
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'
const PanelAnalyze = defineAsyncComponent(() => import('@/components/Match/PanelAnalyze.vue'))

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
</style>
