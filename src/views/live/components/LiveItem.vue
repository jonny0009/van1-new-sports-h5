<template>
  <div class="item">item</div>
</template>

<script lang="ts" setup>
defineProps({
  item: Object
})
</script>

<style lang="scss" scoped>
.item {
  width: 165px;
  height: 220px;
  background: #eff1f2;
  border-radius: 10px;
}
</style>
