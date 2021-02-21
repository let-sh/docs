---
title: Basic
category: Concept
position: 50
---

## Project

Currently every project have two channels, `dev` and `prod`, and the deployments in two channels are individual.

The linked domains only avaliable on `prod` channel, if you are going to deploy to production channel, please specify `--prod` such as `lets deploy --prod` when you are going to deploy.

## Deployment

Every project could contains mulitple deployments. The newer deployment in the same channel will replace the previous deployment.

## Domain

let.sh provides public domain like `xxx.let.sh`, you could directly run `lets link xxx.let.sh` for whatever you want if the domain haven't taken by others.

If you are willing to use your private domain, please register and verify ownership of the domain at the let.sh console in advance.

## Link

Link the domain to current project
