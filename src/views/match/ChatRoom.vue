<template>
  <van-popup
    v-model:show="modelShow"
    class="chat"
    :class="{ 'has-bet': showFixedBet , 'fh': arrow === 2}"
    position="bottom"
    :overlay="false"
    :close-on-click-overlay="true"
    round
  >
    <div class="chat-main">
      <div class="close">
        <img
          src="@/assets/images/live/close@2x.png"
          @click="modelShow = false"
        />
      </div>

      <div
        v-if="arrow === 1"
        class="close-down"
      >
        <img
          src="@/assets/images/live/up_round.png"
          @click="handlerClick(2)"
        />
      </div>
      <div
        v-if="arrow === 2"
        class="close-down"
      >
        <img
          src="@/assets/images/live/down_round.png"
          @click="handlerClick(1)"
        />
      </div>

      <div
        ref="chatRef"
        class="chat-main__wrapper"
      >
        <div class="item">
          <div class="item-avatar">
            <SvgIcon name="bot" />
          </div>
          <div class="item-name">{{ $t('live.aiBot') }}<em>:</em></div>
          <div class="item-cont">{{ $t('live.chatSys') }}</div>
        </div>

        <div
          v-for="item in chatMessageList"
          :key="item.msgId"
          class="item"
        >
          <div class="item-avatar">
            <img
              v-img="item.headImg"
              :type="3"
            />
          </div>
          <div class="item-name">{{ item.nickName }}<em>:</em></div>
          <div class="item-cont">{{ item.content }}</div>
        </div>
      </div>

      <div class="chat-main__form">
        <van-form
          submit-on-enter
          @submit="onSend"
        >
          <van-field
            v-model="msgInput"
            autocomplete="off"
            :placeholder="placeholder"
            :disabled="disabledField"
            :maxlength="50"
          />
          <button
            native-type="submit"
            hidden
          />
        </van-form>
        <div class="action">
          <van-button
            :disabled="disabledSend"
            @click="onSend"
          >{{ $t('live.send') }}</van-button>
        </div>
      </div>
    </div>
  </van-popup>
</template>

<script setup lang="ts">
import websocket from '@/plugins/socket/websocket'
import { watch, Ref, ref, computed, nextTick, onMounted, onUnmounted } from 'vue'
import { intoRoom, lastMessageByPage } from '@/api/live'
import { getToken } from '@/utils/auth'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

import store from '@/store'

const { t } = useI18n()
const route = useRoute()

const props = defineProps({
  show: Boolean
})
const emits = defineEmits(['update:show'])

const modelShow = computed({
  get: () => props.show,
  set: (val: boolean) => emits('update:show', val)
})
const showFixedBet = computed(() => store.state.app.showFixedBet)
const userInfo = computed(() => store.state.user.userInfo)
const matchInfo = computed(() => store.state.match.matchInfo)
const needTimer = computed(() => store.state.match.needTimer)

const disabledField = computed(() => {
  const { isSend } = chatRoomInfo.value
  if (!getToken()) {
    return true
  }
  if (isSend * 1 === 0) {
    return true
  }
  return false
})
const disabledSend = computed(() => {
  const { isSend } = chatRoomInfo.value
  if (isSend == 0) {
    return true
  }
  return !msgInput.value
})
const placeholder = computed(() => {
  const { isSend, bettingTotal } = chatRoomInfo.value
  if (!getToken()) {
    return t('live.needLogin')
  }
  if (isSend == 0) {
    return t('live.needBet', { num: bettingTotal })
  }
  return t('live.chatTip') + '...'
})

watch(
  () => matchInfo.value,
  () => {
    getIntoRoom()
  }
)
onMounted(() => {})
onUnmounted(() => {
  websocket?.disconnect()
})

const gidm = computed(() => matchInfo.value.gidm)
const systemId = computed(() => matchInfo.value.systemId)
const anchorId = computed(() => route?.query?.anchorId)
const id = computed(() => route?.params?.id)
const roomKey = computed(() => `${id.value}${anchorId.value}`)
const isChangeKey = ref(false)

watch(roomKey, (newVal, oldVal) => {
  if (newVal === oldVal) return
  websocket?.disconnect()
  isChangeKey.value = true
})

const chatRoomInfo: Ref<any> = ref({})
const getIntoRoom = async () => {
  if (needTimer.value && !isChangeKey.value) {
    return
  }

  const params = {
    gidm: gidm.value,
    systemId: systemId.value,
    anchorId: anchorId.value,
    version: '3.9.0'
  }
  const res: any = await intoRoom(params)
  if (res.code === 200) {
    chatRoomInfo.value = res.data || {}
    getLastMessage()
    getSubscribe()
  }
}

const getLastMessage = async () => {
  const { roomNo, channelType } = chatRoomInfo.value
  const params = {
    roomNo: roomNo,
    page: 1,
    pageSize: 20,
    channelType: channelType
  }
  const res: any = await lastMessageByPage(params)
  const extra = res.extra || {}
  const messageList = extra.messageList || []
  if (res.code == 200) {
    // 這段目前看似沒用處先隱藏
    // const gidms = []
    // messageList.forEach((message: any) => {
    //   if (message.msgType && +message.msgType === 2 && message.content) {
    //     const newContent = JSON.parse(message.content || '')
    //     const bettingData = newContent.bettingData || []
    //     bettingData.forEach((item: any) => {
    //       gidms.push(item.gidm)
    //     })
    //   }
    // })
    if (isChangeKey.value) {
      chatMessageList.value = []
      isChangeKey.value = false
    }
    // msgType 1: 聊天消息, 2: 注單分享
    const messages = messageList.filter((msg: any) => `${msg.msgType}` === '1')
    handlerMessage(messages)
  }
}

const getSubscribe = async () => {
  const { roomNo } = chatRoomInfo.value
  const topic = `/topic/1/${roomNo}`
  websocket.subscribe(topic, (greeting: any) => {
    const body = JSON.parse(greeting.body)
    if (body && body.action === 1000) {
      const [item] = body.data
      handlerMessage(item)
    }
  })
}

const chatMessageList: Ref<any[]> = ref([])
const handlerMessage = (result: any) => {
  if (result instanceof Array) {
    const existingMsgIds = new Set(chatMessageList.value.map(item => item.msgId))
    const newMessages = result.reverse().filter(item => !existingMsgIds.has(item.msgId))
    chatMessageList.value = newMessages.concat(chatMessageList.value)
  } else {
    const existingMsgIds = new Set(chatMessageList.value.map(item => item.msgId))
    if (!existingMsgIds.has(result.msgId)) {
      chatMessageList.value.push(result)
    }
  }
  scorllToBottom()
}

const chatRef = ref(null)
const scorllToBottom = () => {
  const ele: any = chatRef.value || {}
  nextTick(() => {
    ele.scrollTop = ele && ele.scrollHeight
  })
}

const msgInput = ref()
const onSend = () => {
  const msgContent = msgInput.value
  const { roomNo } = chatRoomInfo.value
  const { playerId, teamId } = userInfo.value
  const msgObj = {
    token: '1',
    msgType: '1',
    roomNo: roomNo,
    content: msgContent,
    playerId: playerId,
    teamId: teamId
  }
  websocket.send('/chat/sendMsg', JSON.stringify(msgObj))
  msgInput.value = ''
}

const arrow: Ref<any> = ref(1)
const handlerClick = (val: number) => {
  arrow.value = val
}
// const msgInputRef = ref()
// const onMsgFocus = () => {
//   const ele: any = msgInputRef.value.$el
//   ele.scrollIntoView()
// }
</script>

<style lang="scss" scoped>
.chat {
  overflow: hidden;
  height: 34%;
  box-shadow: 0 -8px 20px 0 rgba(0, 0, 0, 0.1);
  &.has-bet {
    padding-bottom: 96px;
  }

  &.fh {
    height: 52.8%;
  }
}
.chat-main {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  .close {
    position: absolute;
    top: 5px;
    right: 20px;
    z-index: 15;
    img {
      width: 21px;
      height: 21px;
    }
  }
  .close-down {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    z-index: 14;
    padding-bottom: 10px;
    // background: #f4f5f8;
    background: var(--color-chat-room-wrapper-bg);
    > img {
      display: block;
      width: 120px;
      height: 40px;
      margin: 0 auto;
    }
  }

  &__form {
    display: flex;
    align-items: center;
    min-height: 120px;
    height: 120px;
    padding: 5px 12px;
    // background: rgba(72, 163, 255, 0.15);
    background: var(--color-chat-room-bg);
    .van-form {
      flex: 1;
      margin-right: 10px;
      background: var(--color-live-chat-field-bg);
      border-radius: 32px;
    }
    .van-field {
      color: #333;
      height: 64px;
      line-height: 64px;
      padding: 0 28px;
      border-radius: 32px;
      font-size: 24px;
      &:after {
        display: none;
      }
    }
    .action {
      .van-button {
        color: #fff;
        border: none;
        // background-image: linear-gradient(
        //   180deg,
        //   var(--color-linear-gradient-1) 0%,
        //   var(--color-linear-gradient-2) 100%
        // );
        background: var(--color-global-buttonPrimaryBg);
        border-radius: 32px;
        width: 120px;
        height: 64px;
      }
    }
  }

  &__wrapper {
    flex: 1;
    overflow-y: auto;
    // background: #f4f5f8;
    background: var(--color-chat-room-wrapper-bg);
    padding: 24px;
    padding-top: 70px;
    .item {
      position: relative;
      margin-bottom: 24px;
      padding: 0 0 0 64px;
      &-avatar {
        position: absolute;
        left: 0;
        // top: 20px;
        top: -7px;
        > img {
          display: block;
          width: 48px;
          height: 48px;
          border-radius: 60%;
        }
        .svg-icon {
          font-size: 48px;
        }
      }
      &-name {
        color: var(--color-text-3);
        font-size: 24px;
        margin-bottom: 6px;
        zoom: 0.9;
        > em {
          font-style: normal;
        }
      }
      &-cont {
        margin-top: 0px;
        font-size: 24px;
        // padding: 12px 20px;
        border-radius: 10px;
        position: relative;
        // background: #fff;
        color: var(--color-text-5);
        word-break: break-all;
        &::before {
          content: '';
          position: absolute;
          width: 18px;
          height: 18px;
          // background: #fff;
          // left: -5px;
          top: 12px;
          transform: rotateZ(60deg);
          z-index: 1;
        }
      }
    }
  }
}
</style>
