# Tulp UI

Vue3 UI 组件库

## Todo

- [x] Button 按钮
- [x] Input 输入框
- [x] Switch 开关
- [x] Collapse Transition 过渡
- [x] Dialog 弹框
- [x] Tabs 标签页

## 运行示例

```sh
yarn
yarn dev
```

配置 alias

```js
// vite.config.ts
export default {
  resolve: {
    alias: [
      {
        find: '~src',
        replacement: path.resolve(__dirname, './src')
      }
    ]
  },
}
```

```json
// tsconfig.json
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "~src/*": ["src/*"]
    }
  }
}
```
