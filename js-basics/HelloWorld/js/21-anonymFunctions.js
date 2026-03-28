'use strict'

// Anonym function
// Function without a name (Similar to a lambda expr. on C#)
var film = function(name)
{
    return "The film is: " + name;
}

// Callback function (A function which receives some funcs as params)
function addMe(num1, num2, addAndShow, addTimes2)
{
    var sum = num1 + num2;
    // return sum;
    var result = addAndShow(sum)  + addTimes2(sum);    
    return result;
}

// Invoke of the addMe function by passing it 2 anonyms functions
// addMe(5, 7, 
//     function(param)
//     { 
//         console.log("The addition is: " + param);
//     },
//     function(param)
//     {
//         console.log("The addition times 2 is: " + param*2);
//     });

// Alternative invoking way using 'arrow functions '
// (equivalent to lambda expressions on C#)
addMe(5, 7, 
    param =>
    {
        console.log("The addition is: " + param);
    },
    (param) =>
    {
        console.log("The addition times 2 is: " + param*2);
    });
