---
title: Static Files Hosting
category: 指引
position: 200
badge: Starter
---

## Quick start demo:

<AsciiPlayer id="412904"></AsciiPlayer>

## Create `index.html` file

```html{}[index.html]
<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>let.sh</title>
        <link rel="stylesheet" type="text/css" href="/index.css" />
      </head>
      <body>
        <h1>hello, letsh</h1>
      </body>
    </html>
  </body>
</html>
```

## Create `index.css` file

```css{}[index.css]
h1 {
  color: red;
}
```

## Deploy to let.sh

> if you haven't install `lets`, please take a look at the documentation: [Cli Overview](/cli/overview).

```shell
lets deploy
```

Then you can visit the given URL and see the red "hello, letsh" in browser.
