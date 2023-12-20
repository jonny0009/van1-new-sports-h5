<template>
  <div
    class="textButton"
    :class="[
      {
        'active':activeVal
      }
    ]"
  >
    <span>
      {{ textval }}
    </span>
  </div>
</template>
<script lang="ts" setup>
import { ref, watch } from 'vue'
const props = defineProps({
  active: {
    type: Boolean,
    default: function () {
      return false
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
activeVal.value = props.active
watch(props, (val) => {
  if (val) {
    const { active } = val
    activeVal.value = active
  }
})

const textval = ref('')
textval.value = props.text

</script>

<style lang="scss" scoped>
.textButton{
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  height: 64px;
  line-height: 66px;
  border-radius:30px;
  padding:0 20px;
  background: #eff2f2;
  color: #1f2630;
  transition: all .3s;
  font-size: 24px;
  span{
    line-height: 24px;
    font-size: 24px;
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
}
</style>
