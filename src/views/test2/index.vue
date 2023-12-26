<template>

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

</style>
