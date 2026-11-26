const CACHE_NAME = 'halissou-v11';
const ASSETS = [
  './',
  'index.html',
  'style.css',
  'app.js',
  '404.html',
  '404.js',
  'manifest.json',
  'fonts/fonts.css',
  'fonts/font_5.woff2',
  'fonts/font_6.woff2',
  'fonts/font_37.woff2',
  'fonts/font_38.woff2',
  'fonts/fontawesome/css/fontawesome.min.css',
  'fonts/fontawesome/css/solid.min.css',
  'fonts/fontawesome/css/brands.min.css',
  'fonts/fontawesome/webfonts/fa-solid-900.woff2',
  'fonts/fontawesome/webfonts/fa-brands-400.woff2',
  'images/halissou.webp',
  'images/halissou.png',
  'images/apple-touch-icon.png',
  'images/profile-hero.webp',
  'images/profile-about.webp',
  'images/og-image.png',
  'images/og-image.webp',
  'cv_halissou_pro_2026.pdf'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return Promise.allSettled(
        ASSETS.map((asset) =>
          cache.add(asset).catch((err) => {
            console.warn(`sw: cache miss ${asset}`, err);
          })
        )
      );
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  // Network-First pour les navigations HTML afin d'éviter l'affichage d'anciennes versions après déploiement
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.ok && networkResponse.type === 'basic') {
            const copy = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put('index.html', copy)).catch(() => {});
          }
          return networkResponse;
        })
        .catch(() =>
          caches.open(CACHE_NAME).then((cache) =>
            cache.match(request).then((matched) => matched || cache.match('index.html'))
          )
        )
    );
    return;
  }

  // Stale-While-Revalidate pour les ressources statiques
  event.respondWith(
    caches.open(CACHE_NAME).then((cache) =>
      cache.match(request).then((cachedResponse) => {
        const networkPromise = fetch(request)
          .then((networkResponse) => {
            const isValid =
              networkResponse &&
              (networkResponse.status === 200 || (networkResponse.type === 'opaque' && networkResponse.status === 0));
            if (isValid && ['basic', 'cors', 'opaque'].includes(networkResponse.type)) {
              cache.put(request, networkResponse.clone()).catch(() => {});
            }
            return networkResponse;
          })
          .catch(() => cachedResponse);

        return cachedResponse || networkPromise;
      })
    )
  );
});
