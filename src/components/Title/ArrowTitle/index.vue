<template>
  <div class="ArrowTitle">
    <img class="img" :src="props.src" style="object-fit: contain;" />
    <span>
      {{ props.text }}
    </span>
    <img class="arrow" :src="arrow" style="object-fit: contain;" />
  </div>
</template>
<script lang="ts" setup>
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

</script>

<style lang="scss" scoped>
.ArrowTitle{
  display: flex;
  font-size: 32px;
  color: #1F2630;
  img{
    width: 50px;
    height: 50px;
    display: block;
  }
}
</style>
