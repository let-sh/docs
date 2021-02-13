---
title: Quick start
category: Quick Start
position: 0
badge: Starter
---

## How To Use

### Install command line tools

Open your terminal, copy the the command below and run it:

```bash
# install cli
# optional: you can use npm or yarn instead: npm install -g @letsh/cli or yarn global add @letsh/cli
curl -o- -sL https://install.let.sh.cn/install.sh | bash
```

### Login

```bash
# login with your github account
lets login
```

### Then clone example project and deploy with a single command line

#### Static hosting

```bash
git clone https://github.com/let-sh/example
cd static
lets deploy -t static
```

#### React

```bash
git clone https://github.com/let-sh/example
cd react
lets deploy -t react
```

#### Node express framework

```bash
git clone https://github.com/let-sh/example
cd express
lets deploy -t express
```

#### Golang gin framework

```bash
git clone https://github.com/let-sh/example
cd gin
lets deploy -t gin
```

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
