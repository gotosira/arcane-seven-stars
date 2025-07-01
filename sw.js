const CACHE_NAME = 'thai-fortune-cards-v3';
const STATIC_CACHE = 'static-v3';
const IMAGE_CACHE = 'images-v3';

// Core files to cache immediately
const coreFiles = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/advanced-features.js',
  '/manifest.json',
  '/Card Back.png', // Only cache the card back initially
  '/favicon.ico'
];

// Lazy cache images as they're requested
const imageFiles = [
  '/กดุมภะ1.png', '/กดุมภะ2.png', '/กัมมะ1.png', '/กัมมะ2.png',
  '/เคหัง.png', '/เคหัง (2).png', '/ญาติ.png', '/ญาติ2.png',
  '/ตนุ1.png', '/ตนุ2.png', '/ทานัง.png', '/ทานัง2.png',
  '/ทาสา1.png', '/ทาสา2.png', '/ทาสี.png', '/ทาสี2.png',
  '/ธนัง.png', '/ธนัง2.png', '/นาวัง.png', '/นาวัง2.png',
  '/ปัตนิ1.png', '/ปัตนิ2.png', '/ปัตนิ2 (2).png', '/ปัตนิ2 (3).png',
  '/ปิตา1.png', '/ปิตา2.png', '/ปุตตะ1.png', '/ปุตตะ2.png',
  '/พยายะ1.png', '/พยายะ2.png', '/พันธุ1.png', '/พันธุ2.png',
  '/ภริยัง.png', '/ภริยัง2.png', '/โภคา1.png', '/โภคา2.png',
  '/มรณะ1.png', '/มรณะ2.png', '/มัชฌิมา1.png', '/มัชฌิมา2.png',
  '/มาตา1.png', '/มาตา2.png', '/ลาภะ1.png', '/ลาภะ2.png',
  '/สหัชชะ1.png', '/สหัชชะ2.png', '/สักกะ.png', '/สักกะ2.png',
  '/หินะ1.png', '/หินะ2.png', '/อริ1.png', '/อริ2.png',
  '/อัตตะ1.png', '/อัตตะ2.png', '/อัตตา.png', '/อัตตา2.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    Promise.all([
      // Cache core files immediately
      caches.open(STATIC_CACHE).then(cache => {
        console.log('Caching core files');
        return cache.addAll(coreFiles);
      }),
      // Pre-cache only the card back for immediate use
      caches.open(IMAGE_CACHE).then(cache => {
        console.log('Pre-caching card back');
        return cache.add('/Card Back.png');
      })
    ]).then(() => {
      // Skip waiting to activate immediately
      return self.skipWaiting();
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    Promise.all([
      // Clean up old caches
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== STATIC_CACHE && cacheName !== IMAGE_CACHE && cacheName !== CACHE_NAME) {
              console.log('Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      }),
      // Take control of all clients immediately
      self.clients.claim()
    ])
  );
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  
  // Handle image requests with lazy caching
  if (url.pathname.endsWith('.png') || url.pathname.endsWith('.jpg') || url.pathname.endsWith('.jpeg')) {
    event.respondWith(
      caches.open(IMAGE_CACHE).then(cache => {
        return cache.match(event.request).then(cachedResponse => {
          if (cachedResponse) {
            return cachedResponse;
          }
          
          // Fetch and cache the image
          return fetch(event.request).then(response => {
            // Only cache successful responses
            if (response.status === 200) {
              cache.put(event.request, response.clone());
            }
            return response;
          }).catch(error => {
            console.log('Image fetch failed:', event.request.url, error);
            // Return card back as fallback for failed card images
            if (imageFiles.includes(url.pathname)) {
              return cache.match('/Card Back.png');
            }
            throw error;
          });
        });
      })
    );
    return;
  }
  
  // Handle other requests with cache-first strategy
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) {
        return response;
      }
      
      return fetch(event.request).then(response => {
        // Cache non-image successful responses
        if (response.status === 200 && !url.pathname.includes('chrome-extension')) {
          const responseClone = response.clone();
          caches.open(STATIC_CACHE).then(cache => {
            cache.put(event.request, responseClone);
          });
        }
        return response;
      }).catch(error => {
        console.log('Fetch failed for:', event.request.url, error);
        
        // Return fallback for failed document requests
        if (event.request.destination === 'document') {
          return caches.match('/index.html');
        }
        
        // Return generic error response
        return new Response('Resource not available offline', { 
          status: 503, 
          statusText: 'Service Unavailable',
          headers: { 'Content-Type': 'text/plain' }
        });
      });
    })
  );
}); 