<template>
  <div
    class="ArrowTitle"
    :class="{
      'active':activeVal
    }"
    @click="clickChangActive"
  >
    <img class="img mr10" :src="props.src" style="object-fit: contain;" />
    <span>
      {{ props.text }}
    </span>
    <img class="arrow ml10" :src="arrow" style="object-fit: contain;" />
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import arrow from '@/assets/images/components/title/arrow.png'
const props = defineProps({
  src: {
    type: String,
    default: function () {
      return ''
    }
  },
  text: {
    type: String,
    default: function () {
      return ''
    }
  }
})
const activeVal = ref(false)
const clickChangActive = () => {
  activeVal.value = !activeVal.value
}
</script>
<style lang="scss" scoped>
.ArrowTitle{
  display: flex;
  align-items: center;
  font-weight: 600;
  color: #1F2630;
  &> span{
    font-size: 32px;
    display: inline-block;
  }
  .img{
    width: 50px;
    height: 50px;
    display: block;
  }
  .arrow{
    width: 18px;
    height: 18px;
    margin-top: 8px;
    transition: all 0.5s;
  }
  &.active{
    .arrow{
      transform: rotate(180deg);
      margin-top: 18px;
    }
  }
}
//    transform: rotate(90deg);
</style>
