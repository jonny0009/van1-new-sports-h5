<template>
  <span v-if="currency==='CNY'" :class="props.className">{{ '¥' }} </span>
  <span v-else-if="currency==='VNDK'" :class="props.className">{{ '₫(K)' }} </span>
  <span v-else-if="currency==='USDT'" :class="props.className">{{ '₮' }} </span>
  <span v-else-if="currency==='THB'" :class="props.className">{{ '฿' }} </span>
  <span v-else :class="props.className">{{ symbol }} </span>

</template>
<script lang="ts" setup>
import store from '@/store'
import { computed } from 'vue'

const props = defineProps({
  className: {
    type: String,
    default: () => ''
  }
})

const currency = computed(() => store.state.user.currency)
const symbol = computed(() => store.state.user.symbol)
</script>

<style scoped>
.img_1 {
  height: 20px;
  width: 20px;
}
.mr3 {
  margin-right: 3px;
}

.color1 {
 color: var(--color-bet-iortext);
}
.fs24 {
  font-size: 24px;
}
</style>

