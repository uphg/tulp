# Tulip UI

- 使用 Vue 3 + TS + Vite

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

编译 markdown 插件

```bash
yarn add -D marked
```