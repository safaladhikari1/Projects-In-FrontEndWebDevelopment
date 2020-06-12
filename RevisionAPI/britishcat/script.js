window.onload = function () {
    fetch("https://api.thecatapi.com/v1/images/search?breed_id=bslo&limit=10",{
        method: "GET",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "x-api-key": "9e6254a9-0a64-42db-8e41-8fa031094b5"
        }
    })

    .then(function (response) {
        return response.json();
    })

    .then(function (json) {
        //console.log(json);
        loadCat(json);
    });
}

function loadCat(objects)
{
    let list = document.getElementById("images");

    for(let i=0; i<objects.length; i++)
    {
        let item = document.createElement("li");
        let anchor = document.createElement("a");

        anchor.textContent = objects[i].url;
        anchor.setAttribute("href", objects[i].url);

        item.appendChild(anchor);
        list.appendChild(item);
    }
}
















