---
lang: zh-CN
title: VuePress
description: Use example of Markdown + VuePress
sidebarDepth: 3
---
# Hello VuePress

<!-- 目录中的标题将会链接到对应的 标题锚点，因此如果你禁用了标题锚点，可能会影响目录的功能。-->
[[toc]]

## Markdown

### 语法扩展

#### Table

- a regular table

| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |

- formatting content within your table

| Left-aligned | Center-aligned | Right-aligned |
| :---         |     :---:      |          ---: |
| git status   | git status     | git status    |
| git diff     | git diff       | git diff      |

#### Text

**This is bold text**

*This text is italicized*

~~This was mistaken text~~

**This text is _extremely_ important**

<sub>This is a subscript text</sub>

<sup>This is a 
superscript
text</sup>

#### Link

<!-- 相对路径 -->
[首页](../README.md)  
[配置参考](../reference/config.md)  
[快速上手](./getting-started.md)  
<!-- 绝对路径 -->
[指南](/zh/guide/README.md)  
[配置参考 > markdown.links](/zh/reference/config.md#links)  
<!-- URL -->
[GitHub](https://github.com) 

#### Emoji

VuePress 2 已经发布 :tada: ！

前往 [emoji-cheat-sheet](https://github.com/ikatyang/emoji-cheat-sheet) 来查看所有可用的 Emoji 表情和对应代码。

#### Code

- highlight

```ts{1,6-8}
import { defaultTheme, defineUserConfig } from 'vuepress'

export default defineUserConfig({
  title: '你好， VuePress',

  theme: defaultTheme({
    logo: 'https://vuejs.org/images/logo.png',
  }),
})
```

- line number

```ts
// 行号默认是启用的
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```ts:no-line-numbers
// 行号被禁用
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

- add v-pre

```md
<!-- 默认情况下，这里会被保持原样 -->
1 + 2 + 3 = {{ 1 + 2 + 3 }}
```

```md:no-v-pre
<!-- 这里会被 Vue 编译 -->
1 + 2 + 3 = {{ 1 + 2 + 3 }}
```

```js:no-v-pre
// 由于 JS 代码高亮，这里不会被正确编译
const onePlusTwoPlusThree = {{ 1 + 2 + 3 }}
```

- import code block

<!-- 指定代码语言，行高亮 -->
@[code ts{1-3,5}](@vuepress/client.ts)


### 在 Markdown 中使用 Vue

#### 模板语法

一加一等于： {{ 1 + 1 }}

<span v-for="i in 3"> span: {{ i }} <br/></span>

#### 组件

这是默认主题内置的 `<Badge />` 组件 <Badge text="演示" />

##### Badge

- VuePress - <Badge type="tip" text="v2" vertical="top" />
- VuePress - <Badge type="warning" text="v2" vertical="middle" />
- VuePress - <Badge type="danger" text="v2" vertical="bottom" />

##### CodeGroupItem

- 你必须在 `<CodeGroupItem>` 的开始标签和代码块之间添加一个空行，否则代码块无法被 `Markdown` 正确解析。

<CodeGroup>
  <CodeGroupItem title="YARN">

```bash:no-line-numbers
yarn
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM" active>

```bash:no-line-numbers
npm install
```

  </CodeGroupItem>
</CodeGroup>



## 静态资源

### Public 文件

- 默认的 `Public` 目录是 `.vuepress/public`

- 在大多数情况下，你不需要担心这些 `Public` 文件的引用路径，因为 `VuePress` 会自动帮你处理 `base` 前缀：

![pic](/landscape1.jpg)


### Base Helper

- 然而，有些情况下，你可能会有一些指向 `Public` 文件的动态路径，尤其是在你开发一个自定义主题的时候。在这种情况下， `base` 无法被自动处理。为了解决这个问题，`VuePress` 提供了 `withBase` 工具函数，它可以帮助你添加 `base` 前缀：

<img :src="$withBase('/landscape2.jpg')" alt="#">


<!-- ### 路径别名

![来自路径别名的图片](@images/images.png) -->
