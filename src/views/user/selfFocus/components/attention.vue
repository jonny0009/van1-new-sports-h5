<template>
  <div class="info">
    <van-list v-model:loading="loading" :finished="finished" finished-text="" @load="onLoad">
      <div v-for="(item,index) in list.arr" :key="index" class="info-1">
        <div class="left">
          <img class="img_1" src="@/assets/images/user/head-img.png" alt="" />
          <div class="left-1">
            <p>{{ item.nickName }}</p>
            <p>@dyamimo</p>
            <p>There is no going back</p>
          </div>
        </div>
        <div class="right">
          已关注
        </div>
      </div>
    </van-list>
    <div v-if=" !list.arr.length" class="noData">
      <img class="img_1" src="@/assets/images/user/noData.png" />
      <p>
        未查询到相关数据
      </p>
    </div>

  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
const loading = ref(false)
const finished = ref(false)
import { showToast } from 'vant'
import { starPage } from '@/api/user'

const list = reactive<{ arr: any }>({ arr: [] })

let page: number = 0
const onLoad = async () => {
  page++
  const params: any = {
    page: page,
    pageSize: 20
  }
  const res: any = await starPage(params)
  const data = res.data
  if (!data.list) {
    loading.value = false
    finished.value = true
    return
  }
  if (res.code === 200) {
    data.list.forEach((item: any) => {
      list.arr.push(item)
    })
    loading.value = false
    finished.value = list.arr.length === data.total
  } else {
    loading.value = false
    showToast(res.msg)
  }
}
</script>

<style lang="scss" scoped>
.info {
  height: calc(100vh - 350px);
  overflow-y: auto;
  padding: 31px 0;

  .info-1 {
    // background: #E5ECF3;
    border-bottom: 2px solid #E5ECF3;
    padding: 37px 0 21px 0;
    display: flex;
    justify-content: space-between;

    .left {
      display: flex;

      .img_1 {
        width: 55px;
        height: 67px;
        margin-right: 20px;
      }

      .left-1 {
        font-family: PingFangSC-Medium;
        font-size: 28px;
        color: #1F2630;
        letter-spacing: 0;
        font-weight: 500;

        p:nth-child(2) {
          font-family: PingFangSC-Medium;
          font-size: 24px;
          color: #96A5AA;
          letter-spacing: 0;
          font-weight: 500;
        }

        p:nth-child(3) {
          font-family: PingFangSC-Medium;
          font-size: 24px;
          color: #546371;
          letter-spacing: 0;
          font-weight: 500;
        }
      }
    }

    .right {
      background: #EFF1F2;
      border-radius: 32px;
      width: 141px;
      height: 52px;
      text-align: center;
      font-family: PingFangSC-Semibold;
      font-size: 24px;
      color: #1F2630;
      letter-spacing: 0;
      font-weight: 600;
      line-height: 52px;
    }
  }
  .noData {
  text-align: center;
  font-family: PingFangSC-Medium;
  font-size: 24px;
  color: #96A5AA;
  letter-spacing: 0;
  font-weight: 500;

  .img_1 {
    margin-top: 331px;
    width: 102px;
    height: 121px;
    margin-bottom: 57px;

  }
}
}
</style>
