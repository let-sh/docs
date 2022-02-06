---
title: 快速开始
category: 快速开始
position: 1
badge: Starter
---

## 使用流程

### 安装命令行工具

打开你的命令行应用, 复制以下命令并点击 `enter` 执行:

<code-group>
  <code-block label="linux/macOS" active>

```bash
curl -o- -sL https://install.let-sh.com/install.sh | bash
```

  </code-block>
  <code-block label="Windows">

```powershell
iwr https://install.let-sh.com/install.ps1 -useb | iex
```

  </code-block>
</code-group>

### 登录

```bash
lets login
```

### 初始化你熟悉的项目类型，并一键部署

<code-group>
  <code-block label="static" active>

```bash
lets init static
lets deploy
```

  </code-block>
  <code-block label="react">

```bash
lets init react
lets deploy
```

  </code-block>
  <code-block label="flask">

```bash
lets init flask
lets deploy
```

  </code-block>
  <code-block label="express">

```bash
lets init express
lets deploy
```

  </code-block>
  <code-block label="gin">

```bash

lets init gin
lets deploy
```

  </code-block>
</code-group>

### 绑定域名到当前项目

> 你可以替换 xxxx.let.sh 为你喜欢的以 let.sh 结尾的域名(如果没有被其他人占用的话)

```bash
lets link xxxx.let.sh
```

<!--
## Admonitions

:::note
This is a note
:::

:::tip
This is a tip
:::

:::important
This is important
:::

:::caution
This is a caution
:::

:::warning
This is a warning
::: -->
