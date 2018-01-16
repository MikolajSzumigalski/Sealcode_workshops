var xhr = new XMLHttpRequest();

xhr.onload = function() {
    if(xhr.status === 200) {
        tableOfLocalizations = JSON.parse(xhr.responseText);
        for(var i=0; i<tableOfLocalizations.length; i++)
            {
                let vector = [];
                vector[0] = tableOfLocalizations[i];
                vector[1] = tableOfLocalizations[i];
                let marker = L.marker(vector).addTo(mymap);
            }
}
}
xhr.open('GET', 'data/data.json', true);
xhr.send(null);                                 
function main() {
    if (Modernizr.geolocation) {
        navigator.geolocation.getCurrentPosition(success, fail);
    }
}
function drawPoints(){
    for(var i=0; i<)
}
function success(location) {
    let vector = [];
    document.getElementsByTagName('div')[1].id = "mapid";
    vector[0] = location.coords.latitude;
    vector[1] = location.coords.longitude;
    tableOfLocalizations.push(vector);
    draw(vector);
}

function fail(msg) {
    console.log(msg.code);
}

function draw(vector) {
    const mymap = L.map('mapid').setView(vector, 13);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: 18,
        id: 'mapbox.streets'
    }).addTo(mymap);
    let marker = L.marker(vector).addTo(mymap);
    var circle = L.circle(vector, {
        color: 'green',
        fillColor: '#76d465',
        fillOpacity: 0.5,
        radius: 1000
    }).addTo(mymap);
}
    function onMapClickMarker(e) {
        tableOfLocalizations.push([e.latlng.lat, e.latlng.lng]);
        let marker2 = L.marker();
        marker2.setLatLng(e.latlng)
        .addTo(mymap);
        marker2.bindPopup("Kliknąłeś na punkt o współrzędnych" + e.latlng.toString().replace('LatLng', '')).openPopup();
        var polyline = L.polyline(tableOfLocalizations, {color: 'red'}).addTo(mymap);
    
    
    mymap.on('click', onMapClickMarker);
    
    L.control.scale({imperial: false}).addTo(mymap);
    
    let polyline = L.polyline(tableOfLocalizations, {color: 'red'}).addTo(mymap);
    
}
let tableOfLocalizations= [];
window.onload = main;


