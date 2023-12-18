<template>
  <div
    class="SportsButton"
    :class="[
      {
        'active':active
      },
      {
        'noImg': noImg
      }
    ]"
  >
    <img
      v-if="!noImg"
      v-img="src"
      class="img"
      src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
      style="object-fit: contain;"
    />
    {{ text }}
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive, defineProps } from 'vue'
const props = defineProps({
  imgSrc: {
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
  noImgToggle: {
    type: Boolean,
    default: function () {
      return false
    }
  },
  buttonText: {
    type: String,
    default: function () {
      return ''
    }
  }
})

const active = ref(false)
active.value = props.active

const noImg = ref(false)
noImg.value = props.noImgToggle

const src = ref('')
src.value = props.imgSrc

const text = ref('')
text.value = props.buttonText

</script>
<style lang="scss" scoped>
.SportsButton{
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
