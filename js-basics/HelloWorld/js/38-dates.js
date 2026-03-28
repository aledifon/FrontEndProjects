'use strict'

window.addEventListener('load',() => {

    var date = new Date();  
    var year = date.getFullYear();
    var month = date.getMonth();  
    var day = date.getDate();  
    var textHour = `
        The year is: ${year}
        The month is: ${month}
        The day is: ${day}
    
    `;
    console.log(textHour);

});