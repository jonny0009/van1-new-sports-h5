<template>
  <div class="result-item">
    <div class="title">
      <span class="state-icon" :class="result.stateClass"></span>
      {{ result.stateTips }}
    </div>
    <Content v-for="content in result.list" :key="content.id" :state-class="result.stateClass" :result="content"></Content>
  </div>
</template>
<script lang="ts" setup>
import Content from './Content.vue'

defineProps({
  result: {
    type: Object,
    default: () => { }
  }
})

</script>
<style scoped lang="scss">
.result-item {
  margin-bottom: 15px;

  .title {
    margin: 10px 0;
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
      margin-right: 5px;

      &.check {
        background-image: url('@/assets/images/betting/check-state.png');
      }

      &.accepting {
        background-image: url('@/assets/images/betting/accepting-state.png');
      }

      &.error {
        background-image: url('@/assets/images/betting/close-state.png');

      }
    }
  }

}
</style>
