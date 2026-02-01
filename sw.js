const CACHE="kauo-v1";
self.addEventListener("install",e=>{
  e.waitUntil(caches.open(CACHE));
  self.skipWaiting();
});
self.addEventListener("fetch",e=>{
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});