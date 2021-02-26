---
title: let.json
category: Cli
position: 102
---

## Priority order of configuration

- cli flags
- let.json
- previously deployment config (via local cache, only contains project name and project type)
- auto detected project info (cli confirmation required)

## Demo `let.json`

```json
{
  "name": "example",
  "type": "react",
  "static": "dist",
  "redirects": [
    {
      "source": "/foo",
      "destination": "/bar",
      "type": 301
    }
  ],
  "rewrites": [
    {
      "source": "/foo",
      "destination": "/bar"
    }
  ]
}
```

## `let.json` defination

### name

Means the project name of current project

### type

The type of current project

Currently support frameworks:

- static (static)
- react (static)
- vue (static)
- nuxt (static)
- next (static)
- hugo (static)
- docusaurus (static)
- gin (serverless)
- express (serverless)

If you have frameworks want to use, please let us know: [Feature Reuquest](https://letapp.kampsite.co/)

### static

The static files folder of current project

if you have static file wanna to host via <let.sh>, please specify this param.
let.sh will automatically bind the files in the root path

### rewrites

<alert type="warning">
Rewrite is an advanced feature that you may not need to use.
Most time you just need to use your favorite frameworks
and everything will work fine, with let.sh.
</alert>

Rewrite means you request will be modified internally
and then continue to be processed.
The rewrite directive implies the intent to accept the request,
but with some modifications.

You can add one or more mutually exclusive rewrite directives,
if your request match one of the rewrite directive,
the path will be modified with the given one, and then continue to be processed.

As you can see in [Demo let.json](/cli/let.json#demo-letjson) section,
every rewrite directive has a `source` and a `destination` field.
The `source` field accept a wildcard pattern, as referenced in [Caddy Matchers](https://caddyserver.com/docs/caddyfile/matchers),
the `destination` field is a path where your request will be rewrite to.

### redirects

<alert type="warning">
Rewrite is an advanced feature that you may not need to use.
Most time you just need to use your favorite frameworks
and everything will work fine, with let.sh.
</alert>

Redirect means you request will be reponsed as a standard HTTP redirect,
most time it is [301 Moved Permanently](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/301)
or [302 Found](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/302).

You can add one or more mutually exclusive redirect directives,
if your request match one of the redirect directive,
a standard HTTP redirect will be reponsed, fellowing your configuration.

As you can see in [Demo let.json](/cli/let.json#demo-letjson) section,
every redirect directive has a `source`, a `destination` field and a `type` field.
The `source` field accept a wildcard pattern, as referenced in [Caddy Matchers](https://caddyserver.com/docs/caddyfile/matchers),
the `destination` field is a path where your request will be redirect to,
and the `type` field specifies the HTTP status code of the reponse.
