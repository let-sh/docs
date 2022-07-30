---
title: Express
category: Handbook
position: 251
badge: Starter
---

# {{ $frontmatter.title }}

## Init project and install express

```shell
npm init
npm i express
```

## Create `index.js` file

::: warning
The exposing http port is provide by the `port` env, please bind the port read by the env.
:::

```javascript
const express = require("express");
const app = express();

if (!process.env.PORT) {
  console.error("Please set env PORT.");
  process.exit(1);
}

const port = +process.env.PORT;
app.get("/", (_req, res) => res.send("hello, letsh"));
app.listen(port, () =>
  console.log(`Example app listening on http://localhost:${port}`)
);
```

## Add build and start scripts to your package.json

```json
{
  "scripts": {
    "build": "echo hello",
    "start": "node ./index.js"
  }
}
```

## Deploy to let.sh

> if you haven't install `lets`, please take a look at the documentation: [Cli Overview](/cli/overview).

```shell
lets deploy --type express
```

Then you can visit the given URL and see "hello, letsh" in browser.
