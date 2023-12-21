<template>
  <div
    class="ImageButton"
    :class="[
      {
        'active':activeVal
      }
    ]"
  >
    <img
      v-img="src"
      class="img"
      style="object-fit: contain;"
    />
    <span>
      {{ textVal }}
    </span>
    <span v-if="countVal" class="count">{{ countVal }}</span>
  </div>
</template>
<script lang="ts" setup>
import { ref, watch } from 'vue'
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

const activeVal:any = ref(false)
activeVal.value = props.active
watch(() => props.active, (val) => {
  console.log(' watch  watch watch')
  if (val) {
    const { active, src } = props
    activeVal.value = active
    srcVal.value = src
  }
}, {
  deep: true
})

const srcVal:any = ref('')
srcVal.value = props.src

const textVal:any = ref('')
textVal.value = props.text

const countVal:any = ref('')
countVal.value = props.count

</script>
<style lang="scss" scoped>
.ImageButton{
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  height: 64px;
  border-radius:30px;
  padding-left: 17px;
  padding-right: 40px;
  background: #eff2f2;
  color: #1f2630;
  transition: all .3s;
  font-size: 24px;
  font-weight: bold;
  span{
    line-height:12px;
  }
  &.active{
    background:#7642fe;
    color:#fff;
  }
  .img{
    width:44px;
    height: 44px;
    margin-right: 19px;
  }
  .count{
    margin-left: 5px;
    color: #546371;
  }
}
</style>
