---
title: Quick start
category: Quick Start
position: 0
badge: Starter
---

## How To Use

### Install command line tools

Open your terminal, copy the the command below and run it:

<code-group>
  <code-block label="linux/macOS" active>

```bash
# install cli
curl -o- -sL https://install.let.sh/install.sh | bash
```

  </code-block>
  <code-block label="Windows">

```powershell
# install cli
iwr https://install.let.sh/install.ps1 -useb | iex
```

  </code-block>
</code-group>

### Login

```bash
# login with your github account
lets login
```

### Then clone example project and deploy with a single command line

<code-group>
  <code-block label="static" active>

```bash
# static hosting
lets init static
lets deploy
```

  </code-block>
  <code-block label="react">

```bash
# react framework
lets init react
lets deploy
```

  </code-block>
  <code-block label="flask">

```bash
# python flask framework
lets init flask
lets deploy
```

  </code-block>
  <code-block label="express">

```bash
# node express framework
lets init express
lets deploy
```

  </code-block>
  <code-block label="gin">

```bash
# golang gin framework
lets init gin
lets deploy
```

  </code-block>
</code-group>

### Link the domain to the project

```bash
# you can custom xxxx.let.sh with any other domain ending with let.sh
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
