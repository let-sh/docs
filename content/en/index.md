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
curl -o- -sL https://install.let-sh.com/install.sh | bash
```

  </code-block>
  <code-block label="Windows">

```powershell
iwr https://install.let-sh.com/install.ps1 -useb | iex
```

  </code-block>
</code-group>

### Login

```bash
lets login
```

### Clone your project from the repository you desire and use a single command line to deploy

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

> You can use your custom domain name ending with let.sh, such as XXX.let.sh.

```bash
lets link xxxx.let.sh
```

### Tutorials


<card-list>
  <post-card
    href="https://let.sh/blog/deploy-your-blog-via-letsh/"
    title="Deploy your blog via let.sh" 
    content="How to pick a blog framework and deploy it in seconds via let.sh"
    bg-img="https://let.sh/assets/blog/intro/cover.jpg"
    avatar="https://let.sh/assets/blog/authors/fred.jpg"
    author="Fred"
    :date="new Date('May 13, 2022')"
    label="Tutorial"></post-card>
</card-list>


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
