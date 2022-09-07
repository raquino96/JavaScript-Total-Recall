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

// Drivers Ed
let userAge = 15

if (userAge >= 16) {
    console.log('Here are the keys!')
} else {
    console.log('Sorry, you\'re too young')
}

// Loops
// for (let i = 0; i < 11; i++) {
//     console.log(i)
// }

// for (let p = 10; p <= 400; p++) {
//     console.log(p)
// }

// for (let j = 12; j <4001;j=j + 3) {
//     console.log(j)
//   }

let nums = 0;

while (nums < 100) {
    nums++;
    if (nums % 2 == 0) {
        console.log(`${nums} is an even number`);
    } else {
        console.log(nums);
    }
}

let numsfive = 0;

while (numsfive < 100) {
    numsfive++;
    if (numsfive % 5 == 0 && numsfive %3 == 0){
      console.log(`I found a ${numsfive}. High five! Also, Three is a crowd.`);
      }else if(numsfive % 5 == 0) {
        console.log(`I found a ${numsfive}. High five!`);
    } else if (numsfive % 3 == 0) {
        console.log(`I found a ${numsfive}. Three is a crowd.`);
    }
}

let bankAccount = 0

for (let b = 0; b < 11; b++) {
  bankAccount += b;
  console.log(`current iteration is ${b} and the current total of your account is ${bankAccount}`);
  }

  for (let b = 0; b < 101; b++) {
    bankAccount += b;
    console.log(`current iteration is ${b} and the current total of your account is ${bankAccount}`);
    if (b >= 100) {
      console.log(`We are now multiplying your total balance by two, and your new total is ${bankAccount * 2}`)
    } else {
      
    }
    }

