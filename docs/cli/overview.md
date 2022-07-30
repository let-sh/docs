---
title: Overview
category: Cli
position: 100
---

# {{ $frontmatter.title }}

## Get Start

### Installation

Open your terminal, copy the the command below and run it:

```bash
# linux/macOS
curl -o- -sL https://install.let-sh.com/install.sh | bash

# Windows
iwr https://install.let-sh.com/install.ps1 -useb | iex
```

### Login

> product have been released, you could contact contect@let.sh for further information.

currently only support login via github

```bash
lets login
```

### Deploy

```bash
lets deploy
```

here are some supported flags

| Flag | Description                            | Example              | Usage                   |
| ---- | -------------------------------------- | -------------------- | ----------------------- |
| -d   | which dir the project located at       |                      | lets deploy -d ./dir    |
| -t   | type of deployments                    | react, vue, gin, etc | lets deploy -t hugo     |
| -p   | project name (unique in every account) | your project names   | lets deploy -p project1 |
| -c   | define the let.json config file        | let.json             | lets deploy -c let.json |

## Advanced

### let.json

### .env

### .letignore
