var CACHE_NAME = 'wdt-cache';
var urlsToCache = [
  '/web-development-tutorial/index.html',
  '/web-development-tutorial/chapter1/page1.html',
  '/web-development-tutorial/chapter2/page1.html',
  '/web-development-tutorial/chapter2/page2.html',
  '/web-development-tutorial/html5.svg',
  '/web-development-tutorial/manifest.webmanifest',
  '/web-development-tutorial/script.js',
  '/web-development-tutorial/style.css',
  'https://www.googletagmanager.com/gtag/js?id=UA-167358769-2',
  'https://fonts.googleapis.com/css2?family=Roboto&display=swap',
  'https://code.jquery.com/ui/1.12.1/themes/smoothness/jquery-ui.css',
  'https://cdnjs.cloudflare.com/ajax/libs/jquery-contextmenu/2.7.1/jquery.contextMenu.min.css',
  'https://code.jquery.com/jquery-3.5.1.min.js',
  'https://code.jquery.com/ui/1.12.1/jquery-ui.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/jquery-contextmenu/2.7.1/jquery.contextMenu.min.js'
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
