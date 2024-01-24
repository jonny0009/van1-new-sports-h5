<template>
  <div class="page-404">
    <div class="title">
      <img
        
        src="@/assets/images/page404/bluelogo.png"
      />
    </div>
    <div class="content">
      <div class="img-warp">
        <img
        
        src="@/assets/images/page404/maintain.png"
      />
      </div>
      <div class="tips">网站维护中</div>
      <div class="tips2">重新开放倒数</div>
      <div class="time">{{ timeDate }}</div>
      
    </div>
    
  </div></template>

<script lang="ts" setup>
import store from '@/store'
import { ref, computed } from 'vue'
// import router from '@/router'
const timeDate = computed(() => {
  const msg = store.state.app.mantainMsg
  const systemTime = store.state.app.systemTime
  // const msg = '3,2024-01-24 16:13:37,2024-01-24 23:59:59,true'
  let time=null
  if(msg){
   let strFlag = msg.split(',')[2]
   time = strFlag
  }
  return time
})
</script>

<style lang="scss" scoped>
.page-404{
  .title{
    padding-top: 86px;
    width: 100%;
    text-align: center;
    img{
      width: 317px;
      height: 100px;
    }
  }
  .content{
    .img-warp{
      text-align: center;
      padding-top: 150px;
      width: 100%;
      img{
        width: 400px;
      }
    }
    .tips{
      margin-top: 92px;
      text-align: center;
      font-size: 36px;
      color: rgb(72 ,163 ,255);
    }
    .tips2{
      margin-top: 50px;
      text-align: center;
      font-size: 24px;
      color: rgb(136, 166, 187);
    }
    .time{
      margin-top: 40px;
      text-align: center;
      font-size: 100px;
      color: rgb(72, 163 ,255);
    }
  }

}
</style>
