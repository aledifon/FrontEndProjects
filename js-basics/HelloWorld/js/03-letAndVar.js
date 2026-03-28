'use strict'

//let and var tests

// Var test
var num=40;
console.log(num);

if(true)
{
    var num=50;
    console.log(num);
}   

console.log(num);

// let test
var texto = "JS Course";
console.log(texto);     // "JS Course"

if(true)
{
    let texto = "Course blabla"
    console.log(texto); // "Course blabla"
}

console.log(texto);  // "JS Course"