<template>
  <div class="homeMatchHandicap">
    <div class="home-tabs-play">
      <div class="time">
        周一 27/11
      </div>
      <div class="play">
        <div class="flex-1"></div>
        <span class="btn">让分</span>
        <span class="btn">大小</span>
        <span class="btn">独赢</span>
        <span class="btn">比分</span>
      </div>
    </div>
    <div class="home-match">
      <!--  -->
      <div class="up-match__header border-bottom">
        <div class="match-info">
          <div class="match-team-logo">
            <img class="my-image home" src="https://2up-pro-bucket.s3.ap-southeast-1.amazonaws.com/a20575f19a004a102cd23ff21049cb87ad19670d.png" alt="">
            <img class="my-image away" src="https://2up-pro-bucket.s3.ap-southeast-1.amazonaws.com/459758119fe1c93df257d17ba261dd6e6dfbcc42.png" alt="">
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
      <div data-v-0e8d7156="" class="up-match__body"><div data-v-2e9a0bed="" data-v-0e8d7156="" class="match-betting-item"><div data-v-2e9a0bed="" class="match-betting-item__title"><div data-v-2e9a0bed="" class="flex-cross-center">全场 亚洲让分盘 <span data-v-0c5afda6="" data-v-2e9a0bed="" class="up-betting-desc"><i data-v-0c5afda6="" class="van-badge__wrapper icon-2up icon-2up-about my-icon up-betting-desc__icon up-betting-desc__icon"><!----><!----><!----></i><div data-v-0c5afda6="" class="up-betting-desc__triangle" style="display: none;"></div><div data-v-0c5afda6="" class="up-betting-desc__content" style="top: 0px; display: none;">全场让分盘</div></span></div></div><div data-v-2e9a0bed="" class="match-betting-item__content"><div data-v-729d85be="" data-v-2e9a0bed="" class="betting-select"><div data-v-729d85be="" class="betting-select__list" style="grid-template-columns: 1fr 1fr;"><div data-v-958c0514="" data-v-729d85be="" class="betting-option" market-id="0HC521359992360800256"><span data-v-14b728a8="" data-v-958c0514="" class="up-betting-name betslipLine"><span data-v-14b728a8="" class="text">云达不莱梅 </span><span data-v-14b728a8="" class="point">+1</span></span><div data-v-958c0514="" class="details"><span data-v-e861da40="" data-v-958c0514="" class="up-betting-odds-animate"><i data-v-e861da40="" class="van-badge__wrapper icon-2up icon-2up-down2 my-icon trend-icon down trend-icon down"><!----><!----><!----></i><div data-v-e861da40="" class="container"><div data-v-e861da40="" class="item">1.95</div></div><i data-v-e861da40="" class="van-badge__wrapper icon-2up icon-2up-superior2 my-icon trend-icon up trend-icon up"><!----><!----><!----></i></span></div></div><div data-v-958c0514="" data-v-729d85be="" class="betting-option" market-id="0HC521359992360800256"><span data-v-14b728a8="" data-v-958c0514="" class="up-betting-name betslipLine"><span data-v-14b728a8="" class="text">莱比锡红牛 </span><span data-v-14b728a8="" class="point">-1</span></span><div data-v-958c0514="" class="details"><span data-v-e861da40="" data-v-958c0514="" class="up-betting-odds-animate"><i data-v-e861da40="" class="van-badge__wrapper icon-2up icon-2up-down2 my-icon trend-icon down trend-icon down"><!----><!----><!----></i><div data-v-e861da40="" class="container"><div data-v-e861da40="" class="item">1.98</div></div><i data-v-e861da40="" class="van-badge__wrapper icon-2up icon-2up-superior2 my-icon trend-icon up trend-icon up"><!----><!----><!----></i></span></div></div></div><!----></div></div></div><div data-v-2e9a0bed="" data-v-0e8d7156="" class="match-betting-item"><div data-v-2e9a0bed="" class="match-betting-item__title"><div data-v-2e9a0bed="" class="flex-cross-center">全场 大小盘 <!----></div></div><div data-v-2e9a0bed="" class="match-betting-item__content"><div data-v-729d85be="" data-v-2e9a0bed="" class="betting-select"><div data-v-729d85be="" class="betting-select__list" style="grid-template-columns: 1fr 1fr;"><div data-v-958c0514="" data-v-729d85be="" class="betting-option" market-id="0OU521359992369188864"><span data-v-14b728a8="" data-v-958c0514="" class="up-betting-name betslipLine"><span data-v-14b728a8="" class="text">大于 </span><span data-v-14b728a8="" class="point">3.25</span></span><div data-v-958c0514="" class="details"><span data-v-e861da40="" data-v-958c0514="" class="up-betting-odds-animate"><i data-v-e861da40="" class="van-badge__wrapper icon-2up icon-2up-down2 my-icon trend-icon down trend-icon down"><!----><!----><!----></i><div data-v-e861da40="" class="container"><div data-v-e861da40="" class="item">1.92</div></div><i data-v-e861da40="" class="van-badge__wrapper icon-2up icon-2up-superior2 my-icon trend-icon up trend-icon up"><!----><!----><!----></i></span></div></div><div data-v-958c0514="" data-v-729d85be="" class="betting-option" market-id="0OU521359992369188864"><span data-v-14b728a8="" data-v-958c0514="" class="up-betting-name betslipLine"><span data-v-14b728a8="" class="text">小于 </span><span data-v-14b728a8="" class="point">3.25</span></span><div data-v-958c0514="" class="details"><span data-v-e861da40="" data-v-958c0514="" class="up-betting-odds-animate"><i data-v-e861da40="" class="van-badge__wrapper icon-2up icon-2up-down2 my-icon trend-icon down trend-icon down"><!----><!----><!----></i><div data-v-e861da40="" class="container"><div data-v-e861da40="" class="item">1.98</div></div><i data-v-e861da40="" class="van-badge__wrapper icon-2up icon-2up-superior2 my-icon trend-icon up trend-icon up"><!----><!----><!----></i></span></div></div></div><!----></div></div></div><div data-v-2e9a0bed="" data-v-0e8d7156="" class="match-betting-item"><div data-v-2e9a0bed="" class="match-betting-item__title"><div data-v-2e9a0bed="" class="flex-cross-center">全场 1X2 <!----></div></div><div data-v-2e9a0bed="" class="match-betting-item__content"><div data-v-729d85be="" data-v-2e9a0bed="" class="betting-select"><div data-v-729d85be="" class="betting-select__list" style="grid-template-columns: 1fr 1fr 1fr;"><div data-v-958c0514="" data-v-729d85be="" class="betting-option" market-id="0ML521359992364994560"><span data-v-14b728a8="" data-v-958c0514="" class="up-betting-name betslipLine"><span data-v-14b728a8="" class="text">云达不莱梅</span><span data-v-14b728a8="" class="point"></span></span><div data-v-958c0514="" class="details"><span data-v-e861da40="" data-v-958c0514="" class="up-betting-odds-animate"><i data-v-e861da40="" class="van-badge__wrapper icon-2up icon-2up-down2 my-icon trend-icon down trend-icon down"><!----><!----><!----></i><div data-v-e861da40="" class="container"><div data-v-e861da40="" class="item">5.10</div></div><i data-v-e861da40="" class="van-badge__wrapper icon-2up icon-2up-superior2 my-icon trend-icon up trend-icon up"><!----><!----><!----></i></span></div></div><div data-v-958c0514="" data-v-729d85be="" class="betting-option" market-id="0ML521359992364994560"><span data-v-14b728a8="" data-v-958c0514="" class="up-betting-name betslipLine"><span data-v-14b728a8="" class="text">和局</span><span data-v-14b728a8="" class="point"></span></span><div data-v-958c0514="" class="details"><span data-v-e861da40="" data-v-958c0514="" class="up-betting-odds-animate"><i data-v-e861da40="" class="van-badge__wrapper icon-2up icon-2up-down2 my-icon trend-icon down trend-icon down"><!----><!----><!----></i><div data-v-e861da40="" class="container"><div data-v-e861da40="" class="item">4.58</div></div><i data-v-e861da40="" class="van-badge__wrapper icon-2up icon-2up-superior2 my-icon trend-icon up trend-icon up"><!----><!----><!----></i></span></div></div><div data-v-958c0514="" data-v-729d85be="" class="betting-option" market-id="0ML521359992364994560"><span data-v-14b728a8="" data-v-958c0514="" class="up-betting-name betslipLine"><span data-v-14b728a8="" class="text">莱比锡红牛</span><span data-v-14b728a8="" class="point"></span></span><div data-v-958c0514="" class="details"><span data-v-e861da40="" data-v-958c0514="" class="up-betting-odds-animate"><i data-v-e861da40="" class="van-badge__wrapper icon-2up icon-2up-down2 my-icon trend-icon down trend-icon down"><!----><!----><!----></i><div data-v-e861da40="" class="container"><div data-v-e861da40="" class="item">1.58</div></div><i data-v-e861da40="" class="van-badge__wrapper icon-2up icon-2up-superior2 my-icon trend-icon up trend-icon up"><!----><!----><!----></i></span></div></div></div><!----></div></div></div><div data-v-2e9a0bed="" data-v-0e8d7156="" class="match-betting-item"><div data-v-2e9a0bed="" class="match-betting-item__title"><div data-v-2e9a0bed="" class="flex-cross-center">正确比分 <!----></div></div><div data-v-2e9a0bed="" class="match-betting-item__content"><div data-v-9a57d5ec="" data-v-2e9a0bed="" class="up-betting-score-input"><div data-v-9a57d5ec="" class="inputs"><div data-v-9a57d5ec="" class="input"><div data-v-9a57d5ec="" class="label">云达不莱梅</div><i data-v-9a57d5ec="" class="van-badge__wrapper icon-2up icon-2up-jian my-icon disabled disabled"><!----><!----><!----></i><div data-v-9a57d5ec="" class="value">0</div><i data-v-9a57d5ec="" class="van-badge__wrapper icon-2up icon-2up-jia my-icon"><!----><!----><!----></i></div><div data-v-9a57d5ec="" class="input"><div data-v-9a57d5ec="" class="label">莱比锡红牛</div><i data-v-9a57d5ec="" class="van-badge__wrapper icon-2up icon-2up-jian my-icon disabled disabled"><!----><!----><!----></i><div data-v-9a57d5ec="" class="value">0</div><i data-v-9a57d5ec="" class="van-badge__wrapper icon-2up icon-2up-jia my-icon"><!----><!----><!----></i></div></div><div data-v-958c0514="" data-v-9a57d5ec="" class="betting-option"><span data-v-14b728a8="" data-v-958c0514="" class="up-betting-name betslipLine"><span data-v-14b728a8="" class="text">0:0</span><span data-v-14b728a8="" class="point"></span></span><div data-v-958c0514="" class="details"><span data-v-e861da40="" data-v-958c0514="" class="up-betting-odds-animate"><i data-v-e861da40="" class="van-badge__wrapper icon-2up icon-2up-down2 my-icon trend-icon down trend-icon down"><!----><!----><!----></i><div data-v-e861da40="" class="container"><div data-v-e861da40="" class="item">21.00</div></div><i data-v-e861da40="" class="van-badge__wrapper icon-2up icon-2up-superior2 my-icon trend-icon up trend-icon up"><!----><!----><!----></i></span></div></div></div></div></div></div>

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
    margin:0 40px;
    display: flex;
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
        background: #7642FD;
        border-radius: 8px;
        font-size: 24px;
        color: #FFFFFF;
        width:110px;
        height:40px;
        text-align: center;
        margin-right:8px;
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
  padding: 26px;
}
.match-info{
  padding: 0 10px;
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
    font-size: 24px;
    color: #546371;
    padding-top: 5px;
  }
  .up-match-league{
    display: flex;
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
