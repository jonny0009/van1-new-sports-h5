<template>
  <div class="my-empty">

    <img v-if="ifBlueTheme" :src="blueEmptyDefault" class="my-empty__img">
    <img v-else class="my-empty__img" :src="emptyDefault">

    <div class="my-empty__text">
      <!-- <template v-if="ifBlueTheme">{{ $t('home.searchBlueNoData') }}</template> -->
      {{ $t('home.searchNoData') }}
    </div>

  </div>
</template>
<script lang="ts" setup>
import emptyDefault from '@/assets/images/home/empty/default.svg'
import blueEmptyDefault from '@/assets/images/home/empty/blue-default.svg'
import { computed } from 'vue'
import store from '@/store'
const ifBlueTheme = computed(() => store.state.app.theme === 'blue')

</script>
<style lang="scss" scoped>
  .my-empty {
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    height: 300px;
    .my-empty__img{
      width: 168px;
      height: 168px;
    }
    .my-empty__text{
      margin-top: 20px;
      font-size: 24px;
      line-height: 24px;
      color:var(--color-match-emptyCl);
      font-weight: 600;
    }
  }
</style>
