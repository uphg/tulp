import { createApp } from 'vue'
import { App } from './app/index'
import { router } from './router/index'
import './styles/indes.styl'
// import 'prismjs/themes/prism-tomorrow.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
