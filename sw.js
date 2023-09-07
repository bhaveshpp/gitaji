const CACHE_NAME = 'gitaji';
const urlsToCache = [
    '/', 
    '/index.html', 
    '/404.html', 
    '/adhayay1.html', 
    '/adhayay2.html', 
    '/adhayay3.html', 
    '/adhayay4.html', 
    '/adhayay5.html', 
    '/adhayay6.html', 
    '/adhayay7.html', 
    '/adhayay8.html', 
    '/adhayay9.html', 
    '/adhayay10.html', 
    '/adhayay11.html', 
    '/adhayay12.html', 
    '/adhayay13.html', 
    '/adhayay14.html', 
    '/adhayay15.html', 
    '/adhayay16.html', 
    '/adhayay17.html', 
    '/adhayay18.html', 
    '/style.css', 
    '/script.js', 
    '/logo.png', 
    '/audio.mp3', 
    '/favicon.ico'
];

self.addEventListener('install', event=>{
    event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(urlsToCache)));
}
);

self.addEventListener('fetch', event=>{
    event.respondWith(caches.match(event.request).then(response=>{
        // Cache hit - return response
        if (response) {
            return response;
        }

        // Clone the request
        const fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(response=>{
            // Check if valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
                return response;
            }

            // Clone the response
            const responseToCache = response.clone();

            // Cache the fetched response
            caches.open(CACHE_NAME).then(cache=>{
                cache.put(event.request, responseToCache);
            }
            );

            return response;
        }
        ).catch(error=>{
            // Network request failed, return a fallback response
            return new Response('Network request failed. You are offline.');
        }
        );
    }
    ));
}
);

self.addEventListener('activate', event=>{
    event.waitUntil(caches.keys().then(cacheNames=>{
        return Promise.all(cacheNames.filter(cacheName=>{
            // Delete outdated caches
            return cacheName !== CACHE_NAME;
        }
        ).map(cacheName=>{
            return caches.delete(cacheName);
        }
        ));
    }
    ));
}
);
