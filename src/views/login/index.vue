<template>
  <div class="login-page">
    <van-nav-bar class="bg-title">
      <template #left>
        <img height="36" width="36" src="@/assets/images/login/return@2x.png" alt="" />
      </template>
      <template #title>
        <img height="63" width="71" src="@/assets/images/login/ai-logo@2x.png" alt="" />
      </template>
      <template #right>
        <img width="34" height="37" src="@/assets/images/login/service@2x.png" alt="" />
      </template>
    </van-nav-bar>
    <div class="content">
      <p class="title">欢迎来到AI！</p>
      <span class="desc">全球最领先的体育社交平台</span>
      <div class="area-btn">
        <span @click="register">注册</span>
        <span @click="login">登录</span>
      </div>

      <div class="ban">
        <img height="137" src="@/assets/images/login/login.png" alt="" />
      </div>

      <div class="list-set">
        <div class="item">
          <div class="label-info flex align-center">
            <div class="icon"><img src="@/assets/images/login/lang@2x.png" /></div>
            <div class="label">{{ '语言' }}</div>
          </div>
          <div class="label-right">
            <div class="label">{{ lang || ' 中文' }}</div>
            <img class="arrow" src="@/assets/images/login/go@2x.png" />
          </div>
        </div>
        <div class="item">
          <div class="label-info flex align-center">
            <div class="icon"><img src="@/assets/images/login/area@2x.png" /></div>
            <div class="label">{{ '地区' }}</div>
          </div>
          <div class="label-right">
            <div class="label">{{ int || '国际' }}</div>
            <img class="arrow" src="@/assets/images/login/go@2x.png" />
          </div>
        </div>
        <div class="item" @click="showPk">
          <div class="label-info flex align-center">
            <div class="icon"><img src="@/assets/images/login/pankou@2x.png" /></div>
            <div class="label">{{ '盘口' }}</div>
          </div>
          <div class="label-right">
            <div class="label">{{ pankou || ' 欧洲盘' }}</div>
            <img class="arrow" src="@/assets/images/login/go@2x.png" />
          </div>
        </div>
      </div>
    </div>

    <van-popup v-model:show="showBottom" position="bottom" closeable round :style="{ height: '200px' }">
      <div class="pankou-title">盘口</div>
      <div class="pk-list">
        <div class="item" @click="setPk(1)">欧洲盘</div>
        <div class="item" @click="setPk(2)">香港盘</div>
      </div>
    </van-popup>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const lang = ref('')
const int = ref('')
const pankou = ref('')
const showBottom = ref(false)
function showPk(val: any) {
  showBottom.value = true
}

function setPk(val: any) {
  console.log(val)
}

function register() {
}

function login() {
}
</script>

<style lang="scss" scope>
.bg-title {
  width: 100%;
  height: 75px;
  background: url('@/assets/images/login/bg-tit@2x.png');
  background-size: 100% 100%;
}
.content {
  background: #ffffff;
  border-radius: 16px 16px 0px 0px;
  padding-left: 20px;
  .title {
    font-family: PingFangSC-Semibold;
    font-size: 20px;
    color: #000;
    letter-spacing: 0;
    font-weight: 600;
    padding-top: 22.5px;
  }
  .desc {
    display: block;
    font-family: PingFangSC-Semibold;
    font-size: 12px;
    color: #97a6ab;
    letter-spacing: 0;
    font-weight: 600;
  }
  .area-btn {
    margin-top: 10px;
    span {
      display: inline-block;
      background: #713ff6;
      text-align: center;
      font-size: 20px;
      font-family: PingFangSC-Semibold;
      height: 40px;
      line-height: 40px;
      width: 160px;
      border-radius: 40px;
      &:first-child {
        background: #e5ecf3;
        color: #000;
      }

      &:last-child {
        color: #ffff;
        margin-left: 10px;
      }
    }
  }

  .ban {
    margin-top: 15px;
    img {
      width: 100%;
      padding-right: 20px;
    }
  }

  .list-set {
    // margin-bottom: 17px;
    padding: 35px 25px 0px 0;

    .item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 38px;

      &:not(:last-child) {
        margin-bottom: 15px;
      }
      .label-info {
        font-size: 24px;

        .icon {
          width: 28px;
          height: 28px;
          margin-right: 11.5px;
          > img {
            display: block;
            width: 100%;
            height: 100%;
          }
        }
      }
      .label-right {
        display: flex;
        align-items: center;

        .label {
          font-family: PingFangSC-Regular;
          font-size: 24px;

          color: #96a5aa;
          letter-spacing: 1px;
          text-align: right;
          font-weight: 400;
        }

        .arrow {
          margin-left: 8px;
          width: 20px;
          height: 20px;
        }
      }
    }
  }
}

.flex {
  display: flex;

  &.align-center {
    align-items: center;
  }
}

.pankou-title {
  font-family: PingFangSC-Regular;
  font-size: 20px;
  color: #1f2630;
  letter-spacing: 1px;
  font-weight: 400;
  padding-left: 20px;
  padding-top: 10px;
}
.pk-list {
  padding: 15px 20px;
  .item {
    font-size: 20px;
    color: #1f2630;
    letter-spacing: 1px;
    padding: 5px 0;
    border-bottom: 1px solid #eaeaea;
  }
}
</style>

<style scoped>
:deep(.van-nav-bar__content) {
  height: 75px;
}
</style>
