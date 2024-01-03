<template>
  <div
    class="ImageButton"
    :class="[
      {
        'active': active
      }
    ]"
  >
    <img
      v-img="src"
      class="img"
      :type="type"
      style="object-fit: contain;"
    />
    <span>
      {{ text }}
    </span>
    <span v-if="count" class="count">{{ count }}</span>
  </div>
</template>
<script lang="ts" setup>
defineProps({
  text: {
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
  background: var(--color-global-buttonBg);
  color: var( --color-global-buttonCl);
  transition: all .3s;
  font-size: 24px;
  font-weight: bold;
  box-shadow: var(--color-global-buttonShadow);
  span{
    font-size: 24px;
    line-height:24px;
  }
  &.active{
    background: var(--color-primary);
    color:#fff;
  }
  .img{
    width:44px;
    height: 44px;
    margin-right: 10px;
  }
  .count{
    margin-left: 5px;
    color: #546371;
  }
}
</style>
