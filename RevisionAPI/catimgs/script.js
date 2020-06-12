/*
let movie = {
    title: "Godzilla",
    length: 130,
    genre: "Action"
};

//convert from JS object to JSON text
let json = JSON.stringify(movie);
console.log(json);

//convert from JSON text back to a JS object
let movieObject = JSON.parse(json);
console.log(movieObject);

*/

window.onload = function () {
    let button = document.querySelector("button");

    //assign the eventHandler
    button.onclick = loadCat;

    //load the cat without clicking button
    loadCat();
}

function loadCat()
{
    //inside string is the endpoint, location of the api
    fetch("https://api.thecatapi.com/v1/images/search",{
        method: "GET",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "x-api-key": "9e6254a9-0a64-42db-8e41-8fa031094b5"
        }
    })

    //making a call, immediately converting  json text to javascript object
    .then(function(response){
        return response.json();
    })

    .then(function (json){
        //console.log(json);

        let data = json[0];
        let img = document.querySelector("img");
        img.setAttribute("src", data.url);
    })
}



















