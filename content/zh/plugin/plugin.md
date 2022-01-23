---
title: Plugin System
category: 插件
position: 300
badge: Pro
---

## Why plugin system

## What is let.sh plugin

let.sh will bind path `/__/` by default for common used plugins, you could directly using `/__/${plugin_name}/${plugin_endpoint}` endpoint

Take `firebase` for example, let's say you are adding google analytics to your project with firebase integration, you could directly import from your current url:

```html
<body>
  <!-- Insert these scripts at the bottom of the HTML, but before you use any Firebase services -->

  <!-- Firebase App (the core Firebase SDK) is always required and must be listed first -->
  <script src="/__/firebase/8.2.8/firebase-app.js"></script>

  <!-- If you enabled Analytics in your project, add the Firebase SDK for Analytics -->
  <script src="/__/firebase/8.2.8/firebase-analytics.js"></script>

  <!-- Add Firebase products that you want to use -->
  <script src="/__/firebase/8.2.8/firebase-auth.js"></script>
  <script src="/__/firebase/8.2.8/firebase-firestore.js"></script>
</body>
```

You could directly load firebase script from url such as <https://docs.let.sh/__/firebase/8.2.8/firebase-analytics.js> (take current site for example)

Besides, in your development stage, the plugin system will also avaliable in your `lets dev` endpoint.
