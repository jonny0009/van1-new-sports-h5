<template>
  <div class="betting-slip-empty">
    <EmptyIcon />
    <div class="empty-title">1111111111111111111</div>
  </div>
</template>
<script lang="ts" setup>

</script>
<style scoped lang="scss">
.betting-slip-empty {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 0;

  .empty-title {
    margin-top: 10px;
    font-family: PingFangSC-Medium;
    font-size: 24px;
    color: #96A5AA;
    letter-spacing: 0;
    text-align: center;
    font-weight: 500;
  }
}
</style>
