<template>
  <div class="home-tabs-play">
    <TimeView :time-send-params="sendParams" />
    <div class="play">
      <div class="flex-1"></div>
      <span
        class="btn R"
        :class="[
          {
            active: RrefShow
          }
        ]"
        @click="Rclick"
      >
        {{ $t('home.R') }}
      </span>
      <span
        class="btn OU"
        :class="[
          {
            active: OUrefShow
          }
        ]"
        @click="OUclick"
      >
        {{ $t('home.OU') }}
      </span>
      <span
        class="btn M"
        :class="[
          {
            active: MrefShow
          }
        ]"
        @click="Mclick"
      >
        {{ $t('home.M') }}
      </span>
      <span
        class="btn PD"
        :class="[
          {
            active: PDrefShow
          }
        ]"
        @click="PDclick"
      >
        {{ $t('live.score') }}
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TimeView from '@/components/HomeMatch/public/time/index.vue'
import { computed } from 'vue'
import store from '@/store'
defineProps({
  sendParams: {
    type: Object,
    default: function () {
      return {}
    }
  }
})

const RrefShow = computed(() => store.state.home.RrefShow)
const Rclick = () => {
  //
  store.dispatch('home/setKeyValue', {
    key: 'RrefShow',
    value: !RrefShow.value
  })
}

const OUrefShow = computed(() => store.state.home.OUrefShow)
const OUclick = () => {
  //
  store.dispatch('home/setKeyValue', {
    key: 'OUrefShow',
    value: !OUrefShow.value
  })
}

const MrefShow = computed(() => store.state.home.MrefShow)
const Mclick = () => {
  //
  store.dispatch('home/setKeyValue', {
    key: 'MrefShow',
    value: !MrefShow.value
  })
}
const PDrefShow = computed(() => store.state.home.PDrefShow)
const PDclick = () => {
  //
  store.dispatch('home/setKeyValue', {
    key: 'PDrefShow',
    value: !PDrefShow.value
  })
}
// defineExpose
</script>
<style lang="scss" scoped>

</style>
