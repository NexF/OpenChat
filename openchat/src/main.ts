import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import store from './store/store'; // 导入您创建的 store

import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/display.css'

const app = createApp(App)
app.use(ElementPlus)
app.use(store)
app.mount('#app')
