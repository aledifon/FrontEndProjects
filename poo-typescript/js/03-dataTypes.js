"use strict";
// string
let str = "aledifon89@gmail.com";
// number
let num = 4;
// num = "hola"; // Error
// Boolean
let true_false = true;
// true_false = 5; // Error
// Any --> Skip the strong typing (Behaves as usual JS)
let _any = "hola";
_any = 4; // OK
// String array
var languages = ["PHP", "JS", "CSS"];
// languages[0] = 5;   //Error
// Any array
var languagesAny = ["PHP", "JS", 5]; // OK
// Number array --> Equivalent to Array<number>
let years = [12, 13, 14];
console.log(str, num, _any, languagesAny, years);
// Multiple data types assignation (Using '|' allows assign more datatypes)
let str2 = "aledifon89@gmail.com";
str2 = 5;
console.log(str2);
let val1 = "ey";
