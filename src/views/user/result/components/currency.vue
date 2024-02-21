<template>
  <span class="img_1" v-if="currency==='CNY'">{{ '¥' }} </span>
  <span class="img_1" v-else-if="currency==='VNDK'">{{ '₫(K)' }} </span>
  <span class="img_1" v-else-if="currency==='USDT'">{{ 'T' }} </span>
  <span class="img_1" v-else-if="currency==='BRL'">{{ 'R$' }} </span>
  <span class="img_1" v-else>{{ currency }} </span>
</template>
<script lang="ts" setup>
import store from '@/store'
import { computed } from 'vue'

const currency = computed(() => store.state.user.currency)
</script>

<style scoped>
.img_1 {
  height: 20px;
  width: 20px;
  margin-right: 5px;
}
</style>
