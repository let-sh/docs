---
title: Flask
category: 指引
position: 250
badge: Starter
---

## Quick start demo

<AsciiPlayer id="412897"></AsciiPlayer>

## Init flask project via cli

> cli init method will creat folder with name `flask` in the current directory.

```shell
lets init flask
```

## Run flask locally to test project

> You have to install flask in advance: [Flask Quickstart](https://flask.palletsprojects.com/en/1.1.x/quickstart/)

```shell
flask run
```

## Define you dependency in your python projects

<code-group>
  <code-block label="manually" active>

```bash
# manually config requirements.txt

echo "flask==1.1.2" > requirements.txt
```

  </code-block>
  <code-block label="pipenv">

```bash
# if you are using pipenv <https://github.com/pypa/pipenv>, you could directly init via `pipenv lock`

pipenv lock -r > requirements.txt
```

  </code-block>
  <code-block label="poetry">

```bash
# if you are using poetry <https://python-poetry.org/docs/cli/>, you could directly init via `poetry export`

poetry export -f requirements.txt --output requirements.txt
```

  </code-block>
</code-group>

## Deploy to let.sh

> if you haven't install `lets`, please take a look at the documentation: [Cli Overview](/cli/overview).

```shell
lets deploy
```
