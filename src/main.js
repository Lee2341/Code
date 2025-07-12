import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// 引入 Vue Router
import router from '@/router'

// 引入 Vant 组件库
import Vant from 'vant'
// 引入 Vant 样式
import 'vant/lib/index.css'

const app = createApp(App)

// 使用 Vue Router
app.use(router)

// 使用 Vant
app.use(Vant)

app.mount('#app')
