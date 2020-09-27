var CACHE_NAME = 'wdt-cache';
var urlsToCache = [
  '/web-development-tutorial/index.html',
  '/web-development-tutorial/chapter1/page1.html',
  '/web-development-tutorial/chapter2/page1.html',
  '/web-development-tutorial/chapter2/page2.html',
  '/web-development-tutorial/html5.svg',
  '/web-development-tutorial/manifest.webmanifest',
  '/web-development-tutorial/script.js',
  '/web-development-tutorial/style.css'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
