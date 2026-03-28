'use strict'

window.addEventListener('load',() => {
    console.log("DOM loaded");

    // Functions
    function cleanVars()
    {
        name = undefined;
        lastNames = undefined;
        age = undefined;     
    }
    function cleanTextBoxes()
    {
        nameText.value = "";        
        lastNamesText.value = "";        
        ageText.value = "";     
    }
    function textValidation(text, minChars = 1, maxChars = 5)
    {
        if(typeof text !== "string")
            return undefined;
    
        let textCleaned = text.trim();

        if (textCleaned.length > maxChars || textCleaned.length < minChars)
            return undefined;

        return textCleaned;
    }    
    function numValidation(num, minChars = 1, maxChars = 3)
    {
        if(typeof num !== "string")
            return undefined;

        let numCleaned = parseInt(num.trim());

        if(isNaN(numCleaned))
            return undefined;        

        let digits = numCleaned.toString().length;    
        if (digits > maxChars || digits < minChars)
            return undefined;

        return numCleaned;
    }
    function submitForm()
    {
        console.log("Captured submit event");

        // Text validation
        name = textValidation(nameText.value, 4, 10);
        lastNames = textValidation(lastNamesText.value,  4, 20);
        age = numValidation(ageText.value,  1, 3);

        boxDashed.style.display = "none";        

        // Clean text controls
        cleanTextBoxes();

        let message;
        let validData = true; 
        if (!name)
        {
            message = "Insert a valid text on the 'Name' field please!";
            validData = false;            
        }   
        else if (!lastNames)
        {
            message = "Insert a valid text on the 'Last Names' field please!";
            validData = false;      
        } 
        else if (!age)
        {
            message = "Insert a valid number on the 'Age' field please!";
            validData = false;      
        }      
        else
        {
            message = `Name: ${name}, Last Names: ${lastNames}, Age: ${age}`;
            validData = true;
        }           
        
        if (!validData)                    
            cleanVars();        
        else
            console.log(`Name: ${name}, Last Names: ${lastNames}, Age: ${age}`);                           

        alert(message);
    }
    function showDataClients()
    {
        console.log("Captured click event");

        if (!(name && lastNames && age))
        {
            alert("Please insert any Client data and"
                +"press the send form button first!");
            return;
        }            
    
        boxDashed.style.display = "block";              // Shows the dashed div.

        // HTML Client data creation alternative        
        // var data = [name,lastNames,age];
        // for(let idx in data)
        // {
        //     var paragraph = document.createElement('p');    
        //     paragraph.append(data[idx]);                
        //     boxDashed.append(paragraph);
        // }

        // Filling fields
        p_name.innerHTML = name;
        p_lastNames.innerHTML = lastNames;
        p_age.innerHTML = age;

        // Clean vars
        cleanVars();            
    }

    // Get DOM refs.
    var nameText = document.querySelector("#nameText");
    var lastNamesText = document.querySelector("#lastNamesText");
    var ageText = document.querySelector("#ageText");

    var form = document.querySelector("#form");    
    var showButton = document.querySelector("#showButton");
    var boxDashed = document.querySelector(".dashed");
    boxDashed.style.display = "none";                           // Hides the dashed div

    var name, lastNames, age;                                   // Text controls vars.

    var p_name = document.querySelector("#p_name span");    
    var p_lastNames = document.querySelector("#p_lastNames span");    
    var p_age = document.querySelector("#p_age span");    

    // Events subscription
    // var submitButton = document.querySelector("#submitButton");
    form.addEventListener('submit', () => submitForm());
    showButton.addEventListener('click', () => showDataClients());
});