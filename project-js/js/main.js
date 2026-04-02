'use strict'
$(document).ready(() => {

    // Functions 
    // Option A: There is no HTML template on the .hmtl --> 
    // We create the HTML template with the data at the same time on .js
    function createPostsTemplate(domElem, dataElem){        
        
        // Clean the HTML post
        domElem.html(``);        

        dataElem.forEach(post => {
            let postHTML = `<article class="post">
                <h2>${post.title}</h2>    
                <span class="date">${post.date}</span>                    
                <p>${post.content}</p>
                <a href="#" class="buttonMore">Read more</a>
            </article>`;

            domElem.append(postHTML); 

            console.log(postHTML);
        });
    }
    // Option B: There is already an HTML template of the article --> 
    // We clone the html template (of an article) and fill the data
    // function createPostsTemplateClone(domElem, dataElem){        

    //     // Get the article HTML template
    //     let template = posts.find('.template');

    //     // Clean the HTML post
    //     domElem.html(``);        

    //     dataElem.forEach(post => {

    //         let postHTML = template.clone();             // Clone the html template 

    //         postHTML.removeClass('template');            // Assure the post is visible
    //         postHTML.show();

    //         postHTML.find('h2').text(post.title);        // Fill all the field with the data
    //         postHTML.find('.date').text(post.date);
    //         postHTML.find('p').text(post.content);            

    //         domElem.append(postHTML); 

    //         console.log(postHTML);
    //     });
    // }

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

    // Slider
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200
        });
    
    // Var definition
    // Themes
    var themeLink = $('#theme');
    var toGreenDiv = $('#to-green');
    var toRedDiv = $('#to-red');
    var toBlueDiv = $('#to-blue');

    // Go-up
    var goUpLink = $('.goUp');

    // Local Storage
    var isLocalStorage = CheckLocalStorage();

    // Posts (DOM & simulated data)
    var postsDom = $('#posts');
    var posts;

    // Load the initial theme from the local Storage
    var themeRef = localStorage.getItem("themeStyle");
    if(themeRef && themeRef != "")
        SetTheme(themeLink, themeRef);    
    
    // Simulated posts
    moment.locale('en-gb');     
    posts = [
        {
            title: "Title test 1" ,       
            date:  `Published the ` + moment().format("Do MMMM YYYY"),
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer 
                        porttitor ullamcorper convallis. Sed volutpat in turpis eu feugiat. 
                        Vestibulum enim tellus, placerat ut ex vitae, luctus sollicitudin ex. 
                        Nam hendrerit dui sed erat maximus imperdiet. Vestibulum quis gravida 
                        lacus. Orci varius natoque penatibus et magnis dis parturient montes, 
                        nascetur ridiculus mus. Sed eu massa turpis. Mauris ultrices ex ut 
                        justo porta auctor. Nulla mollis ultrices aliquam. Donec consectetur 
                        malesuada risus. Quisque eget elit erat. Proin pellentesque tellus 
                        urna, vel pulvinar justo posuere eget. Fusce aliquam, nibh ac maximus 
                        tempus, enim purus porta orci, sit amet condimentum dui nibh a quam. 
                        Donec eget eros scelerisque nibh facilisis lobortis. Nulla placerat 
                        luctus est, non porttitor urna porta et.`       
        },
        {
            title: "Title test 2" ,       
            date: `Published the ` + moment().format("Do MMMM YYYY"),
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer 
                        porttitor ullamcorper convallis. Sed volutpat in turpis eu feugiat. 
                        Vestibulum enim tellus, placerat ut ex vitae, luctus sollicitudin ex. 
                        Nam hendrerit dui sed erat maximus imperdiet. Vestibulum quis gravida 
                        lacus. Orci varius natoque penatibus et magnis dis parturient montes, 
                        nascetur ridiculus mus. Sed eu massa turpis. Mauris ultrices ex ut 
                        justo porta auctor. Nulla mollis ultrices aliquam. Donec consectetur 
                        malesuada risus. Quisque eget elit erat. Proin pellentesque tellus 
                        urna, vel pulvinar justo posuere eget. Fusce aliquam, nibh ac maximus 
                        tempus, enim purus porta orci, sit amet condimentum dui nibh a quam. 
                        Donec eget eros scelerisque nibh facilisis lobortis. Nulla placerat 
                        luctus est, non porttitor urna porta et.`       
        },
        {
            title: "Title test 3" ,       
            date: `Published the ` + moment().format("Do MMMM YYYY"),
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer 
                        porttitor ullamcorper convallis. Sed volutpat in turpis eu feugiat. 
                        Vestibulum enim tellus, placerat ut ex vitae, luctus sollicitudin ex. 
                        Nam hendrerit dui sed erat maximus imperdiet. Vestibulum quis gravida 
                        lacus. Orci varius natoque penatibus et magnis dis parturient montes, 
                        nascetur ridiculus mus. Sed eu massa turpis. Mauris ultrices ex ut 
                        justo porta auctor. Nulla mollis ultrices aliquam. Donec consectetur 
                        malesuada risus. Quisque eget elit erat. Proin pellentesque tellus 
                        urna, vel pulvinar justo posuere eget. Fusce aliquam, nibh ac maximus 
                        tempus, enim purus porta orci, sit amet condimentum dui nibh a quam. 
                        Donec eget eros scelerisque nibh facilisis lobortis. Nulla placerat 
                        luctus est, non porttitor urna porta et.`       
        },
        {
            title: "Title test 4" ,       
            date: `Published the ` + moment().format("Do MMMM YYYY"),
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer 
                        porttitor ullamcorper convallis. Sed volutpat in turpis eu feugiat. 
                        Vestibulum enim tellus, placerat ut ex vitae, luctus sollicitudin ex. 
                        Nam hendrerit dui sed erat maximus imperdiet. Vestibulum quis gravida 
                        lacus. Orci varius natoque penatibus et magnis dis parturient montes, 
                        nascetur ridiculus mus. Sed eu massa turpis. Mauris ultrices ex ut 
                        justo porta auctor. Nulla mollis ultrices aliquam. Donec consectetur 
                        malesuada risus. Quisque eget elit erat. Proin pellentesque tellus 
                        urna, vel pulvinar justo posuere eget. Fusce aliquam, nibh ac maximus 
                        tempus, enim purus porta orci, sit amet condimentum dui nibh a quam. 
                        Donec eget eros scelerisque nibh facilisis lobortis. Nulla placerat 
                        luctus est, non porttitor urna porta et.`       
        },
        {
            title: "Title test 5" ,       
            date: `Published the ` + moment().format("Do MMMM YYYY"),
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer 
                        porttitor ullamcorper convallis. Sed volutpat in turpis eu feugiat. 
                        Vestibulum enim tellus, placerat ut ex vitae, luctus sollicitudin ex. 
                        Nam hendrerit dui sed erat maximus imperdiet. Vestibulum quis gravida 
                        lacus. Orci varius natoque penatibus et magnis dis parturient montes, 
                        nascetur ridiculus mus. Sed eu massa turpis. Mauris ultrices ex ut 
                        justo porta auctor. Nulla mollis ultrices aliquam. Donec consectetur 
                        malesuada risus. Quisque eget elit erat. Proin pellentesque tellus 
                        urna, vel pulvinar justo posuere eget. Fusce aliquam, nibh ac maximus 
                        tempus, enim purus porta orci, sit amet condimentum dui nibh a quam. 
                        Donec eget eros scelerisque nibh facilisis lobortis. Nulla placerat 
                        luctus est, non porttitor urna porta et.`       
        },
        {
            title: "Novedades de la guerra!!!" ,       
            date: `Published the ` + moment().format("Do MMMM YYYY"),
            content: `Bebesita al ataqueeeerrrr!.`       
        }
    ];    
    console.log(posts);
    
    // Load simultaed posts on the DOM
    createPostsTemplate(postsDom, posts);

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

});