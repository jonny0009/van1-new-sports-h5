<template>
  <div ref="cutComponent" class="bet-item-cut-component text-overflow">
    <span
      v-if="!isOverflow"
      ref="ratioNameText"
      class="ratio-name-text text-overflow"
    >
      <slot></slot>
    </span>
    <div v-else class="custom-ratio-box">
      <div class="match-name text-overflow">{{ matchName }}</div>
      <div class="ratio">{{ ratioText }}</div>
    </div>
  </div>
</template>
<script lang="ts" setup>

import { config } from 'xcsport-lib'
const { letBallMap } = config

import { ref, watch, onBeforeMount, onBeforeUnmount, nextTick } from 'vue'

const props = defineProps({
  playType: {
    default: '',
    type: String
  },
  ratioName: {
    default: '',
    type: String
  }
})

const isOverflow = ref(false)
const matchName = ref('')
const ratioText = ref(null)

watch(props.ratioName, () => {
  isOverflow.value = false
  computedRatioNameWidth()
})

const cutComponent = ref()
const ratioNameText = ref()
const computedRatioNameWidth = () => {
  nextTick(() => {
    const cutComponentWidth =
          ((cutComponent.value && cutComponent.value.offsetWidth) ||
            0) -
          (window.innerWidth / 375) * 10
    const ratioNameTextWidth = ratioNameText.value
      ? ratioNameText.value.offsetWidth
      : 0
    const isSpace = props.ratioName.indexOf(' ') > -1
    if (
      ratioNameTextWidth + 2 >= cutComponentWidth &&
          isSpace &&
          letBallMap.indexOf(props.playType) > -1
    ) {
      isOverflow.value = true
      const [matchName, ratio, ...special] = props.ratioName.split(' ')
      if (special.length) {
        ratioText.value = special.pop()
        const lastSpaceIndex = props.ratioName.lastIndexOf(' ')
        matchName.value = props.ratioName.substr(0, lastSpaceIndex)
      } else {
        matchName.value = matchName
        ratioText.value = ratio
      }
    }
  })
}

onBeforeMount(() => {
  if (!props.ratioName) {
    return
  }
  computedRatioNameWidth()
})

</script>

<style lang="scss" scoped>
.bet-item-cut-component {
  display: inline-block;
  max-width: 100%;

  .ratio-name-text {
    display: inline-block;
    width: 100%;
    vertical-align: middle;
  }
  .custom-ratio-box {
    display: flex;
    align-items: center;
    .match-name {
      flex: 1;
      font-size: 12px;
    }
    .ratio {
      font-size: 12px;
      display: inline-block;
      margin-left: 1px;
    }
  }
}
</style>
