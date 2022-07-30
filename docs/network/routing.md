---
title: Routing
category: Network
position: 301
badge: Pro
---

# {{ $frontmatter.title }}

# Overview

You use static routing features like redirects, rewrites in [let.sh](alpha.let.sh).

# Rules

Priority order of [let.sh](alpha.let.sh) edges routing responses:

1. Reserved path that begins with a `/__/*` and `/.well-known/acme-challenge/*` for certificate challange
2. Configured redirects (e.g. via `let.json`)
3. Exact-match static content
4. Configured rewrites (e.g. via `let.json`)
5. Serverless service, default to match all routes
6. Custom 404 page, default to use `404.html` if `404.html` exists (deployments do not contains dynamic service)
7. Default 404 page (deployments do not contains dynamic service)
