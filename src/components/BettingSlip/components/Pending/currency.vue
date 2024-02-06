<template>
  <span class="img_1">{{ currency }} </span>
</template>
<script lang="ts" setup>
import store from '@/store'
import {  computed} from 'vue'

const currency = computed(() => store.state.user.currency)
</script>

<style scoped>
.img_1 {
  height: 20px;
  width: 20px;
  margin-right: 5px;
}
</style>
