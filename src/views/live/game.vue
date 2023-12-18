<template>
  <div class="game-page">
    <van-pull-refresh v-model="loading" @refresh="onRefresh">
      <div class="team">
        <div class="team-header">
          <div class="league">
            <img src="@/assets/images/live/s_foot.png" alt="" />
            <span>哥伦比亚- 地区联赛</span>
          </div>
          <div class="date">5/12 5:00 PM</div>
        </div>
        <div class="team-box">
          <div class="team-player host">
            <img src="@/assets/images/live/team_img.png" alt="" />
            <strong>孟买青少年</strong>
          </div>
          <div class="team-score">
            <span class="default">已结束</span>
          </div>
          <div class="team-player away">
            <img src="@/assets/images/live/team_img.png" alt="" />
            <strong>恩维加多[备]</strong>
          </div>
        </div>
      </div>

      <div class="bettings">
        <van-collapse v-model="activeNames">
          <!-- 竞猜分析 -->
          <van-collapse-item title="竞猜分析" name="0" :border="false">
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
          </van-collapse-item>

          <!-- 更多玩法 -->
          <van-collapse-item title="滚球 亚洲让分盘" name="1" :border="false">
            <div class="bet">
              <div class="bet-item" v-for="item in 3" :key="item">
                <div class="top">
                  <span>查部伊</span>
                  <span>-0.25</span>
                </div>
                <div class="bot">
                  <span class="num">2.37</span>
                  <span class="ico">
                    <img src="@/assets/images/live/sub.png" alt="" />
                  </span>
                </div>
              </div>
            </div>
          </van-collapse-item>
        </van-collapse>
      </div>
    </van-pull-refresh>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { showToast } from 'vant'

const activeNames = ref(['0'])

const loading = ref(false)
const onRefresh = () => {
  setTimeout(() => {
    showToast('刷新成功')
    loading.value = false
  }, 1000)
}
</script>

<style lang="scss" scoped>
.game-page {
  padding: 0 36px;
  padding-bottom: 88px;
}

.team {
  height: 252px;
  background: url('@/assets/images/live/game_mask.png') no-repeat;
  background-size: auto 100%;
  margin: 40px 0 20px 0;
  font-size: 24px;
  color: #ffffff;
  letter-spacing: 0;
  font-weight: 500;
  &-header {
    height: 46px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    color: #b4bbc2;
    .league {
      display: flex;
      align-items: center;
      > img {
        width: 24px;
        height: 24px;
        margin-right: 6px;
      }
    }
  }
  &-box {
    display: flex;
    margin: 40px 0 0 0;
    padding: 0 33px;
  }

  &-player {
    width: 220px;
    display: flex;
    flex-direction: column;
    img {
      display: block;
      width: 62px;
      height: 62px;
      margin-bottom: 17px;
    }
    strong {
      display: block;
      max-width: 200px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    &.host {
      align-items: flex-start;
    }
    &.away {
      align-items: flex-end;
    }
  }

  &-score {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .default {
      color: #b1b8bf;
    }
  }
}

.bettings {
  .van-hairline--top-bottom:after {
    border: none;
  }
  .van-collapse-item {
    background: #eff1f2;
    border-radius: 10px;
    margin-bottom: 20px;
    :deep(.van-collapse-item__title) {
      background: none;
      color: #1f2630;
      font-weight: 700;
      font-size: 24px;
      .van-icon-arrow {
        color: #1f2630;
        font-weight: 700;
        font-size: 24px;
      }
    }
    :deep(.van-collapse-item__content) {
      background: none;
      padding: 0;
    }
  }

  .bet {
    font-family: PingFangSC-Medium;
    font-size: 24px;
    display: flex;
    flex-wrap: wrap;
    &-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 310px;
      height: 94px;
      background: #ffffff;
      color: #546371;
      border-radius: 20px;
      margin: 0 0 20px 20px;
      &.active {
        background: #7643fd;
        color: #fff;
      }
    }
    .top {
      font-size: 24px;
      letter-spacing: 0;
      font-weight: 500;
      text-align: center;
    }
    .bot {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 28px;
      margin-top: 4px;
      img {
        display: block;
        width: 100%;
      }
      .ico {
        width: 22px;
        margin-left: 12px;
      }
      .lock {
        width: 22px;
      }
    }
  }

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
}
</style>
