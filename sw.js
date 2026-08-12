const CACHE_NAME = 'halissou-portfolio-v5';
const ASSETS = [
  './',
  'index.html',
  'style.css',
  'app.js',
  'fonts/fonts.css',
  '404.html',
  'manifest.json',
  'images/Halissou.webp',
  'images/profile-hero.webp',
  'images/profile-about.webp',
  'images/profile-about.png',
  'images/og-image.png',
  'images/og-image.webp'
];

// Install Event - Robust caching of individual assets
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // Cache assets individually to prevent the entire service worker installation 
      // from failing if a single asset (like og-image.png) is missing or renamed.
      return Promise.allSettled(
        ASSETS.map((asset) => {
          return cache.add(asset).catch((err) => {
            console.warn(`[Service Worker] Failed to cache asset: ${asset}`, err);
          });
        })
      );
    }).then(() => self.skipWaiting())
  );
});

// Activate Event - Clean up stale caches
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log(`[Service Worker] Deleting old cache: ${key}`);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event - Safe intercept and network fallback
self.addEventListener('fetch', (e) => {
  // Let the browser handle non-HTTP requests and cross-origin requests unless they are from trusted CDNs
  const isTrustedCDN = e.request.url.includes('cdnjs.cloudflare.com') ||
                       e.request.url.includes('fonts.googleapis.com') ||
                       e.request.url.includes('fonts.gstatic.com');

  if (!e.request.url.startsWith(self.location.origin) && !isTrustedCDN) {
    return;
  }

  // Only handle GET requests to avoid cache.put errors for POST/PUT/DELETE
  if (e.request.method !== 'GET') {
    return;
  }

  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(e.request).then((networkResponse) => {
        const isBasic = networkResponse.type === 'basic';
        const isCORS = networkResponse.type === 'cors';
        const isOpaque = networkResponse.type === 'opaque';
        const isSuccess = networkResponse.status === 200 || (isOpaque && networkResponse.status === 0);

        if (!networkResponse || !isSuccess || (!isBasic && !isCORS && !isOpaque)) {
          return networkResponse;
        }
        
        // Cache new GET requests dynamically
        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(e.request, responseToCache).catch((err) => {
            console.error('[Service Worker] Failed to dynamically cache request:', err);
          });
        });
        
        return networkResponse;
      }).catch((err) => {
        // Fallback for navigation requests when offline
        if (e.request.mode === 'navigate') {
          return caches.match('index.html');
        }
      });
    })
  );
});
