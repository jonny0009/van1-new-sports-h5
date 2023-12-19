<template>
  <div
    class="textButton"
    :class="[
      {
        'active':activeVal
      }
    ]"
  >
    {{ textval }}
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
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

const textval = ref('')
textval.value = props.text

</script>

<style lang="scss" scoped>
.textButton{
  display: inline-flex;
  align-items: center;
  height: 64px;
  line-height: 64px;
  border-radius:30px;
  padding-left: 17px;
  padding-right: 40px;
  background: #eff2f2;
  color: #96a5aa;
  transition: all .3s;
  font-size: 24px;
  &.active{
    background:#7642fe;
    color:#fff;
  }
  .img{
    width:44px;
    height: 44px;
    margin-right: 19px;
  }
  &.noImg{
    padding: 0 30px;
  }
}
</style>
