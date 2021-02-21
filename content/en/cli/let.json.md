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
    "redirect": [{
      "source": "/foo",
      "destination": "/bar",
      "type": 301
     }],
    "rewrite": [
      "source": "/foo",
      "destination": "/bar",
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

if you have static file wanna to host via <let.sh>, please specify this param. let.sh will automatically bind the files in the root path

### rewrite

### redirect
