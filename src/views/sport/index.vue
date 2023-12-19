<template>
  <div class="sport-page">
    sport-page
    <ChampionList />
  </div></template>

<script lang="ts" setup>
import ChampionList from './champion/index.vue'
import { useRoute } from 'vue-router'
import { ref, onBeforeMount } from 'vue'

onBeforeMount(async () => {
})

const route = useRoute()
const leagueId: any = ref(route.query.leagueId)
console.log(leagueId.value)

</script>

<style lang="scss">
.sport-page{

}
</style>
