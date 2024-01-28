import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
// import 'virtual:uno.css'
// import '@unocss/reset/tailwind.css'
import './main.less'
import 'uno.css'

const app = createApp(App)
// createApp(App).mount('#app')
app.use(router)
app.mount('#app')
