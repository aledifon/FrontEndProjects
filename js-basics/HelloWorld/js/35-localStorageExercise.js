'use strict'

window.addEventListener('load',() => {

    function showFilms()
    {         
        var ul = document.querySelector("#listFilms");       
        for(let idx in localStorage)
        {
            console.log(localStorage[idx]);        
            if(typeof(localStorage[idx]) == "string")
            {
                let li = document.createElement("li");
                li.textContent = localStorage[idx];
                ul.append(li);
            }
        }
    }

    // Event subscriptions
    var form = document.querySelector("#formFilms");
    form.addEventListener('submit', () => {        
        let title = document.querySelector("#addFilm").value;

        if(title.length >= 1)
            localStorage.setItem(title,title);                
        });

    var formDelete = document.querySelector("#deleteFormFilms");
    formDelete.addEventListener('submit', () => {        
        let title = document.querySelector("#deleteFilm").value;

        if(title.length >= 1)
            localStorage.removeItem(title);                
        });
    
    showFilms();
});