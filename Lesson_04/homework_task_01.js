var xhr = new XMLHttpRequest();

xhr.onload = function () {
    if (xhr.status === 200) {
        responseObject = JSON.parse(xhr.responseText);
        var nowyFilm = '';
        for (let i = 0; i < responseObject.movies.length; i++) {
            nowyFilm += "<button class='btn btn-info' id='btn" + i + "' >" + responseObject.movies[i].title + "</button>";
        }
        document.getElementById('films').innerHTML = nowyFilm;
        for (let j = 0; j< responseObject.movies.length; j++) {
            document.getElementById("btn" + j).addEventListener("click", function () {
                for(let y = 0; y< responseObject.movies.length; y++){
                document.getElementById("btn"+y).disabled = false;
            }
                document.getElementById("btn"+j).disabled = true;
                document.getElementById("ftitle").innerHTML = responseObject.movies[j].title;
                document.getElementById("fdirector").innerHTML = responseObject.movies[j].director;
                document.getElementById("fyear").innerHTML = responseObject.movies[j].year;
                document.getElementById("fdescription").innerHTML = responseObject.movies[j].description;
            });
        }
    }
};
xhr.open('GET', 'data.json', true);
xhr.send(null);
