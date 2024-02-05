<template>

  <SvgIcon v-if="currency === 'CNY'" name="user-cny" class="img_1" />
  <!-- <SvgIcon v-else-if="currency === 'VNDK'" name="user-vndk" class="img_1" /> -->
  <span v-else-if="currency === 'VNDK'" name="user-vndk" class="img_1">{{ currentWallet.flatMoney }} </span>
  <SvgIcon v-else name="user-usdt" class="img_1" />

</template>
<script lang="ts" setup>
import store from '@/store'
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
