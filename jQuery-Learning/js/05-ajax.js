'use strict'

$(document).ready(function(){
    
    // NOTE:
    // $.get uses callbacks (older approach)
    // fetch uses Promises (modern approach with async/await)

    var data = $('#data');
    var form = $('#form');

    // Load (To get all the HMTL code returned by an URL)
    // data.load('https://jsonplaceholder.typicode.com/');

    // The original url for userId = 1 (? used to define params):
    // https://jsonplaceholder.typicode.com/posts?userId=1

    // GET (To get the data in JSON format)
    // - 1st param: URL 
    // - 2nd: Query param (will be converted into ?key:value).
    // - 3rd param: Callback function
    $.get('https://jsonplaceholder.typicode.com/posts', 
        {userId: 1}, 
        // 'userId=1',
        function(response){
            // console.log(response);
            response.forEach((element, idx) => {
                console.log(element);
                data.append(`<p> ${element.title} </p>`);   // Using jQuery to manipulate DOM 
                                                            // (instead of innerHTML)
            });
        });
    
    // // Equivalence to the 'get' jQuery method by using async/await and 'fetch'
    // // function getUsers()
    // // {
    // //     return fetch('https://jsonplaceholder.typicode.com/posts?userId=1');        
    // // }
    // async function load()
    // {        
    //     // const userResponse = await (() => fetch('https://jsonplaceholder.typicode.com/posts?userId=1'))();
    //     // const userResponse = await getUsers();
    //     const userResponse = await fetch('https://jsonplaceholder.typicode.com/posts?userId=1');
    //     const response = await userResponse.json();
     
    //     response.forEach((element, idx) => {
    //             console.log(element);
    //             data.append(`<p> ${element.title} </p>`);
    //         });       
    // }
    // load();

    // CONCLUSION:
    // jQuery simplifies AJAX calls but relies on older patterns (callbacks, XMLHttpRequest).
    // fetch is the modern native alternative using Promises and async/await.

    // POST
    function post(urlForm, user){        
        let result;

        $.post(urlForm, user, function(response) {
            console.log(response);
            result = response;
        }).done(() => alert(`Use ${result.name} properly added!`));
    }    

    form.submit(function(e) {        
        e.preventDefault();         // Prevent default behaviour --> normal form submission.
                                    // (avoid reloading the page)

        let url =  $(this).attr('action');
        let name = form.find('input[name = "name"]').val();
        let web = form.find('input[name = "web"]').val();
        
        let user = {
            name: name,
            web: web
            };

        // console.log(name);
        // console.log(web);
        // post(url,user);
        
        // Generic jQuery method for AJAX requests
        $.ajax({
            type: 'POST',
            url: url,
            data: user,
            // dataType: 'json',
            // contentType: 'application/json',
            beforeSend: function(){
                console.log("Sending user...");
                },
            success: function(response){
                console.log(response)
                },
            error: function(){
                console.log("An error happened");
                },
            timeout: 2000
            });

        return false;               // Prevent form submission and stop event propagation
    });    

});