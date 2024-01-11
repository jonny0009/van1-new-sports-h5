<template>
  <div class="casino-page">
    {{ $t('home.stayTuned') }}
  </div>
</template>

<script lang="ts" setup>
</script>
<style lang="scss" scoped>
.casino-page{
  overflow: hidden;
  min-height: calc( 100vh - 96px - 120px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: 600;
  color: var(--color-primary);
}
</style>
