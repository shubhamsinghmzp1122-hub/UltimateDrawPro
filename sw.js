self.addEventListener('install', (e) => {
  console.log('[Service Worker] Installed for Ultimate Draw Pro');
});

self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request).catch(() => console.log('User is offline')));
});
