<template>
  <div
    class="ArrowTitle"
    :class="{
      'active':activeVal
    }"
    @click="clickChangActive"
  >
    <img v-img="props.src" :type="type" class="img mr10" style="object-fit: contain;" />
    <span>
      {{ props.text }}
    </span>
    <img v-img="arrow" class="arrow ml10" style="object-fit: contain;" />
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
  type: {
    type: String,
    default: function () {
      return '6'
    }
  },
  text: {
    type: String,
    default: function () {
      return ''
    }
  }
})
const emit = defineEmits(['returnSuccess'])
const activeVal = ref(false)
const clickChangActive = () => {
  activeVal.value = !activeVal.value
  emit('returnSuccess', activeVal.value)
}
defineExpose({
  activeVal
})

</script>
<style lang="scss" scoped>
.ArrowTitle{
  display: flex;
  align-items: center;
  font-weight: 600;
  color: var(--color-text-2);
  &> span{
    font-size: 32px;
    display: inline-block;
  }
  .img{
    width: 40px;
    height: 40px;
    display: block;
  }
  .arrow{
    width: 18px;
    height: 18px;
    transition: all 0.5s;
  }
  &.active{
    .arrow{
      transform: rotate(180deg);
      margin-top: 8px;
    }
  }
}
</style>
