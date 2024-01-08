<template>
  <div class="betting-slip-balls">
    <div
      v-for="(item, index) in balls"
      :key="index"
    >
      <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
      >
        <div v-show="item.show" class="ball">
          <div class="inner inner-hook"></div>
        </div>
      </transition>
    </div>

  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import Subscriber from '@/utils/subscriber'
const list:any[] = []
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
    const i:any = balls.value[e]
    if (!i.show) {
      i.show = true
      i.el = target
      return list.push(i)
    }
  }
})
const beforeEnter = (ball:any) => {
  const target = list[list.length - 1]
  const rect = target.el.getBoundingClientRect()
  const left = rect.left - 32
  const top = -(window.innerHeight - rect.top - 100)
  ball.style.display = 'black'
  ball.style.transform = `translate3d(0px,${top}px,0px)`
  const o = ball.getElementsByClassName('inner-hook')[0]
  o.style.transform = `translate3d(${left}px,0px,0px)`
}
const enter = (t:any) => {
  document.body.offsetHeight
  t.style.transform = 'translate3d(0px,0px,0px)'
  const s = t.getElementsByClassName('inner-hook')[0]
  s.style.transform = 'translate3d(0px,0px,0px)'
}
const afterEnter = (t:any) => {
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
    bottom: 132px;
    z-index: 10000;
    transition: all .3s cubic-bezier(.49, -.29, .75, .41);

    .inner {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: var(--color-primary);
      transition: all .3s linear;
      opacity: .75;
    }
  }
}
</style>
