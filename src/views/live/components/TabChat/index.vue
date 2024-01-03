<template>
  <div class="chat">
    <div class="chat-section" ref="chatRef">
      <div class="item">
        <div class="item-avatar">
          <SvgIcon name="bot" />
        </div>
        <div class="item-name">{{ $t('live.aiBot') }}<em>:</em></div>
        <div class="item-cont">{{ $t('live.chatSys') }}</div>
      </div>

      <div class="item" v-for="item in chatMessageList" :key="item.msgId">
        <div class="item-avatar">
          <img v-img="item.headImg" :type="3" />
        </div>
        <div class="item-name">{{ item.nickName }}<em>:</em></div>
        <div class="item-cont">{{ item.content }}</div>
      </div>
    </div>

    <div class="chat-bottom">
      <van-form @submit="onSend" submit-on-enter>
        <van-field
          v-model="msgInput"
          autocomplete="off"
          :placeholder="placeholder"
          :disabled="disabledField"
          :maxlength="50"
        />
        <button native-type="submit" hidden />
      </van-form>
      <div class="action">
        <van-button @click="onSend" :disabled="disabledSend">{{ $t('live.send') }}</van-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import websocket from '@/plugins/socket/websocket'
import { watch, Ref, ref, computed, nextTick, onMounted } from 'vue'
import { intoRoom, lastMessageByPage } from '@/api/live'
import { getToken } from '@/utils/auth'
import store from '@/store'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const props = defineProps({
  matchInfo: {
    type: Object,
    default: () => {}
  }
})

const userInfo = computed(() => store.state.user.userInfo)
const disabledSend = computed(() => {
  const { isSend } = chatRoomInfo.value
  if (isSend == 0) {
    return true
  }
  return !msgInput.value
})
const disabledField = computed(() => {
  const { isSend } = chatRoomInfo.value
  if (isSend == 0) {
    return true
  }
  return false
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

const matchInfo = computed(() => props.matchInfo)
watch(
  () => matchInfo.value,
  () => {
    getIntoRoom()
  }
)
onMounted(() => {})

const chatRoomInfo: Ref<any> = ref({})
const getIntoRoom = async () => {
  const params = {
    gidm: matchInfo.value.gidm,
    systemId: matchInfo.value.systemId,
    anchorId: undefined,
    version: '3.9.0'
  }
  const res: any = await intoRoom(params)
  if (res.code == 200) {
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
    const gidms = []
    messageList.forEach((message: any) => {
      if (message.msgType && +message.msgType === 2 && message.content) {
        const newContent = JSON.parse(message.content || '')
        const bettingData = newContent.bettingData || []
        bettingData.forEach((item: any) => {
          gidms.push(item.gidm)
        })
      }
    })
    handlerMessage(messageList)
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

const chatRef = ref(null)
const scorllToBottom = () => {
  const ele: any = chatRef.value || {}
  nextTick(() => {
    ele.scrollTop = ele && ele.scrollHeight
  })
}

const chatMessageList: Ref<any[]> = ref([])
const handlerMessage = (result: any) => {
  if (result instanceof Array) {
    chatMessageList.value = result.reverse().concat(chatMessageList.value)
  } else {
    chatMessageList.value.push(result)
  }
  scorllToBottom()
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
</script>

<style lang="scss" scoped>
.chat {
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  &-bottom {
    display: flex;
    align-items: center;
    height: 100px;
    padding: 5px 12px;
    .van-form {
      flex: 1;
      margin-right: 10px;
    }
    .van-field {
      background: #f5f5f5;
      color: #333;
      height: 64px;
      line-height: 64px;
      padding: 0 28px;
      border-radius: 32px;
      font-size: 24px;
    }
    .action {
      .van-button {
        color: #fff;
        background: var(--color-primary);
        border-color: var(--color-primary);
        border-radius: 32px;
        width: 120px;
        height: 64px;
      }
    }
  }

  &-section {
    overflow-y: auto;
    background: #f4f5f8;
    flex: 1;
    padding: 24px;
    .item {
      position: relative;
      margin-bottom: 24px;
      padding: 0 0 0 64px;
      &-avatar {
        position: absolute;
        left: 0;
        top: 20px;
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
        color: #546371;
        font-size: 24px;
        margin-bottom: 6px;
        zoom: 0.9;
        > em {
          font-style: normal;
        }
      }
      &-cont {
        font-size: 24px;
        padding: 12px 20px;
        border-radius: 10px;
        position: relative;
        background: #fff;
        color: #000;
        word-break: break-all;
        &::before {
          content: '';
          position: absolute;
          width: 18px;
          height: 18px;
          background: #fff;
          left: -5px;
          top: 12px;
          transform: rotateZ(60deg);
          z-index: 1;
        }
      }
    }
  }
}
</style>
