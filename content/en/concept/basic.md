---
title: Basic
category: Concept
position: 50
---

## Project

Currently every project have two channels, and the deployments in two channels are individual.

The linked domains only avaliable on `prod` channel, if you are going to deploy to production channel, please specify `--prod` such as `lets deploy --prod` when you are going to deploy.

## Deployment

Every project could contains mulitple deployments. The new deployment in the same channel and the same project will replace the previouse deployment with same exposed url.

## Domain

let.sh provide public domain like `xxx.let.sh`, you could directly run `lets link xxx.let.sh` for whatever domain not taken by others.

if you are willing to use your domain, please register and verify ownership of the domain at the let.sh console in advance.

## Link

link the domain to current project
