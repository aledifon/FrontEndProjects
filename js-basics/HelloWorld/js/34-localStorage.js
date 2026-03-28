'use strict'

window.addEventListener('load', () => {

    //Local storage

    // Check availability of the Local Storage
    if(typeof(Storage) !== 'undefined')
        console.log("LocalStorage available!");
    else
        console.log("No LocalStorage available!");
    
    // Save data
    localStorage.setItem("title","Symfony Course");

    // Recover element
    var box = document.querySelector("#films");
    var p = document.createElement("p");
    p.append(localStorage.getItem("title"));
    box.append(p);    

    // Overwritting the whol div content
    // document.querySelector("#films").innerHTML = localStorage.getItem("title");

    // Save objects
    var user =  {
        name: "Alejandro Diaz",
        email: "aledifon89@gmail.com",
        web: "https://dakgamesstudio.taplink.site/"
    };

    // Parsing from JS object format to JSON format
    localStorage.setItem("user", JSON.stringify(user));

    // Parsing from to JSON format to JS object format
    var userJs = JSON.parse(localStorage.getItem("user"));    

    var div = document.createElement("div");
    div.innerHTML = `
        <span>${userJs.name}</span><br>
        <span>${userJs.email}</span><br>
        <span>${userJs.web}</span>`;
   document.querySelector("#data").append(div);

   // Remove data from the Local Storage
   localStorage.removeItem("user");             // Clear an item from the local Storage
   localStorage.clear();                        // Clear the whole local Storage
}); 