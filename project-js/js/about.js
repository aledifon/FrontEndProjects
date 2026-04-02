'use strict'
$(document).ready(() => {

    // Functions     

    // LocalStorage
    function CheckLocalStorage(){
        let exists = false;

        if(typeof(Storage) !== 'undefined'){
            console.log("LocalStorage available!");
            exists = true;
        }
        else
            console.log("No LocalStorage available!");

        return exists;
    }
    function SetTheme(link, refStyle){
        if(!isLocalStorage) 
            return;
        else 
        {            
            link.attr('href',refStyle);
            localStorage.setItem('themeStyle',refStyle); 
        }
    }
    function GetTheme(){        
        let themeStyle;

        if(!isLocalStorage) 
            return 'undefined';
        else               
            themeStyle = localStorage.getItem("themeStyle");               
        
        // Check if it's null
        return themeStyle;
    }   

    // Var definition
    // Themes
    var themeLink = $('#theme');
    var toGreenDiv = $('#to-green');
    var toRedDiv = $('#to-red');
    var toBlueDiv = $('#to-blue');

    // Go-up
    var goUpLink = $('.goUp');

    // User data
    var loginDiv = $('#login');
    var loginForm = $('#login form');
    
    var nameForm = loginForm.find('[type="text"]');
    var userName;

    var emailForm = loginForm.find('[type="email"]');
    var userEmail;

    var passwordForm = loginForm.find('[type="password"]');
    var userPassword;

    var aboutMeText = $('#about p');

    var logoutLink;

    // Local Storage
    var isLocalStorage = CheckLocalStorage();    

    // Load the initial theme from the local Storage
    var themeRef = localStorage.getItem("themeStyle");
    if(themeRef && themeRef != "")
        SetTheme(themeLink, themeRef);    
    
    // Load the user data if exists on the local Storage
    var userName = localStorage.getItem("userName");
    var userEmail = localStorage.getItem("userEmail");
    var userPassword = localStorage.getItem("userPassword");

    if((userName && (userName != "") && (userName != "undefined")) && 
        (userEmail && (userEmail != "") && (userEmail != "undefined")) && 
        (userPassword && (userPassword != "") && (userPassword != "undefined"))){

        let text = `<br><strong>Welcome ${userName}!</strong><br>` +
                    `Email: ${userEmail} <br>`;

        console.log(text);
        aboutMeText.html(text);

        loginDiv.hide();

        // Also create a Logout button
        aboutMeText.append(`<br><a href='#' id='logout'>Close session</a>`);
        logoutLink = $('#logout');
    }
    else{
        let text = `No user info found!`;
        console.log(text);
        aboutMeText.html(text);
    }    

    // Accordion
    $('#accordion').accordion();

    // Themes Switching events    
    toGreenDiv.click(() => {
        let refStyle = 'css/green.css';        
        SetTheme(themeLink, refStyle);
        });
    toRedDiv.click(() => {
        let refStyle = 'css/red.css';
        SetTheme(themeLink, refStyle);
        });
    toBlueDiv.click(() => {
        let refStyle = 'css/blue.css';
        SetTheme(themeLink, refStyle);
        });

    // Scroll-up event
    goUpLink.click((e) => {
        e.preventDefault();     //Avoid reloading the page

        $('html, body').animate({
                scrollTop: 0                
                },500);

        return false;
        });

    // Fake Log-in event
    loginForm.submit((e) => {        
        // Get the form data
        let name = nameForm.val();
        let email = emailForm.val();
        let password = passwordForm.val();

        // Data validation

        // Saves data on localStorage
        localStorage.setItem('userName', name);
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userPassword', password);

        // Shows data on console
        console.log(`The user ${name} was registered on the Local Storage`);
        console.log(`The email ${email} was registered on the Local Storage`);
        console.log(`The password ${password} was registered on the Local Storage`);
        });

    // Close session event
    if (logoutLink)
        logoutLink.click((e) => {
            e.preventDefault();

            // Clean the user Data
            userName = null;
            userEmail = null;
            userPassword = null;

            localStorage.removeItem("userName");
            localStorage.removeItem("userEmail");
            localStorage.removeItem("userPassword");                   

            // Reload the page to show again the Log-in form
            location.reload();

            return false;
        });

});