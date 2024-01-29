<template>
  <div class="ImageButton" :class="[
    {
      'active': active
    }
  ]">
    <img v-img="src" class="img" :class="ifCircle?'img-1':''" :type="type" />
    <span>
      {{ text }}
    </span>
    <span v-if="count" class="count" :class="[{ 'count-1': active }]">
      {{ count }}
    </span>
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
  ifCircle: {
    type: Boolean,
    default: function () {
      return false
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
.ImageButton {
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  height: 64px;
  border-radius: 30px;
  padding-left: 17px;
  padding-right: 40px;
  background: var(--color-global-buttonBg);
  color: var(--color-text-5);
  transition: all .3s;
  font-size: 24px;
  font-weight: bold;
  box-shadow: var(--color-global-buttonShadow);

  span {
    font-size: 24px;
    line-height: 24px;
  }

  &.active {
    background: var(--color-global-buttonPrimaryBg);
    color: #fff;
  }

  .img {
    width: 44px;
    height: 32px;
    margin-right: 10px;
  }
  .img-1{
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: orange;
    overflow: hidden;
  }

  .count {
    margin-left: 12px;
    color: var(--color-text-5);
  }
  .count-1 {
    color: #fff;
  }
}
</style>
