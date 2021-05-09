---
title: Gin
category: Handbook
position: 252
badge: Starter
---

## Quick start demo

[![asciicast](https://asciinema.org/a/412896.svg)](https://asciinema.org/a/412896)

## Create `main.go` file

<alert type="warning">
The exposing http port is provide by the `port` env, please bind the port read by the env.
</alert>

```go{}[main.go]
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
go mod tidy
```

## Deploy to let.sh

> if you haven't install `lets`, please take a look at the documentation: [Cli Overview](/cli/overview).

```shell
lets deploy
```
