import fs from 'fs'

export const vueExampleCode = () => ({
  name: 'vue-example-code',
  transform(code, id) {
    if(!(/^.+\.example\.vue/.test(id) && !(/\?/.test(id)))) return
    const file = fs.readFileSync(id).toString()
    return `${code};\nexport const __sourceCode = ${JSON.stringify(file)};`
  }
})