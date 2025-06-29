const CACHE_NAME = 'thai-fortune-cards-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/advanced-features.js',
  '/manifest.json',
  '/Card Back.png',
  // Add all card images
  '/กดุมภะ1.png',
  '/กดุมภะ2.png',
  '/กัมมะ1.png',
  '/กัมมะ2.png',
  '/เคหัง.png',
  '/เคหัง (2).png',
  '/ญาติ.png',
  '/ญาติ2.png',
  '/ตนุ1.png',
  '/ตนุ2.png',
  '/ทานัง.png',
  '/ทานัง2.png',
  '/ทาสา1.png',
  '/ทาสา2.png',
  '/ทาสี.png',
  '/ทาสี2.png',
  '/ธนัง.png',
  '/ธนัง2.png',
  '/นาวัง.png',
  '/นาวัง2.png',
  '/ปัตนิ1.png',
  '/ปัตนิ2.png',
  '/ปัตนิ2 (2).png',
  '/ปัตนิ2 (3).png',
  '/ปิตา1.png',
  '/ปิตา2.png',
  '/ปุตตะ1.png',
  '/ปุตตะ2.png',
  '/พยายะ1.png',
  '/พยายะ2.png',
  '/พันธุ1.png',
  '/พันธุ2.png',
  '/ภริยัง.png',
  '/ภริยัง2.png',
  '/โภคา1.png',
  '/โภคา2.png',
  '/มรณะ1.png',
  '/มรณะ2.png',
  '/มัชฌิมา1.png',
  '/มัชฌิมา2.png',
  '/มาตา1.png',
  '/มาตา2.png',
  '/ลาภะ1.png',
  '/ลาภะ2.png',
  '/สหัชชะ1.png',
  '/สหัชชะ2.png',
  '/สักกะ.png',
  '/สักกะ2.png',
  '/หินะ1.png',
  '/หินะ2.png',
  '/อริ1.png',
  '/อริ2.png',
  '/อัตตะ1.png',
  '/อัตตะ2.png',
  '/อัตตา.png',
  '/อัตตา2.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached version or fetch from network
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
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
    })
  );
}); 