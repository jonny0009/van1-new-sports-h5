<template>

  <img
    v-if="currency==='CNY'"
    :src="currentWallet.currencyLogo || CNY"
    style="object-fit: contain;"
    class="img_1"
  />
  <img
    v-else-if="currency==='VNDK'"
    :src="currentWallet.currencyLogo || VNDK"
    style="object-fit: contain;"
    class="img_1"
  />
  <img
    v-else
    :src="USDTImg"
    style="object-fit: contain;"
    class="img_1"
  />

</template>
<script lang="ts" setup>
import store from '@/store'

import USDTImg from '@/assets/images/globalLayout/header/USDT.png'
import CNY from '@/assets/images/user/CNY.svg'
import VNDK from '@/assets/images/user/VNDK.svg'
import { ref, computed, onMounted, nextTick } from 'vue'

const currency = computed(() => store.state.user.currency)
const currentWallet = computed(() => store.state.user.currentWallet)
</script>

<style scoped>
.img_1 {
  height: 20px;
  width: 20px;
  margin-right: 5px;
}
</style>
