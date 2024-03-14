<template>
  <el-container style="height: 100%;">
    <el-main style="padding: 0px;">
      <el-scrollbar>
        <div style="padding: 10px;">
          <SingleMsg v-for="msg in messages" :key="msg.id" :msg_content="msg.content" :msg_time="msg.time" :is_mine="false"></SingleMsg>
        </div>
      </el-scrollbar>

    </el-main>
    <el-footer :height="footer_height" class="footer">
      <div class="input-wrapper" ref="input" style="display: inline-block; width: 100%">
        <el-input v-model="input" :autosize="{ minRows: 1, maxRows: 3 }" maxlength="3000" show-word-limit type="textarea"
          placeholder="说点什么？～" style="width: calc(100% - 50px);" />
        <el-button plain style="width: 40px; margin-left: 10px;" :icon="Promotion"></el-button>
      </div>
    </el-footer>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SingleMsg from './SingleMsg.vue';
import { fixedDataType } from 'element-plus/es/components/table-v2/src/common';

// let message : {content:string, time: string , id:int};
// let messages : message[];
// message =

export default defineComponent({
  name: 'ChatMessage',
  components: {
    SingleMsg
  },
  data() {
    return {
      circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
      input: '',
      footer_height: '60',    // 不合理的
      messages: [
        {
          content: 'ceshi',
          time: '2022/01/10 12:00:12',
          id: 0
        }, {
          content: 'ceshi',
          time: '2022/01/10 12:00:12',
          id: 0
        }, {
          content: 'ceshi',
          time: '2022/01/10 12:00:12',
          id: 0
        },
      ]
    }
  }
});
</script>
<script lang="ts" setup>
import {
  Promotion, MoreFilled
} from '@element-plus/icons-vue';
</script>
<style>
.msg-context-text {
  font-size: small;
  color: rgb(4, 0, 85);
}

.msg-me .msg-context-text {
  background-color: rgb(228, 241, 255);
}

.msg-others .msg-context-text {
  background-color: rgb(237, 237, 237);
}

.grid-content {
  border-radius: 4px;
  min-height: 0px;
  padding: 10px;
  display: inline-block;
  white-space: pre-wrap;
}

.el-row {
  margin: 5px;
}

.msg-info {
  font-size: xx-small;
  color: gray;
}

.headimg-div {
  padding-left: 10%;
  padding-right: 10%;
}

.input-wrapper {
  padding-top: 10px;
  padding-bottom: 10px;
}

.footer {
  background-color: #dcdcdc;
  text-align: center;
}
</style>