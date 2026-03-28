'use strict'

var languages = new Array("PHP","JS","Go","Java","C#","C","Pascal");

document.writeln("<h1>Programming languages of 2018</h1>");
document.writeln("<ul>");

// For-loop
// for(var i = 0; i < languages.length; i++)
//     document.writeln(`<li>${languages[i]}</li>`);

// Foreach-loop
// languages.forEach((language, index, data) => {
//     document.writeln(`<li>${index}: ${language}</li>`);
//     console.log(`${data}`);
// });

// For-loop (with 'in')
// for(let index in languages)
// {
//     document.writeln(`<li>${languages[index]}</li>`);
// }

document.writeln(`</ul>`);


// [find] Array searching (By using Anonymous func.)
// var search = languages.find(function(language)
// {
//     return language == "PHP7";
// });

// [find], [findIndex] Array searching (By using Anonymous func. with Arrow function sintaxis )
// var search = languages.find( language => language == "PHP" );
// // var search = languages.findIndex( language => language == "JS" );
// console.log(search);

// [some] like Any on C#
var prices = [10, 20, 50, 80, 12];
var search = prices.some(price => price >= 20 && price < 100);

console.log(search);