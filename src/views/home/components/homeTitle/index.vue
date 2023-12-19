<template>
  <div class="homeTitle">
    <img src="''" />
    xxx
    <van-icon name="play" />
  </div>
</template>
<script lang="ts" setup>
import { ref, defineProps } from 'vue'
const props = defineProps({
  text: {
    type: String,
    default: function () {
      return ''
    }
  },
  src: {
    type: String,
    default: function () {
      return ''
    }
  },
  active: {
    type: Boolean,
    default: function () {
      return false
    }
  },
  count: {
    type: [String, Number],
    default: function () {
      return ''
    }
  }
})

const active = ref('')
</script>
<style lang="scss" scoped>
.homeTitle{
  .arrow{

  }
}
</style>
