<template>
  <div class="analyze">
    <van-swipe indicator-color="#9417D5">
      <van-swipe-item v-for="item in 3" :key="item">
        <div class="analyze-header">
          <div class="host">
            <img src="@/assets/images/live/sub_d.png" alt="" />
            <span>水晶宫 U21</span>
          </div>
          <div class="away">
            <span>西汉姆 U21</span>
            <img src="@/assets/images/live/sub_u.png" alt="" />
          </div>
        </div>
        <div class="analyze-item">
          <div class="analyze-title">独赢 — 投注次数</div>
          <div class="analyze-content">
            <section class="host" style="flex: 33.3 1 0%">
              <div class="percent">33.3%</div>
              <div class="bar"></div>
              <div class="value">
                <span>1</span>
              </div>
            </section>
            <section class="draw" style="flex: 0 1 0%">
              <div class="percent">0%</div>
              <div class="bar"></div>
              <div class="value">
                <span>0</span>
              </div>
            </section>
            <section class="away active" style="flex: 66.7 1 0%">
              <div class="percent">66.7%</div>
              <div class="bar"></div>
              <div class="value">
                <span>3</span>
              </div>
            </section>
          </div>
        </div>
        <div class="analyze-item">
          <div class="analyze-title">独赢 — 投注次数</div>
          <div class="analyze-content">
            <section class="host" style="flex: 33.3 1 0%">
              <div class="percent">33.3%</div>
              <div class="bar"></div>
              <div class="value">
                <span>1</span>
              </div>
            </section>
            <section class="draw" style="flex: 0 1 0%">
              <div class="percent">0%</div>
              <div class="bar"></div>
              <div class="value">
                <span>0</span>
              </div>
            </section>
            <section class="away active" style="flex: 66.7 1 0%">
              <div class="percent">66.7%</div>
              <div class="bar"></div>
              <div class="value">
                <span>3</span>
              </div>
            </section>
          </div>
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.analyze {
  height: 420px;
  padding: 4px;
  font-size: 24px;
  .van-swipe {
    height: 100%;
    background: #ffffff;
    border-radius: 10px;
    .van-swipe-item {
      padding: 0 8px;
    }
  }

  &-header {
    padding: 16px 8px 10px 8px;
    border-bottom: 1px solid #e5ecf3;
    display: flex;
    align-items: center;
    justify-content: space-between;
    > div {
      display: flex;
      align-items: center;
      color: #546371;
      img {
        width: 24px;
        height: 24px;
      }
    }
    .host img {
      margin-right: 8px;
    }
    .away img {
      margin-left: 8px;
    }
  }

  &-title {
    font-weight: 800;
    color: #1f2630;
    padding: 16px 0;
    text-align: center;
  }

  &-content {
    display: flex;
    padding: 0 40px;
    > section {
      &:not(:first-child) {
        margin-left: 8px;
      }
      .bar {
        width: 100%;
        height: 8px;
        margin-top: 4px;
        transition: all 0.3s;
      }
      .value {
        visibility: hidden;
        font-size: 24px;
        line-height: 1.6;
        transition: all 0.3s;
      }
      .percent {
        font-weight: 800;
        font-size: 24px;
        line-height: 1.6;
      }
    }
    > section.host {
      color: #0065cd;
      .bar {
        background-color: #0065cd;
      }
    }
    > section.draw {
      color: #96a5aa;
      .bar {
        background-color: #96a5aa;
      }
    }
    > section.away {
      text-align: right;
      color: #cb0028;
      .bar {
        background-color: #cb0028;
      }
    }
    > section.active {
      .bar {
        height: 12px;
        margin-top: 0;
      }
      .value {
        visibility: visible;
      }
    }
  }
}
</style>
