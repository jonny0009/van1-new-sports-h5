<template>
  <div class="Loading">
    <van-loading color="#96a5aa" size="24px" />{{ $t('home.loading') }}
  </div>
</template>
<script lang="ts" setup>
</script>
<style lang="scss" scoped>
.Loading {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 200px;
  font-size: 24px;
  color:#96a5aa;
  .van-loading{
    margin-right: 10px;
  }
}
</style>
