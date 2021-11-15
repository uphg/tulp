import { createApp } from 'vue'
import { App } from './app/index'
import { router } from './router/index'
import './styles/indes.styl'
import './lib/_styles/common/vars.styl'
import Example from '~src/components/Example.vue'
import { TButton, TInput, TCollapseTransition, TIcon, TSwitch } from '~src/lib/index'
import './utils/vue-syntax-highlight'

const app = createApp(App)

app.use(router)
app.mount('#app')

app.component('Example', Example)
app.component('t-button', TButton)
app.component('t-icon', TIcon)
app.component('t-input', TInput)
app.component('t-switch', TSwitch)
app.component('t-collapse-transition', TCollapseTransition)
