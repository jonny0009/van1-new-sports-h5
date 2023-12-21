<template>
  <div class="result-page">
    <div class="result-item">
      <div class="title">
        <span class="state-icon" :class="`${'check'}`"></span>
        {{ }}
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>

</script>
<style scoped lang="scss">
.result-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 0;

  .result-item {

    .title {
      display: flex;
      align-items: center;
      font-family: PingFangSC-Medium;
      font-size: 24px;
      color: #000000;
      letter-spacing: 0;
      font-weight: 500;

      .state-icon {
        display: inline-block;
        width: 23px;
        height: 23px;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;

        &.check {
          background-image: url('@/assets/images/betting/check-state.png');
        }

        &.error {
          background-image: url('@/assets/images/betting/close-state.png');

        }
      }
    }
  }
}
</style>
