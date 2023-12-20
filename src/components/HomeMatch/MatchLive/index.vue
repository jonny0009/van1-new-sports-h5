<template>
  <div class="homeMatchHandicap">
    <div class="home-tabs-play">
      <div class="time">
        周一 27/11
      </div>
    </div>
    <div class="home-match">
      <div calss="up-match-group__body">
        <div class="up-match">

          <!--  -->
          <div class="match-info-live__header border-bottom">
            <div class="up-match-league">
              <div class="text">印度 - 德里超级联赛</div>
            </div>
            <div class="flex-cross-center">
              <div class="up-match-time">
                <SportsIcon :icon-src="'live'" />
                上半场 7
              </div>
            </div>
          </div>

          <!--  -->
          <div class="up-match-score">
            <div class="item">
              <img class="my-image img" :src="teamHome" alt="">
              <div class="name">丁科·迪涅夫</div>
              <div class="container">
                <div class="value">0</div>
              </div>
            </div>
            <div class="item">
              <img class="my-image img" :src="teamAway" alt="">
              <div class="name">彼得·亚马基宁</div>
              <div class="container">
                <div class="value">0</div>
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
import teamAway from '@/assets/images/home/match/team-away.svg'
import teamHome from '@/assets/images/home/match/team-home.svg'
</script>
