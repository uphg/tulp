# Tulp UI

## Todo

- [x] Button 按钮
- [ ] Input 输入框
- [x] Switch 开关
- [x] Collapse Transition 过渡
- [x] Dialog 弹框

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
