importScripts('/_nuxt/workbox.5c678697.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.bc35257661150fa55f19fa5726fe83ae.css",
    "revision": "bc35257661150fa55f19fa5726fe83ae"
  },
  {
    "url": "/_nuxt/app.fad9a40db54cf8a056ae.js",
    "revision": "fb8a91e777f89aa5b9a2f9cc5b246136"
  },
  {
    "url": "/_nuxt/lang-en-home.40567c41fa5b139ac338.js",
    "revision": "ae3bd2f5bbb435e0f23c7adaae07b8fb"
  },
  {
    "url": "/_nuxt/lang-en-US.18c872a33fbbd8671aca.js",
    "revision": "76e3e75e43f10cb15ce55e76a429f294"
  },
  {
    "url": "/_nuxt/layouts/default.d7166c10028a31f3de94.js",
    "revision": "0ca53b0982756a5c88698bb960a74dbc"
  },
  {
    "url": "/_nuxt/manifest.181e25a107604d2faea0.js",
    "revision": "30900517364dedb729d131bd8665aff6"
  },
  {
    "url": "/_nuxt/pages/index.27aec651a6082ef75ec6.js",
    "revision": "dd62e472371c28b02c01344d344deb1c"
  },
  {
    "url": "/_nuxt/vendor.84d6f60a76cacf638dbd.js",
    "revision": "e9960a673491bf6fb96f29bda989ba5a"
  }
], {
  "cacheId": "fas-doc",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')





