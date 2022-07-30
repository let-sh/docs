---
title: Gin
category: Handbook
position: 252
badge: Starter
---

# {{ $frontmatter.title }}

## Quick start demo

<AsciiPlayer id="412896"></AsciiPlayer>

## Create `main.go` file

::: warning
The exposing http port is provide by the `port` env, please bind the port read by the env.
:::

```go
package main

import (
    "github.com/gin-gonic/gin"
    "os"
)

func main() {
    r := gin.Default()
    r.GET("/ping", func(c *gin.Context) {
        c.JSON(200, gin.H{
            "message": "pong",
        })
    })
    // read the `port` env
    port := os.Getenv("PORT")
    if port == "" {
        port = "8080"
    }
    r.Run(":" + port)
}
```

## Init `go.mod` for project dependency

```shell
go mod init gin-demo
go mod download
```

## Deploy to let.sh

> if you haven't install `lets`, please take a look at the documentation: [Cli Overview](/cli/overview).

```shell
lets deploy
```
