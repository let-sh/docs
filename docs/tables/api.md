---
title: API
category: Tables
position: 0
badge: Starter
---

# {{ $frontmatter.title }}

::: warning
this is a private test feature, you can contact <contact@let.sh> to request access to this feature. You will need to create table via console before access the api.
:::

## Authorization

you can pass your authorization token in `Authorization` header, starting with `Bearer `. For example: `Authorization: "Bearer aTBlS4G/a+v/PAVn6RNtuOZB"`

## Create Item

| Field       | Content                                |
| ----------- | -------------------------------------- |
| URL Path    | `/__/:table/:key`                      |
| HTTP Method | `POST`                                 |
| Header      | [Authorization Header](#authorization) |
| Payload     | json data                              |

## Update Item (entire iten)

| Field       | Content                                |
| ----------- | -------------------------------------- |
| URL Path    | `/__/:table/:key`                      |
| HTTP Method | `PUT`                                  |
| Header      | [Authorization Header](#authorization) |
| Payload     | json data                              |

## Update Item (changed fields)

| Field       | Content                                |
| ----------- | -------------------------------------- |
| URL Path    | `/__/:table/:key`                      |
| HTTP Method | `PATCH`                                |
| Header      | [Authorization Header](#authorization) |
| Payload     | json data                              |

## DELETE Item

| Field       | Content                                |
| ----------- | -------------------------------------- |
| URL Path    | `/__/:table/:key`                      |
| HTTP Method | `DELETE`                               |
| Header      | [Authorization Header](#authorization) |
