<template>
  <div class="panel-with">
    <div class="item" v-for="item in 2" :key="item">
      <div class="header">
        <img class="avatar" src="@/assets/images/live/avatar.png" alt="" />
        <div class="title">
          <strong>Celeste_Serenity</strong>
          <span>@wely123456</span>
        </div>
        <div class="right">
          <span class="state">进行中</span>
        </div>
      </div>

      <div class="wrapper">
        <div class="summary">切尔西对战皇家马德里精彩分析</div>
        <div class="label">
          <div class="label-flex">
            <img src="@/assets/images/live/s_foot.png" alt="" />
            <span>中华台北 - 超级联赛</span>
          </div>
          <div class="label-flex">
            <img src="@/assets/images/live/live_purple.png" alt="" />
            <span>半场</span>
          </div>
        </div>
        <div class="team">
          <div class="team-cell">
            <div class="palyer">
              <img src="@/assets/images/live/team_img.png" alt="" />
              <span>台北天龙1</span>
            </div>
            <div class="score">
              <span>3</span>
            </div>
          </div>
          <div class="team-cell">
            <div class="palyer">
              <img src="@/assets/images/live/team_img.png" alt="" />
              <span>台北天龙2</span>
            </div>
            <div class="score">
              <span>7</span>
            </div>
          </div>
        </div>
        <div class="ticket">
          <div class="ticket-txt">
            <div class="icon">
              <img src="" alt="" />
            </div>
            <div class="info">
              <strong>大于 2</strong>
              <span>全场 大小盘</span>
            </div>
          </div>
          <div class="ticket-bet">
            <span>@3.64</span>
          </div>
        </div>
        <div class="betting">
          <div class="betting-cell bt1">
            <strong>投注额：</strong>
            <span>1.00</span>
          </div>
          <div class="betting-cell bt2">
            <strong>可赔付额：</strong>
            <span>1.00</span>
          </div>
        </div>

        <div class="footer">
          <div class="button">
            <span>跟注</span>
            <img src="@/assets/images/live/live_white_r.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// import { reactive, ref } from 'vue'
</script>

<style lang="scss" scoped>
.panel-with {
  padding: 0 36px;
  > .item {
    margin-bottom: 25px;
  }
  .header {
    display: flex;
    justify-content: space-between;
    position: relative;
    height: 68px;
    padding: 0 0 0 56px;
    margin: 0 0 20px 0;
    .avatar {
      display: block;
      width: 56px;
      position: absolute;
      left: 0;
      top: 0;
    }
    .title {
      font-size: 24px;
      color: #1f2630;
      letter-spacing: 0;
      font-weight: 400;
      line-height: 1.4;
      padding: 0 0 0 20px;
      > strong {
        display: block;
        font-size: 28px;
        color: #1f2630;
        font-weight: 700;
        max-width: 400px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
    .state {
      font-weight: 700;
      font-size: 24px;
      color: #546371;
    }
  }

  .wrapper {
    background: rgba(239, 241, 242, 0.8);
    border-radius: 22px;
    padding: 0 10px;
    .summary {
      display: flex;
      align-items: center;
      font-size: 28px;
      color: #1f2630;
      letter-spacing: 0;
      font-weight: 500;
      padding: 15px 10px;
      border-bottom: 1px solid #e5ecf3;
    }
    .label {
      padding: 20px 10px;
      &-flex {
        display: flex;
        margin-bottom: 4px;
      }
      img {
        display: block;
        width: auto;
        height: 28px;
        margin-right: 10px;
      }
      span {
        font-size: 24px;
        color: #546371;
        letter-spacing: 0;
        font-weight: 600;
      }
    }
    .team {
      font-size: 28px;
      color: #1f2630;
      letter-spacing: 0;
      font-weight: 600;
      height: 130px;
      background: #e2e6e8;
      border-radius: 20px;
      padding: 15px 12px 0 15px;
      &-cell {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 0 8px 0;
        .palyer {
          display: flex;
          align-items: center;
          > img {
            display: block;
            width: 48px;
            margin-right: 20px;
          }
          > span {
            max-width: 400px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
        .score {
          > span {
            display: block;
            min-width: 40px;
            height: 40px;
            padding: 0 20px;
            background: #ffffff;
            border-radius: 8px;
          }
        }
      }
    }
    .ticket {
      font-size: 28px;
      color: #1f2630;
      letter-spacing: 0;
      font-weight: 600;
      height: 100px;
      background: #e2e6e8;
      border-radius: 20px;
      margin: 10px 0 0 0;
      display: flex;
      justify-content: space-between;
      padding: 12px 10px;
      &-txt {
        display: flex;
        align-items: center;
        .icon {
          width: 60px;
          height: 60px;
          background: #96a5aa;
          border-radius: 60%;
          margin-right: 15px;
        }
        .info {
          > span {
            display: block;
            font-size: 24px;
            color: #546371;
            letter-spacing: 0;
            font-weight: 600;
          }
        }
      }
      &-bet {
        font-size: 32px;
        color: #ff0000;
        letter-spacing: 0;
        font-weight: 600;
      }
    }
    .betting {
      color: #546371;
      letter-spacing: 0;
      font-weight: 600;
      padding: 10px 0 0;
      &-cell {
        display: flex;
        justify-content: space-between;
        align-items: center;
        line-height: 1.6;
        &.bt1 {
          font-size: 24px;
        }
        &.bt2 {
          font-size: 28px;
        }
      }
      &-cell.bt2 > span {
        color: #7642fd;
      }
    }
    .footer {
      border-top: 1px solid #e5ecf3;
      padding: 22px 0;
      margin: 10px 0 0 0;
      .button {
        width: 638px;
        height: 68px;
        background: url('@/assets/images/live/btn_purple.png') no-repeat;
        background-size: 100% 100%;
        font-size: 28px;
        color: #eff1f2;
        letter-spacing: 0;
        font-weight: 600;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 26px;
          margin-left: 10px;
        }
      }
    }
  }
}
</style>
