// string
let str : string = "aledifon89@gmail.com";

// number
let num : number = 4;
// num = "hola"; // Error

// Boolean
let true_false : boolean = true;
// true_false = 5; // Error

// Any --> Skip the strong typing (Behaves as usual JS)
let _any : any = "hola";
_any = 4;   // OK

// String array
var languages: Array<string> = ["PHP", "JS", "CSS"];
// languages[0] = 5;   //Error

// Any array
var languagesAny: Array<any> = ["PHP", "JS", 5];        // OK

// Number array --> Equivalent to Array<number>
let years: number[] = [12, 13, 14];

console.log(str, num, _any, languagesAny, years);


// Multiple data types assignation (Using '|' allows assign more datatypes)
let str2 : string | number = "aledifon89@gmail.com";
str2 = 5;
console.log(str2);

// Union types (Custom datatypes)
type lettersOrNumbers = string | number;
let val1: lettersOrNumbers = "ey";