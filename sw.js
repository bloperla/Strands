// Strands service worker: offline support.
// Bump VERSION whenever any file changes so installed copies fetch the new set together.
const PREFIX = 'strands-';
const VERSION = 'v24';
const CACHE = PREFIX + VERSION;
const ASSETS = ['./', './index.html', './app.js', './manifest.json', './icon-192.png', './icon-512.png',
  './vendor/react.production.min.js', './vendor/react-dom.production.min.js',
  './data/langs.js', './fonts/heros-regular.woff2', './fonts/heros-bold.woff2'];

// Course files and fonts that an older version had downloaded: the new version fetches fresh copies of
// the same files before it takes over, so courses that worked offline still work offline after an update.
async function carried() {
  const keep = new Set();
  for (const k of await caches.keys()) {
    if (!k.startsWith(PREFIX) || k === CACHE) continue;
    for (const req of await (await caches.open(k)).keys()) {
      const u = new URL(req.url);
      if (u.origin === location.origin && /\/(data\/[\w-]+\.js|fonts\/[\w-]+\.woff2)$/.test(u.pathname)) keep.add(u.origin + u.pathname);
    }
  }
  return [...keep];
}
self.addEventListener('install', e => {
  // all-or-nothing: if any file fails (the shell or a course already downloaded), the old version stays in charge
  e.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    try {
      // cache:'reload' skips the browser's HTTP cache, so a new version never stores a stale copy of an old file
      await cache.addAll(ASSETS.map(a => new Request(a, { cache: 'reload' })));
      const extra = (await carried()).filter(u => !ASSETS.some(a => new URL(a, location).href === u));
      await Promise.all(extra.map(async u => {
        const res = await fetch(new Request(u, { cache: 'reload' }));
        if (!res.ok) throw new Error('could not fetch ' + u);
        await cache.put(u, res);
      }));
    } catch (err) {
      await caches.delete(CACHE);
      throw err;
    }
    await self.skipWaiting();
  })());
});
self.addEventListener('activate', e => {
  // only remove this app's own old caches; other apps on the same origin are left alone
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k.startsWith(PREFIX) && k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return; // fonts and anything external: browser default
  // Course files (data/<code>.js) are cached the first time a language is opened.
  // Cache-first within a version keeps every file from the same release; a new VERSION replaces them together.
  e.respondWith(caches.open(CACHE).then(async cache => {
    const hit = await cache.match(req, { ignoreSearch: true });
    if (hit) return hit;
    try {
      const res = await fetch(req);
      if (res.ok && res.type === 'basic') cache.put(req, res.clone()); // never store errors
      return res;
    } catch (err) {
      if (req.mode === 'navigate') return (await cache.match('./index.html')) || Response.error(); // HTML only for page loads
      return Response.error();
    }
  }));
});
