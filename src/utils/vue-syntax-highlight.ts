import Prism from 'prismjs'
import 'prismjs/components/prism-typescript';

const templateTag = /<[\/]?template[^>]*>/

const scriptTagBefore = /<script[^>]*>/
const scriptTagAfter = /<\/script>/

const styleTagBefore = /<style[^>]*>/
const styleTagAfter = /<\/style>/

const html = (code: string, lang: string) => Prism.highlight(code, Prism.languages[lang], lang)

const suffix = (rule: RegExp, text: string) => {
  const regex = rule.exec(text)
  return text.slice(regex ? (regex?.index + regex[0].length) : 0)
}

const prefix = (rule: RegExp, text: string) => {
  const regex = rule.exec(text)
  return text.slice(0, regex ? regex?.index : 0)
}

const getTagName = (text: string) => {
  return text.match(/(?<=<)[a-z]+\b/)?.[0]
}

const createLanguage = (codeNode: string, lang: string = 'html') => (
  `<span class="language-${lang}">${codeNode}</span>`
)

// const createLangTag = (code: string, options: { before: RegExp, after: RegExp }) => {
//   const scriptInfo = code.match(options.before)?.[0] as string
//   let scriptBlock = html(scriptInfo, 'html')

//   const lang = scriptInfo?.match(/(?<=lang=")[a-z]+(?=")/)?.[0] as string

//   const scriptStart = suffix(options.before, code)
//   const prefixNode = prefix(options.before, code)
//   const scriptContent = prefix(options.after, scriptStart)

//   scriptBlock += html(scriptContent, lang)
//   scriptBlock += html(`</script>`, 'html')

//   return {
//     html: createLanguage(prefixNode + scriptBlock, lang),
//     suffix: suffix(options.after, scriptStart)
//   }
// }

export const codeClassification = (code: string) => {
  const tagName = getTagName(code)
  if (tagName !== 'template') {
    if (tagName === 'script') {
      const scriptInfo = code.match(scriptTagBefore)?.[0] as string

      let scriptBlock = html(scriptInfo, 'html')

      const lang = (scriptInfo?.match(/(?<=lang=")[a-z]+(?=")/)?.[0] || 'js') as string

      scriptBlock += `<span class="language-${lang}">`

      const scriptStart = suffix(scriptTagBefore, code)
      const prefixNode = prefix(scriptTagBefore, code)
      const scriptContent = prefix(scriptTagAfter, scriptStart)

      scriptBlock += html(scriptContent, lang)
      scriptBlock += `</span>`
      scriptBlock += html(`</script>`, 'html')

      return {
        html: prefixNode + scriptBlock,
        suffix: suffix(scriptTagAfter, scriptStart)
      }
    } else if (tagName === 'style') {
      const styleInfo = code.match(styleTagBefore)?.[0] as string

      let styleBlock = html(styleInfo, 'html')

      const lang = (styleInfo?.match(/(?<=lang=")[a-z]+(?=")/)?.[0] || 'css') as string

      styleBlock += `<span class="language-${lang}">`

      const styleStart = suffix(styleTagBefore, code)
      const prefixNode = prefix(styleTagBefore, code)
      const styleContent = prefix(styleTagAfter, styleStart)

      styleBlock += html(styleContent, lang)
      styleBlock += `</span>`
      styleBlock += html(`</script>`, 'html')

      return {
        html: prefixNode + styleBlock,
        suffix: suffix(styleTagAfter, styleStart)
      }
    }
  } else {

    let number = 0
    let before: string = ''
    let after: string = ''

    const pileUp = (code: string) => {
      if(templateTag.test(code)) {
        const templateTagText = code.match(templateTag)?.[0] as string
        const startTag = templateTagText.match(/<[\/]?template/,)?.[0]
        let length = 0
        if (startTag === '<template') {
          number += 1
          length = 9
        } else if (startTag === '</template') {
          number -= 1
          length = 11
        }
  
        before += code.slice(0, code.search(templateTag) + length)
        if (number <= 0) {
          after = code.slice(code.search(templateTag) + length)
          return
        }
        pileUp(code.slice(code.search(templateTag) + length))
      }
    }

    pileUp(code)

    return {
      html: createLanguage(html(before, 'html')),
      suffix: after
    }
  }
}

export const vueSyntaxHighlight = (demo: string) => {
  let codeHtml = ''
  const createCode = (demo: string) => {
    let codeBlock = codeClassification(demo)
    if (!(codeBlock && codeBlock.html)) return
    codeHtml += codeBlock.html
    createCode(codeBlock.suffix)
  }

  createCode(demo)
  return codeHtml
}
// console.log(vueSyntaxHighlight(demo))