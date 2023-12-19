<template>
  <div class="home-page">
    <homeBarHeader />

    <br />
    <br />
    <br />
    <br />
    <TextButton text="暗示" :active="true" />
    <TextButton text="暗示" />
    <br />
    <br />
    <br />
    <ImageButton text="暗示" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" :active="true" />
    <ImageButton text="暗示" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" count="22" />
    <br />
    <br />

    <SportsButton text="FT" :active="true" />
    <SportsButton text="FT" />
    <br />
    <br />

    <br />
    <br />
    <br />

    <i class="iconfont icon-a-americanfootball"></i>
    <br />
    <br />
    <br />
    <br />

    <van-button type="primary">主要按钮</van-button>
    <van-button type="success">成功按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
  </div>
</template>

<script lang="ts" setup>
import homeBarHeader from './components/homeBarHeader.vue'
import TextButton from '@/components/Button/TextButton/index.vue'
import ImageButton from '@/components/Button/ImageButton/index.vue'
import SportsButton from '@/components/Button/SportsButton/index.vue'
</script>
<style lang="scss" scoped>
.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
</style>
