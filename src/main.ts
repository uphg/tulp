import { createApp } from 'vue'
import { App } from './app/index'
import { router } from './router/index'
import './styles/indes.styl'
import './lib/_styles/common/vars.styl'
import Example from '~src/components/Example.vue'
import {
  TButton,
  TButtonGroup,
  TInput,
  TCollapseTransition,
  TIcon,
  TSwitch,
  TDialog,
  TPagination
} from '~src/lib/index'
import './utils/vue-syntax-highlight'

const app = createApp(App)

app.use(router)
app.mount('#app')

app.component('Example', Example)
app.component('t-button', TButton)
app.component('t-button-group', TButtonGroup)
app.component('t-icon', TIcon)
app.component('t-input', TInput)
app.component('t-switch', TSwitch)
app.component('t-dialog', TDialog)
app.component('t-collapse-transition', TCollapseTransition)
app.component('t-pagination', TPagination)
