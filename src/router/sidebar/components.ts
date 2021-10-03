// import { DefineComponent, Component } from 'vue'
import Markdown from '../../components/Markdown.vue'
// import ButtonDemo from '../../views/components/ButtonDemo.vue'
import ButtonDemo from '../../views/components/button-demo.md'
import InputDemo from '../../views/components/InputDemo.vue'
import SwitchDemo from '../../views/components/SwitchDemo.vue'
import DialogDemo from '../../views/components/DialogDemo.vue'
import JsxDemo from '../../views/components/JsxDemo'
import IconDemo from '../../views/components/IconDemo.vue'
import CollapseTransitionDemo from '../../views/components/CollapseTransitionDemo.vue'
import { SidebarType } from '../interface'
import { h } from 'vue'

let componentKey = 0 
const md = (component: any) => {
  componentKey+=1
  return h(Markdown, {
    key: componentKey
  }, {
    default: () => component
  })
}

console.log('md')
console.log(md)

export const components: SidebarType[] = [
  {
    text: '基础组件',
    items: [
      {
        path: 'button',
        name: 'ComponentsButton',
        component: ButtonDemo,
        meta: { title: 'Button 按钮' }
      },
      {
        path: 'input',
        name: 'ComponentsInput',
        component: InputDemo,
        meta: { title: 'Input 输入框' }
      },
      {
        path: 'switch',
        name: 'ComponentsSwitch',
        component: SwitchDemo,
        meta: { title: 'Switch 开关' }
      },
      {
        path: 'dialog',
        name: 'ComponentsDialog',
        component: DialogDemo,
        meta: { title: 'Dialog 对话框' }
      },
      {
        path: 'jsx',
        name: 'ComponentsJsx',
        component: JsxDemo,
        meta: { title: 'JSX 语法测试' }
      },
      {
        path: 'icon',
        name: 'ComponentsIcon',
        component: IconDemo,
        meta: { title: 'Icon 测试案例' }
      },
      {
        path: 'collapse-transition',
        name: 'ComponentsCollapseTransition',
        component: CollapseTransitionDemo,
        meta: { title: 'CollapseTransition 过渡' }
      }
    ]
  }
]
