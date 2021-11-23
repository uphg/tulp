module.exports = {
  // 环境
  env: {
    'vue/setup-compiler-macros': true, // 修复 defineProps、defineEmits 未定义的错误警告
    browser: true, // 浏览器
    node: true, // Node
    jest: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended'
  ],
  plugins: ['@typescript-eslint', 'import'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser', // 防止与 vue-eslint-parser 插件冲突
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      // 配置 jsx
      jsx: true,
      tsx: true
    }
  },
  overrides: [
    // 指定 TS 类型检测启用的文件后缀
    {
      files: ['*.ts', '*.tsx', '.vue'],
      rules: {
        'no-undef': 'off' // 参考：https://eslint.org/docs/rules/no-undef
      }
    }
  ],
  rules: {
    // js/ts
    indent: ['error', 2], // 缩进风格
    quotes: ['error', 'single', { 'avoidEscape': true }], // 使用单引号
    'comma-dangle': ['error', 'never'], // 禁止对象尾逗号
    // 禁止特定语法，参考：https://eslint.org/docs/rules/no-restricted-syntax
    'no-restricted-syntax': [
      'error',
      'WithStatement', // with 语句
      "BinaryExpression[operator='in']" // in 运算符
    ],
    camelcase: 'error', // 必须使用驼峰式命名法，参考：https://eslint.org/docs/rules/camelcase
    'no-var': 'error', // 禁止全局变量
    'no-empty': 'error', // 禁止空的块语句，参考：https://eslint.org/docs/rules/no-empty
    // 使用 const 声明固定值，参考：https://cn.eslint.org/docs/rules/prefer-const
    'prefer-const': [
      'warn',
      { destructuring: 'all' /* ignoreReadBeforeAssign: true */ }
    ],
    'prefer-template': 'error', // 使用模板字面量拼接字符串，参考：https://eslint.org/docs/rules/prefer-template
    'object-shorthand': 'off', // 使用 ES6+ 语法简写对象，参考：https://eslint.org/docs/rules/object-shorthand
    'no-constant-condition': 'error', // 禁止在条件语句中使用常量，参考：https://eslint.org/docs/rules/no-constant-condition
    'space-before-function-paren': ['error', 'never'], // 函数声明后空格，参考：https://cn.eslint.org/docs/rules/space-before-function-paren#never
    'no-multi-spaces': ['error', { ignoreEOLComments: true }], // 禁止多个空格（注释不受影响），参考：https://eslint.org/docs/rules/no-multi-spaces#ignoreeolcomments
    'no-dupe-args': 'error', // 禁止 function 定义中的重复参数，参考：https://eslint.org/docs/rules/no-dupe-args
    'key-spacing': ['error', { 'afterColon': true }], // 强制对象键和值之间保持一致的间距，参考：https://eslint.org/docs/rules/key-spacing#aftercolon
    'keyword-spacing': ['error', { 'before': true }], // 在关键字前后强制使用一致的间距，参考：https://eslint.org/docs/rules/keyword-spacing

    // TS
    '@typescript-eslint/explicit-module-boundary-types': 'off', // 关闭全局 TS 检测，只检测指定后缀文件，参考：https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md#configuring-in-a-mixed-jsts-codebase
    '@typescript-eslint/no-explicit-any': 'off', // 关闭：禁止使用 any 类型，参考：https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-explicit-any.md
    // '@typescript-eslint/no-non-null-assertion': 'off', // 关闭：禁止使用 ! 进行非空断言，参考：https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-assertion.md
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'off', // 关闭：禁止在可选链后使用 ! 进行非空断言，参考：https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-asserted-optional-chain.md

    // vue
    'vue/no-v-html': 'off', // 关闭：禁止使用 v-html
    'vue/require-default-prop': 'off', // 关闭：props 指定类型后必须带有默认值
    // 'vue/require-explicit-emits': 'off', // 关闭：必须要显示的声明 emits，才能使用
    'vue/multi-word-component-names': 'off', // 关闭：组件名必须由多个单词组成
    'vue/component-definition-name-casing': 'off',
    // 'vue/comma-dangle': 'off', // 尾部逗号
    'vue/multiline-html-element-content-newline': ['off'],
    'vue/singleline-html-element-content-newline': ['off'],
    'vue/max-attributes-per-line': ['off'] // 标签属性是否换行
    /* 'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 3,
        multiline: 1
      }
    ] */
  }
}
