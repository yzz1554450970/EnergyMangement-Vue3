import './assets/main.css'

//引入createApp用于创建组件
import { createApp } from 'vue'
//引入App根组件
import App from './App.vue'
import router from './router'
const app = createApp(App)

app.use(router)

app.mount('#app')
