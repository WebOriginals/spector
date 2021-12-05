/* global L:readonly */
const map = L.map('map')
    .setView({
        lat: 59.96831,
        lng: 30.31748,
    }, 16);

L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>',
    },
).addTo(map);

const mainPinIcon = L.icon({
    iconUrl: '/img/icons/point-map.svg',
    iconSize: [70, 70],
    iconAnchor: [37, 65],
});

const mainPinMarker = L.marker(
    {
        lat: 59.96831,
        lng: 30.31748,
    },
    {
        icon: mainPinIcon,
    },
);

mainPinMarker.addTo(map);

mainPinMarker.on('moveend', (evt) => {
    console.log(evt.target.getLatLng());
});
