// Basics of JavaScript

/*
    Multiline comment in JavaScript
    -- Variable Declaration in JS --
    Primative Types: Strings, Integers, booleans, floats, arays, objects(aka python dictionaries)
    Functions in JavaScript
    Loops in JavaScript

*/

//String Variable

var first_name = 'Will'

// Display our value to the JS Console

console.log(first_name)

// Integer Variable
 
var some_number = 32;  // This semicolon is 'syntactic sugar' it isn't necessary but we like it

console.log(some_number)

// Float Variable
var some_float = 3.14
console.log(some_float)

// Array Variable

var some_array = [1,2,3,4]
console.log(some_array)

//Object variable

var some_object = { 'test' : 'test me!!'}
console.log(some_object)

// JAVASCRIPT HOISTING EXAMPLE

console.log(something_random)

var something_random = 'This is a random string'
console.log(something_random)


// A Better way of Declaring Variables is by using "let" or 'const'
// Example


let some_random = 384
console.log(some_random)

const super_hero = 'This Hulk'
console.log(super_hero)

//let keyword variables can be reassigned more easily than const variables 

some_random = first_name + ' Smith'
console.log(some_random)


/**
 * === Basic Math  Operations in JS ===
 * 
 */

//Addition
let sum = 5 + 5
console.log(sum)

// Subtraction
let diff = 5 - 5
console.log(diff)

//Multiplication
let product = 5 * 5
console.log(product)

// Division
let quotient = 5 / 5
console.log(quotient)

// Exponents
let square = 5 ** 2   // SQUARE **=2 2
console.log(square)

// More Math Stuff

let find_floor = Math.floor(35.7)
console.log(find_floor)

// Find Ceiling
let find_ceil = Math.ceil(35.7)
console.log(find_ceil)

// Mind Bender
let crazy_stuff = some_float +  '4'
console.log(crazy_stuff)

let crazy_stuff2 = some_float + parseFloat('4')
console.log(crazy_stuff2)

// Using the let keyword and changing the variable
let nba_goat = 'LeBron'

console.log(nba_goat)
nba_goat = 'MJ'

/*
BAD REDECLARATION

console.log(nba_goat)
let nba_goat = 'LeBron'
*/

/*
    ===== JAVASCRIPT FUNCTIONS ======
*/

// Regular Named Function
function addNums(){
    let num = 4;
    let num2 = 8;

    return num + num2
}

// calling a function
console.log(addNums())

// Variable named function with parameters
let addNums2 = function(num, num2){
    return num + num2
}

// calling addNums2
console.log(addNums2(5,10))

function addNums3m(x,y){
    return x+y
}
console.log(addNums3m(11,5))


// ES6+ ARROW FUNCTION WITH SINGLE PARAMETER
/*
    Using a single parameter in an arrow function
    cam be done WITHOUT parens() but this can only be done
    with a single parameter.
*/

let cubed = (num) => {
    return num **3
}

let cubed2 = num => {
    return num ** 3
}
console.log(cubed(4))
console.log(cubed2(5))

// JavaScript Closure
// Self-Invoking Function

console.log(function(name){
    let hello = 'Hello World ' + name
    return hello
}('Terrell'))

/*
1 function regular named
2nd let keyword
3rd ES6 arrow function notation
*/

function sayHello(name){
    return name + ' Hello!'
}
console.log(sayHello('Cameron'))

let sayhello2 = function(name){
    return 'Hello ' + name
}
console.log(sayhello2('Cameron'))

let sayhello4 = (name) => {
    return name + ' Hello there!'
}
console.log(sayhello4('Cameron'))

// JavaScript Control Flow
// If Statement

function determineAge(age){
    if ( age < 18 ){
        return 'Minor'
    } else if ( age >= 18 && age <= 65){
        return'Adult'
    } else {
        return 'Senior'
    }
    

}

console.log(determineAge(33))
console.log(determineAge(12))

// JavaScript Ternary Operator



    // Loops in JavaScript
    // For Loop Syntax --- for keyword(counter; conditionlincrememntation/d)


//For Loop00


//Method 2 for looping
grupOfNames.forEach(element => console.log(element))


