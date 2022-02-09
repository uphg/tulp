import ButtonDemo from '~src/views/components/button.md'
import InputDemo from '~src/views/components/input.md'
import SwitchDemo from '~src/views/components/switch.md'
import DialogDemo from '~src/views/components/dialog.md'
import IconDemo from '~src/views/components/icon.md'
import CollapseTransitionDemo from '~src/views/components/collapse-transition.md'
import TabsDemo from '~src/views/components/tabs.md'
import PaginationDemo from '~src/views/components/pagination.md'
import { SidebarType } from '../interface'

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
        path: 'icon',
        name: 'ComponentsIcon',
        component: IconDemo,
        meta: { title: 'Icon 图标' }
      },
      {
        path: 'collapse-transition',
        name: 'ComponentsCollapseTransition',
        component: CollapseTransitionDemo,
        meta: { title: 'CollapseTransition 过渡' }
      },
      {
        path: 'tabs',
        name: 'ComponentsTabs',
        component: TabsDemo,
        meta: { title: 'Tabs 标签页' }
      },
      {
        path: 'pagination',
        name: 'ComponentsPagination',
        component: PaginationDemo,
        meta: { title: 'Pagination 分页' }
      }
    ]
  }
]
