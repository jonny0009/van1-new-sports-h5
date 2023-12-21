<template>
  <div></div>
</template>

<script lang="ts" setup>
import { onMounted, watch } from 'vue'
// import { intoRoom } from '@/api/live'
const props = defineProps({
  matchInfo: {
    type: Object,
    default: () => {}
  }
})
// const getLastMessage = async () => {
//   const params = {
//     // roomNo: this.roomNo,
//     // page: this.page,
//     // pageSize: this.pageSize,
//     // channelType: this.channelType
//   }
//   await lastMessageByPage(params)
// }
const getIntoRoom = async () => {
  // console.log(props.matchInfo)
  // const { gidm, systemId } = props.matchInfo
  // const params = {
  //   gidm: gidm,
  //   systemId: systemId,
  //   anchorId: undefined, // type && type * 1 === 1 ? anchorId : ''
  //   version: '3.9.0'
  // }
  // console.log(params)
  // await intoRoom(params)
}

watch(
  () => props.matchInfo,
  () => {
    getIntoRoom()
  }
)

onMounted(() => {})
</script>

<style lang="scss" scoped></style>
