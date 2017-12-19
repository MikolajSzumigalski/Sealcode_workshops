document.getElementById("btn1").addEventListener("click", function(){
    var xhr = new XMLHttpRequest();
    xhr.onload = function(){
        if(xhr.status === 200){
            var response = xhr.responseXML;
            var songs = response.getElementsByTagName('song');
            for(var i=0; i< songs.length; i++){
                var title, performer, genre, year;
                container = document.createElement('div');
                container.classname = 'song';
                
                title = document.createElement('p');
                title.appendChild("Title:" + document.createTextNode(getNodeValue(songs[i], 'title')));
                container.appendChild(title);
                
                performer = document.createElement('p');
                title.appendChild("Performer:" + document.createTextNode(getNodeValue(songs[i], 'performer')));
                container.appendChild(performer);
                
                genre = document.createElement('p');
                genre.appendChild("Performer:" + document.createTextNode(getNodeValue(songs[i], 'genre')));
                container.appendChild(genre);
                
                year = document.createElement('p');
                genre.appendChild("Performer:" + document.createTextNode(getNodeValue(songs[i], 'year')));
                container.appendChild(year);
                console.log(year);
                document.getElementById('content').appendChild(container);
            }
            function getNodeValue(obj, tag) {                   // Pobranie zawartości z danych XML.
 return obj.getElementsByTagName(tag)[0].firstChild.nodeValue;
}
        }
    }
   xhr.open('GET', 'exercise_422XML.js', true);             // Przygotowanie żądania.
xhr.send(null);      
});     

document.getElementById("btn2").addEventListener("click", function(){
    
}); 

document.getElementById("btn3").addEventListener("click", function(){
    
}); 


document.getElementById("btn4").addEventListener("click", function(){
    
}); 

document.getElementById("btn5").addEventListener("click", function(){
    
}); 