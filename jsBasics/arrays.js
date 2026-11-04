const nums = [1, 2, 3, 4, 6, 7, 3];

// arr.push() => to add element at end of array
// arr.unshift() => to add elements at mid of array
// arr.splice() => to add elements at begining of array

// arr.pop() => delete element from last
// arr.shift() => delete element from beginning
// arr.splice() => method is also used to delete middle elements from an array
// gpt .splice() method


// Emptying an Array
/* 

01.    while(nums.length > 0) nums.pop();
02.    nums.length = 0; // nums length hi 0 krdi humne
03.    const deleteNums = nums.splice(0, nums.length);
04.    nums = []; => works only when no other array is referencing the nums
*/


// combine two arrays => const nums = arr1.concat(arr2);
// slice array => arr.slice(from, till + 1);



const idxOf = nums.indexOf(3);
console.log(idxOf);

const lastIdxOf = nums.lastIndexOf(3);
console.log(lastIdxOf);

const isIncludes = nums.includes(4);
console.log(isIncludes);

// .find() method s used for objects


// forEach() loop
nums.forEach((num) =>{
    console.log(num);
});

// joining of an array i.e to string

// this is Arrays => Strings
const joinedNums = nums.join(', ');
console.log(joinedNums); // this will return a string
// console.log(typeof joinedNums)

// this is Strings to Arrays
const courseName = 'JavaScript for beginners !';
const parts = courseName.split(' ');
console.log(parts);

// method chaining
const chain = courseName
    .toLowerCase()
    .split(' ')
    .join('-');

//const urlSlug = chain.join('-');
console.log(chain);


// Sorting
const ans = nums.sort();
console.log(ans);

let employees = [
    {id: 1, name: 'Jen'},
    {id: 2, name: 'Steven'},
    {id: 3, name: 'Andrew'},
    {id: 4, name: 'Jerry'},
];
// custom sorting logic
employees.sort((a, b) =>{
    const lowercaseA = a.name.toLowerCase();
    const lowercaseB = b.name.toLowerCase();

    if(lowercaseA < lowercaseB) return -1;
    if(lowercaseA > lowercaseB) return 1;
    return 0;
});
console.log(employees);

// GPT => .every() && .some()
/*
.every() → Checks whether ALL elements satisfy a condition.
.some() → Checks whether AT LEAST ONE element satisfies a condition.
*/
const numbers = [2, 3, 4, 7, 8, 10, 11];
const result = numbers.every(num => num % 2 === 0);
console.log(result); // false

const number = [1,3,5,7,8,9];
const result2 = number.some(num => num % 2 === 0);
console.log(result2); // true


// ⁡⁣⁣⁢Filtering⁡ an Array
// useful to match a certain criteria or condition
const filteredArr = numbers.filter(num => num % 2 === 0);
console.log(filteredArr);

// ⁡⁣⁣⁢Mapping ⁡of Array
// we can change values of an array using .map() method
const sqred = number.map(num => num*num);
console.log(sqred);

// ⁡⁣⁣⁢mapping an array of object⁡
const users = [
    { id: 1, name: "Rahul", age: 20 },
    { id: 2, name: "Aman", age: 22 },
    { id: 3, name: "Rohit", age: 21 }
];
const names = users.map(user => user.name); // will give only name
console.log(names); // [ 'Rahul', 'Aman', 'Rohit' ]

const employeees = [
{ id: 1, name: 'Alice', email: 'AliCe@gmail.com' },
{ id: 2, name: 'Steven', email: 'STeVen@gmail.com' },
{ id: 3, name: 'Joe', email: 'Joe@gmail.com' },
];

const updatedEmployeees = employeees.map(employee =>({
    ...employee,
    email: employee.email.toLowerCase()
}));

console. log (updatedEmployeees);

// reduce an Array;
const sum = number.reduce((accumulator, currValue) =>{
    return accumulator + currValue;
}, 0);
console.log(sum);

