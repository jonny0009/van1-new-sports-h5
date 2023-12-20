<template>
  <div class="sportlive">
    <div class="sportlive-Match-Tabs">
      <TextButton text="推荐" :active="true" />
      <SportsButton text="FT" />
      <SportsButton text="BK" />
      <SportsButton text="TN" />
      <SportsButton text="OP_BM" />
    </div>

    <MatchLive />

    <MatchLive />

    <div class="footerHeight"></div>
  </div>
</template>
<script lang="ts" setup>
import SportsButton from '@/components/Button/SportsButton/index.vue'
import TextButton from '@/components/Button/TextButton/index.vue'
import MatchLive from '@/components/HomeMatch/MatchLive/index.vue'
</script>
<style lang="scss" scoped>
.sportlive{
  padding: 0 40px;
}
.sportlive-Match-Tabs{
  margin: 10px 0;
  display: flex;
  overflow: auto;
  &::-webkit-scrollbar {
    height: 0;
    display: none;
  }
  .textButton {
    margin-right: 20px;
    flex-shrink: 1;
  }
  .SportsButton{
    margin-right: 20px;
    flex-shrink: 1;
  }
}
</style>
