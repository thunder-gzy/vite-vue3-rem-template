import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { router } from './router'
// import 'virtual:uno.css'
// import '@unocss/reset/tailwind.css'


import './main.less'
import 'uno.css'
import './assets/font.css' // 字体文件

const app = createApp(App)
const pinia = createPinia()
// createApp(App).mount('#app')
app.use(router)
app.use(pinia)
app.mount('#app')
