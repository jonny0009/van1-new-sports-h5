<template>
  <div class="homeMatchHandicap">
    <div class="home-tabs-play">
      <div class="time">
        周一 27/11
      </div>
      <div class="play">
        <div class="flex-1"></div>
        <span class="btn active">让分</span>
        <span class="btn active">大小</span>
        <span class="btn active">独赢</span>
      </div>
    </div>
    <div class="home-match">
      <div calss="up-match-group__body">
        <div class="up-match">
          <!--  -->
          <div class="up-match__header border-bottom">
            <div class="match-info">
              <div class="match-team-logo">
                <img
                  class="my-image home"
                  src="https://2up-pro-bucket.s3.ap-southeast-1.amazonaws.com/a20575f19a004a102cd23ff21049cb87ad19670d.png"
                  alt=""
                  style="object-fit: contain;"
                >
                <img
                  class="my-image away"
                  src="https://2up-pro-bucket.s3.ap-southeast-1.amazonaws.com/459758119fe1c93df257d17ba261dd6e6dfbcc42.png"
                  alt=""
                  style="object-fit: contain;"
                >
              </div>
              <div class="match-info__content">
                <div class="team">
                  <span class="match-team-name">云达不莱梅 v 莱比锡红牛</span>
                  <div class="flex-1"></div>
                  <div class="up-match-time">1:30 AM</div>
                </div>
                <div class="up-match-league">
                  <SportsIcon :icon-src="'FT'" />
                  <div class="text">德国 - 甲级联赛</div>
                </div>
              </div>
            </div>
          </div>

          <!--  -->
          <div class="up-match__body">
            <!-- 全场 亚洲让分盘 -->
            <div class="match-betting-item">
              <div class="match-betting-item__title">
                <div class="flex-cross-center">
                  全场 亚洲让分盘
                  <van-popover
                    placement="top"
                    theme="dark"
                    trigger="click"
                  >
                    <div class="popover-text">
                      全场让分盘
                    </div>
                    <template #reference>
                      <van-icon name="info" />
                    </template>
                  </van-popover>
                </div>
              </div>
              <div class="match-betting-item__content">
                <div class="betting-select">
                  <div class="betting-select__list">
                    <div class="betting-option">
                      <span class="up-betting-name">
                        <span class="text">柏林联 </span>
                        <span class="point">-0.5</span>
                      </span>
                      <div class="details">
                        <div class="item">1.88</div>
                      </div>
                    </div>
                    <div class="betting-option">
                      <span class="up-betting-name">
                        <span class="text">柏林联 </span>
                        <span class="point">-0.5</span>
                      </span>
                      <div class="details">
                        <div class="item">1.88</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- 全场 大小盘  -->
            <div class="match-betting-item">
              <div class="match-betting-item__title">
                <div class="flex-cross-center">
                  全场 大小盘
                </div>
              </div>
              <div class="match-betting-item__content">
                <div class="betting-select">
                  <div class="betting-select__list">
                    <div class="betting-option">
                      <span class="up-betting-name">
                        <span class="text">大于</span>
                        <span class="point">2.5</span>
                      </span>
                      <div class="details">
                        <div class="item">1.88</div>
                      </div>
                    </div>
                    <div class="betting-option">
                      <span class="up-betting-name">
                        <span class="text">小于</span>
                        <span class="point">2.5</span>
                      </span>
                      <div class="details">
                        <div class="item">1.88</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- 全场 1X2 -->
            <div class="match-betting-item">
              <div class="match-betting-item__title">
                <div class="flex-cross-center">
                  全场 1X2
                </div>
              </div>
              <div class="match-betting-item__content">
                <div class="betting-select">
                  <div class="betting-select__list">
                    <div class="betting-option">
                      <span class="up-betting-name">
                        <span class="text">柏林联</span>
                      </span>
                      <div class="details">
                        <div class="item">1.88</div>
                      </div>
                    </div>
                    <div class="betting-option">
                      <span class="up-betting-name">
                        <span class="text">柏林联</span>
                      </span>
                      <div class="details">
                        <div class="item">1.88</div>
                      </div>
                    </div>
                    <div class="betting-option">
                      <span class="up-betting-name">
                        <span class="text">柏林联</span>
                      </span>
                      <div class="details">
                        <div class="item">1.88</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--

             -->
          </div>
        </div>
      </div>
      <!--  -->

      <div class="up-match__footer">
        <div class="match-footer">
          <div class="match-footer__item">
            <span>更多玩法</span>
            <span class="num">149</span>
            <van-icon class="arrow" name="arrow" />
          </div>
          <div class="match-footer__item">
            <span>投注动态</span>
            <span class="num">45</span>
            <van-icon class="arrow" name="arrow" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import SportsIcon from '@/components/Button/SportsIcon/index.vue'
</script>
