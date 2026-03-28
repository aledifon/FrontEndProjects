'use strict'

// Params REST y SPREAD

// REST Params (...restOfFruits)
function fruitList(fruit1, fruit2, ...restOfFruits)
{
    console.log("Fruit 1: " + fruit1);
    console.log("Fruit 2: " + fruit2);
    console.log(restOfFruits);
}

fruitList("orange", "apple", "Watermelon", "Pear", "Coconut");

// SPREAD of params (...fruits)
var fruits = ["orange", "apple"]
fruitList(...fruits, "apple", "Watermelon", "Pear", "Coconut");