import { createApp } from 'vue'
import { App } from './app/index'
import { router } from './router/index'
import { createHead } from '@vueuse/head' // <--
import './styles/indes.styl'
import Example from '~src/components/Example.vue'
import { TButton, TInput, TCollapseTransition, TIcon } from '~src/lib/index'

const app = createApp(App)
const head = createHead() // <--

app.use(head) // <--
app.use(router)
app.mount('#app')

app.component('Example', Example)
app.component('t-button', TButton)
app.component('t-icon', TIcon)
app.component('t-input', TInput)
app.component('t-collapse-transition', TCollapseTransition)
