/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "3840ab125717bbd8c3652ccdd73cf8cd"
  },
  {
    "url": "assets/css/0.styles.b9ffc290.css",
    "revision": "e92ca5c2d537d1e23b6fbad06bd1d13a"
  },
  {
    "url": "assets/img/0.29bca407.png",
    "revision": "29bca4075e2d3a8d99fddb43bd2b1fdc"
  },
  {
    "url": "assets/img/1.097c1c3d.png",
    "revision": "097c1c3d02bbb78a09e069394e02cb08"
  },
  {
    "url": "assets/img/3.6ad5a242.png",
    "revision": "6ad5a242f05e6c85868b35d07805b99b"
  },
  {
    "url": "assets/img/4.045ea03c.png",
    "revision": "045ea03cdd25214e89f00ffc15d803e5"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.9ddc1e74.js",
    "revision": "d901b500a66b7c26fb00ef5da88bd7a3"
  },
  {
    "url": "assets/js/10.896c15d9.js",
    "revision": "e08d34479f9e8a6460c5289a5523b1a8"
  },
  {
    "url": "assets/js/13.6611c75d.js",
    "revision": "5822346b980a4330d2bddb7e50e6b1f5"
  },
  {
    "url": "assets/js/14.5abc065e.js",
    "revision": "9cdc3a31f1691a79b77b6596b65dbb48"
  },
  {
    "url": "assets/js/15.ab8b89b2.js",
    "revision": "4bce0f5bda3e5cdcd77baa934a57546a"
  },
  {
    "url": "assets/js/16.43b1e7f4.js",
    "revision": "6a05055c777f9abe2ca98a47d22a95a5"
  },
  {
    "url": "assets/js/17.08369b97.js",
    "revision": "9ac1919ea02811d5e7d9641bd09c3253"
  },
  {
    "url": "assets/js/18.8e7b2721.js",
    "revision": "b813d926d51cd4f8bbc07d32c7fc3141"
  },
  {
    "url": "assets/js/19.6d7786c1.js",
    "revision": "cdba7f14f3e6d19bc7a7e12fc9c8ba00"
  },
  {
    "url": "assets/js/2.30f4b399.js",
    "revision": "884e63cf9a542911dd8f2ff454696037"
  },
  {
    "url": "assets/js/20.ed793a75.js",
    "revision": "319d7af07795b19b9ac977742b396203"
  },
  {
    "url": "assets/js/21.2f62b5df.js",
    "revision": "b7f8488255f222126a831a11499d89d9"
  },
  {
    "url": "assets/js/22.ed5cc7ba.js",
    "revision": "3faf61de00187bbf994910e9832b6ab2"
  },
  {
    "url": "assets/js/23.2d5a883a.js",
    "revision": "05c3867aa6d44f09d35b28d89ffa8c7b"
  },
  {
    "url": "assets/js/24.98a68081.js",
    "revision": "b368fab744cec9fc189c536f49e48d41"
  },
  {
    "url": "assets/js/25.2346a27f.js",
    "revision": "b9f0f7fdbd160f6264d23c9893ce1523"
  },
  {
    "url": "assets/js/26.64a380ff.js",
    "revision": "25097d4b15d164877a074855c62d5254"
  },
  {
    "url": "assets/js/27.a0dab0fc.js",
    "revision": "a40d3f3a4f090d8719b94e8f45d92be5"
  },
  {
    "url": "assets/js/28.58d5c412.js",
    "revision": "016124fd0c2c8d089ba11dffe729b794"
  },
  {
    "url": "assets/js/29.7b9b341e.js",
    "revision": "178976665ef9bfb9f143a398d231d8bc"
  },
  {
    "url": "assets/js/3.b291dd71.js",
    "revision": "ba785f5ef9f15b19603ffb18aee7c990"
  },
  {
    "url": "assets/js/30.35817a48.js",
    "revision": "630d7e3b5ac0f7f5f42b9e50222f5357"
  },
  {
    "url": "assets/js/31.c515018d.js",
    "revision": "d1e822e0c4074bfdc8d7d25572a1bcd0"
  },
  {
    "url": "assets/js/32.aba410e4.js",
    "revision": "7d4e75a73df7dc0d9e441127a7bf8660"
  },
  {
    "url": "assets/js/33.17c0ee69.js",
    "revision": "66e4bbb57992513d798f1963cb09c3f7"
  },
  {
    "url": "assets/js/34.8011b014.js",
    "revision": "432880898e10a262f5c79a0622339195"
  },
  {
    "url": "assets/js/35.0c24a73c.js",
    "revision": "9b270be59c97908b86f47a0cb92b0e30"
  },
  {
    "url": "assets/js/36.18ef0949.js",
    "revision": "05227dc26e3d2a3728ca14aa3df56f1b"
  },
  {
    "url": "assets/js/37.ed5dbe62.js",
    "revision": "757f449a27fbb6df51ab618709ad13d7"
  },
  {
    "url": "assets/js/38.1e02cdb4.js",
    "revision": "fe45727ccc2db3a6197dc6bd5159dbdc"
  },
  {
    "url": "assets/js/39.7e8a1d1b.js",
    "revision": "62ad48db557e905799c4cb9606e9e8fe"
  },
  {
    "url": "assets/js/4.aa96b7d1.js",
    "revision": "669d2d3255d83a5e1c44b264c87a9126"
  },
  {
    "url": "assets/js/41.eb61e0a7.js",
    "revision": "282d1414cd20386314f28528054f8599"
  },
  {
    "url": "assets/js/5.463ac9e7.js",
    "revision": "84bbf228ce30b64604b207e975d2607e"
  },
  {
    "url": "assets/js/6.67ae642e.js",
    "revision": "67c77bdac13f15d991270b1b20b1947e"
  },
  {
    "url": "assets/js/7.be93e86d.js",
    "revision": "89204fb9441f6a51b0295b75178e3595"
  },
  {
    "url": "assets/js/8.ec3f3db8.js",
    "revision": "0299520698d0b82b4cc736be90085770"
  },
  {
    "url": "assets/js/9.bf5a65f2.js",
    "revision": "bf0f99d953b1921126acf5410786cabd"
  },
  {
    "url": "assets/js/app.803879b5.js",
    "revision": "bbf4271bb935a05ab600a0839b276eaa"
  },
  {
    "url": "assets/js/vendors~docsearch.dd9c9527.js",
    "revision": "4c9b60f3e041adde8b39175879bd2003"
  },
  {
    "url": "conclusion/index.html",
    "revision": "bc62076d54336c4f4f8362e6760f33df"
  },
  {
    "url": "design/index.html",
    "revision": "569bc35bd912435e173a3afce4173e8b"
  },
  {
    "url": "image_2023-11-27_12-34-32.png",
    "revision": "820893c679183a2ec1c77e6f83142a24"
  },
  {
    "url": "index.html",
    "revision": "e7006f86b7e764ead3cb540258c44bad"
  },
  {
    "url": "intro/index.html",
    "revision": "32f6b5ce52e3e0e44fd49715c462bea4"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "940caefdf1fbbccdd588aecbae1806d0"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "f12fdcfb57e507d88bc73591b7ef0838"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "d33ec28a65d3e4bb446d076b6cc43263"
  },
  {
    "url": "software/index.html",
    "revision": "bd5ec04840736dc28a8d28ae1201370d"
  },
  {
    "url": "test/index.html",
    "revision": "99f428a03635d13f0f07cba2cebd514f"
  },
  {
    "url": "use cases/index.html",
    "revision": "54e75d8ab227c031e4285229ea3a8ee4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
