import { createApp } from 'vue'
import { App } from './app/index'
import { router } from './router/index'
import './styles/indes.styl'
import Example from '~src/components/Example.vue'
import { Button } from '~src/lib/index'
// import 'prismjs/themes/prism-tomorrow.css'

const app = createApp(App)
app.use(router)
app.mount('#app')

app.component('Example', Example)
app.component('Button', Button)
