const CACHE_NAME = 'static-cache-v1';

const FILES_TO_CACHE = [
    'offline.html',
    'index.html',
    'produits.html',
    'contact.html',
    'confirmation.html',
    'css/styles.css',
    'css/normalize.css',
    'script/validation.js',
    'img/bg-form.jpg',
    'img/Carousel-1.jpg',
    'img/Carousel-2.jpg',
    'img/Carousel-3.jpg',
    'img/Carousel-4.jpg',
    'img/Carousel-5.jpg',
    'img/femme-review-1.jpg',
    'img/femme-review-2.jpg',
    'img/femme-review-3.jpg',
    'img/grid-1.jpg',
    'img/grid-2.jpg',
    'img/grid-3.jpg',
    'img/grid-4.jpg',
    'img/grid-5.jpg',
    'img/grid-6.jpg',
    'img/grid-7.jpg',
    'img/grid-8.jpg',
    'img/grid-9.jpg',
    'img/grid-10.jpg',
    'img/grid-11.jpg',
    'img/grid-12.jpg',
    'img/icon-192x192.png',
    'img/icon-512x512.png',
    'img/meilleurs-vendeurs-1.jpg',
    'img/meilleurs-vendeurs-2.jpg',
    'img/meilleurs-vendeurs-3.jpg',
    'img/meilleurs-vendeurs-4.jpg',
    'img/PaxEtLux.png',
    'img/produit-1.png',
    'img/produit-2.png',
    'img/produit-3.png',
    'img/produit-4.png',
    'img/produit-5.png',
    'img/produit-6.png',
    'img/produit-7.png',
    'img/produit-8.png',
    'img/bg-form.jpg'
];

self.addEventListener('install', (evt) => {
    console.log('[ServiceWorker] Install');

    evt.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('[ServiceWorker] Pre-caching offline page');
            return cache.addAll(FILES_TO_CACHE);
        })
    );
    self.skipWaiting();
});

self.addEventListener('activate', (evt) => {
    console.log('[ServiceWorker] Activate');

    self.clients.claim();
});

self.addEventListener('fetch', (evt) => {
    console.log('[ServiceWorker] Fetch', evt.request.url);

});