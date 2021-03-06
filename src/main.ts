import { createApp } from 'vue'
import App from './App.vue'
import axios from './utils/https'

import router from "./router/index"
import store from "./store/index"
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

const app = createApp(App)

app.use(router, store, ElementPlus)
app.config.globalProperties.$https = axios

app.mount('#app')
