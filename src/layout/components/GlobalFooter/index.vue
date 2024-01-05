<template>
  <div class="global-bar-footer has-border">
    <div
      v-for="(item, idx) in barFooterArr"
      :key="idx"
      :class="{ active: item.value === active }"
      class="item"
      @click="clickChangeActive(item)"
    >
      <template v-if="item.value === 'game'">
        <template v-if="ifThemeBlue">
          <i class="iconfont icon-footer-game" :class="item.value"></i>
        </template>
        <template v-else>
          <img v-if="active === 'game'" class="img" :src="game" style="object-fit: contain" :class="item.value" />
          <img v-else :src="gameDefault" class="img" style="object-fit: contain" :class="item.value" />
        </template>
      </template>
      <template v-else>
        <i v-if="item.value === 'broadcast'" class="iconfont icon-footer-live" :class="item.value"></i>
        <i v-else class="iconfont icon-sports" :class="item.value"></i>
      </template>
      <span>
        {{ item.text }}
      </span>
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
    {
      text: t('home.live'),
      value: 'broadcast'
    },
    {
      text: t('home.sport'),
      value: 'home'
    },
    {
      text: t('home.casino'),
      value: 'game'
    }
  ]
  return barFooterArray
}
const barFooterArr: any = reactive(barFooterArrayChange())

const active = computed(() => {
  const routerName: any = router?.currentRoute?.value?.name || ''
  const routerNameToLowerCase = routerName.toLowerCase()
  const isrouterNameToLowerCase = ['broadcast', 'game'].includes(routerNameToLowerCase)
  return isrouterNameToLowerCase ? routerNameToLowerCase : 'home'
})

const clickChangeActive = (item: any) => {
  if (item.value === 'game') {
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
.global-bar-footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 88px;
  display: flex;
  z-index: 299;
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
    color: #96a5aa;
    font-weight: 600;
    .img {
      height: 48px;
      width: 48px;
    }
    .iconfont {
      font-size: 44px;
      height: 48px;
      width: 48px;
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
      font-size: 24px;
      margin-top: 4px;
    }
    .item-img {
      display: block;
    }
    &.active {
      color: var(--color-primary);
    }
  }
}
</style>
