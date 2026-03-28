'use strict'

window.addEventListener('load', () => {    

    // Fetch (ajax) & requests to services / APIs REST

    function userList(users)
    {
        users.map((user, idx) => {
                let name = document.createElement("h2");
                name.innerHTML = idx + ". " +  user.username + " " + user.name;
                div.append(name);

        document.querySelector(".loading").style.display = "none";
        });
    }
    function showBret(user)
    {
        let name = document.createElement("h4");
        name.innerHTML = user.username + " " + user.name;

        setTimeout(() => {
            divBret.append(name);

            document.querySelector("#Bret .loading").style.display = "none";        
        },3000);
    }
    function getUsers()
    {
        return fetch('https://jsonplaceholder.typicode.com/users');
        // return fetch('https://reqres.in/');
    }
    function getUserBret()
    {
        return fetch('https://jsonplaceholder.typicode.com/users/1');
        // return fetch('https://reqres.in/');
    }
    function getInfo()
    {
        // JSON Object
        var student = {
            name: "Alejandro",
            lastNames: "Diaz Fontalva",
            url: "https://dakgamesstudio.taplink.site/"
        };

        return new Promise((resolve, reject) => {
            var student_string = "";

            setTimeout(() => {
                student_string = JSON.stringify(student);

                if(typeof student_string !== "string" || student_string == "")
                return reject('error');
                        
                return resolve(student_string);

                }, 3000);                        
        });                
    }

    var div = document.querySelector("#users");  
    var divBret = document.querySelector("#Bret");  
    var divStudent = document.querySelector("#Student");

    // Async/await (Option A)
    async function load(){
        try 
        {
            const userResp = await getUsers();
            const parsedUserData = await userResp.json();
            userList(parsedUserData);

            const studentData = await getInfo();
            const parsedStudentData = JSON.parse(studentData);    
            console.log(parsedStudentData);
            divStudent.innerHTML = parsedStudentData.name + " " + parsedStudentData.lastNames;    

            const bretResp = await getUserBret();
            const bretParsedData = await bretResp.json();
            showBret(bretParsedData);
            console.log(bretParsedData); 
        }
        catch(error)
        {
            console.log("An error happened:", error);
            alert("Error on the request!");
        }
    }
    load();

    // Alternative way of using catch
    // load().catch(error => {
    //     console.error("Ha ocurrido un error:", error)
    // });

    // // Promise chaining pattern (Option B)
    // getUsers()
    //     .then(data => data.json())                  // Convert the 'Response' type to a JS Object
    //     .then(parsedData => {                       // Here data are already parsed on JS                
    //         // console.log(parsedData);
    //         userList(parsedData);
            
    //         return getInfo();                       // It will return a new promise
    //     })
    //     .then(studentData => {
    //         console.log(JSON.parse(studentData));
    //         return getUserBret();                           
    //     })
    //     .then(data => data.json())                  // Promise to JS parsing 
    //         .then(bretData => {                     // bretData is already parsed on JS 
    //         // console.log(bretData);
    //         showBret(bretData);

    //         console.log(bretData);                  // This does not block the main thread; 
    //                                                 // execution continues asynchronously                                                            

    //     });
});