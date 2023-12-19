<template>
  <div
    class="SportsButton"
    :class="[
      {
        'active':activeVal
      },
    ]"
  >
    <i
      class="iconfont"
      :class="SportsName"
    ></i>
    {{ textVal }}
  </div>
</template>
<script lang="ts" setup>
import { ref, defineProps, watch } from 'vue'
const props = defineProps({
  active: {
    type: Boolean,
    default: function () {
      return false
    }
  },
  text: {
    type: String,
    default: function () {
      return ''
    }
  }
})
const SportsObject:any = ref({
  FT: '足球',
  BK: '篮球',
  TN: '网球',
  BS: '棒球',
  JC: '竞彩',
  BF: '比分',
  BK_AFT: '美式足球',
  OP_DJ: '电竞',
  OP_IH: '冰球',
  OP_RU: '橄榄球',
  OP_HB: '手球',
  OP: '其他',
  SY: '首页',
  RB: '滚球',
  COMBO: '串关',
  FT_VI: '虚拟足球',
  OP_MMA: '综合格斗',
  OP_BO: '拳击',
  OP_SN: '斯诺克',
  OP_DR: '飞镖',
  OP_TN: '乒乓球',
  OP_FH: '曲棍球',
  OP_FB: '地板球',
  OP_BV: '沙滩排球',
  OP_CK: '板球',
  OP_VB: '排球',
  OP_MS: '赛车',
  OP_BA: '自行车',
  OP_GF: '高尔夫',
  DR: '赛狗',
  OP_BM: '羽毛球',
  OP_JR: '金融投注',
  OP_LO: '彩票',
  OP_CY: '自行车赛',
  OP_OF: '水球',
  OP_SB: '垒球',
  OP_FU: '室内足球',
  OP_TT: '桌球',
  OP_GY: '体操',
  OP_TAF: '田径',
  OP_SS: '帆船',
  OP_SW: '游泳',
  OP_BS: '沙滩足球',
  OP_WS: '冬季运动',
  OP_BD: '班迪球',
  AH: '主播'
})
const activeVal = ref(false)
activeVal.value = props.active
watch(props, (val) => {
  if (val) {
    const { active, text } = val
    activeVal.value = active
    SportsName.value = `icon-${text}`
  }
})

const textVal = ref('')
textVal.value = SportsObject.value[props.text]

const SportsName = ref('icon-FT')
SportsName.value = `icon-${props.text}`
</script>
<style lang="scss" scoped>
.SportsButton{
  display: inline-flex;
  align-items: center;
  height: 64px;
  line-height: 64px;
  border-radius:30px;
  padding-left: 17px;
  padding-right: 40px;
  background: #eff2f2;
  color: #96a5aa;
  transition: all .3s;
  font-size: 24px;
  &.active{
    background:#7642fe;
    color:#fff;
  }
  .img{
    width:44px;
    height: 44px;
    margin-right: 19px;
  }
  .iconfont{
    margin-right: 10px;
  }
}
</style>
