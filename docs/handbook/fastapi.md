---
title: FastAPI
category: Handbook
position: 250
badge: Starter
---

# {{ $frontmatter.title }}

## Init FastAPI project via cli

> cli init method will creat folder with name `fastapi` in the current directory.

```shell
lets init fastapi
```

## Run FastAPI locally to test project

> You have to install FastAPI in advance: [FastAPI Quickstart](https://fastapi.tiangolo.com/tutorial/)

```shell
uvicorn main:app
```

## [Optional] Define you dependency in your python projects

> if you already created the file `requirements.txt`, you can skip this step.

```bash
# manually config requirements.txt

echo "fastapi" > requirements.txt

# if you are using pipenv <https://github.com/pypa/pipenv>, you could directly init via `pipenv lock`
pipenv lock -r > requirements.txt

# if you are using poetry <https://python-poetry.org/docs/cli/>, you could directly init via `poetry export`
poetry export -f requirements.txt --output requirements.txt
```

## Deploy to let.sh

> if you haven't install `lets`, please take a look at the documentation: [Cli Overview](/cli/overview).

```shell
lets deploy
```
