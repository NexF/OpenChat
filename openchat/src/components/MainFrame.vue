<template>
  <el-container class="layout-container-demo">
    <!-- <el-aside width="200px">
      <el-scrollbar hidden-xs-only>
        Aside
      </el-scrollbar>
    </el-aside> -->
    <el-container>
      <el-header height="50px">

        <div style="display: flex; align-items: center;height: 100%;">
          <el-button :icon="ChatLineSquare" circle />

          <span class="text-large font-600 mr-3" style="padding-left: 20px;"> {{ title }} </span>
        </div>

      </el-header>

      <el-main>

        <ChatMessage></ChatMessage>

      </el-main>

    </el-container>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ChatMessage from './ChatMessage.vue';

export default defineComponent({
  name: 'MainFrame',
  components: {
    ChatMessage
  },
  data() {
    return {
      input: '',
      title: '测试机器人',
      footer_height: '60',    // 不合理的
    }
  },
  methods: {

  },
});


</script>

<script lang="ts" setup>
import {
  TopRight, ChatLineSquare
} from '@element-plus/icons-vue';
</script>

<style scoped>
@import 'element-plus/theme-chalk/display.css';
.layout-container-demo .el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
}

.layout-container-demo .el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
}

.layout-container-demo .el-main {
  padding: 0px;
}

.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}

.layout-container-demo {
  height: 100%;
  width: 100%;
}
</style>