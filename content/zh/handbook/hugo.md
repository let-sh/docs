---
title: Hugo
category: 指引
position: 201
badge: Starter
---

<alert type="info">

For futher framework related tutorial: <https://gohugo.io/getting-started/quick-start/>

</alert>

## Create a new site

```shell
hugo new site quickstart
```

## Add a Theme

```
cd quickstart
git init
git submodule add https://github.com/theNewDynamic/gohugo-theme-ananke.git themes/ananke
echo theme = \"ananke\" >> config.toml
```

## Deploy to let.sh

> if you haven't install `lets`, please take a look at the documentation: [Cli Overview](/cli/overview).

```shell
lets deploy
```

Then you can visit the given URL and see the red "hello, letsh" in browser.
