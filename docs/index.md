---
title: Quick start
category: Quick Start
position: 1
badge: Starter
---

# {{ $frontmatter.title }}

## How To Use

### Install command line tools

Open your terminal, copy the the command below and run it:

```bash
# linux/macOS
curl -o- -sL https://install.let-sh.com/install.sh | bash

# Or using homebrew
# brew tap let-sh/homebrew-tap
# brew install lets

# Windows
iwr https://install.let-sh.com/install.ps1 -useb | iex
```

### Login

```bash
lets login
```

### Clone your project from the repository you desire and use a single command line to deploy

```bash
# for more typr of the codes, you can go to
lets init static
lets deploy
```

### Link the domain to the project

> You can use your custom domain name ending with let.sh, such as XXX.let.sh.

```bash
lets link xxxx.let.sh
```
