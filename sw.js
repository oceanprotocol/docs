self.addEventListener('install', function(e) {
  console.log('script install')
  self.skipWaiting();
});

self.addEventListener('activate', function(e) {
  console.log('script activate')
  self.registration.unregister()
    .then(function() {
      return self.clients.matchAll();
    })
    .then(function(clients) {
      clients.forEach(client => client.navigate(client.url))
    });
});
