<template>
  <div class="betting-slip-empty">
    <div class="empty-icon"></div>
    <div class="empty-title">您的选择将出现在此</div>
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

  .empty-icon {
    width: 175px;
    height: 175px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url('@/assets/images/betting/empty.png');
  }

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
