import Installation from '~src/views/docs/installation.md'
import ImportOnDemand from '~src/views/docs/import-on-demand.md'
import { SidebarType } from '../interface'

export const docs: SidebarType[] = [
  {
    text: '快速入门',
    items: [
      {
        path: 'installation',
        name: 'DocsInstallation',
        component: Installation,
        meta: { title: '安装' }
      },
      {
        path: 'import-on-demand',
        name: 'DocsImportOnDemand',
        component: ImportOnDemand,
        meta: { title: '按需引入' }
      }
    ]
  }
]