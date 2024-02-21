<template>
  <div
    class="PlayButton"
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
.PlayButton{
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  height: 60px;
  border-radius:30px;
  padding-left: 17px;
  padding-right: 40px;
  background: var(--color-global-buttonBg);
  color: var(--color-text-2);
  transition: all .3s;
  font-size: 24px;
  &.active{
    background: var(--color-primary);
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
