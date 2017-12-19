var mapa = document.getElementById("mapinf");
var alert = "Nie udało się ustalić połączenia";

if (Modernizr.geolocation) {  
  navigator.geolocation.getCurrentPosition(success, fail); 
  mapa.textContent = 'Sprawdzanie położenia...';  
} else {
  mapa.textContent = alert;        
}

function success(location) {                                
  alert = '<h3>Długość geograficzna:<br>';                   
  alert += location.coords.longitude + '</h3>';               
  alert += '<h3>Szerokość geograficzna:<br>';
  alert += location.coords.latitude + '</h3>';
  alert += '<h3>Dokładność współrzędnych:<br>';
  alert += location.coords.accuracy + '</h3>'   
  mapa.innerHTML = alert;
  if(Modernizr.sessionstorage) {
        sessionStorage.longtitude = location.coords.longitude;
    }


if(Modernizr.localstorage) {
        localStorage.latitude = location.coords.latitude;
}    
 document.getElementById("guzik").addEventListener("click", function(){
     localStorage.clear();
     sessionStorage.clear();
 })
}

function fail(alert) {                               
  mapa.innerHTML = "Nie dało się ustawić połączenia";                           
}

