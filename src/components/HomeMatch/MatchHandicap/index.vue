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
<style lang="scss" scoped>
.homeMatchHandicap{
  color: #1f2630;
  .home-tabs-play{
    height: 68px;
    margin:0 40px;
    display: flex;
    align-items: center;
    .time{
      font-size: 24px;
      color: #000;
      font-weight: 500;
    }
    .play{
      flex:1;
      display: flex;
      align-items: center;
      .btn{
        border-radius: 8px;
        font-size: 24px;
        background: #eff2f2;
        color: #1f2630;
        width:110px;
        height:40px;
        text-align: center;
        margin-right:8px;
        &.active{
          background: #7642FD;
          color: #FFFFFF;
        }
        &:last-child{
          margin-right:0;
        }
      }
    }
  }
}
</style>

<!-- header -->
<style lang="scss" scoped>
.up-match__header{
  margin: 0 13px;
  padding: 20px 0;
}
.match-info{
  display: flex;
}
.match-team-logo{
  width: 80px;
  height: 80px;
  position: relative;
  img{
    width: 48px;
    height: 48px;
    position: absolute;
  }
  .home {
    left: 0;
    top: 0;
    z-index: 1;
  }
  .away {
    right: 0;
    bottom: 0;
    z-index: 0;
  }
}
.match-info__content{
  margin-left: 10px;
  flex: 1;
  .team{
    display: flex;
    .match-team-name{
      font-size: 28px;
      color: #1F2630;
      font-weight: 600;
    }
  }
  .up-match-league{
    display: flex;
    align-items: center;
    font-size: 24px;
    color: #546371;
    padding-top: 5px;
    .iconfont {
      font-size: 24px;
    }
    .text{
      margin-left: 10px;
    }
  }
  .up-match-time{
    font-size: 24px;
    color: #546371;
  }
}
</style>

<!-- footer -->
<style lang="scss" scoped>
.match-footer{
  height: 68px;
  display: flex;
  border-radius: 0 0 24px 24px;
  .match-footer__item{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    border-right: 1px solid #eff1f2;
    color: #546371;
    &:last-child{
      border-right: 0;
    }
    span{
      font-size: 24px;
      line-height: 24px;
    }
   .num {
      font-size: 24px;
      margin-left: 8px;
    }
    .arrow{
      font-weight: 600;
      color: #96a5aa;
      margin-left: 10px;
    }
  }
}
</style>

<!-- body -->
<style lang="scss" scoped>
.up-match {
  background-color: #eff2f2;
  border-radius: 32px;
  overflow: hidden;
  font-family: SF-Pro-Bold,PingFangSC-Semibold,MicrosoftYahei-Bold,system-ui;
  font-weight: 800;
  margin: 0 40px;
}
.border-bottom{
  border-bottom: 1px solid #dee2e6!important;
}
.match-betting-item{
  margin-top: 20px;
}
.match-betting-item__title{
  margin: 10px 20px;
  font-size: 24px;
  line-height: 24px;
  color: #546371;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.betting-option {
  position: relative;
  display: flex;
  flex-direction:column;
  flex: 1;
  padding: 16px 5px;
  background-color: #ffffff;
  border-radius: 26px;
  overflow: hidden;
  text-align: center;
  .up-betting-name{
    span{
      line-height: 24px;
      font-size: 24px;
      color: #546371;
    }
  }
  .details{
    .item{
      line-height: 26px;
      font-size: 26px;
      color: #000000;
    }
  }
}
.betting-select__list{
  width: 100%;
  display: flex;
  grid-gap: 20px;
  padding: 0 20px;
  box-sizing: border-box;
}
.up-match__body{
  padding-bottom: 20px;
}
</style>
