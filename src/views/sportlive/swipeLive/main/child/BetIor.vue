<template>
  <div class="bet-ior-component" :class="ratioChange">
    <span class="sort"></span>
    {{ betInfo.ior }}
  </div>
</template>
<script lang="ts" setup>

import { ref, watch, nextTick } from 'vue'

const props = defineProps({
  betInfo: {
    type: Object,
    default: () => {}
  }
})
const ratioChange = ref('')
const timer:any = ref(null)

watch(props.betInfo, (newBet, oldBet) => {
  iorChange(newBet, oldBet)
}, {
  deep: true
})

const iorChange = (newBet:any, oldBet:any) => {
  let newIor = (newBet && newBet.ior) || 0
  let oldIor = (oldBet && oldBet.ior) || 0
  if (newIor === oldIor || newBet.ratioKey !== oldBet.ratioKey) {
    return
  }
  newIor = Number(newIor * 1)
  oldIor = Number(oldIor * 1)
  ratioChange.value = ''
  let ratioStateStr = ''
  if (+newIor > +oldIor) {
    ratioStateStr = 'up-ior'
  } else {
    ratioStateStr = 'down-ior'
  }
  nextTick(() => {
    ratioChange.value = ratioStateStr
  })
  clearTimeout(timer.value)
  timer.value = setTimeout(() => {
    ratioChange.value = ''
    clearTimeout(timer.value)
  }, 5000)
}

</script>
<style lang="scss" scoped>
.sort {
  display: inline-block;
  width: 8px;
  height: 8px;
  background-size: cover;
  background-position: center;
}
.up-ior {
  .sort {
    animation: fade-in-put 1s;
    background: url(~@/assets/images/sportlive/up.svg) no-repeat;
    animation-iteration-count: 5;
    animation-fill-mode: forwards;
  }
  color: #ff4657 !important;
}
.down-ior {
  .sort {
    animation: fade-in-put 1s;
    background: url(~@/assets/images/sportlive/down.svg) no-repeat;
    animation-iteration-count: 5;
    animation-fill-mode: forwards;
  }
  color: #31ec7c !important;
}
@keyframes fade-in-put {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
