const CACHE_NAME = 'thai-fortune-cards-v4';
const urlsToCache = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './advanced-features.js',
  './manifest.json',
  './Card Back.png',
  './favicon.ico',
  // Add all card images
  './กดุมภะ1.png',
  './กดุมภะ2.png',
  './กัมมะ1.png',
  './กัมมะ2.png',
  './เคหัง.png',
  './เคหัง (2).png',
  './ญาติ.png',
  './ญาติ2.png',
  './ตนุ1.png',
  './ตนุ2.png',
  './ทานัง.png',
  './ทานัง2.png',
  './ทาสา1.png',
  './ทาสา2.png',
  './ทาสี.png',
  './ทาสี2.png',
  './ธนัง.png',
  './ธนัง2.png',
  './นาวัง.png',
  './นาวัง2.png',
  './ปัตนิ1.png',
  './ปัตนิ2.png',
  './ปิตา1.png',
  './ปิตา2.png',
  './ปุตตะ1.png',
  './ปุตตะ2.png',
  './พยายะ1.png',
  './พยายะ2.png',
  './พันธุ1.png',
  './พันธุ2.png',
  './ภริยัง.png',
  './ภริยัง2.png',
  './โภคา1.png',
  './โภคา2.png',
  './มรณะ1.png',
  './มรณะ2.png',
  './มัชฌิมา1.png',
  './มัชฌิมา2.png',
  './มาตา1.png',
  './มาตา2.png',
  './ลาภะ1.png',
  './ลาภะ2.png',
  './สหัชชะ1.png',
  './สหัชชะ2.png',
  './สักกะ.png',
  './สักกะ2.png',
  './หินะ1.png',
  './หินะ2.png',
  './อริ1.png',
  './อริ2.png',
  './อัตตะ1.png',
  './อัตตะ2.png',
  './อัตตา.png',
  './อัตตา2.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
  // Allow the new SW to activate immediately
  self.skipWaiting();
});

self.addEventListener('fetch', event => {
  // Block all Google API calls in demo mode to prevent 403 errors
  if (event.request.url.includes('accounts.google.com') || 
      event.request.url.includes('googleapis.com/auth') ||
      event.request.url.includes('gsi/client') ||
      event.request.url.includes('YOUR_GOOGLE_CLIENT_ID')) {
    console.log('🛡️ Blocked Google API call in demo mode:', event.request.url);
    event.respondWith(new Response('', { 
      status: 204, 
      statusText: 'Blocked in demo mode' 
    }));
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached version or fetch from network
        if (response) {
          return response;
        }
        return fetch(event.request).catch(error => {
          console.log('Fetch failed for:', event.request.url, error);
          // Return a fallback response for failed requests
          if (event.request.destination === 'document') {
            return caches.match('./index.html');
          }
          // For other resources, return a generic error response
          return new Response('', { 
            status: 404, 
            statusText: 'Not Found' 
          });
        });
      })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});