<template>
  <div class="global-bar-footer-box">
    <div class="global-bar-footer has-border">
      <div
        v-for="(item, idx) in barFooterArr"
        :key="idx"
        :class="{ active: item.value === active }"
        class="item"
        @click="clickChangeActive(item)"
      >
        <template v-if="item.value === 'casino'">
          <template v-if="ifThemeBlue">
            <i class="iconfont icon-footer-game" :class="item.value"></i>
          </template>
          <template v-else>
            <img v-if="active === 'casino'" class="img" :src="game" style="object-fit: contain" :class="item.value" />
            <img v-else :src="gameDefault" class="img" style="object-fit: contain" :class="item.value" />
          </template>
        </template>
        <template v-else-if="item.value === 'community'">
          <SvgIcon name="home-community" class="community-img" :class="{ communityImgAct: active === 'community' }" />
        </template>
        <template v-else>
          <i v-if="item.value === 'match'" class="iconfont icon-footer-live" :class="item.value"></i>
          <i v-else class="iconfont icon-sports" :class="item.value"></i>
        </template>
        <span>
          {{ item.text }}
        </span>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import gameDefault from '@/assets/images/globalLayout/footer/game-default.png'
import game from '@/assets/images/globalLayout/footer/game.png'
import { reactive, computed } from 'vue'
import router from '@/router'
import { showToast } from 'vant'
import lang from '@/lang'
import store from '@/store'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const ifThemeBlue = computed(() => {
  return store.state.app.theme === 'blue'
})

const barFooterArrayChange = (): Array<any> => {
  const barFooterArray = [
    // {
    //   text: t('home.Community'),
    //   value: 'community'
    // },
    {
      text: t('home.sport'),
      value: 'home'
    },
    {
      text: t('home.live'),
      value: 'match'
    },
    {
      text: t('home.casino'),
      value: 'casino'
    }
  ]
  return barFooterArray
}
const barFooterArr: any = reactive(barFooterArrayChange())

const active = computed(() => {
  const routerName: any = router?.currentRoute?.value?.name || ''
  const routerNameToLowerCase = routerName.toLowerCase()
  const isrouterNameToLowerCase = ['match', 'casino'].includes(routerNameToLowerCase)
  return isrouterNameToLowerCase ? routerNameToLowerCase : 'home'
})

const emit = defineEmits(['valueChange'])
const clickChangeActive = (item: any) => {
  emit('valueChange', 'bottomHome')
  if (item.value === 'community') {
    showToast(lang.global.t('home.stayTuned'))
    return
  }
  barFooterArr.length = 0
  barFooterArr.push(...barFooterArrayChange())
  store.dispatch('betting/setMoreShow', { status: false, moreParams: {} })
  router.push(`/` + item.value)
}
</script>
<style lang="scss" scoped>
.global-bar-footer-box {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 90px;
  background-color: #fff;
  z-index: 299;
  .global-bar-footer {
    padding: 0 5%;
    height: 90px;
    display: flex;
    background-color: #fff;
    &.has-border {
      border-top: 1px solid #e5ecf3;
    }
    .item {
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: var(--color-global-buttonCl);
      font-weight: 600;
      .img {
        height: 38px;
        width: 38px;
      }
      .iconfont {
        font-size: 38px;
        height: 38px;
        width: 38px;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        font-weight: 100;
        &.live {
          font-size: 40px;
        }
      }
      span {
        line-height: 24px;
        font-size: 20px;
        font-weight: 500;
        margin-top: 4px;
      }
      .item-img {
        display: block;
      }
      &.active {
        color: var(--color-primary);
      }
      // 社群图片
      .community-img {
        font-size: 38px;
        color: var(--color-global-buttonCl);
      }
      .communityImgAct {
        color: var(--color-primary);
      }
    }
  }
}
</style>
