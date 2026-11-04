console.log("Heyy! this is java scripts code running!")
var firstname = 'himamshu'; // old way
let lastname = 'rajput'; // modern way

console.log(firstname + ' ' + lastname);

let favoriteFruit = 'strawberries';
let favoriteIceCream = "chocolate";
let favoriteProgrammingLanguage = 'JavaScript';

let numberOfDonuts = 12;
let pi = 3.14;

let veryLargeNumber = 5435434363466n;

let lovesCoding = true;

let favoriteColor;
console. log(favoriteColor);

favoriteFruit = null;

const uniqueKey = Symbol();

// 7 primitve data types
// string, number, boolean, bigint, null, symbol, undefined 

// Object type
// it allows to store key-value pairs
// they're of 'Reference Type'
let course = {
    name: 'java bootcamp',
    duration: 4,
    section: 10,
    price: 400
};

console.log(course);


// Arrays
let productColors = ['blue', 'red', 'orange'];
console.log(productColors[0]);
productColors[0] = 33;
console.log(productColors[0]);
// length of array
console.log(productColors.length);

// Functions
function sayHi(name){
    console.log('Hey! ' + name);
}

sayHi("himansh");

// types of Functions
// 1. Callback
function greet(name, callback) {
    console.log("Hello " + name);

    callback();
}

function sayBye() {
    console.log("Goodbye!");
}

greet("Himanshu", sayBye);

// 2. functions passed as argument
function calculate(a, b, operation) {
    return operation(a, b);
}

function add(x, y) {
    return x + y;
}

console.log(calculate(10, 20, add));

// async-await
// settimeout, readtimeout, etc functions are there
// we'll learn throughout the course


// false comparison
let test = "test";
const result = true || test;
console.log(result);


// if-else and Switch statments

let job = 'Sales Engineer';
if (job === 'Software Developer') {
console. log('Writes code');
} else if (job === 'Designer') {
console. log('Makes user interface documents');
} else if (job === 'Cloud Engineer') {
console. log('Manages and deploys cloud resources');
} else {
console. log('Works directly with customers');
}

switch (job) {
case 'Software Developer':
console. log('Writes code');
byeak;
case 'Designer':
console. log('Makes user interface documents');
break;
case 'Cloud Engineer':
console. log('Manages and deploys cloud resources');
break;
default:
console. log('Works directly with customers');
}

// LOOPS

let nums = [1,2,3,4,5,6];
const n = nums.length
for(let i = 0; i < n; i++){
    console.log(nums[i]); 
}

let i = 0;
do{
    console.log(i);
    i++
} while(i <= 10);

// for-in loop
for(const key in course){
    console.log(course[key]);
}

// forEach loop
