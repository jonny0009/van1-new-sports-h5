<template>
  <div
    class="SportsButton"
    :class="[
      {
        'active':activeVal
      },
    ]"
  >
    <i
      class="iconfont"
      :class="SportsName"
    ></i>
    <span>
      {{ textVal }}
    </span>
  </div>
</template>
<script lang="ts" setup>
import lang from '@/lang'
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
    const { active, text } = val
    activeVal.value = active
    SportsName.value = `icon-${text}`
  }
})

const textVal = ref('')
textVal.value = lang.global.t(`sport.sports.${props.text}`) || props.text

const SportsName = ref('icon-FT')
SportsName.value = `icon-${props.text}`
</script>
<style lang="scss" scoped>
.SportsButton{
  white-space:nowrap;
  display: inline-flex;
  align-items: center;
  height: 64px;
  border-radius:30px;
  padding-left: 17px;
  padding-right: 36px;
  background: var(--color-global-buttonBg);
  box-shadow: var(--color-global-buttonShadow);
  color: var(--color-global-buttonCl);
  transition: all .3s;
  font-size: 24px;
  font-weight: 600;
  .iconfont {
    font-weight: 100;
    color: var(--color-global-minButtonicoCl);
  }
  &.active{
    background: var(--color-primary);
    color:#fff;
    .iconfont {
      color:#fff;
    }
  }
  span{
    font-size: 24px;
    line-height: 24px;
    display: inline-block;
  }
  .img{
    width:44px;
    height: 44px;
    margin-right: 19px;
  }
  .iconfont{
    margin-right: 10px;
    position: relative;
    top: -2px;
  }
}
</style>
