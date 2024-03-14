<template>
  <MineMsg v-if="is_mine" :headimg_url="headimg_url" :msg_content="msg_content" :msg_time="msg_time"></MineMsg>
  <OthersMsg v-else :headimg_url="headimg_url" :msg_content="msg_content" :msg_time="msg_time"></OthersMsg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MineMsg from './MineMsg.vue';
import OthersMsg from './OthersMsg.vue';

export default defineComponent({
  name: 'SingleMsg',
  components: {
    MineMsg,
    OthersMsg
  },
  props: {
    is_mine: {
      default: true
    },
    msg_time: {     // 消息发送时间
      default: "2035/01/01 12:00:00"
    },
    msg_content: {      // 消息内容
      default: "Only For Test 测试用测试用测试用测试用测试用测试用测试用测试用测试用测试用\n测试用"
    },
    headimg_url: {        // 头像Url
      default: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
    }
  }
})
</script>
