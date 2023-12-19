<template>
  <div class="betting-slip-balls">
    <transition
      v-for="(item, index) in balls"
      v-show="item.show"
      :key="index"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
    >
      <div class="ball" style="transform: translate3d(0px, 0px, 0px);">
        <div class="inner inner-hook" style="transform: translate3d(0px, 0px, 0px);"></div>
      </div>
    </transition>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import Subscriber from '@/utils/Subscriber'
const list = []
const balls = ref([
  {
    show: !1
  },
  {
    show: !1
  },
  {
    show: !1
  }
])
Subscriber.on('EVENT_BET_BALL', (target: any) => {
  for (let e = 0; e < balls.value.length; e++) {
    const i = balls.value[e]
    if (!i.show) {
      i.show = true
      i.el = target
      list.push(i)
    }
  }
})
const beforeEnter = (ball) => {
  const target = list[list.length - 1]
  const rect = target.el.getBoundingClientRect()
  const left = rect.left - 32
  const top = -(window.innerHeight - rect.top - 100)
  ball.style.display = ''
  ball.style.transform = `translate3d(0,${top}px,0)`
  const o = ball.getElementsByClassName('inner-hook')[0]
  o.style.transform = `translate3d(${left}px,0,0)`
}
const enter = (t) => {
  document.body.offsetHeight
  t.style.transform = 'translate3d(0,0,0)'
  const s = t.getElementsByClassName('inner-hook')[0]
  s.style.transform = 'translate3d(0,0,0)'
  // t.addEventListener('transitionend', e)
}
const afterEnter = (t) => {
  const e = list.shift()
  if (e) {
    e.show = false
    t.style.display = 'none'
  }
}

</script>
<style scoped lang="scss">
.betting-slip-balls {
  .ball {

    position: fixed;
    left: 180px;
    bottom: 100px;
    z-index: 10000;
    transition: all .3s cubic-bezier(.49, -.29, .75, .41);

    .inner {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: #7642fe;
      transition: all .3s linear;
      opacity: .75;
    }
  }
}
</style>
