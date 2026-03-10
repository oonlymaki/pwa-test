function hello(){
alert("Gumagana ang website!");
}

if ('serviceWorker' in navigator) {
 navigator.serviceWorker.register('service-worker.js')
 .then(() => console.log("Service Worker Registered"));
}