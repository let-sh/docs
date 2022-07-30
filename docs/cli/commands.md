---
title: Commands
category: Cli
position: 101
---

# {{ $frontmatter.title }}

## login

Login to your let.sh account on current device.

## dev

Start an local developent envirmont, let.sh cli will automatically expose your local service to an public url you could share with others.(currently only support proxy http protocol, public visit via https endpoint)

Supported flags:

| Flag | Description                    | Example        | Usage                        |
| ---- | ------------------------------ | -------------- | ---------------------------- |
| -c   | command to serve service       | go run main.go | lets dev -c "go run main.go" |
| -l   | custom local upstream endpoint | 127.0.0.1:3000 | lets dev -l 127.0.0.1:3000   |

## deploy

Deploy your current folder project

Supported flags:

| Flag     | Description                                    | Example | Usage                     |
| -------- | ---------------------------------------------- | ------- | ------------------------- |
| --prod   | deploy in prod channel(default to dev channel) | --prod  | lets deploy --prod        |
| -t       | current project type                           | react   | lets deploy -t react      |
| --static | static dir name                                | dist    | lets deploy --static dist |

## link

Link a domain to your current project, it only available to your production channel builds

example(in your project folder):

```shell
lets link test.let.sh
```

## unlink

Unlink a domain of your current project, it only available to your production channel builds

example(in your project folder):

```shell
lets unlink test.let.sh
```

## upgrade

Upgrade cli to latest version

## version

Get the current cli version
