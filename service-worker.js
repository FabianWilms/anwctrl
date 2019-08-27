self.addEventListener('install', event => event.waitUntil(self.skipWaiting()));

self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));

self.addEventListener('notificationclick', function (event) {
    console.log('On notification click: ', event.notification.tag);
    event.notification.close();
    // This looks to see if the current is already open and
    // focuses if it is
    event.waitUntil(clients.matchAll({
        type: "window"
    }).then(function (clientList) {
        for (var i = 0; i < clientList.length; i++) {
            var client = clientList[i];
            return client.focus();
        }
        if (clients.openWindow)
            return clients.openWindow('/');
    }));
});

//alternativ: matchAll({includeUncontrolled: true, type: 'window'}) aus https://stackoverflow.com/questions/35100759/serviceworkers-focus-tab-clients-is-empty-on-notificationclick