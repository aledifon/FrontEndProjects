'use strict'

// 1. Ask 6 numbers to the user and store them in an Array
// 2. Show the whole array (every elem) on the body of the page and on the console
// 3. Sort it and show it
// 4. Reverse it and show it
// 5. Show how many elems has the array
// 6. Search of a value inserted by the user, and tell us if is found on the array and its index.Array


function ShowArray(numbers, str="")
{
    document.writeln(`<h2>${str}</h2>`);
    document.writeln(`<ul>`);
    document.writeln(`${numbers}`);
    numbers.forEach(num => {
        document.writeln(`<li>${num}</li>`);
    });
    document.writeln(`</ul>`);
    console.log(numbers);
}

// Initial header
document.writeln(`<h1>Arrays Exercise</h1>`);
var idx = 0;
// var numArray = new Array(6);
var numArray = [];

while(idx<6)
{
    numArray.push(Number(prompt("Give me one number").trim()));    
    idx++;
}

//Non-sorted array
var text = `Non-sorted array`;
ShowArray(numArray,text);

// document.writeln(`<h2>Non-sorted array</h2>`);
// document.writeln(`${numArray}`);
// console.log(numArray);

// Sorted array 
text = `Sorted array`;
var sortedArray = [...numArray].sort((a,b) => a-b);
ShowArray(sortedArray,text);

// document.writeln(`<h2>Sorted array</h2>`);
// var sortedArray = [...numArray].sort((a,b) => a-b);
// document.writeln(`${sortedArray}`);
// console.log(sortedArray);

// Reversed array
text = `Reversed array`;
var invArray = [...sortedArray].reverse();
ShowArray(invArray,text);

// document.writeln(`<h2>Reversed array</h2>`);
// var invArray = [...sortedArray].reverse();
// document.writeln(`${invArray}`);
// console.log(invArray);

// Array elems
document.writeln(`<h2>Elems in the array</h2>`);
document.writeln(`${sortedArray.length}`);
console.log(sortedArray.length);

// Search value on the array
document.writeln(`<h2>Searched user value</h2>`);
var searchVal = undefined;
while(input === "" || isNaN(searchVal))
{
    var input = prompt("Give me the value you would to search on the array.").trim();    
    var searchVal = Number(input);
}

var valIndex = sortedArray.findIndex(x => x == searchVal);
if (valIndex == -1)
{
    let str = `The number ${searchVal} was not found on the array`;
    alert(str);
    document.writeln(str);
    console.log(str);
}
else
{   
    let str =`The number ${searchVal} was found on the pos ${valIndex} of the Sorted array`;
    alert(str);
    document.writeln(str);
    console.log(str);
}   