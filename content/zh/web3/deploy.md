---
title: Deploy to Web3 infra
category: Web3
position: 500
badge: Starter
---

<iframe width="640" height="360"
src="https://www.youtube.com/embed/luSII1dRAZo">
</iframe>

<alert type="warning">

Web3 deploy only support frontend project (statics, e.g. react, vue, etc)

</alert>

![web3-infra](/img/web3-infra.jpg)

## How to deploy

```bash
lets deploy --web3
```

## What did it done for me?

> to know more, you can take a look at this slides: [Deploy your web3 apps with a single command](https://docs.google.com/presentation/d/1iAZWSa41X3VPdm_IjDEyz-YPM3H8blJe3VFjFhg5ks4/edit#slide=id.p)

### 1. Permanent Storage

First, let.sh will host your static files on [Arweave](https://www.arweave.org/)'s permaweb: A global, permanent web of pages and applications that live forever.

### 2. Decentralized Routing Network

Then your files served by [Arweave](https://www.arweave.org/)'s permanent storage will be pinned on ipfs, so that users can access your Dapps with a more user friendly domain with the comming Web3 nameing service.

### 3. Web3 name service

Every project you have deployed with let.sh will be assigned a unique domains under `dweb.codes` by default. And domains in the each depolyment will be auto assigned a [ipfs dns link](https://docs.ipfs.io/concepts/dnslink/) for your projects' users to visit.
You wouldn't need to do anything the deployment, let.sh handled them for you.

And by the way, you can also use `lets link` to the project. let.sh will take cover of the custom domains either.
