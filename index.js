1;
let arr2 = [5, 10, 15, 20, 25];
console.log(findLargestNumber(arr2));

function findLargestNumber(arr2) {
  return Math.max(...arr2);
}

let arr = ["apple", "banana", "apple", "orange", "banana"];
console.log(removeDuplicates(arr));
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

let arr3 = [1, 2, 3, 4, 5, 6];
console.log(filterEvenNumbers(arr3));
function filterEvenNumbers(arr3) {
  return arr3.filter((num) => num % 2 === 0);
}

let arr1 = [1, 2, 3, 4, 5];
let steps = 2;

function filterArray(arr1, steps) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    if (i % steps === 0) {
      result.push(arr1[i]);
    }
  }
  return result;
}

2;
console.log(filterArray(arr1, steps));

let num = 3;
console.log(isEvenOrOdd(num));
function isEvenOrOdd(number) {
  if (number % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

let celsiusNumber = 30;
console.log(celsiusToFahrenheit(celsiusNumber));
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

let arr4 = [3, 5, 7, 2, 8];
console.log(findMaxNumber(arr4));

function findMaxNumber(arr4) {
  return Math.max(...arr4);
}

setTimeout(() => {
  console.log("Hello World");
}, 2000);

3;
let num1 = 5;
console.log(squareNumber(num1));
function squareNumber(num1) {
  return num1 * num1;
}

let str = "Hello!";
console.log(repeatString(str));
function repeatString(str) {
  return str.repeat(3); // Change the number to repeat as many times as needed
}

let hello = "Hello";
console.log(scopingData());
function scopingData() {
  return hello + " World";
}

let str1 = "Hello";
console.log(reverseString(str1));
function reverseString(str1) {
  return str1.split("").reverse().join("");
}

let randomNumber = getRandomNumber(1, 10);
console.log(randomNumber);

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

4;

// array challenges 1-5

// You will need to create 3 arrays and use them to solve the following challenges:

// challenge 1
let arr5 = [3, 19, 8, 25, 36, 5];
console.log(findLargestNumber(arr5));
function findLargestNumber(arr5) {
  return Math.max(...arr5);
}

console.log(findLargestNumber([3, 6, 2, 8, 4])); // Should output: 8

// challenge 2
// create an array of words and only rerturn words that are 5 characters long
let arr6 = ["club", "ball", "golf", "ball", "golf", "hole"];
console.log(removeDuplicates(arr6));
function removeDuplicates(arr6) {
  return [...new Set(arr6)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Should output: [1, 2, 3, 4, 5]

// challenge 3
let arr7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(filterEvenNumbers(arr7));
function filterEvenNumbers(arr7) {
  return arr7.filter((num) => num % 2 === 0);
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5])); // Should output: [2, 4]

// challenge 4 (optional)
let arr8 = [1, 2, 3, 4, 5];
let steps1 = 2;
function filterArray(arr8, steps1) {
  let result = [];
  for (let i = 0; i < arr8.length; i++) {
    if (i % steps1 === 0) {
      result.push(arr8[i]);
    }
  }
  return result;
}

console.log(filterArray([1, 2, 3, 4, 5], 2)); // Should output: [3, 4, 5, 1, 2]

// challenge 5 (optional)
let arr9 = [1, 2, 3, 4, 5];
let steps2 = 2;
function rotateArray(arr9, steps2) {
  steps2 = steps2 % arr9.length;
  return arr9.slice(-steps2).concat(arr9.slice(0, -steps2));
}
console.log(rotateArray([1, 2, 3, 4, 5], 2)); // Should output: [4, 5, 1, 2, 3]

4;

// challenge 1
// readme.md link to challenge 1
// The goal of this challenge is to create a function that will take in a string
// and return an additional string at the end. YOU CANNOT APPEND THE STRING MANUALLY.
function jumpOverFence(fox) {
  text = "The Lazy Brown " + fox + " Jumps Over The Fence";
  return text;
  // your code here (HINT: use string interpolation, WHICH IS ADDING A VARIABLE TO A STRING)
  // complete this so that the function returns "The Lazy Brown Fox Jumps Over The Fence"
}
console.log(jumpOverFence("fox"));
// test the function
// should return "The Lazy

// challenge 2
// You will need to take a number and return true or false if the number is even or odd

function isEvenOrOdd(num) {
  return num % 2 === 0;
  // your code here (HINT: use % MODULUS operator DIVIDED BY 2)
}

// test the function
console.log(isEvenOrOdd(10)); // should return true
console.log(isEvenOrOdd(27)); // should return false

// challenge 3
// The goal of this challenge is to create a function that will convert celsius to fahrenheit
function celsiusToFahrenheit(celsiusNumber) {
  return (celsiusNumber * 9) / 5 + 32;
  // your code here (HINT: use the formula (C * 9/5) + 32) and return the new fahrenheit number passed in as celsius
}

// test the function with degree symbol
console.log(celsiusToFahrenheit(30)); // should return 86
console.log(celsiusToFahrenheit(0)); // should return 32

// challenge 4
// find the max number in an array
function findMaxNumber(arr) {
  return Math.max(...arr);
  // your code here (HINT: use Math.max)
}

// test the function
console.log(findMaxNumber([1, 2, 3, 29, 5])); // should return 5

// challenge 5
//  create a function that will wait 2 seconds and then log "Hello World"
function sayHelloWorld() {
  setTimeout(() => {
    console.log("Hello World");
  }, 1000);
  // your code here (HINT: use setTimeout)
}

// test the function
sayHelloWorld(2000); // should log "Hello World" after 2 seconds

// Increased Function Challenges: 1-5

// challenge 1
// create a function that will take in a number and return the number squared
function squareNumber(num) {
  return num * num;
  // your code here (HINT: use Math.pow OR multiply the number by itself)
}
// test the function
console.log(squareNumber(4)); // should return 16

// challenge 2
// create a function that will take in a string and return the string repeated 3 times using a loop
function repeatString(str2) {
  let result = "";
  for (let i = 0; i < 3; i++) {
    result += str2;
  }
  return result;
  // your code here (HINT: create a variable inside the function, then use a loop to add to that variable, then return thr string)
}
// test the function
console.log(repeatString("Hello")); // should return "HelloHelloHello"

// challenge 3
// build a function that has scoped variables and returns a string
function scopingData() {
  let hello = "Hello";
  function innerFunction() {
    let world = "World";
    return hello + " " + world;
  }
  return innerFunction();
  // your code here (HINT: create a variable, create a function inside this function, and return the inner function)
}
// test the function
console.log(scopingData()); // should return "Hello World"

// challenge 4
// create a function that will take in a string and return the string reversed
function reverseString(str3) {
  return str3.split("").reverse().join("");
  // your code here (HINT: use String.split, String.reverse, and String.join methods, look at w3schools for help on each of these methods)
  // HINT: assign a new name for the string passed in, then after the equals, use the above methods like so: str.function.function.function,
  // You will need to make sure you are assigning quotes inside the parentheses to the first and last function in the above methods.
  // Return the new string.
}
// test the function
console.log(reverseString("Hello")); // should return "olleH"

// challenge 5
// create a function that will return a random number between 1 and 10
function randomNumber1() {
  return Math.floor(Math.random() * 10) + 1;
  // your code here (HINT: use Math.random)
}
// test the function
console.log(randomNumber1()); // should return a random number between 1 and 10
