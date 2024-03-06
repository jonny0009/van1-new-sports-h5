<template>
  <span v-if="currency==='CNY'" class="img_1">{{ '¥' }} </span>
  <span v-else-if="currency==='VNDK'" class="img_1">{{ '₫(K)' }} </span>
  <span v-else-if="currency==='USDT'" class="img_1">{{ 'T' }} </span>
  <span v-else-if="currency==='BRL'" class="img_1">{{ 'R$' }} </span>
  <span v-else class="img_1">{{ symbol }} </span>

</template>
<script lang="ts" setup>
import store from '@/store'
import { computed } from 'vue'
const currency = computed(() => store.state.user.currency)
const symbol = computed(() => store.state.user.symbol)
</script>

<style scoped>
.img_1 {
  margin-right: 5px;
}
</style>

