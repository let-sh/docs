---
title: Basic
category: Concept
position: 50
---

# {{ $frontmatter.title }}

## Project

Currently, every project has two channels, `dev` and `prod`, and the two channels are deployed separately.

The linked domains are only avaliable on `prod` channel. If you are going to deploy to the production channel, please specify `--prod` such as `lets deploy --prod` when you are going to deploy.

## Deployment

Each project could contain mulitple deployments. The new update deployment will replace the previous deployment of the same channel.

## Domain

let.sh provides public domain like `xxx.let.sh`. You can run `lets link xxx.let.sh` to get any domain name you like if it is not already occupied.

If you are willing to use your private domain, please register and verify domain ownership in advance at the let.sh console.

## Link

Link the domain to the current project.
