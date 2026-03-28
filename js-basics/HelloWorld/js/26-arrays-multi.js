'use strict'

var categorias = ['Accion', 'Terror', 'Comedia'];
var peliculas = ['La verdad duele','La vida es bella','El gran torino'];

var cine = [categorias, peliculas];

// [Push] Add an elem. to the array. (on its last pos.)
// peliculas.push("Batman");            
// console.log(cine);
// document.writeln(cine + `<br>`)

// [Pop] Remove an elem. from the array (on its last pos.)
// peliculas.pop();                     
// peliculas[0] = undefined;               // Set as undefined this elem.
// console.log(cine);
// document.writeln(cine + `<br>`)

// [Splice] Remove elem(s) from the array (2nd param. --> nums of elems to remove)
// var index = peliculas.indexOf("La vida es bella");
// if(index > -1)
//     peliculas.splice(index,1)
// console.log(peliculas);

// [Join] Converts array into a string.
// var peliculas_str = peliculas.join();
// console.log(peliculas_str);

// [Split] String --> array
// var str = "text1, text2, text3";
// var str_array = str.split(",");
// console.log(str_array);

// [Sort] Sort arrays
peliculas.sort();

// [Reverse] Sort arrays on inverse way
peliculas.reverse();