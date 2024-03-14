<template>
        <el-container>
            <el-aside width="50px">
                <div class="headimg-div">
                <el-avatar :size="40" :src="headimg_url"/>
                </div>
            </el-aside>
            <el-main id="main-msg">
                <el-row>
                    <el-col style="text-align: left;">
                        <div class="msg-info">{{ msg_time }}</div>
                    </el-col>
                </el-row>
                <el-row class="msg-others">
                    <el-col :span="24" style="text-align: left;">
                        <div class="grid-content msg-context-text" style="text-align: left">
                            {{ msg_content }}
                        </div>
                    </el-col>
                </el-row>
            </el-main>
        </el-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
    name: 'OthersMsg',
    components: {

    },
    data() {
        return {
        }
    },
    props: {
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
});
</script>

<style scoped>
#main-msg {
    padding:0%
}
</style>