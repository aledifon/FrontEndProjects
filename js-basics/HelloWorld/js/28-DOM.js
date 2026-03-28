'use strict'

// DOM - Document Object Model

function changeColour(htmlElem, colour)
{
    htmlElem.style.background = colour;
}
// Alternative way to declare a method
// const changeColour = (htmlElem, colour) => htmlElem.style.background = colour;

// Possible ways to access to the HTML Element
// var box = document.getElementById("myBox");
var box = document.querySelector("#myBox");     //#idElem --> Elem;  .idElem --> Class;

// Access to the HTML properties
box.innerHTML = "WUAUUUUUR from JS!";

// Access to the CSS properties
changeColour(box,"green");
box.style.padding = "20px"
box.style.color = "white";
box.className = "hello hello2";

// Get elems by its Id
var allDivs = document.getElementsByTagName("div");
var section = document.querySelector("#mySection");
var hr1 = document.createElement("hr");
var hr2 = document.createElement("hr");

// var textContent= allDivs[2];
// textContent.innerHTML = "A different texttttt!";
// textContent.style.background = "red";
// console.log(textContent);

for(let idx in allDivs)
{    
    if(typeof(allDivs[idx].textContent) == 'string')
    {
        var paragraph = document.createElement("p");                        // Creates a paragraph elem.
        var text = document.createTextNode(allDivs[idx].textContent);       // Creates a text elem.
        paragraph.append(text);                                        // Insert the text inside of the paragraph
        section.append(paragraph);
    }
};
section.append(hr1);
section.prepend(hr2);

// Get elems by its CSS class
var divReds = document.getElementsByClassName("red");

//For-each loop
// Array.from(divReds).forEach(div => div.style.background = "red");
//For-in loop
for(let idx in divReds)
{
    if(divReds[idx].className == "red")
        divReds[idx].style.background = "red";
}

// console.log(divReds);

// Query selector
var id = document.querySelector("#header");
console.log(id);

var classRed = document.querySelector(".red");
console.log(classRed);

var label = document.querySelector("div");
console.log(label);

// querySelectorAll