import fs from 'fs'

export const vueExampleCode = () => ({
  name: 'vue-example-code',
  transform(code, id) {
    // 通过所在文件夹目录获取示例组件代码
    if (!/.*src\/example\/[^/]+\/[^/]+\.vue$/.test(id)) return

    // 通过文件后缀获取示例组件代码
    // if (!id.endsWith('.exmp.vue')) return
    // if(!(/^.+\.exmp\.vue/.test(id) && !(/\?/.test(id)))) return
    const file = fs.readFileSync(id).toString()
    return `${code};\nexport const __sourceCode = ${JSON.stringify(file)};`
  }
})
