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

.van-dialog__confirm, .van-dialog__confirm:active{
  background-image: linear-gradient(to right, var(--color-login-button-color-1), var(--color-login-button-color-2));
}

</style>
