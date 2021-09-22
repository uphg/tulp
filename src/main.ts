import { createApp } from 'vue'
import { App } from './app/index'
import { router } from './router/index'
import './styles/global.styl'

const app = createApp(App)
app.use(router)
app.mount('#app')
