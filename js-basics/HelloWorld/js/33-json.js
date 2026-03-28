'use strict'

window.addEventListener('load', () => {
    console.log("DOM loaded");

    //JSON - Javascript Object Notation

    var film = {
        title: 'Pepe vs Superman',
        year: 2017,
        country: 'USA'
    };

    var films = [
        {title: 'Batman vs Superman', year: 2017, country: 'USA'},
        film
    ];    

    var div = document.querySelector("#films");
    for(let idx in films)
    {
        var p = document.createElement("p");
        p.append(films[idx].film + " - " + films[idx].year);     
        div.append(p);
        // console.log(films[idx]);
    }
});