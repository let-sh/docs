---
title: Hexo
category: Handbook
position: 202
badge: Starter
---

# {{ $frontmatter.title }}

::: info
For futher framework related tutorial: <https://hexo.io/>
:::

## Install cli

```shell
npm install -g hexo-cli
```

## Create a new site

```shell
hexo init hexo-site
cd hexo-site
```

## Deploy to let.sh

> if you haven't install `lets`, please take a look at the documentation: [Cli Overview](/cli/overview).

```shell
lets deploy
```

Then you can visit the given URL and see the red "hello, letsh" in browser.
