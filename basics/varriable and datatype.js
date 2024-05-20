//how we can declare varriable in JS
const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur" //This is not recommandable way to declare varriable
let accountState;

// accountId = 2 // not allowed because we declare it with keyword const


accountEmail = "hc@hc.com" // we can redeclare value which declare with let or var Keyword
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]) //"console.tble" is used for log the value in table.


// Datatype in JS

"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser

console.log(3 
    +
     3) // code readability should be high so don't write your code like this

console.log("Hitesh");


let name = "hitesh"
let age = 18
let isLoggedIn = false
let state;

// Primitive Datatypes :

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique

//Non-Primitive Datatypes

// object

console.log(typeof undefined); // undefined
console.log(typeof null); // object