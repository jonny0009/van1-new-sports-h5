<template>
  <router-view />
</template>

<style lang="scss">
// 弹窗
:root{
  --van-dialog-width:520px;
  --van-font-size-md:26px;
  --van-dialog-round-button-height:72px;
  --van-dialog-confirm-button-text-color: #7642FD
}
.van-dialog {
  padding: 50px;
}
.van-dialog__confirm, .van-dialog__confirm:active{
  background-image: linear-gradient(to right, #623AF8, #4121AF);
}

</style>
