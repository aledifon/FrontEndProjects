'use strict'

// Mouse Events

// Assure our code will be executed once the DOM has been 
// completely loaded (in this moment the load event will be triggered).
window.addEventListener('load', () => {
    function changeColor(element)
    {
        if(!(element instanceof HTMLElement))
            return false;
        
        element.style.background = 
            element.style.background === "red" 
            ? "green" 
            : "red";    

        element.style.padding ="10px";
        element.style.border ="1px solid #cc";
        
        return true;
    }

    const button = document.querySelector("#button");

    // Subscription of an arrow method to the Click Event.
    button.addEventListener('click', (event) => changeColor(event.target));

    // Mouse Over
    button.addEventListener('mouseover', (event) => 
        event.target.style.background = "#ccc");

    // Mouse out
    button.addEventListener('mouseout', (event) => 
        event.target.style.background = "#f0f0f0");

    // Focus
    var input = document.querySelector("#fieldName");
    input.addEventListener('focus', (event) => {
        console.log(`[focus] You are focusing the input text ${event.target.name}`);
        });

    // Blur (Un-focusing)
    input.addEventListener('blur', (event) => {
        console.log(`[blur] You are Un-focusing the input text ${event.target.name}`);
        });

    // Keydown
    input.addEventListener('keydown', (event) => {    
        console.log(`[keydown] pressing the key ${String.fromCharCode(event.keyCode)}`);
        });

    // Keypress
    input.addEventListener('keypress', (event) => {    
        console.log(`[keypress] the key ${String.fromCharCode(event.keyCode)} was pressed`);
        });

    // Keyup
    input.addEventListener('keyup', (event) => {    
        console.log(`[keyup] the key ${String.fromCharCode(event.keyCode)} was released`);
        });
});

