---
title: Quick start
category: Quick Start
position: 1
badge: Starter
---

## How To Use

### Install command line tools

Open your terminal, copy the the command below and run it:

<code-group>
  <code-block label="linux/macOS" active>

```bash
curl -o- -sL https://install.let.sh/install.sh | bash
```

  </code-block>
  <code-block label="Windows">

```powershell
iwr https://install.let.sh/install.ps1 -useb | iex
```

  </code-block>
</code-group>

### Login

```bash
lets login
```

### Then clone example project and deploy with a single command line

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

### Link the domain to the project

> you can custom xxxx.let.sh with any other domain ending with let.sh
> 
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
