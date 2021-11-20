import fs from 'fs'
import path from 'path'

const root = path.resolve()

export const vueExampleCode = () => ({
  name: 'vue-example-code',
  transform(code, id) {
    // 通过所在文件夹目录获取示例组件代码
    if (!/.*src\/example\/[^/]+\/[^/]+\.vue$/.test(id)) return

    // 通过文件后缀获取示例组件代码
    // if (!id.endsWith('.exmp.vue')) return
    // if(!(/^.+\.exmp\.vue/.test(id) && !(/\?/.test(id)))) return
    const sourceCode = fs.readFileSync(id).toString()
    const filePath = String(id).replace(root.replace(/\\/g, '/'), '')
    return `${code};\nexport const __sourceCode = ${JSON.stringify(sourceCode)};
export const __filePath = ${JSON.stringify(filePath)};`
  }
})
