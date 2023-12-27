<template>

  <br />
  <br />
  <br />
  <br />
  <br />
  <br />

  <div class="vShow" @click="isShowChange">
    <div
      class="old-v"
      :class="
        [
          {'listdown-leave-active':isShow},
          {'listdown-move':isShow},
          {'listdown-leave-to':isShow},
        ]
      "
    >1</div>
    <div
      class="new-v"
      :class="
        [
          {'listdown-leave-active':isShow},
          {'listdown-enter-to':isShow},
        ]
      "
    >2</div>
  </div>

  <br />
  <br />
  <br />
  <br />
  <br />
  <br />

  <div
    class="value"
    :class="
      [
        {'listdown-leave-active':isShow},
        {'listdown-leave-to':isShow},
      ]
    "
    @click="isShowChange"
  >101</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const isShow = ref(false)
const isShowChange = () => {
  isShow.value = !isShow.value
}
</script>

<style lang="scss" scoped>
.test-page{
  height: 100%;
  overflow: hidden;
}
.vShow{
  text-align: center;
}

</style>
