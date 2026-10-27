/* Radar Empresarial PWA: rede primeiro para páginas; cache para uso offline.
   O HTML é buscado novamente a cada abertura online, incluindo quando
   lançado pelo ícone instalado no Android. */
const CACHE_NAME = 'radar-empresarial-shell-v1';
const SHELL = ['./', './index.html', './manifest.webmanifest', './radar-192.png', './radar-512.png'];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(Promise.all([
    caches.keys().then(names => Promise.all(
      names.filter(name => name.startsWith('radar-empresarial-shell-') && name !== CACHE_NAME)
           .map(name => caches.delete(name))
    )),
    self.clients.claim()
  ]));
});

self.addEventListener('fetch', event => {
  if (event.request.mode !== 'navigate') return;
  event.respondWith(
    fetch(event.request, {cache: 'no-store'})
      .then(response => {
        if (response.ok) {
          const copy = response.clone();
          event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.put('./index.html', copy)));
        }
        return response;
      })
      .catch(async () => (await caches.match('./index.html')) || Response.error())
  );
});
