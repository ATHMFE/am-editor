# aomao_plugin-selectall

全选插件

## 安装

```bash
$ yarn add aomao_plugin-selectall
```

添加到引擎

```ts
import Engine, { EngineInterface } from 'aomao_engine';
import Selectall from 'aomao_plugin-selectall';

new Engine(...,{ plugins:[Selectall] })
```

## 快捷键

快捷键为 `mod+a`，不可修改

## 命令

```ts
//使用 command 执行插件
engine.command.execute('selectall');
```
