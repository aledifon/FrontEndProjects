'use strict'

var num1 = parseInt(prompt("Insert the 1st num", 0));
var num2 = parseInt(prompt("Insert the 2nd num", 0));

// Create an HTML header
document.writeln("<h1>From "+ num1 +" to " + num2 + " are this numbers:</h1>");
for(var i = num1 ; i < num2 ; i++)
{
    // Concatenate the result with a br HTML markup
    document.writeln(i + "<br/>");
}