// Q and A

// 1) declare a variable, and then assign a value ex. let varName = 'assigned value'

// 2) name the variable again, and assign a new value ex varName = 'new value'

// 3) name the variable again, and add an equation that will create a new value ex varName = varName + 7

// 4) these are all different ways of saying that we are creating a new variable and assigning value to instanceof
// 5) pseudocoding is the process of "sketching out" the code  in plain english. This is important as it allows you to work out the logic that will be necessary for the code to work

// strings 
let firstVariable = "Hello World"
firstVariable = 45
secondVariable = firstVariable
secondVariable = 'Any string'
//the value of firstVariable is currently 45
let yourName = 'Ronnie'
console.log( `Hello, my name is ${yourName}`)


//Booleans

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a != b);
console.log(c != d);
console.log('Name' === 'Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false && false && false && false && false || true);
console.log(false == false)
console.log(e && 'Kevin');
console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 == '48');

// The Farm
let animal = 'liger'

if (animal == 'liger') {
    console.log('Moooooo')
} else {
    console.log('Hey! You\'re not a liger!')
}