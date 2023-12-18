<template>
  <div class="global-bar-header">
    <div class="wallet">
      <div class="cur">
        <van-image
          width="28"
          height="28"
          radius="100%"
          fit="contain"
          src="https://img01.yzcdn.cn/vant/cat.jpeg"
        />
      </div>
      0.00
      <div class="transaction">
        <van-image
          width="14"
          height="14"
          radius="100%"
          fit="contain"
          src="https://img01.yzcdn.cn/vant/cat.jpeg"
        />
      </div>
    </div>
    1212
  </div>
</template>
<script lang="ts" setup>

</script>
<style lang="scss" scoped>
.global-bar-header{
  height: 96px;
  display:flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom,#181f2a 0,#2a0572 100%);
  .wallet{
    height: 56px;
    line-height: 56px;
    min-width: 300px;
    display: inline-block;
    background: linear-gradient(90deg,#7642fe,#491cab);
    border-radius: 100px;
    position: relative;
    text-align: center;
    .transaction,
    .cur{
      position: absolute;
      top: 4px;
      left: 6px;
      width: 48px;
      height: 48px;
      border-radius: 100%;
    }
    .transaction{
      width: 48px;
      height: 48px;
      background: #7642fe;
      border-radius: 100%;
      right: 6px;
    }
  }
}
</style>
