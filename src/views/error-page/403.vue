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
        
        src="@/assets/images/page404/403Img.png"
      />
      </div>
      <div class="tips">抱歉，您的所在地区受到限制</div>
    </div>
    
  </div></template>

<script lang="ts" setup>


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
  }

}
</style>
