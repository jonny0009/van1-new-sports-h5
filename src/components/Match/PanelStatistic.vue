<template>
  <div class="statistic">
    <div class="statistic-item" v-for="item in 8" :key="item">
      <div class="statistic-item__header">
        <span class="host">81</span>
        <span class="text">危险进攻</span>
        <span class="away">76</span>
      </div>

      <div class="statistic-item__content">
        <section class="host" style="flex: 33.3 1 0%">
          <div class="bar"></div>
        </section>
        <section class="away" style="flex: 66.7 1 0%">
          <div class="bar"></div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.statistic {
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
    // .value {
    //   visibility: hidden;
    //   font-size: 24px;
    //   line-height: 1.6;
    //   transition: all 0.3s;
    // }
    // .percent {
    //   font-weight: 800;
    //   font-size: 24px;
    //   line-height: 1.6;
    // }
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
