# aomao_plugin-hr

分割线插件

## 安装

```bash
$ yarn add aomao_plugin-hr
```

添加到引擎

```ts
import Engine, { EngineInterface } from 'aomao_engine';
import Hr , { HrComponent } from 'aomao_plugin-hr';

new Engine(...,{ plugins:[Hr] , cards:[HrComponent]})
```

## 可选项

### 快捷键

默认快捷键 `mod+shift+e`

```ts
hotkey?:string;//默认mod+shift+e

//使用配置
new Engine(...,{
    config:{
        "hr":{
            //修改快捷键
            hotkey:"快捷键"
        }
    }
 })
```

### Markdown

默认支持 markdown，传入`false`关闭

Hr 插件 markdown 语法为`---`

```ts
markdown?: boolean;//默认开启，false 关闭
//使用配置
new Engine(...,{
    config:{
        "hr":{
            //关闭markdown
            markdown:false
        }
    }
 })
```

## 命令

```ts
engine.command.execute('hr');
```
