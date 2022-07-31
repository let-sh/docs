---
title: Tables
category: Tables
position: 0
badge: Starter
---

# {{ $frontmatter.title }}

::: warning
this is a private test feature, you can contact <contact@let.sh> to request access to this feature. You will need to create table via console before access the api.
:::

`Tables` is a core feature of let.sh platform. Tables allow you to store your Key-Value data via very simple api endpoint. The data will be stored in the distrubuted kv store inside let.sh and shared global.

Generally, you can regard let.sh tables as an eventual consistency data store.

## Structure

let.sh allows create multiple tables under same project, and tables are individual across different channels(`dev` and `prod`).

For each item inside table, you will assign a unique key, so that you can get data via the unique key. You Also can query your data by fields in the future.

Currently, let.sh supports `GET`, `POST`, `PUT`, `PATCH`, `DELETE` to operate the items in the table. We will support more api in the future.
