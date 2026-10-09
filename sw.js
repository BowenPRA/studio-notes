/* Yoga English moved to /yoga/. A phone that still runs the old worker for
   /studio-notes/ picks this one up on its next update check: it takes over
   and removes itself. It leaves the caches alone, because they belong to the
   whole site and the app at /yoga/ uses them. */
self.addEventListener('install', () => self.skipWaiting())
self.addEventListener('activate', (e) => e.waitUntil(self.registration.unregister()))
